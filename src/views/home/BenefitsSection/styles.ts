"use client";

import styled from "styled-components";

import { colors } from "@/const/colors";

export const Background = styled.div({
  background: `linear-gradient(130deg, ${colors.richBlack} 2.43%, ${colors.deepJungleGreen} 93.04%);`,
});

export const BenefitsItem = styled.div({
  padding: 24,
  border: `0.5px solid ${colors.viridianGreen}`,
});

export const Benefits = styled.div`
  & ${BenefitsItem}:first-child {
    border-radius: 16px 16px 0px 0px;
    border-bottom: unset;
  }

  & ${BenefitsItem}:not(:first-child):not(:last-child) {
    border-bottom: unset;
  }

  & ${BenefitsItem}:last-child {
    border-radius: 0px 0px 16px 16px;
    border-bottom: top;
  }
`;

export const BenefitsHeader = styled.div({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",

  "& > div": {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
});
