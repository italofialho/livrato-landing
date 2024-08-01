import { forwardRef, useState } from "react";

import {
  InputNumberFormat,
  NumberFormatEventDetail,
  NumberFormatEventHandler,
} from "@react-input/number-format";

import { InputProps } from "./interface";
import * as S from "./styles";

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { mask, ...props }: Readonly<InputProps>,
  ref
) {
  if (mask) return <InputMaskNumber {...props} mask={mask} ref={ref} />;

  return <S.InputStyled {...props} ref={ref} />;
});

export const InputMaskNumber = forwardRef<HTMLInputElement, InputProps>(
  function InputMaskNumber(
    { mask, maskSuffix, ...props }: Readonly<InputProps>,
    ref
  ) {
    const [detail, setDetail] = useState<NumberFormatEventDetail | null>(null);

    const handleNumberFormat: NumberFormatEventHandler = (event) => {
      setDetail(event.detail);
    };

    const formatValue = (currentDetail: NumberFormatEventDetail | null) => {
      if (mask === "percent") {
        return currentDetail?.value
          ? Intl.NumberFormat("pt-BR", { style: "percent" }).format(
              Number(currentDetail.number) / 100
            ) + maskSuffix
          : "";
      }

      return currentDetail?.value
        ? `${currentDetail.number}${maskSuffix ?? ""}`
        : "";
    };

    return (
      <InputNumberFormat
        {...props}
        locales="pt-BR"
        currency="BRL"
        format={mask}
        value={formatValue(detail)}
        component={S.InputStyled}
        onNumberFormat={handleNumberFormat}
        ref={ref}
      />
    );
  }
);
