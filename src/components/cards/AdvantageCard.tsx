import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Card, CardContent, CardHeader } from "../ui/card";

interface AdvantageCardProps {
  icon: IconProp;
  title: string;
  children: React.ReactNode;
  iconColor: string;
}

export default function AdvantageCard({
  icon,
  title,
  children,
  iconColor,
}: AdvantageCardProps) {
  return (
    <Card className="group border-accent relative justify-center gap-3 rounded bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
      <CardHeader className="flex">
        <FontAwesomeIcon
          icon={icon}
          fixedWidth
          className={`pr-1.5 text-2xl ${iconColor}`}
        />
        <h3 className="title-font text-2xl font-medium">{title}</h3>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground text-base leading-relaxed">
          {children}
        </p>
        {/*<FontAwesomeIcon
          icon={faCheck}
          className="hidden md:block relative text-9xl -right-4 bottom-0 text-green-600 opacity-35"
        />*/}
      </CardContent>
    </Card>
  );
}
