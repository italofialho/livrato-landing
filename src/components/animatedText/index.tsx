"use client";

import TextTransition, { presets } from "react-text-transition";
import React from "react";
import { AnimatedTextProps } from "./interface";

export function AnimatedText(props: Readonly<AnimatedTextProps>) {
  const [index, setIndex] = React.useState(0);
  const currentWord = props.words[index];

  React.useEffect(() => {
    const intervalId = setInterval(
      () =>
        setIndex((index) => {
          if (typeof window === "undefined") return 0;

          let nextIndex = index + 1;
          if (nextIndex > props.words.length - 1) nextIndex = 0;

          return nextIndex;
        }),
      3_000
    );
    return () => clearTimeout(intervalId);
  }, []);

  if (typeof window === "undefined") return currentWord;

  return (
    <TextTransition springConfig={presets.stiff} inline delay={3}>
      {currentWord}
    </TextTransition>
  );
}
