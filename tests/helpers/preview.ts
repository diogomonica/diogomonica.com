import { existsSync, statSync } from "node:fs";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { handleNegotiation } from "../../src/lib/negotiate";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
export const DIST = path.join(root, "dist");

function prettyFile(pathname: string): string[] {
  const clean = pathname.replace(/\/$/, "") || "/";
  if (clean === "/") return ["index.html"];
  const stripped = clean.replace(/^\//, "");
  if (path.extname(stripped)) return [stripped];
  return [stripped, `${stripped}.html`, path.join(stripped, "index.html")];
}

export async function fetchAsset(request: Request): Promise<Response> {
  const url = new URL(request.url);
  const candidates = prettyFile(url.pathname).map((rel) => path.join(DIST, rel));
  for (const file of candidates) {
    if (!existsSync(file) || !statSync(file).isFile()) continue;
    const body = await readFile(file);
    const ext = path.extname(file);
    const type =
      ext === ".html"
        ? "text/html; charset=utf-8"
        : ext === ".md"
          ? "text/markdown; charset=utf-8"
          : ext === ".xml"
            ? "application/xml; charset=utf-8"
            : ext === ".txt"
              ? "text/plain; charset=utf-8"
              : "application/octet-stream";
    return new Response(body, { status: 200, headers: { "Content-Type": type } });
  }

  const missing = path.join(DIST, "404.html");
  if (existsSync(missing)) {
    return new Response(await readFile(missing), {
      status: 404,
      headers: { "Content-Type": "text/html; charset=utf-8" },
    });
  }
  return new Response("Not found", { status: 404 });
}

export function previewFetch(input: string, init?: RequestInit): Promise<Response> {
  const request = new Request(new URL(input, "https://diogomonica.com").href, init);
  return handleNegotiation(request, fetchAsset);
}

export function visibleText(html: string): string {
  return html
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, " ")
    .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}
