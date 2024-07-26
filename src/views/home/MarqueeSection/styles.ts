"use client";

import styled, { css } from "styled-components";

import { colors } from "@/const/colors";

const MarqueeMixin = css({
  width: "calc(100% + 10px)",
  padding: "16px 0px 16px 34px",
  display: "flex",
  alignItems: "center",
});

export const MarqueeContent = styled.div({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  whiteSpace: "nowrap",
});

export const MarqueePrimary = styled.div(() => [
  {
    backgroundColor: colors.deepJungleGreen,
    position: "relative",
  },
  MarqueeMixin,
]);

export const MarqueeSecondary = styled.div(() => [
  {
    backgroundColor: colors.khaki,
    filter: "blur(1.5px)",
    position: "relative",
    transform: "rotate(-5deg)",
    left: -15,
    width: "calc(100% + 20px) !important",
    top: 15,
  },
  MarqueeMixin,
]);

export const Marquees = styled.div({
  position: "relative",
  backgroundColor: colors.whiteSmoke,
});
