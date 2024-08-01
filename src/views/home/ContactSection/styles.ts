"use client";

import styled from "styled-components";

import { colors } from "@/const/colors";

export const SocialMedias = styled.div({
  display: "flex",
  flexDirection: "column",
  gap: 16,
});

export const SocialMedia = styled.a({
  display: "flex",
  alignItems: "center",
  gap: 16,
  cursor: "pointer",
  width: "fit-content",
});

export const ContactForm = styled.form({
  padding: 48,
  borderRadius: 16,
  backgroundColor: colors.brightGray,
});

export const SuccessForm = styled.div({
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
  minHeight: 527,
});

export const Icon = styled.div({
  width: 56,
  height: 56,
  backgroundColor: colors.deepJungleGreen,
  border: `1px solid ${colors.viridianGreen}`,

  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: 8,
});
