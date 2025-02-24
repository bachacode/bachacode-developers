"use client";
import Image from "next/image";
import { Link, usePathname } from "@/i18n/routing";
import React, { useState } from "react";
import BachacodeLogoRemoveBg from "@/assets/images/bachacode-removebg.png";
import MenuLink from "../common/MenuLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faChevronDown,
  faGlobe,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuCheckboxItem,
} from "../ui/dropdown";

const getLocaleText = (locale: string) => {
  const localesText: Record<string, string> = {
    es: "Español",
    en: "English",
  };

  return localesText[locale] || "Unknown";
};

export default function MainHeader({ locale }: { locale: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const localeText = getLocaleText(locale);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

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
          <div className="flex flex-row-reverse gap-4">
            <button
              onClick={handleClick}
              data-collapse-toggle="navbar-default"
              type="button"
              className="mr-8 inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 lg:mr-0 lg:hidden"
              aria-controls="navbar-default"
              aria-expanded="false"
            >
              <span className="sr-only">Abrir menu principal</span>
              {isOpen ? (
                <FontAwesomeIcon
                  icon={faX}
                  className="h-5 w-5 p-3"
                ></FontAwesomeIcon>
              ) : (
                <FontAwesomeIcon
                  icon={faBars}
                  className="h-8 w-8"
                ></FontAwesomeIcon>
              )}
            </button>

            <DropdownMenu modal={false}>
              <DropdownMenuTrigger className="flex items-center space-x-1.5 p-1">
                <FontAwesomeIcon icon={faGlobe}></FontAwesomeIcon>
                <span>{localeText}</span>
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className="h-3 w-3 pl-1"
                ></FontAwesomeIcon>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-background">
                <DropdownMenuCheckboxItem
                  checked={locale == "es"}
                  disabled={locale == "es"}
                  className="focus:bg-gray-200"
                >
                  <Link href={pathname} locale="es">
                    Español
                  </Link>
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                  checked={locale == "en"}
                  disabled={locale == "en"}
                  className="focus:bg-gray-200"
                >
                  <Link href={pathname} locale="en">
                    English
                  </Link>
                </DropdownMenuCheckboxItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div
            className={`${isOpen ? "" : "hidden"} absolute left-0 top-16 w-full lg:static lg:block lg:w-auto`}
            id="navbar-default"
          >
            <ul className="flex w-full flex-col items-center space-y-6 bg-white py-6 font-medium shadow-md lg:mt-0 lg:flex-row lg:space-x-8 lg:space-y-0 lg:p-0 lg:shadow-none">
              <MenuLink href="/" label="Inicio" />
              <MenuLink href="/sobre-nosotros" label="Sobre Nosotros" />
              <MenuLink href="/servicios" label="Servicios" />
              <MenuLink href="/portafolio" label="Portafolio" />
              <MenuLink href="/contacto" label="Contacto" />
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
