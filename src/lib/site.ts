export const SITE = "https://diogomonica.com";
export const BLOG = "https://blog.diogomonica.com";
export const NAME = "Diogo Monica";
export const DISPLAY = "Diogo Mónica";
export const PHOTO = "/assets/diogo-monica.jpg";
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

export const SAME_AS = [
  "https://x.com/diogomonica",
  "https://www.linkedin.com/in/diogomonica",
  "https://en.wikipedia.org/wiki/Diogo_Mónica",
  "https://www.wikidata.org/wiki/Q111948997",
  BLOG,
  "https://www.haun.co/team/diogo-monica",
];

export const PERSON_ID = `${SITE}/#person`;

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

export const PERSON = {
  "@type": "Person",
  "@id": PERSON_ID,
  name: DISPLAY,
  alternateName: NAME,
  url: SITE,
  description: BIO,
  jobTitle: ROLES,
  hasOccupation: {
    "@type": "Occupation",
    name: "CEO responsibilities, Anchorage Digital",
  },
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
  name: DISPLAY,
  url: SITE,
  description: BIO,
  author: { "@id": PERSON_ID },
};

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

export const PATENT_FIGURES = [
  { src: "/assets/figures/patent-1.png", alt: "Patent diagram 1", width: 934, height: 672 },
  { src: "/assets/figures/patent-2.png", alt: "Patent diagram 2", width: 1024, height: 732 },
  { src: "/assets/figures/patent-3.png", alt: "Patent diagram 3", width: 980, height: 1264 },
  { src: "/assets/figures/patent-4.png", alt: "Patent diagram 4", width: 1024, height: 762 },
  { src: "/assets/figures/patent-5.png", alt: "Patent diagram 5", width: 1058, height: 606 },
];

export const RESEARCH_FIGURES = [
  { src: "/assets/figures/research-1.png", alt: "Research diagram 1", width: 1398, height: 1106 },
  { src: "/assets/figures/research-2.png", alt: "Research diagram 2", width: 680, height: 560 },
  { src: "/assets/figures/research-3.png", alt: "Research diagram 3", width: 682, height: 494 },
  { src: "/assets/figures/research-4.png", alt: "Research diagram 4", width: 454, height: 432 },
  { src: "/assets/figures/research-5.png", alt: "Research diagram 5", width: 998, height: 854 },
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

export const TALKS = [
  {
    title: "Bitcoin ETFs",
    href: "https://www.youtube.com/watch?v=Uaz9Ahbqngw",
    image: "/assets/talks/talk-1.jpg",
    width: 1280,
    height: 720,
  },
  {
    title: "Regulatory clarity in crypto",
    href: "https://www.youtube.com/watch?v=QVB0qd67JpY",
    image: "/assets/talks/talk-2.jpg",
    width: 1280,
    height: 720,
  },
  {
    title: "Institutions coming to crypto",
    href: "https://www.youtube.com/watch?v=sbBgQCGqxZk",
    image: "/assets/talks/talk-3.jpg",
    width: 1280,
    height: 720,
  },
  {
    title: "A Docker image walks into a notary",
    href: "https://www.youtube.com/watch?v=JvjdfQC8jxM",
    image: "/assets/talks/talk-4.jpg",
    width: 1280,
    height: 720,
  },
  {
    title: "Heart & Hustle of Portugal",
    href: "https://www.youtube.com/watch?v=YundCatIPec",
    image: "/assets/talks/talk-5.jpg",
    width: 1280,
    height: 720,
  },
  {
    title: "Bitcoin going mainstream",
    href: "https://www.youtube.com/watch?v=MHcD27Q0Dm4",
    image: "/assets/talks/talk-6.jpg",
    width: 1280,
    height: 720,
  },
];
