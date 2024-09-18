import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({ weight: "500", subsets: ["latin"] });
const baseUrl = process.env.NEXT_PUBLIC_FRONTEND_URL ?? "https://bachacode.com";
export const metadata: Metadata = {
  title: "Bachacode Developers",
  description:
    "Bachacode Developers se especializa en desarrollo web a medida, ofreciendo sitios estáticos, aplicaciones web y WordPress, ajustados a tus necesidades.",
  keywords: "desarrollo, programación, wordpress, php, laravel, soporte",
  authors: [{ name: "Bachacode", url: "https://bachacode.com" }],
  metadataBase: new URL(baseUrl),
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
  icons: {
    icon: [
      {
        rel: "icon",
        url: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        rel: "icon",
        url: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        rel: "icon",
        url: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
    apple: [
      {
        rel: "apple-touch-icon",
        url: "/apple-touch-icon.png",
        sizes: "180x180",
      },
    ],
    other: [{ rel: "manifest", url: "/site.webmanifest" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${roboto.className}`}>
        <div className="min-h-screen flex flex-col items-center w-full">
          {/* Main Context */}
          {children}
        </div>
      </body>
    </html>
  );
}
