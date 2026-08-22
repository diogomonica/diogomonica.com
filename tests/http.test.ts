import { execFileSync } from "node:child_process";
import { existsSync } from "node:fs";
import path from "node:path";
import { describe, expect, it, beforeAll } from "vitest";
import { DIST, previewFetch, visibleText } from "./helpers/preview";
import { RECOVERY_HREFS } from "../src/lib/identity";

const BROWSER_ACCEPT =
  "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8";

beforeAll(() => {
  if (!existsSync(DIST)) {
    execFileSync("npm", ["run", "build"], { cwd: process.cwd(), stdio: "inherit" });
  }
});

describe("unknown paths", () => {
  it("returns HTTP 404 HTML for a missing path", async () => {
    const res = await previewFetch("/some-path-that-does-not-exist");
    expect(res.status).toBe(404);
    expect(res.headers.get("content-type")).toMatch(/text\/html/);
    const body = await res.text();
    expect(body).toContain("Not");
    expect(body).toContain("found");
    for (const href of RECOVERY_HREFS) {
      expect(body).toContain(href);
    }
  });

  it("returns HTTP 404 Markdown when Accept asks for it", async () => {
    const res = await previewFetch("/some-path-that-does-not-exist", {
      headers: { Accept: "text/markdown" },
    });
    expect(res.status).toBe(404);
    expect(res.headers.get("content-type")).toBe("text/markdown; charset=utf-8");
    const body = await res.text();
    for (const href of RECOVERY_HREFS) {
      expect(body).toContain(href);
    }
  });
});

describe("homepage negotiation", () => {
  it("serves Markdown with Vary: Accept", async () => {
    const res = await previewFetch("/", { headers: { Accept: "text/markdown" } });
    expect(res.status).toBe(200);
    expect(res.headers.get("content-type")).toBe("text/markdown; charset=utf-8");
    expect(res.headers.get("vary")?.toLowerCase()).toContain("accept");
    const body = await res.text();
    expect(body).toContain("Diogo Mónica");
    expect(body).toContain("Co-founder and Executive Chairman");
    expect(body.startsWith("<")).toBe(false);
  });

  it("keeps the locked HTML hub for a browser Accept", async () => {
    const res = await previewFetch("/", { headers: { Accept: BROWSER_ACCEPT } });
    expect(res.status).toBe(200);
    expect(res.headers.get("content-type")).toMatch(/text\/html/);
    expect(res.headers.get("vary")?.toLowerCase()).toContain("accept");
    const html = await res.text();
    const hero = html.split('<section class="hero">')[1]?.split('id="writing"')[0] ?? "";
    expect(hero).toContain("Haun Ventures");
    expect(hero).toContain("Anchorage Digital");
    expect(hero).not.toContain("NEAR Foundation");
    expect(hero).not.toContain("Erebor");

    expect(html).toContain(">Latest posts<");
    expect(html).toContain(">I build stuff<");
    expect(html).toContain(">I research stuff<");
    expect(html).toContain(">I talk about stuff<");
    expect(html.indexOf(">I talk about stuff<")).toBeGreaterThan(html.indexOf(">Latest posts<"));

    const visible = visibleText(html);
    expect(visible).not.toMatch(/BSc,/);
    expect(visible).not.toMatch(/MSc,/);
  });
});

describe("trust pages", () => {
  it.each(["/about", "/contact", "/privacy"] as const)("%s is real HTML over 500 characters", async (pagePath) => {
    expect(existsSync(path.join(DIST, `${pagePath.slice(1)}.html`))).toBe(true);
    const res = await previewFetch(pagePath, { headers: { Accept: BROWSER_ACCEPT } });
    expect(res.status).toBe(200);
    expect(res.headers.get("content-type")).toMatch(/text\/html/);
    expect(res.headers.get("location")).toBeNull();
    const html = await res.text();
    const text = visibleText(html);
    expect(text.length).toBeGreaterThanOrEqual(500);
    expect(html).toContain("Diogo Mónica");
    expect(html).toContain("Diogo Monica");
    expect(html).toContain(`rel="canonical"`);
    expect(html).toContain(`https://diogomonica.com${pagePath}`);
  });

  it("negotiates Markdown for trust pages", async () => {
    for (const path of ["/about", "/contact", "/privacy"]) {
      const res = await previewFetch(path, { headers: { Accept: "text/markdown" } });
      expect(res.status).toBe(200);
      expect(res.headers.get("content-type")).toBe("text/markdown; charset=utf-8");
      expect(res.headers.get("vary")?.toLowerCase()).toContain("accept");
      const body = await res.text();
      expect(body.length).toBeGreaterThan(500);
      expect(body.startsWith("<!")).toBe(false);
    }
  });
});

describe("protocol extras", () => {
  it("returns 406 when every produced type is rejected", async () => {
    const res = await previewFetch("/", { headers: { Accept: "application/pdf" } });
    expect(res.status).toBe(406);
    expect(res.headers.get("vary")?.toLowerCase()).toContain("accept");
  });

  it("leaves sitemap.xml as XML", async () => {
    const res = await previewFetch("/sitemap.xml");
    expect(res.status).toBe(200);
    expect(res.headers.get("content-type")).toMatch(/xml/);
    const body = await res.text();
    expect(body).toContain("<loc>https://diogomonica.com/about</loc>");
  });

  it("keeps llms.txt identity plus when-to-use", async () => {
    const res = await previewFetch("/llms.txt");
    expect(res.status).toBe(200);
    const body = await res.text();
    expect(body).toContain("## When to use this");
  });
});
