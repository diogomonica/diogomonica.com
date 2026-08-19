import { SITE } from "../lib/site";

export function GET() {
  const urls = ["/"];
  const body = urls
    .map((path) => `<url><loc>${new URL(path, SITE).href}</loc></url>`)
    .join("");
  const xml = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${body}</urlset>`;
  return new Response(xml, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
}
