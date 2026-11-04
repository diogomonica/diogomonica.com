import { appendVaryAccept, markdownPaths, preferredType, PRODUCES } from "./accept";
import { markdownResponse, recoveryMarkdown } from "./markdown";

const STATIC_EXT =
  /\.(?:css|js|mjs|map|png|jpe?g|webp|gif|svg|ico|woff2?|ttf|otf|eot|xml|txt|json|pdf|mp4|webm|mp3|wav|ogg|zip)$/i;

const PRODUCTION_HOST = "diogomonica.com";
const MARKDOWN_FILE = /^(.*?)(?:\/index)?\.md$/;

/** HTML URL that a Markdown route represents: /index.md → /, /about.md → /about. */
export function htmlPathFor(pathname: string): string {
  const match = MARKDOWN_FILE.exec(pathname);
  const base = match ? match[1] : pathname;
  const clean = base.replace(/\/$/, "");
  return clean === "" ? "/" : clean;
}

/** Markdown is a fetchable alternate: canonical to the HTML page, kept out of the index. */
function markAsAlternate(headers: Headers, pathname: string): void {
  const canonical = new URL(htmlPathFor(pathname), `https://${PRODUCTION_HOST}`).href;
  headers.set("Link", `<${canonical}>; rel="canonical"`);
  headers.set("X-Robots-Tag", "noindex");
}

export type AssetFetcher = (request: Request) => Promise<Response>;

function notAcceptable(request: Request, detail: string): Response {
  const accept = request.headers.get("accept") ?? "";
  const res = new Response(
    ["Not Acceptable", "", "Available: text/html, text/markdown", "", detail, "", `You requested: ${accept}`, ""].join(
      "\n",
    ),
    {
      status: 406,
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "no-store",
      },
    },
  );
  appendVaryAccept(res.headers);
  return res;
}

async function fetchMarkdownSibling(request: Request, fetchAsset: AssetFetcher): Promise<Response | null> {
  const url = new URL(request.url);
  for (const pathname of markdownPaths(url.pathname)) {
    const mdUrl = new URL(url);
    mdUrl.pathname = pathname;
    const mdRes = await fetchAsset(new Request(mdUrl.toString(), { method: "GET" }));
    if (mdRes.status === 200) {
      const body = await mdRes.text();
      const res = markdownResponse(body, 200);
      appendVaryAccept(res.headers);
      markAsAlternate(res.headers, url.pathname);
      return res;
    }
  }
  return null;
}

export async function handleNegotiation(request: Request, fetchAsset: AssetFetcher): Promise<Response> {
  const url = new URL(request.url);

  if (STATIC_EXT.test(url.pathname)) {
    return fetchAsset(request);
  }

  if (url.pathname.endsWith(".md")) {
    const mdRes = await fetchAsset(request);
    if (mdRes.status !== 200) return mdRes;
    const res = new Response(mdRes.body, mdRes);
    markAsAlternate(res.headers, url.pathname);
    return res;
  }

  const accept = request.headers.get("accept");
  const chosen = preferredType(accept, PRODUCES);

  if (chosen === null && accept) {
    return notAcceptable(request, "No produced type is acceptable.");
  }

  if (chosen === "text/markdown") {
    const mdRes = await fetchMarkdownSibling(request, fetchAsset);
    if (mdRes) return mdRes;

    const htmlRes = await fetchAsset(request);
    if (htmlRes.status === 404) {
      const res = markdownResponse(recoveryMarkdown(), 404);
      appendVaryAccept(res.headers);
      return res;
    }

    if (!preferredType(accept, ["text/html"])) {
      return notAcceptable(request, "Markdown sibling missing and HTML is not acceptable.");
    }

    const fallback = new Response(htmlRes.body, htmlRes);
    appendVaryAccept(fallback.headers);
    return fallback;
  }

  const htmlRes = await fetchAsset(request);
  const res = new Response(htmlRes.body, htmlRes);
  appendVaryAccept(res.headers);

  if (res.status === 404) {
    return res;
  }

  if (res.headers.get("content-type")?.includes("text/html")) {
    const sibling = markdownPaths(url.pathname)[0];
    const linkValue = `<${sibling}>; rel="alternate"; type="text/markdown"`;
    const existing = res.headers.get("link");
    res.headers.set("Link", existing ? `${existing}, ${linkValue}` : linkValue);
  }

  return res;
}

/**
 * Host policy in front of negotiation: www → apex (301), and *.pages.dev
 * deployments (production alias and branch previews) are noindex.
 */
export async function handleRequest(request: Request, fetchAsset: AssetFetcher): Promise<Response> {
  const url = new URL(request.url);
  const host = url.hostname.toLowerCase();

  if (host === `www.${PRODUCTION_HOST}`) {
    const target = new URL(url.pathname + url.search, `https://${PRODUCTION_HOST}`);
    return new Response(null, { status: 301, headers: { Location: target.href, "Cache-Control": "public, max-age=3600" } });
  }

  const res = await handleNegotiation(request, fetchAsset);
  if (host.endsWith(".pages.dev")) {
    const out = new Response(res.body, res);
    out.headers.set("X-Robots-Tag", "noindex");
    return out;
  }
  return res;
}
