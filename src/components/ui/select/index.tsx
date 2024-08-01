import { forwardRef } from "react";

import { SelectProps } from "./interface";
import * as S from "./styles";

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  function Select(props: Readonly<SelectProps>, ref) {
    return <S.SelectStyled {...props} ref={ref} />;
  }
);
