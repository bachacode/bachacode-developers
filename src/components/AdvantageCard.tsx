import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface AdvantageCardProps {
  icon: IconProp;
  title: string;
  children: React.ReactNode;
  iconColor: string;
}

export default function AdvantageCard({
  icon,
  title,
  children,
  iconColor,
}: AdvantageCardProps) {
  return (
    <div className="w-full flex flex-col min-h-40 space-y-3 md:space-y-0 md:flex-row items-center bg-white shadow-md px-3 py-6 border-2 border-black rounded-md transition-all duration-200 hover:shadow-lg hover:-translate-y-2 hover:scale-105">
      <FontAwesomeIcon
        icon={icon}
        className={`h-auto w-full max-w-14 pr-3 ${iconColor}`}
      />
      <div className="px-1.5 flex-grow">
        <h3 className="text-lg text-gray-900 font-medium title-font">
          {title}
        </h3>
        <p className="leading-relaxed text-base">{children}</p>
      </div>
      <FontAwesomeIcon
        icon={faCheck}
        className="hidden md:block h-auto w-full max-w-8 text-green-600"
      />
    </div>
  );
}
