import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { CardContent, CardHeader, CardTitle } from "../ui/card";
import { Card } from "./Card";

interface ServiceCardProps {
  icon: IconProp;
  title: string;
  children: React.ReactNode;
  iconColor: string;
}

export default function ServiceCardAlt({
  icon,
  title,
  children,
  iconColor,
}: ServiceCardProps) {
  return (
    <Card className="group" hoverable>
      <CardHeader className="py-2">
        <FontAwesomeIcon icon={icon} className={`pb-3 text-6xl ${iconColor}`} />

        <CardTitle className="text-2xl font-bold text-balance">
          <h3>{title}</h3>
        </CardTitle>
      </CardHeader>

      <CardContent>
        <p className="text-muted-foreground text-base leading-relaxed">
          {children}
        </p>
      </CardContent>
    </Card>
  );
}
