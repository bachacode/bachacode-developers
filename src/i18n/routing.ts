import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

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

export type Pathnames = keyof typeof routing.pathnames;

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
