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
      <nav className="mx-auto flex w-full max-w-screen-xl flex-wrap items-center justify-between py-4 lg:flex-nowrap lg:px-6">
        <Link href="/" className="flex items-center space-x-2 pl-8 lg:pl-0">
          <Image
            src={BachacodeLogoRemoveBg}
            alt="Header bachacode logo"
            style={{ height: "auto", width: "180px" }}
          />
        </Link>

        <button
          onClick={handleClick}
          data-collapse-toggle="navbar-default"
          type="button"
          className="mr-8 inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 lg:mr-0 lg:hidden"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
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

        <div
          className={`${isOpen ? "" : "hidden"} w-full lg:block lg:w-auto`}
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
      </nav>
    </header>
  );
}

// <nav class="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
//   <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
//   <a href="https://flowbite.com/" class="flex items-center space-x-3 rtl:space-x-reverse">
//       <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo">
//       <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
//   </a>
//   <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
//       <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get started</button>
//       <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
//         <span class="sr-only">Open main menu</span>
//         <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
//             <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
//         </svg>
//     </button>
//   </div>
//   <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
//     <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
//       <li>
//         <a href="#" class="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</a>
//       </li>
//       <li>
//         <a href="#" class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
//       </li>
//       <li>
//         <a href="#" class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
//       </li>
//       <li>
//         <a href="#" class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
//       </li>
//     </ul>
//   </div>
//   </div>
// </nav>
