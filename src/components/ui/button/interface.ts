import { CSSProperties } from "styled-components";

import type { Colors } from "@/const/colors";

export interface ButtonProps extends React.ComponentPropsWithRef<"button"> {
  children: React.ReactNode;
  $color: Colors;
  $margin?: CSSProperties["margin"];
  $padding?: CSSProperties["padding"];
  $borderRadius?: CSSProperties["borderRadius"];
}
