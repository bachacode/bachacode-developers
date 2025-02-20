import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Bachacode Developers",
    short_name: "Bachacode",
    description:
      "Bachacode Developers se especializa en desarrollo web a medida, ofreciendo sitios estáticos, aplicaciones web y WordPress, ajustados a tus necesidades.",
    start_url: "/",
    icons: [
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    theme_color: "#FF5C10",
    background_color: "#ffffff",
    display: "standalone",
  };
}
