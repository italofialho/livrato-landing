"use client";
import CountUp from "react-countup";

import { AnimatedNumberProps } from "./interface";

export function AnimatedNumber(props: Readonly<AnimatedNumberProps>) {
  return (
    <CountUp
      start={props.$startValue}
      end={props.$value}
      duration={2}
      prefix={props.$prefix}
      suffix={props.$suffix}
      startOnMount
    />
  );
}
