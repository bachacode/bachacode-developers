"use client";

import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function NavMenu({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
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
          <FontAwesomeIcon icon={faX} className="h-5 w-5 p-3"></FontAwesomeIcon>
        ) : (
          <FontAwesomeIcon icon={faBars} className="h-8 w-8"></FontAwesomeIcon>
        )}
      </button>

      <div
        className={`${isOpen ? "" : "hidden"} absolute left-0 top-16 w-full lg:static lg:block lg:w-auto`}
        id="navbar-default"
      >
        <ul className="flex w-full flex-col items-center space-y-6 bg-white py-6 font-medium shadow-md lg:mt-0 lg:flex-row lg:space-x-8 lg:space-y-0 lg:p-0 lg:shadow-none">
          {children}
        </ul>
      </div>
    </div>
  );
}
