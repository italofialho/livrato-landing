import { ReactNode } from "react";

type Cols = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

type breakpoints =
  | {
      lg: Cols;
      sm: Cols;
    }
  | number;

type gap = { lg: number; sm: number } | number | undefined;

interface ContainerProps {
  children?: ReactNode;
}

interface RowProps {
  children?: ReactNode;
  justifyContent?:
    | "stretch"
    | "center"
    | "flex-start"
    | "flex-end"
    | "space-between"
    | "space-around"
    | "space-evenly";
  alignItems?: "stretch" | "center" | "flex-start" | "flex-end";
  direction?: "row" | "column" | "row-reverse" | "column-reverse";
  gapRow?: gap;
  gapColumn?: gap;
  id?: string;
}

interface ColProps {
  children?: ReactNode;
  size: breakpoints;
  offset?: breakpoints;
  id?: string;
}

export type { ContainerProps, RowProps, ColProps, gap, breakpoints };
