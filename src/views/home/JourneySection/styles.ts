"use client";

import styled from "styled-components";

import { colors } from "@/const/colors";

export const Background = styled.div({
  backgroundColor: colors.whiteSmoke,
});

export const Card = styled.div({
  backgroundColor: colors.whiteSmoke,
  padding: "32px 24px",
  border: `1px solid ${colors.gainsboro}`,
  transition: "all .5s",
  placeSelf: "flex-start",
  cursor: "help",

  "&:hover": {
    border: `1px solid ${colors.gainsboro}`,
    backgroundColor: colors.alabaster,
  },
});

export const CardContent = styled.div({
  maxHeight: 0,
  overflow: "hidden",
  transition: `max-height 0.4s ease-in-out`,
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

  & ${Card}:hover ${CardContent} {
    max-height: 100%;
  }
`;

export const CardNumber = styled.div({
  borderRadius: 4,
  border: `1px solid ${colors.darkVanilla}`,
  backgroundColor: colors.bone,
  width: 40,
  height: 40,

  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});
