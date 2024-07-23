"use client";

import { colors } from "@/const/colors";
import styled from "styled-components";

export const Card = styled.div({
  border: `1px solid ${colors.gainsboro}`,
  padding: 32,
  flex: 1,
  backgroundColor: colors.white,

  transition: "all .5s",

  "&:hover": {
    "> span": {
      color: `${colors.white} !important`,
    },
    backgroundColor: colors.deepJungleGreen,
  },
});

export const Cards = styled.div`
  ${Card}#solution-card-1 {
    border-radius: 16px 0px 0px 0px;
    border-right: unset;
  }
  ${Card}#solution-card-3 {
    border-radius: 0px 16px 0px 0px;
    border-left: unset;
  }
  ${Card}#solution-card-4 {
    border-top: unset;
    border-right: unset;
    border-radius: 0px 0px 0px 16px;
  }
  ${Card}#solution-card-5 {
    border-top: unset;
  }
  ${Card}#solution-card-6 {
    border-top: unset;
    border-left: unset;
    border-radius: 0px 0px 16px 0px;
  }
`;
