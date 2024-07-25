"use client";

import styled from "styled-components";

import { colors } from "@/const/colors";

export const Background = styled.div({
  backgroundColor: colors.whiteSmoke,
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
