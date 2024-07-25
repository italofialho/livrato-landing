"use client";

import styled from "styled-components";

export const Header = styled.div<{ $isOpen: boolean }>((props) => ({
  display: "flex",
  flexDirection: "column",
  cursor: "pointer",

  "& #icon": {
    transition: "transform .4s",
    transform: `rotate(${props.$isOpen ? "180deg" : "0"})`,
    cursor: "pointer",
  },
}));

export const Content = styled.div({
  overflow: "hidden",
  transition: `height 0.2s ease-in-out`,
  cursor: "default",
});
