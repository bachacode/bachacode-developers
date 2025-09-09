import React from "react";
import Heading from "../common/Heading";

interface PageSectionWrapperProps {
  titleId: string;
  titleName: string | React.ReactNode;
  subtitle: string;
  altBackground?: boolean;
  fullWidth?: boolean;
  children: React.ReactNode;
}

export default function PageSectionWrapper({
  titleId,
  titleName,
  subtitle,
  altBackground = false,
  fullWidth = false,
  children,
}: PageSectionWrapperProps) {
  return (
    <div
      className={`flex w-full justify-center ${
        altBackground ? "bg-orange-primary-50" : ""
      }`}
    >
      <div
        className={`${fullWidth ? "w-full" : "container px-4"} flex flex-col items-center space-y-3 py-8`}
      >
        {/* Title*/}
        <Heading id={titleId} title={titleName} subtitle={subtitle} />
        {children}
      </div>
    </div>
  );
}
