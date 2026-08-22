import {
  ANCHORAGE_URL,
  BLOG,
  BIO,
  DEGREES,
  DISPLAY,
  EREBOR_URL,
  HAUN_TEAM_URL,
  HERO_LEDE,
  LINKEDIN_URL,
  NAME,
  NEAR_URL,
  PATENTS,
  RECOVERY_HREFS,
  RESEARCH,
  ROLES,
  SITE,
  SUBMIT_DECK_PATH,
  TALK_ITEMS,
  WIKIDATA_URL,
  WRITING,
  X_URL,
} from "./identity";

const NL = "\n";

function lines(...rows: string[]): string {
  return rows.join(NL).trim() + NL;
}

export function recoveryMarkdown(): string {
  return lines(
    "# Not found",
    "",
    "That URL is not on this site. This apex is a short personal hub for " + DISPLAY + ".",
    "",
    "## Recover here",
    "",
    ...RECOVERY_HREFS.map((href) => "- " + href),
    "",
    "Essays live on the blog. For identity and roles, start at " + SITE + "/llms.txt.",
  );
}

export function homeMarkdown(): string {
  return lines(
    "# " + DISPLAY,
    "",
    "alternateName: " + NAME,
    "",
    HERO_LEDE,
    "",
    BIO,
    "",
    "Previously led security at Docker and platform security at Square.",
    "",
    "## Current roles",
    "",
    "- General Partner, Haun Ventures — " + HAUN_TEAM_URL,
    "- Co-founder and Executive Chairman, Anchorage Digital (still in role; not president; did not leave) — " +
      ANCHORAGE_URL,
    "- Chairman, NEAR Foundation — " + NEAR_URL,
    "- Director, Erebor (from 2025) — " + EREBOR_URL,
    "",
    "Anchorage Digital is the first federally chartered crypto-native bank, still operating at scale, still waiting on Fed rails.",
    "",
    "## Latest posts",
    "",
    ...WRITING.map((item) => "- " + item.title + " — " + item.href),
    "",
    "All essays: " + BLOG + "/",
    "",
    "## I build stuff",
    "",
    ...PATENTS.map((item) => "- " + item.title + " — " + item.href),
    "",
    "## I research stuff",
    "",
    ...RESEARCH.map((item) => "- " + item.title + " — " + item.href),
    "",
    "## I talk about stuff",
    "",
    ...TALK_ITEMS.map((item) => "- " + item.title + " — " + item.href),
    "",
    "## Links",
    "",
    "- Home: " + SITE + "/",
    "- About: " + SITE + "/about",
    "- Contact: " + SITE + "/contact",
    "- Privacy: " + SITE + "/privacy",
    "- Agent brief: " + SITE + "/llms.txt",
    "- Sitemap: " + SITE + "/sitemap.xml",
    "- Blog: " + BLOG + "/",
    "- X: " + X_URL,
    "- LinkedIn: " + LINKEDIN_URL,
    "- Wikidata: " + WIKIDATA_URL,
  );
}

export function aboutMarkdown(): string {
  return lines(
    "# About " + DISPLAY,
    "",
    "also written: " + NAME,
    "",
    "This apex about page is the citation hub for who " +
      DISPLAY +
      " is right now. The longer media kit lives on the blog.",
    "",
    BIO,
    "",
    "## Current roles",
    "",
    "- General Partner at Haun Ventures — " + HAUN_TEAM_URL,
    "- Co-founder and Executive Chairman of Anchorage Digital. He continues in that role and did not leave Anchorage. He is not Anchorage president. — " +
      ANCHORAGE_URL,
    "- Chairman of the NEAR Foundation — " + NEAR_URL,
    "- Director at Erebor (from 2025) — " + EREBOR_URL,
    "",
    "Anchorage Digital is the first federally chartered crypto-native bank, still operating at scale, still waiting on Fed rails.",
    "",
    "## Prior work",
    "",
    "Before Haun Ventures and Anchorage Digital, he led security at Docker and platform security at Square.",
    "",
    "## Education",
    "",
    "Instituto Superior Técnico, University of Lisbon:",
    "",
    ...DEGREES.map((degree) => "- " + degree.line),
    "",
    "Short form: BSc Telecommunications and Informatics, MSc Communication Networks, PhD Computer Science, Instituto Superior Técnico.",
    "",
    "## Citations",
    "",
    "- Blog about / media kit: " + BLOG + "/about/",
    "- Media kit anchor: " + BLOG + "/about/#media-kit",
    "- Haun team page: " + HAUN_TEAM_URL,
    "- Wikidata: " + WIKIDATA_URL,
    "- Home: " + SITE + "/",
    "- Contact: " + SITE + "/contact",
    "- Privacy: " + SITE + "/privacy",
    "- Agent brief: " + SITE + "/llms.txt",
  );
}

export function contactMarkdown(): string {
  return lines(
    "# Contact " + DISPLAY,
    "",
    "also written: " + NAME,
    "",
    "This personal hub does not publish an email address and does not host a mailer or contact form.",
    "",
    "Reach him on the public channels he actually uses:",
    "",
    "- X: " + X_URL,
    "- LinkedIn: " + LINKEDIN_URL,
    "- Essays, archive, and media kit: " + BLOG + "/",
    "",
    "Founders: an existing deck path is already on this hub at " +
      SITE +
      SUBMIT_DECK_PATH +
      ". Use that URL rather than inventing a new intake. It currently lands on the hub home.",
    "",
    "For company or product questions, use official Anchorage Digital or Haun Ventures channels. This site is not customer support and not a way to email him.",
    "",
    "- About: " + SITE + "/about",
    "- Privacy: " + SITE + "/privacy",
    "- Home: " + SITE + "/",
  );
}

export function privacyMarkdown(): string {
  return lines(
    "# Privacy",
    "",
    "This privacy page covers " +
      SITE +
      ", a personal hub for " +
      DISPLAY +
      " (" +
      NAME +
      "). It is not a product, bank, or fund portal. There are no user accounts, logins, or customer dashboards on this site.",
    "",
    "## What is collected",
    "",
    "When you visit, the host (Cloudflare Pages and Cloudflare's edge) records standard request logs. Those typically include IP address, User-Agent, referrer, requested URL, and timestamps. This hub does not run a first-party product analytics account, does not operate a mailing list, and does not ask you to create a profile.",
    "",
    "## No sale of data",
    "",
    "Information from these hosting logs is not sold. There is no advertising pixel program on this hub and no on-site checkout.",
    "",
    "## Cookies",
    "",
    "The hub is static HTML plus a small negotiation function for agent Markdown. It does not set an account session cookie. Cloudflare may set strictly necessary cookies for security or performance as part of standard hosting.",
    "",
    "## Contact",
    "",
    "Questions about this policy: use the public channels on " +
      SITE +
      "/contact. Do not send sensitive personal data in social DMs.",
    "",
    "- Home: " + SITE + "/",
    "- About: " + SITE + "/about",
    "- Contact: " + SITE + "/contact",
  );
}

export function markdownFor(pathname: string): string | null {
  const clean = pathname.replace(/\/$/, "") || "/";
  switch (clean) {
    case "/":
    case "/index":
    case "/index.html":
    case "/index.md":
      return homeMarkdown();
    case "/about":
    case "/about.md":
      return aboutMarkdown();
    case "/contact":
    case "/contact.md":
      return contactMarkdown();
    case "/privacy":
    case "/privacy.md":
      return privacyMarkdown();
    case "/404":
    case "/404.md":
      return recoveryMarkdown();
    default:
      return null;
  }
}

export function markdownResponse(body: string, status = 200): Response {
  return new Response(body, {
    status,
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      Vary: "Accept",
    },
  });
}
