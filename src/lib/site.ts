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
  EXPERIENCE,
  HAUN_TEAM_URL,
  HEADLINE,
  HERO_LEDE,
  IST,
  LINKEDIN_URL,
  LONG_BIO,
  MEDIA_KIT_LINKS,
  MEDIA_KIT_NOTE,
  MEDIA_KIT_PHOTOS,
  MEDIA_KIT_SOURCES,
  MEDIA_KIT_URL,
  NAME,
  NAME_NOTE,
  NEAR_URL,
  OG_CARD,
  HOME_TITLE,
  HOME_DESCRIPTION,
  SECURITY_FACTS,
  SECURITY_TOPIC_URL,
  ONE_LINE_BIO,
  ORGANIZATIONS,
  PATENTS,
  PERSON,
  PERSON_ID,
  PHOTO,
  PHOTO_ALT,
  PHOTO_GUIDANCE,
  PHOTO_LEGACY,
  PRESS_PHOTO,
  RESEARCH,
  ROLES,
  SAME_AS,
  SHORT_BIO,
  SPEAKING_TOPICS,
  SITE,
  SUBMIT_DECK_PATH,
  TALK_ITEMS,
  WEBSITE,
  WIKIDATA_URL,
  WIKIPEDIA_URL,
  WRITING,
  WRITING_TOPICS,
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

/** Illustrative tiles, paired in PATENTS order. Not official patent drawings. */
export const PATENT_ART = [
  "/illustrations/patent-1.svg",
  "/illustrations/patent-2.svg",
  "/illustrations/patent-3.svg",
  "/illustrations/patent-4.svg",
  "/illustrations/patent-5.svg",
  "/illustrations/patent-6.svg",
] as const;

/** Decorative figures, paired in RESEARCH order. */
export const RESEARCH_ART = [
  "/illustrations/research-1.svg",
  "/illustrations/research-2.svg",
  "/illustrations/research-3.svg",
  "/illustrations/research-4.svg",
  "/illustrations/research-5.svg",
  "/illustrations/research-6.svg",
] as const;
