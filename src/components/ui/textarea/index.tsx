import { TextAreaProps } from "./interface";
import * as S from "./styles";

export function TextArea(props: Readonly<TextAreaProps>) {
  return <S.TextAreaStyled {...props} />;
}
