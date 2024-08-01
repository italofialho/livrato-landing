"use client";

import styled from "styled-components";

import { colors } from "@/const/colors";

export const Background = styled.div({
  backgroundColor: colors.whiteSmoke,
  position: "relative",
});

export const Simulator = styled.div({
  backgroundColor: colors.richBlack,
  padding: 48,
  borderRadius: 6,
});

export const Form = styled.form({
  display: "flex",
  flexDirection: "column",
  gap: 16,
});

export const InputContainer = styled.div({
  display: "flex",
  flexDirection: "column",
});

export const SimulatorContainer = styled.div({});

export const SimulatorImages = styled.div({
  position: "absolute",
  width: "100%",
  height: "100%",

  display: "flex",
  flexDirection: "column",
  gap: 16,
});

export const PuzzleImage = styled.div<{ image: string; active: boolean }>(
  (props) => ({
    borderRadius: 6,

    width: 200,
    height: 138,

    background: props.active
      ? `url(${props.image}) lightgray 50% / cover no-repeat`
      : `linear-gradient(0deg, rgba(255, 255, 255, 0.50) 0%, rgba(255, 255, 255, 0.50) 100%), url(${props.image}) lightgray 50% / cover no-repeat`,
    boxShadow: props.active
      ? `0px 0px 10px 0px rgba(90, 90, 90, 0.50)`
      : "unset",
  })
);

export const PuzzleRow = styled.div({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
});

export const PuzzleRight = styled.div({
  display: "flex",
  flexDirection: "row",
  gap: 16,
});

export const PuzzleLeft = styled.div({
  display: "flex",
  flexDirection: "row",
  gap: 16,
});
