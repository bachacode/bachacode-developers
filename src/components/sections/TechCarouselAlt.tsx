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
import Autoplay from "embla-carousel-autoplay"

function TechCarouselItem({
  icon,
  title,
}: Readonly<{ icon: IconProp; title: string; className?: string }>) {
  return (
    <CarouselItem className="group flex basis-1/2 md:basis-1/3 flex-col items-center">
      <FontAwesomeIcon
        fixedWidth
        className="text-primary py-1.5 text-6xl transition-transform duration-300 group-hover:scale-105"
        icon={icon}
      />
      <span className="text-primary transition-transform duration-300 group-hover:scale-105">
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
          stopOnMouseEnter: true
        })
      ]}
    >
      <CarouselContent>
        <TechCarouselItem
          icon={faLaravel}
          title="Laravel"
        />
        <TechCarouselItem
          icon={faReact}
          title="React.Js"
        />
        <TechCarouselItem
          icon={faVuejs}
          title="Vue.Js"
        />
        <TechCarouselItem
          icon={faWordpress}
          title="WordPress"
        />
        <TechCarouselItem
          icon={faJs}
          title="JavaScript"
        />
        <TechCarouselItem
          icon={faPhp}
          title="PHP"
        />
        <TechCarouselItem
          icon={faGolang}
          title="Golang"
        />
      </CarouselContent>
      <CarouselPrevious className="left-4" />
      <CarouselNext className="right-4" />
    </Carousel>
  );
}
