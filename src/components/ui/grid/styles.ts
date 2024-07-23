"use client";

import styled, { css } from "styled-components";
import type {
  breakpoints,
  ColProps,
  ContainerProps,
  gap,
  RowProps,
} from "./interface";

function getSizing(value: breakpoints, breakpoint: "lg" | "sm" = "lg") {
  if (typeof value === "number") return value;
  else if (value) return value[breakpoint];
}

function getGap(gap: gap, breakpoint: "lg" | "sm") {
  if (typeof gap === "number") return gap;
  else if (gap) return gap[breakpoint];
}

const RowAlignmentMixin = css<RowProps>((props) => ({
  justifyContent: props.justifyContent,
  alignItems: props.alignItems,
  flexDirection: props.direction,
}));

const Container = styled.div<ContainerProps>({
  display: "flex",
  justifyContent: "center",
});

const ContainerMaxWidth = styled.div({
  maxWidth: 1216,
  width: "100%",
  // margin: "0 20px",
  "@media screen and (max-width: 768px)": {
    maxWidth: 336,
  },
});

const Row = styled.div<RowProps>(({ gapRow, gapColumn }) => [
  {
    display: "flex",
    flexWrap: "wrap",
    boxSizing: "border-box",
    gap: `${getGap(gapRow, "lg")}px
    ${getGap(gapColumn, "lg")}px`,

    "@media screen and (max-width: 768px)": {
      gap: `${getGap(gapRow, "sm")}px
      ${getGap(gapColumn, "sm")}px`,
    },
  },
  RowAlignmentMixin,
]);

const Col = styled.div<ColProps>(({ size }) => ({
  display: getSizing(size, "lg") === 0 ? "none" : "flex",
  flexFlow: "column",
  boxSizing: "border-box",
  flexBasis: `calc( (100% - (12/${getSizing(
    size,
    "lg"
  )} - 1) * 32px) / 12 *${getSizing(size, "lg")} )`,

  "@media screen and (max-width: 768px)": {
    display: getSizing(size, "sm") === 0 ? "none" : "flex",
    flexBasis: `calc( (100% - (12/${getSizing(
      size,
      "sm"
    )} - 1) * 16px) / 12 *${getSizing(size, "sm")} )`,
  },
}));

export { Container, ContainerMaxWidth, Row, Col };
