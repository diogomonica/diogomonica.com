import { execFileSync } from "node:child_process";
import { SITE, SITEMAP_PATHS } from "./identity";

/** Date (YYYY-MM-DD) of the last commit, read at build time. Falls back to today. */
export function buildLastmod(): string {
  try {
    const out = execFileSync("git", ["log", "-1", "--format=%cs"], { encoding: "utf8" }).trim();
    if (/^\d{4}-\d{2}-\d{2}$/.test(out)) return out;
  } catch {
    // Not a git checkout: use the build date.
  }
  return new Date().toISOString().slice(0, 10);
}

export function renderSitemap(lastmod = buildLastmod()): string {
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
