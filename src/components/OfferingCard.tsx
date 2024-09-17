import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface OfferingCardProps {
  title: string;
  description: string;
  icon: IconProp;
}

export default function OfferingCard({
  title,
  description,
  icon,
}: OfferingCardProps) {
  return (
    <div className="p-4 md:w-1/2 flex">
      <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-teal-blue-accent-100 mb-4 flex-shrink-0">
        <FontAwesomeIcon className="w-6 h-6 text-accent" icon={icon} />
      </div>
      <div className="flex-grow pl-6">
        <h3 className="text-gray-900 text-lg title-font font-medium mb-2">
          {title}
        </h3>
        <p className="leading-relaxed text-base">{description}</p>
      </div>
    </div>
  );
}
