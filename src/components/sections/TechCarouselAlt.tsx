"use client";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faJs,
  faLaravel,
  faPhp,
  faReact,
  faVuejs,
  faWordpress,
  faGolang,
} from "@fortawesome/free-brands-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import Autoplay from "embla-carousel-autoplay";

function TechCarouselItem({
  icon,
  title,
}: Readonly<{ icon: IconProp; title: string; className?: string }>) {
  return (
    <CarouselItem className="group text-primary-foreground flex basis-1/2 flex-col items-center md:basis-1/3">
      <FontAwesomeIcon
        fixedWidth
        className="py-1.5 text-6xl transition-transform duration-300 group-hover:scale-105"
        icon={icon}
      />
      <span className="transition-transform duration-300 group-hover:scale-105">
        {title}
      </span>
    </CarouselItem>
  );
}

export default function TechCarouselAlt() {
  return (
    <Carousel
      opts={{
        align: "center",
        loop: true,
        watchDrag: true,
      }}
      plugins={[
        Autoplay({
          delay: 2000,
          stopOnInteraction: false,
          stopOnMouseEnter: true,
        }),
      ]}
    >
      <CarouselContent>
        {[
          { icon: faLaravel, title: "Laravel" },
          { icon: faReact, title: "React.Js" },
          { icon: faVuejs, title: "Vue.Js" },
          { icon: faWordpress, title: "WordPress" },
          { icon: faJs, title: "JavaScript" },
          { icon: faPhp, title: "PHP" },
          { icon: faGolang, title: "Golang" },
        ].map((tech, index) => (
          <TechCarouselItem key={index} icon={tech.icon} title={tech.title} />
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-4" />
      <CarouselNext className="right-4" />
    </Carousel>
  );
}
