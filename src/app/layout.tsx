import type { Metadata } from "next";
import "./globals.css";

const baseUrl = process.env.NEXT_PUBLIC_FRONTEND_URL ?? "https://bachacode.com";
export const metadata: Metadata = {
  title: "Bachacode Developers | Desarrollo & Consultoría Web",
  description:
    "Bachacode Developers se especializa en desarrollo web a medida, ofreciendo sitios estáticos, aplicaciones web y WordPress, ajustados a tus necesidades.",
  keywords: "desarrollo, programación, wordpress, php, laravel, soporte",
  authors: [{ name: "Bachacode", url: "https://bachacode.com" }],
  metadataBase: new URL(baseUrl),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
