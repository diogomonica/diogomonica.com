import type { ImageMetadata } from "astro";
import photoImage from "../assets/diogo-monica.jpg";
import patent1 from "../assets/figures/patent-1.png";
import patent2 from "../assets/figures/patent-2.png";
import patent3 from "../assets/figures/patent-3.png";
import patent4 from "../assets/figures/patent-4.png";
import patent5 from "../assets/figures/patent-5.png";
import research1 from "../assets/figures/research-1.png";
import research2 from "../assets/figures/research-2.png";
import research3 from "../assets/figures/research-3.png";
import research4 from "../assets/figures/research-4.png";
import research5 from "../assets/figures/research-5.png";
import talk1 from "../assets/talks/talk-1.jpg";
import talk2 from "../assets/talks/talk-2.jpg";
import talk3 from "../assets/talks/talk-3.jpg";
import talk4 from "../assets/talks/talk-4.jpg";
import talk5 from "../assets/talks/talk-5.jpg";
import talk6 from "../assets/talks/talk-6.jpg";

export const SITE = "https://diogomonica.com";
export const BLOG = "https://blog.diogomonica.com";
export const NAME = "Diogo Monica";
export const DISPLAY = "Diogo Mónica";
export const PHOTO = "/assets/diogo-monica.jpg";
// Identical twin of PHOTO. Keep the file so old OG / inbound URLs still resolve.
export const PHOTO_LEGACY = "/assets/diogo-monica-BF1kBtTr.jpg";
export const PHOTO_IMAGE = photoImage;
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

export const TALKS: { title: string; href: string; image: ImageMetadata }[] = [
  { title: "Bitcoin ETFs", href: "https://www.youtube.com/watch?v=Uaz9Ahbqngw", image: talk1 },
  { title: "Regulatory clarity in crypto", href: "https://www.youtube.com/watch?v=QVB0qd67JpY", image: talk2 },
  { title: "Institutions coming to crypto", href: "https://www.youtube.com/watch?v=sbBgQCGqxZk", image: talk3 },
  { title: "A Docker image walks into a notary", href: "https://www.youtube.com/watch?v=JvjdfQC8jxM", image: talk4 },
  { title: "Heart & Hustle of Portugal", href: "https://www.youtube.com/watch?v=YundCatIPec", image: talk5 },
  { title: "Bitcoin going mainstream", href: "https://www.youtube.com/watch?v=MHcD27Q0Dm4", image: talk6 },
];


export const PATENT_FIGURES: { src: ImageMetadata; alt: string }[] = [
  { src: patent1, alt: "Patent figure: signal waveform" },
  { src: patent2, alt: "Patent figure: device screen dimensions" },
  { src: patent3, alt: "Patent figure: card reader on a phone" },
  { src: patent4, alt: "Patent figure: hardware component" },
  { src: patent5, alt: "Patent figure: custodial system with HSM" },
];

export const RESEARCH_FIGURES: { src: ImageMetadata; alt: string }[] = [
  { src: research1, alt: "Research figure: intrusion detection scatter plot" },
  { src: research2, alt: "Research figure: Evil Twin attack" },
  { src: research3, alt: "Research figure: self-organizing map" },
  { src: research4, alt: "Research figure: botnet command and control" },
  { src: research5, alt: "Research figure: quorum of honest and malicious nodes" },
];
