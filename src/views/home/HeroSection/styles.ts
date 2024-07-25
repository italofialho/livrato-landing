"use client";

import styled from "styled-components";

import { colors } from "@/const/colors";

export const Container = styled.div({
  background: `linear-gradient(270deg, ${colors.darkVanilla} 30.08%, ${colors.cultured} 30.08%)`,
});

export const Content = styled.div({
  margin: "0 auto",
  padding: "60px 0",
});

export const TextSection = styled.div({
  display: "flex",
  flexDirection: "column",
});
