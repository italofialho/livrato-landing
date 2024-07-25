"use client";

import styled from "styled-components";

import { colors } from "@/const/colors";

import { TextProps } from "./interface";

export const TextStyled = styled.span<Omit<TextProps, "children">>((props) => ({
  textTransform: props.$transform,
  color: colors[props.$color ?? "white"],
  margin: props.$margin,
  padding: props.$padding,
  fontSize: props.$size,
  fontWeight: props.$weight,
  fontStyle: props.$fontStyle,
  lineHeight: props.$lineHeight,
  letterSpacing: props.$letterSpacing,
  textAlign: props.$align,
}));
