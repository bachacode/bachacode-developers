"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
} from "../ui/dropdown";
import { faChevronDown, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { usePathname, useRouter } from "@/i18n/navigation";
import { useParams } from "next/navigation";

export default function LanguageSwitcher({
  currentLocale,
}: {
  currentLocale: string;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const params = useParams();

  const changeLanguage = (locale: string) => {
    router.replace(
      // @ts-expect-error -- TypeScript will validate that only known `params`
      // are used in combination with a given `pathname`. Since the two will
      // always match for the current route, we can skip runtime checks.
      { pathname, params },
      { locale },
    );
  };

  const locales = [
    { locale: "es", label: "Español" },
    { locale: "en", label: "English" },
  ];

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger className="flex cursor-pointer items-center space-x-1 p-1">
        <FontAwesomeIcon icon={faGlobe} className="pr-0.5"></FontAwesomeIcon>
        <span>{currentLocale.toUpperCase()}</span>
        <FontAwesomeIcon
          icon={faChevronDown}
          fixedWidth
          className="text-xs"
        ></FontAwesomeIcon>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {locales.map((locale) => (
          <DropdownMenuCheckboxItem
            key={locale.locale}
            checked={currentLocale == locale.locale}
            disabled={currentLocale == locale.locale}
            className="cursor-pointer"
            onClick={() => {
              changeLanguage(locale.locale);
            }}
          >
            {locale.label}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
