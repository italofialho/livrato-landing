"use client";

import { colors } from "@/const/colors";
import styled, { keyframes } from "styled-components";

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(5px);
  }
  60% {
    transform: translateY(15px);
  }
`

export const Background = styled.div({
  backgroundColor: colors.deepJungleGreen,
  borderRadius: 24,
  display: "flex",
  flexDirection: "column",
  alignContent: "center",
  position: "relative",
});

export const ImagesContainer = styled.div({
  position: "absolute",
  width: 276,
});

export const DetailContainer = styled.div({
  position: "absolute",
  bottom: -13,
});

export const BackgroundImage = styled.div({
  position: "absolute",
  display: 'none'
});

export const ArrowImage = styled.div`
  position: absolute;
  bottom: -13px;
  right: calc(50% - 5px);
  animation: ${bounce} 4s linear infinite;
`;
