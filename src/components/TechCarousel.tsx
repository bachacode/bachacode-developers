"use client";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faJs,
  faLaravel,
  faPhp,
  faReact,
  faVuejs,
  faWordpress,
} from "@fortawesome/free-brands-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import Autoscroll from "embla-carousel-auto-scroll";
import { randomInt } from "crypto";

function TechCarouselItem({
  icon,
  title,
}: Readonly<{ icon: IconProp; title: string }>) {
  return (
    <CarouselItem className="group basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 flex flex-col items-center">
      <FontAwesomeIcon
        className="w-28 h-28 py-1.5 text-gray-500 transition-all duration-300 group-hover:text-primary group-hover:scale-105"
        icon={icon}
      />
      <h5 className="text-gray-500 transition-all duration-300 group-hover:text-primary group-hover:scale-105">
        {title}
      </h5>
    </CarouselItem>
  );
}

export default function TechCarousel({
  directionAS = "forward",
  directionOpt = "ltr",
  carouselIndex = 0,
}: Readonly<{
  directionAS?: "forward" | "backward";
  directionOpt?: "ltr" | "rtl";
  carouselIndex?: number;
}>) {
  return (
    <Carousel
      className="w-full pb-3"
      opts={{
        align: "center",
        loop: true,
        watchDrag: false,
        direction: directionOpt,
        startIndex: carouselIndex,
      }}
      plugins={[
        Autoscroll({
          startDelay: 0,
          stopOnInteraction: false,
          stopOnMouseEnter: true,
          speed: 1.2,
          direction: directionAS,
        }),
      ]}
    >
      <CarouselContent>
        <TechCarouselItem icon={faLaravel} title="Laravel" />
        <TechCarouselItem icon={faReact} title="React.Js" />
        <TechCarouselItem icon={faVuejs} title="Vue.Js" />
        <TechCarouselItem icon={faWordpress} title="WordPress" />
        <TechCarouselItem icon={faJs} title="JavaScript" />
        <TechCarouselItem icon={faPhp} title="PHP" />
      </CarouselContent>
    </Carousel>
  );
}
