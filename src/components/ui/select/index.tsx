import { SelectProps } from "./interface";
import * as S from "./styles";

export function Select(props: Readonly<SelectProps>) {
  return <S.SelectStyled {...props} />;
}
