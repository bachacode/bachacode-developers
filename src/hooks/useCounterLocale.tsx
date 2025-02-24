import { useTranslations } from "next-intl";

export default function useCounterLocale() {
  const t = useTranslations("useCounterLocale");

  return t;
}
