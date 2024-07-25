"use client";

import styled from "styled-components";

import { colors } from "@/const/colors";

export const Background = styled.div({
  backgroundColor: colors.whiteSmoke,
});

export const Card = styled.div({
  border: `1px solid ${colors.gainsboro}`,
  background: colors.white,
  padding: 48,
});

export const Cards = styled.div`
  display: flex;
  flex-direction: row;

  & ${Card}:not(:last-child) {
    border-right: unset;
  }

  & ${Card}:first-child {
    border-radius: 16px 0px 0px 16px;
  }

  & ${Card}:last-child {
    border-radius: 0px 16px 16px 0px;
  }
`;

export const CardClientPhoto = styled.div({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  "& > div": {
    display: "flex",
    flexDirection: "column",
  },
});
