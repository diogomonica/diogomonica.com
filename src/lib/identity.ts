export const SITE = "https://diogomonica.com";
export const BLOG = "https://blog.diogomonica.com";
export const NAME = "Diogo Monica";
export const DISPLAY = "Diogo Mónica";
export const PHOTO = "/assets/diogo-monica.jpg";
// Identical twin of PHOTO. Keep the file so old OG / inbound URLs still resolve.
export const PHOTO_LEGACY = "/assets/diogo-monica-BF1kBtTr.jpg";
export const PHOTO_ALT =
  "Portrait of Diogo Mónica, General Partner at Haun Ventures and Executive Chairman of Anchorage Digital";
export const PRESS_PHOTO = "/media-kit/Diogo_Monica_Founder_Engineer.web.jpg";
export const MEDIA_KIT_URL = `${SITE}/about#media-kit`;

export const ROLES = [
  "General Partner, Haun Ventures",
  "Co-founder and Executive Chairman, Anchorage Digital",
  "Chairman, NEAR Foundation",
  "Director, Erebor",
];

export const HEADLINE = ROLES.join("; ") + ".";

export const BIO =
  "General Partner at Haun Ventures. Co-founder and Executive Chairman of Anchorage Digital. Chairman of the NEAR Foundation. Director at Erebor.";

export const HERO_LEDE =
  "General Partner at Haun Ventures, Co-founder and Executive Chairman of Anchorage Digital, Chairman of the NEAR Foundation, and Director at Erebor.";

export const X_URL = "https://x.com/diogomonica";
export const LINKEDIN_URL = "https://www.linkedin.com/in/diogomonica";
export const WIKIPEDIA_URL = "https://en.wikipedia.org/wiki/Diogo_Mónica";
export const WIKIDATA_URL = "https://www.wikidata.org/wiki/Q111948997";
export const HAUN_TEAM_URL = "https://www.haun.co/team/diogo-monica";
export const ANCHORAGE_URL = "https://www.anchorage.com";
export const NEAR_URL = "https://near.foundation";
export const EREBOR_URL = "https://www.haun.co/writing/erebor";
export const SUBMIT_DECK_PATH = "/submit-deck";

export const EXPERIENCE: { dates: string; title: string; href?: string; note?: string }[] = [
  { dates: "2025–present", title: "Director, Erebor.", href: EREBOR_URL },
  { dates: "2024–present", title: "General Partner, Haun Ventures.", href: HAUN_TEAM_URL },
  { dates: "", title: "Chairman, NEAR Foundation.", href: NEAR_URL },
  {
    dates: "2017–present",
    title: "Co-founder, Anchorage Digital, and Executive Chairman since 2024.",
    href: ANCHORAGE_URL,
    note: "First federally chartered crypto-native bank.",
  },
  { dates: "2015–2017", title: "Security lead, Docker." },
  { dates: "Until 2015", title: "Platform security, Square (now Block)." },
];

export const MEDIA_KIT_NOTE = "For press. Credit Diogo Mónica. Do not crop out of context.";

export const ONE_LINE_BIO =
  "Diogo Mónica is General Partner at Haun Ventures, Co-founder and Executive Chairman of Anchorage Digital, Chairman of the NEAR Foundation, and a Director at Erebor.";

export const NAME_NOTE =
  "Spell the name Diogo Mónica, with an accent on the ó. Diogo Monica, without the accent, is an alternate spelling.";

export const PHOTO_GUIDANCE =
  "Credit Diogo Mónica. Do not crop out of context. Use these files as provided, and keep the photographer credit and license with the image.";

export const SPEAKING_TOPICS =
  "He speaks on crypto, security, financial regulations, venture capital, startups, and financial literacy.";

export const WRITING_TOPICS = "He writes on security, infrastructure, and digital assets.";

export const SHORT_BIO =
  "Diogo Mónica is General Partner at Haun Ventures, Co-founder and Executive Chairman of Anchorage Digital, Chairman of the NEAR Foundation, and a Director at Erebor. He is a security engineer and investor. He previously led security at Docker and platform security at Square. He holds BSc, MSc, and PhD degrees from Instituto Superior Técnico at the University of Lisbon.";

export const LONG_BIO = [
  "Diogo Mónica is General Partner at Haun Ventures, Co-founder and Executive Chairman of Anchorage Digital, Chairman of the NEAR Foundation, and a Director at Erebor. He is a security engineer and investor.",
  "Until 2015 he led platform security at Square (now Block). From 2015 to 2017 he led security at Docker. In 2017 he co-founded Anchorage Digital, a digital-asset custody company. In 2024 he became Executive Chairman of Anchorage Digital. He continues as Co-founder and Executive Chairman.",
  "In 2024 he became General Partner at Haun Ventures. He also serves as Chairman of the NEAR Foundation. In 2025 he became a Director at Erebor.",
  "He has published security research and holds patents in cryptography, payments, and digital-asset custody. He writes on this site about security, infrastructure, and digital assets.",
  "He studied at Instituto Superior Técnico at the University of Lisbon. From 2004 to 2007 he completed a BSc in Telecommunications and Informatics Engineering. From 2007 to 2009 he completed an MSc in Communication Networks Engineering. From 2009 to 2015 he completed a PhD in Computer Science, focused on network security.",
] as const;

export const MEDIA_KIT_PHOTOS = [
  {
    src: "/media-kit/Diogo_Monica_Founder_Engineer.web.jpg",
    original: "/media-kit/Diogo_Monica_Founder_Engineer.jpg",
    originalDownload: "Diogo_Monica_-_Founder_Engineer_-_Anchorage_-_Haun_Ventures.jpg",
    webDownload: "Diogo_Monica_Founder_Engineer.web.jpg",
    alt: "Portrait of Diogo Mónica, 2024",
    width: 800,
    height: 1200,
    credit: "Equityarena1",
    license: "CC0 1.0",
    licenseHref: "https://creativecommons.org/publicdomain/zero/1.0/",
    commonsHref:
      "https://commons.wikimedia.org/wiki/File:Diogo_Monica_-_Founder_Engineer_-_Anchorage_-_Haun_Ventures.jpg",
  },
  {
    src: "/media-kit/Diogo_Monica_Anchorge_Digital.web.jpg",
    original: "/media-kit/Diogo_Monica_Anchorge_Digital.jpg",
    originalDownload: "Diogo_Monica_Anchorge_Digital.jpg",
    webDownload: "Diogo_Monica_Anchorge_Digital.web.jpg",
    alt: "Portrait of Diogo Mónica, 2023",
    width: 800,
    height: 1200,
    credit: "WikPic2023",
    license: "CC BY-SA 4.0",
    licenseHref: "https://creativecommons.org/licenses/by-sa/4.0/",
    commonsHref: "https://commons.wikimedia.org/wiki/File:Diogo_Monica_Anchorge_Digital.jpg",
  },
] as const;

export const MEDIA_KIT_LINKS = [
  { label: "diogomonica.com", href: SITE, me: false },
  { label: "Blog", href: BLOG, me: false },
  { label: "X", href: X_URL, me: true },
  { label: "LinkedIn", href: LINKEDIN_URL, me: true },
  { label: "Wikipedia", href: WIKIPEDIA_URL, me: true },
  { label: "Wikidata", href: WIKIDATA_URL, me: true },
  { label: "Haun Ventures", href: HAUN_TEAM_URL, me: true },
] as const;

export const MEDIA_KIT_SOURCES = [
  {
    label: "Anchorage Digital: Executive Chairman announcement (20 March 2024)",
    href: "https://www.anchorage.com/insights/positioned-for-the-future-new-role-at-anchorage-digital",
  },
  { label: "Haun Ventures team page", href: HAUN_TEAM_URL },
  {
    label: "OCC conditional approval letter for Erebor Bank, N.A. (November 2025)",
    href: "https://www.occ.gov/news-issuances/news-releases/2025/nr-occ-2025-101a.pdf",
  },
] as const;

export const SAME_AS = [X_URL, LINKEDIN_URL, WIKIPEDIA_URL, WIKIDATA_URL, BLOG, HAUN_TEAM_URL];

export const PERSON_ID = `${SITE}/#person`;
export const WEBSITE_ID = `${SITE}/#website`;

export const HAUN_ORG_ID = "https://www.haun.co/#organization";
export const ANCHORAGE_ORG_ID = "https://www.anchorage.com/#organization";
export const NEAR_ORG_ID = "https://near.foundation/#organization";
export const EREBOR_ORG_ID = "https://www.haun.co/writing/erebor#organization";

export const IST = {
  "@type": "CollegeOrUniversity",
  name: "Instituto Superior Técnico",
  url: "https://tecnico.ulisboa.pt/",
  parentOrganization: {
    "@type": "CollegeOrUniversity",
    name: "University of Lisbon",
  },
};

export const DEGREES = [
  {
    years: "2004–2007",
    line: "BSc, Telecommunications and Informatics Engineering, Instituto Superior Técnico, University of Lisbon.",
    credential: {
      "@type": "EducationalOccupationalCredential",
      name: "BSc, Telecommunications and Informatics Engineering",
      credentialCategory: "bachelor degree",
      recognizedBy: IST,
    },
  },
  {
    years: "2007–2009",
    line: "MSc, Communication Networks Engineering, Instituto Superior Técnico, University of Lisbon.",
    credential: {
      "@type": "EducationalOccupationalCredential",
      name: "MSc, Communication Networks Engineering",
      credentialCategory: "master degree",
      recognizedBy: IST,
    },
  },
  {
    years: "2009–2015",
    line: "PhD, Computer Science (network security), Instituto Superior Técnico, University of Lisbon.",
    credential: {
      "@type": "EducationalOccupationalCredential",
      name: "PhD, Computer Science (network security)",
      credentialCategory: "doctorate",
      recognizedBy: IST,
    },
  },
];

export const ORGANIZATIONS = [
  {
    "@type": "Organization",
    "@id": HAUN_ORG_ID,
    name: "Haun Ventures",
    url: "https://www.haun.co/",
  },
  {
    "@type": "Organization",
    "@id": ANCHORAGE_ORG_ID,
    name: "Anchorage Digital",
    url: ANCHORAGE_URL,
    description:
      "First federally chartered crypto-native bank, still operating at scale, still waiting on Fed rails.",
  },
  {
    "@type": "Organization",
    "@id": NEAR_ORG_ID,
    name: "NEAR Foundation",
    url: NEAR_URL,
  },
  {
    "@type": "Organization",
    "@id": EREBOR_ORG_ID,
    name: "Erebor",
    url: EREBOR_URL,
  },
];

export const PERSON = {
  "@type": "Person",
  "@id": PERSON_ID,
  name: DISPLAY,
  alternateName: NAME,
  url: SITE,
  description: BIO,
  jobTitle: ROLES,
  worksFor: [{ "@id": HAUN_ORG_ID }, { "@id": ANCHORAGE_ORG_ID }],
  memberOf: [{ "@id": NEAR_ORG_ID }, { "@id": EREBOR_ORG_ID }],
  sameAs: SAME_AS,
  identifier: {
    "@type": "PropertyValue",
    propertyID: "Google Knowledge Graph ID",
    value: "/g/11q96pmchp",
  },
  alumniOf: IST,
  hasCredential: DEGREES.map((degree) => degree.credential),
  image: new URL(PRESS_PHOTO, SITE).href,
  knowsAbout: [
    "security engineering",
    "digital-asset custody",
    "stablecoins",
    "cryptographic infrastructure",
    "fintech regulation",
    "venture capital",
  ],
};

export const WEBSITE = {
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  name: DISPLAY,
  url: SITE,
  description: BIO,
  author: { "@id": PERSON_ID },
};

export const TRUST_PATHS = ["/about", "/contact", "/privacy"] as const;
export const SITEMAP_PATHS = ["/", ...TRUST_PATHS] as const;
export const MARKDOWN_PATHS = ["/", "/about", "/contact", "/privacy"] as const;

export const RECOVERY_HREFS = [
  `${SITE}/`,
  `${SITE}/llms.txt`,
  `${SITE}/sitemap.xml`,
  `${BLOG}/`,
  `${SITE}/about`,
  `${SITE}/contact`,
  `${SITE}/privacy`,
] as const;

export const WRITING = [
  {
    date: "2026-11-02",
    label: "November 2, 2026",
    title: "The light of other days",
    excerpt:
      "In The Light of Other Days, Arthur C. Clarke imagines a world in which wormhole technology lets anyone spy on anyone.",
    href: "https://blog.diogomonica.com/2026/11/02/the-light-of-other-days/",
  },
  {
    date: "2026-09-28",
    label: "September 28, 2026",
    title: "AI Escapes: Super Intelligence or Super Incompetence?",
    excerpt:
      "Model escapes look like Jack Sparrow’s palm tree scene: capable agents, loose ropes, and captors who never watched the tree.",
    href: "https://blog.diogomonica.com/2026/09/28/ai-escapes-super-intelligence-or-super-incompetence/",
  },
  {
    date: "2026-08-31",
    label: "August 31, 2026",
    title: "Unicorns as a media product",
    excerpt:
      "A working paper puts numbers on the $1B Schelling point: media spike up, VC network quality down.",
    href: "https://blog.diogomonica.com/2026/08/31/unicorns-as-a-media-product/",
  },
  {
    date: "2026-08-28",
    label: "August 28, 2026",
    title: "How to get your GrokBot to receive emails instantly",
    excerpt:
      "Wake a GrokBot on inbound mail with a webhook, a cheap Replit proxy, and a fetch of that one email.",
    href: "https://blog.diogomonica.com/2026/08/28/how-to-get-your-grokbot-to-receive-emails-instantly/",
  },
];

export const PATENTS = [
  { title: "Digital Asset Custodial System", href: "https://patents.justia.com/patent/10586227" },
  {
    title: "Custodial system with access to logically separated cryptoassets",
    href: "https://patents.justia.com/patent/11295080",
  },
  {
    title: "Payment system using card readers coupled to mobile devices",
    href: "https://patents.justia.com/patent/9092767",
  },
  {
    title: "Custodial system with proof-of-stake blockchain support",
    href: "https://patents.justia.com/patent/11323444",
  },
  {
    title: "Secure communications between devices using a trusted server",
    href: "https://patents.justia.com/patent/10079813",
  },
  {
    title: "Augmented reality deposit address verification",
    href: "https://patents.justia.com/patent/10482465",
  },
];

export const RESEARCH = [
  {
    title: "An IDS for Browser Hijacking",
    href: "https://www.researchgate.net/publication/286447249_An_IDS_for_Browser_Hijacking",
  },
  {
    title: "Local Password Validation Using Self-Organizing Maps",
    href: "https://www.researchgate.net/publication/286447182_Local_Password_Validation_Using_Self-Organizing_Maps",
  },
  {
    title: "Leveraging honest users: stealth command-and-control of botnets",
    href: "https://www.researchgate.net/publication/262164039_Leveraging_honest_users_stealth_command-and-control_of_botnets",
  },
  {
    title: "Mitigating the Evil Twin Attack through Multi-hop Detection",
    href: "https://www.researchgate.net/publication/220270841_WiFiHop_-_Mitigating_the_Evil_Twin_Attack_through_Multi-hop_Detection",
  },
  {
    title: "Observable Non-Sybil Quorums Construction in Wireless Networks",
    href: "https://www.researchgate.net/publication/224165873_Observable_Non-Sybil_Quorums_Construction_in_One-Hop_Wireless_Ad_Hoc_Networks",
  },
  {
    title: "On the use of radio resource tests in wireless ad hoc networks",
    href: "https://www.researchgate.net/publication/228636069_On_the_use_of_radio_resource_tests_in_wireless_ad_hoc_networks",
  },
];

export const TALK_ITEMS = [
  { title: "Bitcoin ETFs", href: "https://www.youtube.com/watch?v=Uaz9Ahbqngw" },
  { title: "Regulatory clarity in crypto", href: "https://www.youtube.com/watch?v=QVB0qd67JpY" },
  { title: "Institutions coming to crypto", href: "https://www.youtube.com/watch?v=sbBgQCGqxZk" },
  { title: "A Docker image walks into a notary", href: "https://www.youtube.com/watch?v=JvjdfQC8jxM" },
  { title: "Heart & Hustle of Portugal", href: "https://www.youtube.com/watch?v=YundCatIPec" },
  { title: "Bitcoin going mainstream", href: "https://www.youtube.com/watch?v=MHcD27Q0Dm4" },
];

export function webPageJsonLd(
  path: string,
  name: string,
  description: string,
  type: "WebPage" | "AboutPage" = "WebPage",
) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      PERSON,
      WEBSITE,
      ...ORGANIZATIONS,
      {
        "@type": type,
        url: new URL(path, SITE).href,
        name,
        description,
        isPartOf: { "@id": WEBSITE_ID },
        about: { "@id": PERSON_ID },
        author: { "@id": PERSON_ID },
        ...(type === "AboutPage" ? { mainEntity: { "@id": PERSON_ID } } : {}),
      },
    ],
  };
}
