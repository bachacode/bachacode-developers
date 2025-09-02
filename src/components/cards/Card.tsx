import React from "react";
import { cn } from "@/lib/utils"; // shadcn utility for merging classes
import { Card as ShadcnCard } from "../ui/card";

interface CardWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverable?: boolean;
}

export function Card({
  hoverable = false,
  className,
  children,
  ...props
}: CardWrapperProps) {
  return (
    <ShadcnCard
      className={cn(
        "border-accent rounded-sm bg-white shadow-lg gap-3 duration-300", // your base styles
        hoverable && "transition-all hover:-translate-y-2 hover:shadow-xl",
        className
      )}
      {...props}
    >
      {children}
    </ShadcnCard>
  );
}