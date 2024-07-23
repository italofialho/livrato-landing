import { ButtonProps } from "./interface";
import * as S from "./styles";

export function Button({ children, ...props }: Readonly<ButtonProps>) {
  return <S.Container {...props}>{children}</S.Container>;
}
