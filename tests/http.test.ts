import { execFileSync } from "node:child_process";
import { existsSync } from "node:fs";
import path from "node:path";
import { describe, expect, it, beforeAll } from "vitest";
import { DIST, previewFetch, visibleText } from "./helpers/preview";
import { ORGANIZATIONS, RECOVERY_HREFS } from "../src/lib/identity";

const orgUrl = (name: string) => ORGANIZATIONS.find((org) => org.name === name)!.url;

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
    const hero = html.split('<section class="hero"')[1]?.split('id="writing"')[0] ?? "";
    expect(hero).toContain('id="about"');
    expect(hero).toContain(`href="${orgUrl("Haun Ventures")}"`);
    expect(hero).toContain(`href="${orgUrl("Anchorage Digital")}"`);
    expect(hero).toContain(`href="${orgUrl("NEAR Foundation")}"`);
    expect(hero).toContain(`href="${orgUrl("Erebor")}"`);
    expect(hero).toContain("Haun Ventures");
    expect(hero).toContain("Anchorage Digital");
    expect(hero).toContain("NEAR Foundation");
    expect(hero).toContain("Erebor");
    expect(hero).not.toContain('class="roles"');
    const heroVisible = visibleText(hero);
    expect(heroVisible.match(/Haun Ventures/g)).toHaveLength(1);
    expect(heroVisible.match(/Anchorage Digital/g)).toHaveLength(1);
    expect(heroVisible.match(/NEAR Foundation/g)).toHaveLength(1);
    expect(heroVisible.match(/Erebor/g)).toHaveLength(1);
    expect(heroVisible.replace(/\s+,/g, ",").replace(/\s+\./g, ".")).toContain(
      "General Partner at Haun Ventures, Co-founder and Executive Chairman of Anchorage Digital, Chairman of the NEAR Foundation, and Director at Erebor.",
    );
    expect(heroVisible).not.toMatch(/PhD/);
    expect(heroVisible).not.toMatch(/Instituto Superior Técnico/);

    expect(html).not.toContain(">Latest posts<");
    expect(html).toContain('id="writing"');
    expect(html).toContain(">I write stuff<");
    expect(html).toContain(">I build stuff<");
    expect(html).toContain(">I research stuff<");
    expect(html).toContain(">I talk about stuff<");
    expect(html.indexOf(">I write stuff<")).toBeLessThan(html.indexOf("AI Escapes"));
    expect(html.indexOf(">I build stuff<")).toBeGreaterThan(html.indexOf("AI Escapes"));
    expect(html.indexOf(">I talk about stuff<")).toBeGreaterThan(html.indexOf(">I build stuff<"));
    expect(html).not.toContain('class="site-footer"');
    expect(html).not.toMatch(/Paus(?:e) motion|Pla(?:y) motion|motion-toggle/);
    expect(html).not.toContain("patent-1-static.svg");
    expect(html).toContain("/illustrations/patent-1.svg");
    expect(html).toContain('class="asset-card"');
    expect(html).toContain('href="/about"');
    expect(html).not.toContain('href="#about"');
    expect(html).toContain("The light of other days");
    expect(html).not.toContain("/2026/07/02/jota/");
    expect(html.indexOf("The light of other days")).toBeLessThan(html.indexOf("AI Escapes"));
    const header = html.split("<header")[1]?.split("</header>")[0] ?? "";
    const panel = html.split('id="mobile-nav"')[1]?.split("</nav>")[0] ?? "";
    for (const nav of [header, panel]) {
      expect(nav).toContain('href="/about"');
      expect(nav).toContain(">Home<");
      expect(nav).toContain(">Blog<");
      expect(nav).not.toContain("Wikipedia");
      expect(nav).not.toContain("LinkedIn");
      expect(nav).not.toContain("https://x.com/diogomonica");
    }
    expect(header).toContain('aria-label="Diogo Mónica, home"');
    expect(header).not.toContain("brand-name");
    expect(header).not.toContain(">Diogo Mónica<");
    const wiki = hero.indexOf('aria-label="Wikipedia"');
    const linkedin = hero.indexOf('aria-label="LinkedIn"');
    const x = hero.indexOf('aria-label="X"');
    expect(wiki).toBeGreaterThan(-1);
    expect(wiki).toBeLessThan(linkedin);
    expect(linkedin).toBeLessThan(x);
    expect(hero).toContain('href="https://en.wikipedia.org/wiki/Diogo_Mónica"');
    expect(hero).toContain('href="https://www.linkedin.com/in/diogomonica"');
    expect(hero).toContain('href="https://x.com/diogomonica"');
    expect(hero).toContain('target="_blank"');
    expect(hero).toContain('rel="me noopener"');
    expect(hero).toContain('title="Wikipedia"');
    expect(hero).toContain('title="LinkedIn"');
    expect(hero).toContain('title="X"');
    expect(html).toContain("/illustrations/research-6.svg");
    expect(html).toContain("↗");
    expect(html.match(/id="patents"[\s\S]*id="research"/)?.[0]).toContain('target="_blank"');
    expect(html.match(/id="research"[\s\S]*id="speaking"/)?.[0]).toContain('target="_blank"');
    expect(html).toContain("Opens patents.justia.com in a new tab.");
    expect(html).toContain("Opens researchgate.net in a new tab.");
    expect(html).toContain('rel="noopener noreferrer"');

    const assetUrls = new Set<string>();
    for (const raw of html.matchAll(/(?:src|href|srcset)="([^"]+)"/g)) {
      for (const part of raw[1].split(",")) {
        const url = part.trim().split(" ")[0];
        if (url.startsWith("/") && !url.startsWith("//")) assetUrls.add(url.split("?")[0]);
      }
    }
    for (const url of assetUrls) {
      if (["/", "/about", "/contact", "/privacy", "/submit-deck"].includes(url)) continue;
      expect(existsSync(path.join(DIST, url.slice(1))), url).toBe(true);
    }

    expect(html).toContain("<title>Diogo Mónica — Security engineer, investor, Anchorage co-founder</title>");
    expect(html).toContain(
      '<meta name="description" content="Security engineer and investor. Led security at Docker and platform security at Square, co-founded Anchorage Digital, and is a General Partner at Haun Ventures."',
    );
    expect(html).toContain('<meta property="og:image" content="https://diogomonica.com/og/diogo-monica.png"');
    expect(html).toContain('<meta property="og:image:width" content="1200"');
    expect(html).toContain('<meta property="og:image:height" content="630"');
    expect(html).toContain('<link rel="manifest" href="/site.webmanifest"');
    expect(html).toContain('<link rel="alternate" type="text/markdown" href="/index.md"');
    expect(html).not.toMatch(/\bCEO\b/);

    const visible = visibleText(html);
    expect(visible).not.toMatch(/BSc,/);
    expect(visible).not.toMatch(/MSc,/);
    expect(visible).not.toMatch(/PhD/);
    expect(visible).not.toMatch(/Instituto Superior Técnico/);
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
    expect(html).toContain('class="site-footer"');
    expect(html).toContain('href="/about"');
    expect(html).toContain(`rel="canonical"`);
    expect(html).toContain(`https://diogomonica.com${pagePath}`);
    const header = html.split("<header")[1]?.split("</header>")[0] ?? "";
    const panel = html.split('id="mobile-nav"')[1]?.split("</nav>")[0] ?? "";
    for (const nav of [header, panel]) {
      expect(nav).toContain('href="/about"');
      expect(nav).not.toContain("Wikipedia");
      expect(nav).not.toContain("LinkedIn");
      expect(nav).not.toContain("https://x.com/diogomonica");
    }
    expect(header).toContain('aria-label="Diogo Mónica, home"');
    expect(header).not.toContain("brand-name");
    expect(header).not.toContain(">Diogo Mónica<");
  });

  it("serves the canonical about page with the media kit", async () => {
    const res = await previewFetch("/about", { headers: { Accept: BROWSER_ACCEPT } });
    expect(res.status).toBe(200);
    const html = await res.text();
    expect(html).toContain('rel="canonical" href="https://diogomonica.com/about"');
    expect(html).toContain('"@type":"ProfilePage"');
    expect(html).toContain("https://diogomonica.com/media-kit/Diogo_Monica_Founder_Engineer.web.jpg");
    expect(html).toContain('id="media-kit"');
    expect(html).toContain("For press. Credit Diogo Mónica. Do not crop out of context.");
    expect(html).toContain("Diogo_Monica_Founder_Engineer.jpg");
    expect(html).toContain("Diogo_Monica_Anchorge_Digital.jpg");
    expect(html).toContain("Diogo_Monica_Anchorge_Digital.web.jpg");
    expect(html).toContain("Equityarena1");
    expect(html).toContain("WikPic2023");
    expect(html).toContain("https://creativecommons.org/publicdomain/zero/1.0/");
    expect(html).toContain("https://creativecommons.org/licenses/by-sa/4.0/");
    expect(html).toContain("https://www.anchorage.com/insights/positioned-for-the-future-new-role-at-anchorage-digital");
    expect(html).toContain("https://www.occ.gov/news-issuances/news-releases/2025/nr-occ-2025-101a.pdf");
    expect(html).not.toContain(">Citations<");
    expect(html).toContain("One-line bio");
    expect(html).toContain("Spell the name Diogo Mónica");
    expect(html).not.toContain("Selected work");
    expect(html).not.toContain('id="selected-heading"');
    expect(html.indexOf('id="education-heading"')).toBeLessThan(html.indexOf('id="media-kit"'));
    const education = html.split('id="education-heading"')[1]?.split('id="media-kit"')[0] ?? "";
    expect(education.indexOf("2009–2015")).toBeLessThan(education.indexOf("2007–2009"));
    expect(education.indexOf("2007–2009")).toBeLessThan(education.indexOf("2004–2007"));
    expect(html).not.toContain("blog.diogomonica.com/about");
    expect(html).not.toContain("citation hub");
    expect(html).not.toContain("also written");
    expect(html).not.toContain("did not leave");
    expect(html).not.toContain("theblog");
    expect(html).toContain("2004–2007");
    expect(html).toContain("BSc, Telecommunications and Informatics Engineering, Instituto Superior Técnico, University of Lisbon.");
    expect(html).toContain(">Copy<");
    const footer = html.split("<footer")[1] ?? "";
    expect(footer).toContain("Wikipedia");
    expect(footer).toContain("LinkedIn");
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
      expect(res.headers.get("link")).toBe(`<https://diogomonica.com${path}>; rel="canonical"`);
      expect(res.headers.get("x-robots-tag")).toBe("noindex");
    }
  });

  it("serves .md files as noindex alternates canonical to the HTML page", async () => {
    for (const [md, html] of [
      ["/index.md", "https://diogomonica.com/"],
      ["/about.md", "https://diogomonica.com/about"],
      ["/contact.md", "https://diogomonica.com/contact"],
      ["/privacy.md", "https://diogomonica.com/privacy"],
    ]) {
      const res = await previewFetch(md);
      expect(res.status, md).toBe(200);
      expect(res.headers.get("link")).toBe(`<${html}>; rel="canonical"`);
      expect(res.headers.get("x-robots-tag")).toBe("noindex");
    }
  });

  it("canonicalizes homepage Markdown to the HTML URL", async () => {
    const res = await previewFetch("/", { headers: { Accept: "text/markdown" } });
    expect(res.headers.get("link")).toBe('<https://diogomonica.com/>; rel="canonical"');
    expect(res.headers.get("x-robots-tag")).toBe("noindex");
  });
});

describe("host policy", () => {
  it("redirects www to the apex with a 301", async () => {
    const res = await previewFetch("https://www.diogomonica.com/about?x=1");
    expect(res.status).toBe(301);
    expect(res.headers.get("location")).toBe("https://diogomonica.com/about?x=1");
  });

  it("marks pages.dev hosts noindex", async () => {
    const res = await previewFetch("https://diogomonica-com.pages.dev/");
    expect(res.status).toBe(200);
    expect(res.headers.get("x-robots-tag")).toBe("noindex");
  });

  it("leaves the production host indexable", async () => {
    const res = await previewFetch("/");
    expect(res.headers.get("x-robots-tag")).toBeNull();
  });
});

describe("structured data", () => {
  const graphFor = async (path: string) => {
    const html = await (await previewFetch(path, { headers: { Accept: BROWSER_ACCEPT } })).text();
    const raw = html.match(/<script type="application\/ld\+json">(.*?)<\/script>/s)![1];
    return JSON.parse(raw)["@graph"] as Record<string, any>[];
  };

  it("describes the person with security history and no CEO wording", async () => {
    const graph = await graphFor("/");
    const person = graph.find((node) => node["@type"] === "Person")!;
    expect(JSON.stringify(person)).not.toMatch(/\bCEO\b/);
    expect(person.knowsAbout).toContain("container security");
    expect(JSON.stringify(person.alumniOf)).toContain("Docker, Inc.");
    expect(JSON.stringify(person.alumniOf)).toContain("Platform Security Lead");
    expect(person.sameAs).toContain("https://github.com/diogomonica");
    expect(JSON.stringify(person.memberOf)).toContain("https://erebor.bank/#organization");
    const anchorage = graph.find((node) => node.name === "Anchorage Digital")!;
    expect(anchorage.description).toBe("First federally chartered crypto-native bank.");
  });

  it("types /about as a ProfilePage about the person", async () => {
    const graph = await graphFor("/about");
    const page = graph.find((node) => node["@type"] === "ProfilePage")!;
    expect(page.mainEntity).toEqual({ "@id": "https://diogomonica.com/#person" });
    expect(page.dateModified).toMatch(/^\d{4}-\d{2}-\d{2}$/);
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
    expect(body).toContain("## Security expertise");
    expect(body).not.toMatch(/\bCEO\b/);
  });

  it("serves llms-full.txt", async () => {
    const res = await previewFetch("/llms-full.txt");
    expect(res.status).toBe(200);
    const body = await res.text();
    expect(body).toContain("## Security work");
    expect(body).toContain("### Long bio");
  });
});
