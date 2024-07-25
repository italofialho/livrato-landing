"use client";

import styled from "styled-components";

import { colors } from "@/const/colors";

export const Card = styled.div({
  border: `1px solid ${colors.gainsboro}`,
  padding: 32,
  flex: 1,
  backgroundColor: colors.white,

  transition: "all .5s",

  "&:hover": {
    "> span": {
      color: `${colors.white}`,
    },
    backgroundColor: colors.deepJungleGreen,
  },
});

export const Cards = styled.div`
  ${Card}#solution-card-1 {
    border-radius: 16px 0px 0px 0px;
    border-right: unset;
    border-bottom: unset;
  }
  ${Card}#solution-card-2 {
    border-right: unset;
    border-bottom: unset;
  }
  ${Card}#solution-card-3 {
    border-radius: 0px 16px 0px 0px;
    border-bottom: unset;
  }
  ${Card}#solution-card-4 {
    border-radius: 0px 0px 0px 16px;
    border-right: unset;
  }
  ${Card}#solution-card-5 {
    border-right: unset;
  }
  ${Card}#solution-card-6 {
    border-radius: 0px 0px 16px 0px;
  }
`;
