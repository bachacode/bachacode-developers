"use client";
import React from "react";
import CountUp from "react-countup";

export default function HomePageCounter() {
  return (
    <div className="text-white bg-accent body-font">
      <div className="container px-5 py-12 mx-auto">
        <div className="flex flex-wrap -m-4 text-center justify-center w-full">
          <div className="p-4 sm:w-1/3 w-1/2">
            <span className="title-font font-medium sm:text-4xl text-3xl text-white">
              +
              <CountUp
                start={0}
                end={15}
                enableScrollSpy
                scrollSpyOnce
                duration={4}
              />
            </span>
            <p className="leading-relaxed">Proyectos completados</p>
          </div>
          <div className="p-4 sm:w-1/3 w-1/2">
            <span className="title-font font-medium sm:text-4xl text-3xl text-white">
              +
              <CountUp
                start={0}
                end={10}
                enableScrollSpy
                scrollSpyOnce
                duration={3}
              />
            </span>
            <p className="leading-relaxed">Clientes satisfechos</p>
          </div>
          <div className="p-4 sm:w-1/3 w-1/2">
            <span className="title-font font-medium sm:text-4xl text-3xl text-white">
              +
              <CountUp
                start={0}
                end={4}
                enableScrollSpy
                scrollSpyOnce
                duration={2}
              />
            </span>
            <p className="leading-relaxed">Años de experiencia</p>
          </div>
        </div>
      </div>
    </div>
  );
}
