import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

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
    <Card className="relative gap-3 rounded bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
      <CardContent className="pt-2">
        <div className="w-10/12">
          <p className="leading-relaxed">{testimony}</p>
        </div>
        <FontAwesomeIcon
          fixedWidth
          className="text-accent absolute top-4 right-4 pb-1.5 text-5xl opacity-70"
          icon={faQuoteRight}
        />
      </CardContent>
      <CardFooter className="flex flex-col items-start space-y-2">
        <span className="border-accent w-full border-t-3 opacity-50"></span>
        <div className="flex flex-col">
          <span className="title-font font-medium">{name}</span>
          <span className="text-muted-foreground text-sm">{profession}</span>
        </div>
      </CardFooter>
    </Card>
  );
}
