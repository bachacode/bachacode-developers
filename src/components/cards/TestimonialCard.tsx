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
    <Card className="gap-3 bg-white relative rounded shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
      <CardContent className="pt-2">
        <div className="w-10/12">
          <p className="leading-relaxed">{testimony}</p>
        </div>
        <FontAwesomeIcon
          fixedWidth
          className="absolute top-4 right-4 text-5xl text-accent opacity-70 pb-1.5"
          icon={faQuoteRight}
        />
      </CardContent>
      <CardFooter className="flex flex-col items-start space-y-2">
        <span className="w-full border-t-3 border-accent opacity-50"></span>
        <div className="flex flex-col">
          <span className="title-font font-medium">{name}</span>
          <span className="text-sm text-muted-foreground">
            {profession}
          </span>
        </div>
      </CardFooter>
    </Card>
  );
}
