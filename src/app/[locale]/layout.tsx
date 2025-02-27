import BaseLayout from "@/components/layout/BaseLayout";
import { routing } from "@/i18n/routing";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import MainHeader from "@/components/layout/MainHeader";
import MainFooter from "@/components/layout/MainFooter";
import { Metadata } from "next";

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

export default function LocaleLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }
  // Enable static rendering
  setRequestLocale(locale);

  return (
    <BaseLayout locale={locale}>
      {/* Header */}
      <MainHeader></MainHeader>

      {/* Main Context */}
      {children}

      {/* Footer */}
      <MainFooter></MainFooter>
    </BaseLayout>
  );
}
