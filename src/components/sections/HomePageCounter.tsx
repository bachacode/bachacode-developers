"use client";
import React from "react";
import CountUp from "react-countup";

interface HomePageCounterProps {
  projects: string;
  clients: string;
  experience: string;
}

export default function HomePageCounter({
  projects,
  clients,
  experience,
}: HomePageCounterProps) {
  return (
    <div className="bg-gradient-to-br from-primary/5 to-secondary/5 border-2 border-primary/20 text-foreground w-full">
      <div className="container mx-auto px-5 py-6 flex justify-center">
        <div className="flex w-3/4 flex-wrap justify-between text-center">
          <div className="w-1/2 p-4 sm:w-1/3">
            <span className="text-3xl font-medium sm:text-4xl text-primary">
              <CountUp
                suffix=" +"
                start={0}
                end={15}
                enableScrollSpy
                scrollSpyOnce
                duration={4}
              >
                {({ countUpRef }) => <span ref={countUpRef} />}
              </CountUp>
            </span>
            <p className="leading-relaxed">{projects}</p>
          </div>
          <div className="w-1/2 p-4 sm:w-1/3">
            <span className="text-3xl font-medium sm:text-4xl text-primary">
              <CountUp
                suffix=" +"
                start={0}
                end={10}
                enableScrollSpy
                scrollSpyOnce
                duration={3}
              >
                {({ countUpRef }) => <span ref={countUpRef} />}
              </CountUp>
            </span>
            <p className="leading-relaxed">{clients}</p>
          </div>
          <div className="w-1/2 p-4 sm:w-1/3">
            <span className="text-3xl font-medium sm:text-4xl text-primary">
              <CountUp
                suffix=" +"
                start={0}
                end={4}
                enableScrollSpy
                scrollSpyOnce
                duration={2}
              >
                {({ countUpRef }) => <span ref={countUpRef} />}
              </CountUp>
            </span>
            <p className="leading-relaxed">{experience}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
