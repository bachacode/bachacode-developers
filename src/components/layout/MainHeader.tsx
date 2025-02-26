import Image from "next/image";
import { Link } from "@/i18n/routing";
import React from "react";
import BachacodeLogoRemoveBg from "@/assets/images/bachacode-removebg.png";

import LanguageSwitcher from "../common/LanguageSwitcher";
import { MessageKeys, useLocale, useTranslations } from "next-intl";
import NavMenu from "../common/NavMenu";
import MenuLink from "../common/MenuLink";

export default function MainHeader() {
  const locale = useLocale();

  const t = useTranslations("links");
  const routes: {
    href: "/" | "/about-us" | "/services" | "/portfolio" | "/contact";
    label: MessageKeys<
      {
        home: string;
        "about-us": string;
        services: string;
        portfolio: string;
        contact: string;
      },
      "home" | "about-us" | "services" | "portfolio" | "contact"
    >;
  }[] = [
    {
      href: "/",
      label: "home",
    },
    {
      href: "/about-us",
      label: "about-us",
    },

    {
      href: "/services",
      label: "services",
    },
    {
      href: "/portfolio",
      label: "portfolio",
    },
    {
      href: "/contact",
      label: "contact",
    },
  ];
  return (
    <header className="fixed start-0 top-0 z-20 w-full border-b bg-white">
      <nav className="relative mx-auto flex w-full max-w-screen-xl flex-wrap items-center justify-between py-4 lg:flex-nowrap lg:px-6">
        <Link href="/" className="flex items-center space-x-2 pl-8 lg:pl-0">
          <Image
            src={BachacodeLogoRemoveBg}
            alt="Header bachacode logo"
            style={{ height: "auto", width: "180px" }}
          />
        </Link>

        <div className="flex flex-row items-center gap-8 lg:flex-row-reverse">
          <LanguageSwitcher currentLocale={locale}></LanguageSwitcher>

          <NavMenu>
            {routes.map((route) => (
              <MenuLink key={route.href} href={route.href}>
                {t(route.label)}
              </MenuLink>
            ))}
          </NavMenu>
        </div>
      </nav>
    </header>
  );
}
