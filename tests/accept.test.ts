import { describe, expect, it } from "vitest";
import { preferredType, PRODUCES, appendVaryAccept, markdownPaths } from "../src/lib/accept";

describe("preferredType (acceptmarkdown.com vectors)", () => {
  it("picks markdown when that is the only listed type", () => {
    expect(preferredType("text/markdown", PRODUCES)).toBe("text/markdown");
  });

  it("honors q-values", () => {
    expect(preferredType("text/markdown, text/html;q=0.8", PRODUCES)).toBe("text/markdown");
  });

  it("picks html when that is the only listed type", () => {
    expect(preferredType("text/html", PRODUCES)).toBe("text/html");
  });

  it("respects q=0 rejection of markdown", () => {
    expect(preferredType("text/markdown;q=0, text/html", PRODUCES)).toBe("text/html");
  });

  it("returns null when the only produced type is rejected", () => {
    expect(preferredType("text/markdown;q=0", ["text/markdown"])).toBeNull();
  });

  it("defaults to html when Accept is missing", () => {
    expect(preferredType(null, PRODUCES)).toBe("text/html");
  });

  it("defaults to html for */*", () => {
    expect(preferredType("*/*", PRODUCES)).toBe("text/html");
  });

  it("does not let a wildcard override a more specific q=0 rejection", () => {
    expect(preferredType("text/html;q=0, */*;q=1", PRODUCES)).toBe("text/markdown");
  });

  it("breaks ties using client order", () => {
    expect(preferredType("text/markdown, text/html, */*", PRODUCES)).toBe("text/markdown");
  });

  it("rejects an unsupported explicit type", () => {
    expect(preferredType("application/pdf", PRODUCES)).toBeNull();
  });

  it("keeps html for a normal browser Accept", () => {
    const chrome =
      "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8";
    expect(preferredType(chrome, PRODUCES)).toBe("text/html");
  });
});

describe("appendVaryAccept", () => {
  it("sets Vary: Accept when missing", () => {
    const headers = new Headers();
    appendVaryAccept(headers);
    expect(headers.get("Vary")).toBe("Accept");
  });

  it("appends Accept without duplicating it", () => {
    const headers = new Headers({ Vary: "Accept-Encoding" });
    appendVaryAccept(headers);
    expect(headers.get("Vary")).toBe("Accept-Encoding, Accept");
    appendVaryAccept(headers);
    expect(headers.get("Vary")).toBe("Accept-Encoding, Accept");
  });
});

describe("markdownPaths", () => {
  it("maps the homepage and trust pages to siblings", () => {
    expect(markdownPaths("/")).toEqual(["/index.md"]);
    expect(markdownPaths("/about")).toEqual(["/about.md", "/about/index.md"]);
    expect(markdownPaths("/about/")).toEqual(["/about.md", "/about/index.md"]);
  });
});
