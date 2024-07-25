"use client";
import { useEffect, useState } from "react";

import CountUp from "react-countup";

import { AnimatedNumberProps } from "./interface";

export function AnimatedNumber(props: Readonly<AnimatedNumberProps>) {
  const [isServer, setIsServer] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsServer(false);
    }, 1_000);
  }, []);

  if (typeof window === "undefined" || isServer)
    return (
      <>
        {props.$prefix}
        {props.$startValue ?? props.$value}
        {props.$suffix}
      </>
    );

  return <AnimatedNumberClientSide {...props} />;
}

function AnimatedNumberClientSide(props: Readonly<AnimatedNumberProps>) {
  return (
    <CountUp
      start={props.$startValue}
      end={props.$value}
      duration={props.$duration ?? 2}
      prefix={props.$prefix}
      suffix={props.$suffix}
      formattingFn={props.$format}
      onEnd={props.$onEnd}
      delay={props.$delay}
    />
  );
}
