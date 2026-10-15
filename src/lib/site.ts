import type { ImageMetadata } from "astro";
import photoImage from "../assets/diogo-monica.jpg";
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

export const HERO_SVG = "/illustrations/hero.svg";
export const HERO_POSTER = "/illustrations/hero-poster.png";

/** Illustrative tiles, paired in PATENTS order. Not official patent drawings. */
export const PATENT_ART = [
  "/illustrations/patent-1.svg",
  "/illustrations/patent-2.svg",
  "/illustrations/patent-3.svg",
  "/illustrations/patent-4.svg",
  "/illustrations/patent-5.svg",
  "/illustrations/patent-6.svg",
] as const;

/**
 * Decorative figure row. Five images, six papers — not a 1:1 attribution.
 * Order matches the original figure strip.
 */
export const RESEARCH_ART = [
  "/illustrations/research-1.svg",
  "/illustrations/research-2.svg",
  "/illustrations/research-3.svg",
  "/illustrations/research-4.svg",
  "/illustrations/research-5.svg",
] as const;
