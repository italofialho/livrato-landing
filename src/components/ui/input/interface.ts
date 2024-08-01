export interface InputProps extends React.ComponentPropsWithRef<"input"> {
  mask?: "currency" | "percent" | "decimal";
  maskSuffix?: string;
}
