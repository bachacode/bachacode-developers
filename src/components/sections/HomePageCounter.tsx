"use client";
import React from "react";
import CountUp from "react-countup";

interface CounterProps {
  text: string;
  start: number;
  end: number;
  duration: number;
  delay?: number;
}

interface HomePageCounterProps {
  projects: string;
  clients: string;
  experience: string;
}

function Counter({ text, start, end, duration, delay = 0 }: CounterProps) {
  const [loading, setLoading] = React.useState(false);

  const onStart = () => {
    setLoading(true);
  };

  const onEnd = () => {
    setLoading(false);
  };

  const containerProps = {
    "aria-busy": loading,
  };
  return (
    <div className="w-1/2 p-4 sm:w-1/3">
      <span className="text-primary text-3xl font-medium sm:text-4xl">
        <CountUp
          suffix=" +"
          start={start}
          end={end}
          startOnMount
          delay={delay}
          onStart={onStart}
          onEnd={onEnd}
          duration={duration}
          containerProps={containerProps}
        />
        <div id="counter" aria-busy={loading} />
      </span>
      <p className="leading-relaxed">{text}</p>
    </div>
  );
}

export default function HomePageCounter({
  projects,
  clients,
  experience,
}: HomePageCounterProps) {
  return (
    <div className="from-primary/5 to-secondary/5 border-primary/20 text-foreground w-full border-2 bg-gradient-to-br">
      <div className="container mx-auto flex justify-center px-5 py-6">
        <div className="flex w-3/4 flex-wrap justify-between text-center">
          <Counter start={0} end={15} delay={0} duration={4} text={projects} />
          <Counter start={0} end={10} delay={0.2} duration={3} text={clients} />
          <Counter
            start={0}
            end={4}
            delay={0.4}
            duration={2}
            text={experience}
          />
        </div>
      </div>
    </div>
  );
}
