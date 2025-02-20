import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import ProgressBarProvider from "@/components/layout/ProgressBarProvider";
import { Analytics } from "@vercel/analytics/next";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";

const roboto = Roboto({ weight: "500", subsets: ["latin"], display: "swap" });
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
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={`${roboto.className}`}>
        <NextIntlClientProvider messages={messages}>
          <div className="flex min-h-screen w-full flex-col items-center">
            {/* Main Context */}
            <ProgressBarProvider>{children}</ProgressBarProvider>
            <Analytics />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
