import BaseLayout from "@/components/layout/BaseLayout";

export default function LocaleLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  return <BaseLayout locale={locale}>{children}</BaseLayout>;
}
