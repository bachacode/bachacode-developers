import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl =
    process.env.NEXT_PUBLIC_FRONTEND_URL ?? "https://bachacode.com";

  const routes: MetadataRoute.Sitemap = [
    "/",
    "/sobre-nosotros",
    "/servicios",
    "/portafolio",
    "/contacto",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly", // Optional, adjust based on expected changes
    priority: route === "/" ? 1.0 : 0.8, // Homepage gets higher priority
  }));

  return [...routes];
}
