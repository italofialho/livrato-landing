import type { Colors } from "@/const/colors";
import { CSSProperties } from "styled-components";

export interface ButtonProps {
  color: Colors;
  children: React.ReactNode;
  margin?: CSSProperties['margin']
  padding?: CSSProperties['padding']
  borderRadius?: CSSProperties['borderRadius']
}
