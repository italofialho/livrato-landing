"use client";

import styled from "styled-components";

import { colors } from "@/const/colors";

import { ButtonProps } from "./interface";

export const Container = styled.button<Omit<ButtonProps, "children">>(
  ({ $color, ...props }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    backgroundColor: colors[$color],
    margin: props.$margin,
    padding: props.$padding,
    borderRadius: props.$borderRadius,

    transition: "opacity 0.5s",

    "&:hover": {
      cursor: "pointer",
      opacity: 0.6,
    },

    "&:disabled": {
      opacity: 0.4,
      cursor: "not-allowed",
      // background: `#BDBDBD`,
    },
  })
);
