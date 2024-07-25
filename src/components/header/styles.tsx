"use client";

import styled from "styled-components";

import { colors } from "@/const/colors";

export const Background = styled.div({
  backgroundColor: colors.white,
  position: "sticky",
  top: 0,
});

export const Container = styled.div({
  padding: `32px 0`,
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  margin: "0 auto",
});

export const Link = styled.a({
  color: colors.graniteGray,
  fontSize: 16,
  lineHeight: "130%",
  transition: "opacity 0.5s",
  "&:hover": {
    opacity: 0.7,
  },
});

export const Links = styled.div({
  "& a:not(:last-child)": {
    marginRight: 48,
  },
});
