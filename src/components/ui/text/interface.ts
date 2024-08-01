import { CSSProperties } from "styled-components";

import { Colors } from "@/const/colors";

export interface TextProps {
  children: React.ReactNode;
  $color?: Colors;

  $transform?: CSSProperties["textTransform"];
  $align?: CSSProperties["textAlign"];
  $decoration?: CSSProperties["textDecoration"];

  $margin?: CSSProperties["margin"];
  $padding?: CSSProperties["padding"];

  $size?: CSSProperties["fontSize"];
  $weight?: CSSProperties["fontWeight"];
  $fontStyle?: CSSProperties["fontStyle"];

  $lineHeight?: CSSProperties["lineHeight"];
  $letterSpacing?: CSSProperties["letterSpacing"];
}
