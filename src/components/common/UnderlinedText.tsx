import React from "react";

interface UnderlinedTextProps {
  children: React.ReactNode;
  lineColor?: string;
  textColor?: string;
}

const UnderlinedText = ({
  children,
  lineColor = "text-secondary",
  textColor = "text-primary",
}: UnderlinedTextProps) => {
  return (
    <span className="relative inline-block">
      <span className={textColor}>{children}</span>
      <svg
        className={`absolute h-3 w-full ${lineColor}`}
        style={{ bottom: "-0.5rem" }}
        viewBox="0 0 100 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M2 6C25 2 75 10 98 6"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
};

export default UnderlinedText;
