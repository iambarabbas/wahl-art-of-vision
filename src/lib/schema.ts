import { SITE_URL } from "./constants";

// Reused across pages: Erik Wahl as a Person/PerformingArtist, and the
// site as an Organization -- both link back to the same @id so search
// engines can connect them.
export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE_URL}/#person`,
  name: "Erik Wahl",
  jobTitle: ["Keynote Speaker", "Artist", "Author"],
  url: SITE_URL,
  image: `${SITE_URL}/photos/erik-stage-hero.jpg`,
  sameAs: [
    "https://www.instagram.com/erikwahl/",
    "https://www.youtube.com/channel/UCqEuyx1VCTdvhnXt7buvbMA",
    "https://www.linkedin.com/in/meeterikwahl",
    "https://twitter.com/erikwahl",
    "http://www.facebook.com/iamerikwahl",
  ],
  description:
    "Erik Wahl is an internationally recognized graffiti artist, #1 bestselling author, and one of the most sought-after keynote speakers in the world.",
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: "Erik Wahl — The Art of Vision",
  url: SITE_URL,
  logo: `${SITE_URL}/favicon.svg`,
  founder: { "@id": `${SITE_URL}/#person` },
};
