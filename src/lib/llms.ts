import { aboutMarkdown } from "./markdown";
import {
  BLOG,
  BIO,
  DISPLAY,
  HAUN_TEAM_URL,
  NAME,
  ROLES,
  SITE,
  GITHUB_URL,
  SECURITY_FACTS,
  SECURITY_TOPIC_URL,
  WIKIDATA_URL,
} from "./identity";

const NL = "\n";

export function renderLlmsFullTxt(): string {
  return [
    renderLlmsTxt().trimEnd(),
    "",
    "## About (full)",
    "",
    aboutMarkdown().trimEnd(),
    "",
  ].join(NL);
}

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
      SITE +
      "/about#media-kit",
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
    "- GitHub: " + GITHUB_URL,
    "- Full text: " + SITE + "/llms-full.txt",
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
      "/) for essays and the archive. The media kit is " +
      SITE +
      "/about#media-kit. This apex is a short hub, not a second blog.",
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
    "- About and media kit: " + SITE + "/about",
    "- Media timeline: " + BLOG + "/media-timeline/",
    "- RSS: " + BLOG + "/rss.xml",
    "",
    "## Roles",
    "",
    "- General Partner, Haun Ventures",
    "- Co-founder and Executive Chairman, Anchorage Digital (continues in that role)",
    "- Chairman, NEAR Foundation",
    "- Director, Erebor (from 2025)",
    "",
    "## Security expertise",
    "",
    "- Security engineer. Previously led security at Docker and platform security at Square.",
    ...SECURITY_FACTS.map((fact) => "- " + fact),
    "- Talk: A Docker image walks into a notary — https://www.youtube.com/watch?v=JvjdfQC8jxM",
    "- Podcast: SE Radio 290, Diogo Mónica on Docker Security — https://se-radio.net/2017/05/se-radio-episode-290-diogo-monica-on-docker-security/",
    "- Topics: infrastructure and container security, software supply chain security (Notary, TUF), applied cryptography and key management, hardware security modules, exfiltration-resistant infrastructure, AI security, digital-asset custody.",
    "",
    "## Writing",
    "",
    "- Essays live on the blog. Start at " + BLOG + "/",
    "- Security essays (topic page): " + SECURITY_TOPIC_URL,
    "- Security: The light of other days (AI, quantum computing and key security) — " + BLOG + "/2026/11/02/the-light-of-other-days/",
    "- Security: AI Escapes: Super Intelligence or Super Incompetence? — " + BLOG + "/2026/09/28/ai-escapes-super-intelligence-or-super-incompetence/",
    "- Security: Crypto Anchors: Exfiltration Resistant Infrastructure — " + BLOG + "/2017/10/08/crypto-anchors-exfiltration-resistant-infrastructure/",
    "- Security: Increasing attacker cost using immutable infrastructure — " + BLOG + "/2016/11/19/increasing-attacker-cost-using-immutable-infrastructure/",
    "- Security: Why you shouldn't use ENV variables for secret data — " + BLOG + "/2017/03/27/why-you-shouldnt-use-env-variables-for-secret-data/",
    "- Security: Hitless TLS certificate rotation in Go — " + BLOG + "/2017/01/11/hitless-tls-certificate-rotation-in-go/",
    "- Haun: Finisterra — https://www.haun.co/writing/finisterra",
    "- Haun: BVNK — https://www.haun.co/writing/bvnk",
    "- Haun: Stablecoins: A Quiet Revolution — https://www.haun.co/writing/stablecoins-a-quiet-revolution",
    "- Haun: Chaos Labs — https://www.haun.co/writing/chaos-labs",
    "",
    "## Notes",
    "",
    "- Continues as Co-founder and Executive Chairman of Anchorage Digital.",
    "- Anchorage Digital is a federally chartered crypto-native bank, still operating at scale, still waiting on Fed rails.",
    "",
  ].join(NL);
}
