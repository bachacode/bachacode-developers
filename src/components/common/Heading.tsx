import React from "react";

interface HeadingProps {
  title: string | React.ReactNode;
  subtitle?: string;
  id: string;
}

export default function Heading({ title, subtitle, id }: HeadingProps) {
  return (
    <div className="flex flex-col items-center space-y-2 px-8 pb-6 text-center md:px-6 lg:px-0">
      <h2 id={id} className="text-4xl font-semibold uppercase">
        {title}
      </h2>
      {subtitle && <p className="text-xl font-extralight">{subtitle}</p>}
    </div>
  );
}
