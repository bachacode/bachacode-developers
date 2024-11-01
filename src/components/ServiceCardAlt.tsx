import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
interface ServiceCardProps {
  icon: IconProp;
  title: string;
  children: React.ReactNode;
  iconColor: string;
}

export default function ServiceCardAlt({
  icon,
  title,
  children,
  iconColor,
}: ServiceCardProps) {
  return (
    <div className="group w-full md:w-1/2 lg:w-1/4 p-4 transition-transform duration-200 delay-75 hover:-translate-y-3">
      <div className="border border-accent h-full bg-white transition-shadow duration-200 delay-75 shadow-md group-hover:shadow-xl p-6 rounded-lg">
        <FontAwesomeIcon
          icon={icon}
          className={`w-14 h-14 pb-3 ${iconColor}`}
        />

        <h3 className="text-lg text-gray-900 font-medium title-font mb-2">
          {title}
        </h3>
        <p className="leading-relaxed text-base">{children}</p>
      </div>
    </div>
  );
}
