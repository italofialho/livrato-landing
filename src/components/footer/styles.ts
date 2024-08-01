"use client";

import styled from "styled-components";

import { colors } from "@/const/colors";

export const Divider = styled.div({
  borderBottom: `1px solid ${colors.gainsboro}`,
});

export const FooterBanner = styled.div({
  backgroundColor: colors.khaki,
  width: "100vw",
  height: 82,

  backgroundImage: `url(/assets/footer_pattern.svg)`,
  backgroundRepeat: "repeat-x",
});

export const SocialMedias = styled.div({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: 16,
});

export const SocialMediaIcon = styled.a({
  width: 32,
  height: 32,
  backgroundColor: colors.deepJungleGreen,
  borderRadius: 4,

  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const Links = styled.div({
  display: "flex",
  flexDirection: "row",
});
