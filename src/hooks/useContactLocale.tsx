import { useTranslations } from "next-intl";

export default function useContactLocale() {
  const t = useTranslations("useContactLocale");

  return t;
}
