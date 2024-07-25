"use client";

import React from "react";

import TextTransition, { presets } from "react-text-transition";

import { AnimatedTextProps } from "./interface";

const ANIMATION_DELAY = 3_000;
const ANIMATION_START_DELAY = 1_000;

export function AnimatedText(props: Readonly<AnimatedTextProps>) {
  const currentWord = props.words[0];

  const [isServer, setIsServer] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setIsServer(false);
    }, ANIMATION_START_DELAY);
  }, []);

  if (typeof window === "undefined" || isServer) return <>{currentWord}</>;

  return <AnimatedTextClientSide {...props} />;
}

function AnimatedTextClientSide(props: Readonly<AnimatedTextProps>) {
  const [index, setIndex] = React.useState(0);
  const currentWord = props.words[index];

  const isFirst = index === 0;

  React.useEffect(() => {
    const intervalId = setInterval(
      () => {
        setIndex((index) => {
          let nextIndex = index + 1;
          if (nextIndex > props.words.length - 1) nextIndex = 0;

          return nextIndex;
        });
      },
      isFirst ? ANIMATION_DELAY - ANIMATION_START_DELAY : ANIMATION_DELAY
    );
    return () => clearTimeout(intervalId);
  }, [isFirst, props.words.length]);

  return (
    <TextTransition springConfig={presets.wobbly} inline>
      {currentWord}
    </TextTransition>
  );
}
