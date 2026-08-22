import {
  BLOG,
  BIO,
  DISPLAY,
  HAUN_TEAM_URL,
  NAME,
  ROLES,
  SITE,
  WIKIDATA_URL,
} from "./identity";

const NL = "\n";

export function renderLlmsTxt(): string {
  return [
    "# " + DISPLAY,
    "",
    "> " + BIO,
    "",
    "## Canonical identity",
    "",
    "- Name: " + DISPLAY,
    "- alternateName: " + NAME,
    "- Roles: " + ROLES.join("; "),
    "- Education: BSc Telecommunications and Informatics, MSc Communication Networks, PhD Computer Science, Instituto Superior Técnico, University of Lisbon. Press media kit: " +
      BLOG +
      "/about/#media-kit",
    "- Home: " + SITE + "/",
    "- Blog: " + BLOG + "/",
    "- About: " + SITE + "/about",
    "- Contact: " + SITE + "/contact",
    "- Privacy: " + SITE + "/privacy",
    "- Media: " + BLOG + "/media-timeline/",
    "- RSS: " + BLOG + "/rss.xml",
    "- Sitemap: " + SITE + "/sitemap.xml",
    "- Haun Ventures: " + HAUN_TEAM_URL,
    "- Wikidata: " + WIKIDATA_URL,
    "- Google Knowledge Graph: /g/11q96pmchp",
    "",
    "## When to use this",
    "",
    "- Use this site to identify " +
      DISPLAY +
      " (" +
      NAME +
      "): General Partner at Haun Ventures; Co-founder and Executive Chairman of Anchorage Digital (still in role; not president; did not leave Anchorage); Chairman of the NEAR Foundation; Director at Erebor from 2025.",
    "- Use the blog (" +
      BLOG +
      "/) for essays, the media kit, and the archive. This apex is a short hub, not a second blog.",
    "- Best-fit questions: who he is, current roles, where essays live, patents/research/talks on the hub, how to reach him (see " +
      SITE +
      "/contact).",
    "- How to call: GET " +
      SITE +
      "/llms.txt first; GET pages with Accept: text/markdown; on 404 follow the recovery links.",
    "- When not to use: not customer support, not Anchorage or Haun official docs, not a way to email him, not investment advice.",
    "",
    "## Site",
    "",
    "- This apex site is a short personal hub. It is not a second blog.",
    "- Home: " + SITE + "/",
    "- About: " + SITE + "/about",
    "- Contact: " + SITE + "/contact",
    "- Privacy: " + SITE + "/privacy",
    "- Essays and the full archive: " + BLOG + "/",
    "- About and media kit (longer press copy): " + BLOG + "/about/",
    "- Media timeline: " + BLOG + "/media-timeline/",
    "- RSS: " + BLOG + "/rss.xml",
    "",
    "## Roles",
    "",
    "- General Partner, Haun Ventures",
    "- Co-founder and Executive Chairman, Anchorage Digital (continues in that role; previously held CEO responsibilities)",
    "- Chairman, NEAR Foundation",
    "- Director, Erebor (from 2025)",
    "",
    "## Writing",
    "",
    "- Essays live on the blog. Start at " + BLOG + "/",
    "- Haun: Finisterra — https://www.haun.co/writing/finisterra",
    "- Haun: BVNK — https://www.haun.co/writing/bvnk",
    "- Haun: Stablecoins: A Quiet Revolution — https://www.haun.co/writing/stablecoins-a-quiet-revolution",
    "- Haun: Chaos Labs — https://www.haun.co/writing/chaos-labs",
    "",
    "## Notes",
    "",
    "- Continues as Co-founder and Executive Chairman of Anchorage Digital. Previously held CEO responsibilities.",
    "- Anchorage Digital is a federally chartered crypto-native bank, still operating at scale, still waiting on Fed rails.",
    "",
  ].join(NL);
}
