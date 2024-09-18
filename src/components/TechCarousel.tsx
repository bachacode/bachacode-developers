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

function TechCarouselItem({
  icon,
  title,
  className = "group-hover:text-primary",
}: Readonly<{ icon: IconProp; title: string; className?: string }>) {
  return (
    <CarouselItem className="group basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 flex flex-col items-center">
      <FontAwesomeIcon
        className={`w-28 h-28 py-1.5 text-gray-500 transition-all duration-300 group-hover:scale-105 ${className}`}
        icon={icon}
      />
      <h5 className="text-gray-500 transition-all duration-300 group-hover:text-accent group-hover:scale-105">
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
        <TechCarouselItem
          icon={faLaravel}
          title="Laravel"
          className="group-hover:text-red-600"
        />
        <TechCarouselItem
          icon={faReact}
          title="React.Js"
          className="group-hover:text-blue-500"
        />
        <TechCarouselItem
          icon={faVuejs}
          title="Vue.Js"
          className="group-hover:text-emerald-500"
        />
        <TechCarouselItem
          icon={faWordpress}
          title="WordPress"
          className="group-hover:text-blue-500"
        />
        <TechCarouselItem
          icon={faJs}
          title="JavaScript"
          className="group-hover:text-yellow-500"
        />
        <TechCarouselItem
          icon={faPhp}
          title="PHP"
          className="group-hover:text-indigo-500"
        />
      </CarouselContent>
    </Carousel>
  );
}
