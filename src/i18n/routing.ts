import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ["en", "es"],

  // Used when no locale matches
  defaultLocale: "en",
  localePrefix: "as-needed",

  pathnames: {
    "/": "/",

    "/about-us": {
      en: "/about-us",
      es: "/sobre-nosotros",
    },

    "/services": {
      en: "/services",
      es: "/servicios",
    },

    "/portfolio": {
      en: "/portfolio",
      es: "/portafolio",
    },

    "/contact": {
      en: "/contact",
      es: "/contacto",
    },
  },
});

export type Pathname = keyof (typeof routing)["pathnames"];
