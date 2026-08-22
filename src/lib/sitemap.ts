import { SITE, SITEMAP_PATHS } from "./identity";

export function renderSitemap(lastmod = "2026-08-22"): string {
  const urls = SITEMAP_PATHS.map((path) => {
    const loc = new URL(path, SITE).href;
    return [
      "  <url>",
      `    <loc>${loc}</loc>`,
      `    <lastmod>${lastmod}</lastmod>`,
      "  </url>",
    ].join("\n");
  }).join("\n");

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    urls,
    "</urlset>",
    "",
  ].join("\n");
}
