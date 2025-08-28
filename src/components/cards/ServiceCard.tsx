import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";

export type Service = {
  accent: string;
  color: string;
  icon: IconProp;
  iconColor: string;
  borderColor: string;
  title: string;
  description: string;
  features?: string[];
}

interface ServiceCardProps {
  index: React.Key;
  service: Service
}

export default function ServiceCard({
  index,
  service,
}: ServiceCardProps) {
  return (
    <Card
      key={index}
      className="rounded shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group overflow-hidden relative bg-gradient-to-br from-background to-muted/30"
    >
      {/* Decorative corner element */}
      <div className={`absolute top-0 right-0 w-20 h-20 ${service.accent} rounded-bl-3xl opacity-50`}></div>

      <CardHeader className="text-center pb-6 pt-8 relative z-10">
        <div
          className={`w-20 h-20 rounded-2xl border-2 ${service.borderColor} ${service.color} flex items-center justify-center text-3xl mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300 text-white`}
        >
          <FontAwesomeIcon
            icon={service.icon}
            fixedWidth
            className={`text-4xl ${service.iconColor}`}
          />
        </div>
        <CardTitle className="text-2xl font-bold text-balance mb-3 group-hover:text-primary transition-colors">
          <h3>
            {service.title}
          </h3>
        </CardTitle>
        <CardDescription className="text-base leading-relaxed text-muted-foreground">
          {service.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="px-6 pb-8">
        {/* Feature tags */}
        <div className="flex flex-wrap gap-2 justify-center mb-6">
          {service.features && service.features.map((feature, featureIndex) => (
            <Badge
              key={featureIndex}
              variant="outline"
            >
              {feature}
            </Badge>
          ))}
        </div>

        {/* Call to action */}
        {/* <div className="text-center">
          <Button
            variant="ghost"
            className="rounded-full px-6 py-2 text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-all group-hover:bg-primary/10"
          >
            Learn More →
          </Button>
        </div> */}
      </CardContent>
    </Card>
  );
}