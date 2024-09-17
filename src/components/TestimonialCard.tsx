import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteRight } from "@fortawesome/free-solid-svg-icons";

interface TestimonialCardProps {
  testimony: string;
  name: string;
  profession: string;
}

export default function TestimonialCard({
  testimony,
  name,
  profession,
}: TestimonialCardProps) {
  return (
    <div className="p-4 md:w-1/2 w-full">
      <div className="h-full bg-white p-8 rounded">
        <FontAwesomeIcon
          className="w-8 h-8 pb-1.5 text-accent"
          icon={faQuoteRight}
        />
        <p className="leading-relaxed mb-6">{testimony}</p>
        <a className="inline-flex items-center">
          <span className="flex-grow flex flex-col">
            <span className="title-font font-medium text-gray-900">{name}</span>
            <span className="text-gray-500 text-sm">{profession}</span>
          </span>
        </a>
      </div>
    </div>
  );
}
