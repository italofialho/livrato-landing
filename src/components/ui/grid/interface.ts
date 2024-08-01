import { ReactNode } from "react";

import { CSSProperties } from "styled-components";

type DecimalCols =
  | 1.5
  | 2.5
  | 3.5
  | 4.5
  | 5.5
  | 6.5
  | 7.7
  | 8.6
  | 9.5
  | 10.5
  | 11.5;
type InterCol = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
type Cols = InterCol | DecimalCols;

type breakpoints =
  | {
      lg: Cols;
      sm: Cols;
    }
  | number;

type gap = { lg: number; sm: number } | number | undefined;

interface ContainerProps {
  children?: ReactNode;
  id?: string;
}

interface RowProps {
  children?: ReactNode;
  $justifyContent?: CSSProperties["justifyContent"];
  $alignItems?: CSSProperties["alignItems"];
  $direction?: CSSProperties["flexDirection"];
  $gapRow?: gap;
  $gapColumn?: gap;
  $id?: string;
}

interface ColProps {
  children?: ReactNode;
  $justifyContent?: CSSProperties["justifyContent"];
  $alignItems?: CSSProperties["alignItems"];
  $direction?: CSSProperties["flexDirection"];
  $size: breakpoints;
  $offset?: breakpoints;
  $id?: string;
}

export type { breakpoints, ColProps, ContainerProps, gap, RowProps };
