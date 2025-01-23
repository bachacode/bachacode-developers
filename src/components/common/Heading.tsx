import React from "react";

interface HeadingProps {
  title: string;
  subtitle?: string;
  id: string;
}

export default function Heading({ title, subtitle, id }: HeadingProps) {
  return (
    <div className="flex flex-col items-center space-y-2 px-8 pb-6 text-center md:px-6 lg:px-0">
      <h2 id={id} className="text-4xl font-semibold uppercase text-accent">
        {title}
      </h2>
      {subtitle && <p className="text-xl font-extralight">{subtitle}</p>}
      <div className="w-12 border-t-2 border-primary pb-4"></div>
    </div>
  );
}
