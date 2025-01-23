"use client";
import React from "react";
import CountUp from "react-countup";

export default function HomePageCounter() {
  return (
    <div className="body-font bg-accent text-white">
      <div className="container mx-auto px-5 py-12">
        <div className="-m-4 flex w-full flex-wrap justify-center text-center">
          <div className="w-1/2 p-4 sm:w-1/3">
            <span className="title-font text-3xl font-medium text-white sm:text-4xl">
              <CountUp
                suffix="+"
                start={0}
                end={15}
                enableScrollSpy
                scrollSpyOnce
                duration={4}
              >
                {({ countUpRef }) => <span ref={countUpRef} />}
              </CountUp>
            </span>
            <p className="leading-relaxed">Proyectos completados</p>
          </div>
          <div className="w-1/2 p-4 sm:w-1/3">
            <span className="title-font text-3xl font-medium text-white sm:text-4xl">
              <CountUp
                suffix="+"
                start={0}
                end={10}
                enableScrollSpy
                scrollSpyOnce
                duration={3}
              >
                {({ countUpRef }) => <span ref={countUpRef} />}
              </CountUp>
            </span>
            <p className="leading-relaxed">Clientes satisfechos</p>
          </div>
          <div className="w-1/2 p-4 sm:w-1/3">
            <span className="title-font text-3xl font-medium text-white sm:text-4xl">
              <CountUp
                suffix="+"
                start={0}
                end={4}
                enableScrollSpy
                scrollSpyOnce
                duration={2}
              >
                {({ countUpRef }) => <span ref={countUpRef} />}
              </CountUp>
            </span>
            <p className="leading-relaxed">Años de experiencia</p>
          </div>
        </div>
      </div>
    </div>
  );
}
