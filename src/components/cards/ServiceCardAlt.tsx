import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
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
    <Card className="group transition-transform delay-75 gap-3 duration-200 hover:-translate-y-3 bg-white">
      <CardHeader className="py-2">
        <FontAwesomeIcon
          icon={icon}
          className={`pb-3 text-6xl ${iconColor}`}
          fixedWidth
        />

        <CardTitle className="text-2xl font-bold text-balance">
          <h3>{title}</h3>
        </CardTitle>
      </CardHeader>

      <CardContent>
        <p className="text-base leading-relaxed text-muted-foreground">{children}</p>
      </CardContent>
    </Card>
  );
}
