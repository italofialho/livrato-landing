import React from "react";

import { TextProps } from "./interface";
import * as S from "./styles";

export function Text({ children, ...props }: Readonly<TextProps>) {
  return <S.TextStyled {...props}>{children}</S.TextStyled>;
}
