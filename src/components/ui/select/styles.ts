"use client";

import styled from "styled-components";

import { colors } from "@/const/colors";

export const SelectStyled = styled.select({
  padding: `16px 16px`,
  border: `1px solid ${colors.brightGray}`,
  background: colors.white,
  color: colors.gray,
  fontSize: 16,
  fontWeight: 400,
  lineHeight: "130%",
  fontFamily: "var(--font-lato)",
  borderRadius: 4,
});
