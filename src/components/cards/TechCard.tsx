import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface TechCardProps {
  icon: IconProp;
  className: string;
  title: string;
}

export default function TechCard({ icon, className, title }: TechCardProps) {
  return (
    <div className="group flex h-32 w-32 flex-col items-center justify-center rounded-md border border-accent shadow-md">
      <FontAwesomeIcon
        icon={icon}
        className={`h-20 w-20 text-gray-600 transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-105 ${className}`}
        title={title}
      ></FontAwesomeIcon>
    </div>
  );
}
