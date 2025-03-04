import { getPathname, Locale, routing } from "@/i18n/routing";
import { MetadataRoute } from "next";

type Href = Parameters<typeof getPathname>[0]["href"];
const baseUrl = process.env.NEXT_PUBLIC_FRONTEND_URL ?? "https://bachacode.com";

function getUrl(href: Href, locale: Locale) {
  const pathname = getPathname({ locale, href });
  return baseUrl + pathname;
}

function getEntries(href: Href): MetadataRoute.Sitemap {
  return routing.locales.map((locale) => ({
    url: getUrl(href, locale),
    alternates: {
      languages: Object.fromEntries(
        routing.locales.map((cur) => [cur, getUrl(href, cur)]),
      ),
    },
    changeFrequency: "monthly", // Optional, adjust based on expected changes
    lastModified: new Date().toISOString(),
    priority: href === "/" ? 1.0 : 0.8, // Homepage gets higher priority
  }));
}

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    ...getEntries("/"),
    ...getEntries("/about-us"),
    ...getEntries("/services"),
    ...getEntries("/portfolio"),
    ...getEntries("/contact"),
  ];
  return [...routes];
}
