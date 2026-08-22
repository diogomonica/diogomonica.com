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
import { TALK_ITEMS } from "./identity";

export {
  ANCHORAGE_URL,
  BLOG,
  BIO,
  DEGREES,
  DISPLAY,
  EREBOR_URL,
  HAUN_TEAM_URL,
  HERO_LEDE,
  HERO_ROLES,
  IST,
  LINKEDIN_URL,
  NAME,
  NEAR_URL,
  ORGANIZATIONS,
  PATENTS,
  PERSON,
  PERSON_ID,
  PHOTO,
  PHOTO_ALT,
  PHOTO_LEGACY,
  RESEARCH,
  ROLES,
  SAME_AS,
  SITE,
  SUBMIT_DECK_PATH,
  TALK_ITEMS,
  WEBSITE,
  WIKIDATA_URL,
  WIKIPEDIA_URL,
  WRITING,
  X_URL,
  webPageJsonLd,
} from "./identity";

export const PHOTO_IMAGE = photoImage;

export const TALKS: { title: string; href: string; image: ImageMetadata }[] = TALK_ITEMS.map(
  (item, index) => ({
    ...item,
    image: [talk1, talk2, talk3, talk4, talk5, talk6][index],
  }),
);

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
