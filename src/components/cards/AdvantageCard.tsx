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
    <div className="flex min-h-40 w-full flex-col items-center space-y-3 rounded-md border-2 border-black bg-white px-3 py-6 shadow-md transition-all duration-200 hover:-translate-y-2 hover:scale-105 hover:shadow-lg md:flex-row md:space-y-0">
      <FontAwesomeIcon
        icon={icon}
        className={`h-auto w-full max-w-14 pr-3 ${iconColor}`}
      />
      <div className="flex-grow px-1.5">
        <h3 className="title-font text-lg font-medium text-gray-900">
          {title}
        </h3>
        <p className="text-base leading-relaxed">{children}</p>
      </div>
      <FontAwesomeIcon
        icon={faCheck}
        className="hidden h-auto w-full max-w-8 text-green-600 md:block"
      />
    </div>
  );
}
