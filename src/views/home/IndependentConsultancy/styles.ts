"use client";

import styled from "styled-components";

import { colors } from "@/const/colors";

export const Background = styled.div({
  backgroundColor: colors.richBlack,
  padding: 80,
  display: "flex",
  flexDirection: "column",
});

export const StatsItem = styled.div({
  padding: 24,
  border: `1px solid ${colors.viridianGreen}`,

  display: "flex",
  flexDirection: "column",
});

export const Stats = styled.div`
  & ${StatsItem}:first-child {
    border-radius: 16px 16px 0px 0px;
    border-bottom: unset;
  }

  & ${StatsItem}:last-child {
    border-radius: 0px 0px 24px 24px;
    border-top: unset;
  }
`;
