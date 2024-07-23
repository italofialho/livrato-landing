import { ReactNode } from 'react';

type breakpoints =
  | {
      lg: number;
      sm: number;
    }
  | number
  | undefined;

interface SpacerProps {
  className?: string;
  children?: ReactNode;
  margin?: breakpoints;
  mt?: breakpoints;
  mr?: breakpoints;
  mb?: breakpoints;
  ml?: breakpoints;
  padding?: breakpoints;
  pt?: breakpoints;
  pr?: breakpoints;
  pb?: breakpoints;
  pl?: breakpoints;
}

export type { SpacerProps, breakpoints };
