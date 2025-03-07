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
    <div className="group w-full transition-transform delay-75 duration-200 hover:-translate-y-3">
      <div className="border-accent h-full rounded-lg border bg-white p-6 shadow-md transition-shadow delay-75 duration-200 group-hover:shadow-xl">
        <FontAwesomeIcon
          icon={icon}
          className={`pb-3 text-4xl ${iconColor}`}
          fixedWidth
        />

        <h3 className="title-font mb-2 text-lg font-medium text-gray-900">
          {title}
        </h3>
        <p className="text-base leading-relaxed">{children}</p>
      </div>
    </div>
  );
}
