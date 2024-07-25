import { InputProps } from "./interface";
import * as S from "./styles";

export function Input(props: Readonly<InputProps>) {
  return <S.InputStyled {...props} />;
}
