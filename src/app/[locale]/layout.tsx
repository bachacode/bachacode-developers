import { routing } from "@/i18n/routing";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import MainHeader from "@/components/layout/MainHeader";
import MainFooter from "@/components/layout/MainFooter";
import { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import ProgressBarProvider from "@/components/layout/ProgressBarProvider";
import { Analytics } from "@vercel/analytics/next";
import { getMessages } from "next-intl/server";
import { Roboto } from "next/font/google";

const roboto = Roboto({ weight: "500", subsets: ["latin"], display: "swap" });

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata(
  props: Omit<
    {
      children: React.ReactNode;
      params: Promise<{ locale: string }>;
    },
    "children"
  >,
): Promise<Metadata> {
  const { locale } = await props.params;

  const t = await getTranslations({ locale, namespace: "metadata" });

  return {
    title: t("title"),
    description: t("description"),
    keywords: t("keywords"),
  };
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const { locale } = await params;

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={`${roboto.className}`}>
        <NextIntlClientProvider messages={messages}>
          <ProgressBarProvider>
            <div className="flex min-h-screen w-full flex-col items-center">
              {/* Header */}
              <MainHeader></MainHeader>
              {/* Main Context */}
              {children}
              {/* Footer */}
              <MainFooter></MainFooter>
              <Analytics />
            </div>
          </ProgressBarProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
