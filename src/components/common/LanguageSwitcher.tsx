"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
} from "../ui/dropdown";
import { faChevronDown, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { usePathname, useRouter } from "@/i18n/routing";
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
      <DropdownMenuTrigger className="flex items-center space-x-1.5 p-1">
        <FontAwesomeIcon icon={faGlobe}></FontAwesomeIcon>
        <span>{currentLocale.toUpperCase()}</span>
        <FontAwesomeIcon
          icon={faChevronDown}
          className="h-3 w-3 pl-1"
        ></FontAwesomeIcon>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-background">
        {locales.map((locale) => (
          <DropdownMenuCheckboxItem
            key={locale.locale}
            checked={currentLocale == locale.locale}
            disabled={currentLocale == locale.locale}
            className="cursor-pointer focus:bg-gray-200"
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
