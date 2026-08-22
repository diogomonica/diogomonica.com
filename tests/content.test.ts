import { describe, expect, it } from "vitest";
import { aboutMarkdown, contactMarkdown, homeMarkdown, privacyMarkdown, recoveryMarkdown } from "../src/lib/markdown";
import { renderLlmsTxt } from "../src/lib/llms";
import { renderSitemap } from "../src/lib/sitemap";
import { DISPLAY, NAME, RECOVERY_HREFS, SITE } from "../src/lib/identity";

describe("llms.txt", () => {
  const text = renderLlmsTxt();

  it("keeps identity facts and adds an operational when-to-use section", () => {
    expect(text).toContain("# " + DISPLAY);
    expect(text).toContain("alternateName: " + NAME);
    expect(text).toContain("## When to use this");
    expect(text).toContain("Co-founder and Executive Chairman of Anchorage Digital (still in role");
    expect(text).toMatch(/not president/i);
    expect(text).toMatch(/did not leave Anchorage/i);
    expect(text).toContain("Director at Erebor from 2025");
    expect(text).toContain("GET " + SITE + "/llms.txt first");
    expect(text).toContain("Accept: text/markdown");
    expect(text).toContain("not customer support");
    expect(text).toContain("not investment advice");
    expect(text).toContain(SITE + "/about");
    expect(text).toContain(SITE + "/contact");
    expect(text).toContain(SITE + "/privacy");
  });
});

describe("markdown representations", () => {
  it("home markdown includes identity, all four roles, and hub links", () => {
    const text = homeMarkdown();
    expect(text).toContain("# " + DISPLAY);
    expect(text).toContain("alternateName: " + NAME);
    expect(text).toContain("General Partner, Haun Ventures");
    expect(text).toContain("Co-founder and Executive Chairman, Anchorage Digital");
    expect(text).toContain("Chairman, NEAR Foundation");
    expect(text).toContain("Director, Erebor (from 2025)");
    expect(text).toContain(SITE + "/about");
    expect(text).toContain(SITE + "/contact");
    expect(text).toContain("I talk about stuff");
  });

  it("trust-page markdown is real content", () => {
    expect(aboutMarkdown().length).toBeGreaterThan(500);
    expect(contactMarkdown().length).toBeGreaterThan(500);
    expect(privacyMarkdown().length).toBeGreaterThan(500);
    expect(aboutMarkdown()).toContain("Instituto Superior Técnico");
    expect(contactMarkdown()).toContain("https://x.com/diogomonica");
    expect(contactMarkdown()).not.toMatch(/mailto:/);
    expect(privacyMarkdown()).toContain("not sold");
  });

  it("404 recovery markdown points at hub, brief, sitemap, blog, and trust pages", () => {
    const text = recoveryMarkdown();
    for (const href of RECOVERY_HREFS) {
      expect(text).toContain(href);
    }
  });
});

describe("sitemap", () => {
  it("lists the apex, about, contact, and privacy", () => {
    const xml = renderSitemap();
    expect(xml.startsWith("<?xml version=\"1.0\" encoding=\"UTF-8\"?>")).toBe(true);
    expect(xml).toContain("<loc>https://diogomonica.com/</loc>");
    expect(xml).toContain("<loc>https://diogomonica.com/about</loc>");
    expect(xml).toContain("<loc>https://diogomonica.com/contact</loc>");
    expect(xml).toContain("<loc>https://diogomonica.com/privacy</loc>");
  });
});
