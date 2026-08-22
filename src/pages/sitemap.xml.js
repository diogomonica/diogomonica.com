import { renderSitemap } from "../lib/sitemap";

export function GET() {
  return new Response(renderSitemap(), {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
}
