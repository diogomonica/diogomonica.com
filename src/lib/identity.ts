export const SITE = "https://diogomonica.com";
export const BLOG = "https://blog.diogomonica.com";
export const NAME = "Diogo Monica";
export const DISPLAY = "Diogo Mónica";
export const PHOTO = "/assets/diogo-monica.jpg";
// Identical twin of PHOTO. Keep the file so old OG / inbound URLs still resolve.
export const PHOTO_LEGACY = "/assets/diogo-monica-BF1kBtTr.jpg";
export const PHOTO_ALT =
  "Portrait of Diogo Mónica, General Partner at Haun Ventures and Executive Chairman of Anchorage Digital";

export const ROLES = [
  "General Partner, Haun Ventures",
  "Co-founder and Executive Chairman, Anchorage Digital",
  "Chairman, NEAR Foundation",
  "Director, Erebor",
];

export const BIO =
  "General Partner at Haun Ventures. Co-founder and Executive Chairman of Anchorage Digital. Chairman of the NEAR Foundation. Director at Erebor.";

export const HERO_LEDE =
  "General Partner at Haun Ventures. Co-founder and Executive Chairman of Anchorage Digital.";

export const HERO_ROLES = ROLES.slice(0, 2);

export const X_URL = "https://x.com/diogomonica";
export const LINKEDIN_URL = "https://www.linkedin.com/in/diogomonica";
export const WIKIPEDIA_URL = "https://en.wikipedia.org/wiki/Diogo_Mónica";
export const WIKIDATA_URL = "https://www.wikidata.org/wiki/Q111948997";
export const HAUN_TEAM_URL = "https://www.haun.co/team/diogo-monica";
export const ANCHORAGE_URL = "https://www.anchorage.com";
export const NEAR_URL = "https://near.foundation";
export const EREBOR_URL = "https://www.haun.co/writing/erebor";
export const SUBMIT_DECK_PATH = "/submit-deck";

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
  image: new URL(PHOTO, SITE).href,
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
    date: "2025-02-27",
    label: "February 27, 2025",
    title: "Investing in Finisterra",
    excerpt: "Leading the seed investment in Finisterra Labs, the makers of Baselight.",
    href: "https://www.haun.co/writing/finisterra",
  },
  {
    date: "2024-12-17",
    label: "December 17, 2024",
    title: "Leading the Series B for BVNK",
    excerpt: "Leading the Series B for BVNK.",
    href: "https://www.haun.co/writing/bvnk",
  },
  {
    date: "2024-11-12",
    label: "November 12, 2024",
    title: "Stablecoins: A Quiet Revolution",
    excerpt: "Stablecoins as product-market fit in crypto and a force in global finance.",
    href: "https://www.haun.co/writing/stablecoins-a-quiet-revolution",
  },
  {
    date: "2024-08-15",
    label: "August 15, 2024",
    title: "Investing in Chaos Labs",
    excerpt: "Leading the Series A for Chaos Labs.",
    href: "https://www.haun.co/writing/chaos-labs",
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

export function webPageJsonLd(path: string, name: string, description: string) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      PERSON,
      WEBSITE,
      ...ORGANIZATIONS,
      {
        "@type": "WebPage",
        url: new URL(path, SITE).href,
        name,
        description,
        isPartOf: { "@id": WEBSITE_ID },
        about: { "@id": PERSON_ID },
        author: { "@id": PERSON_ID },
      },
    ],
  };
}
