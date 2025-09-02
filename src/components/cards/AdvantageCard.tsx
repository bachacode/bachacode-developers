import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { CardContent, CardHeader } from "../ui/card";
import { Card } from "./Card";
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
    <Card className="group relative justify-center transition-all hover:-translate-y-2 hover:shadow-2xl">
      <CardHeader className="flex items-start space-x-1.5 text-2xl">
        <div>
          <FontAwesomeIcon
            icon={icon}
            className={iconColor}
          />
        </div>
        <h3 className="title-font font-medium">{title}</h3>
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
