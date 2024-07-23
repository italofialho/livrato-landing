import React from "react";
import * as S from "./styles";
import type { ContainerProps, RowProps, ColProps } from "./interface";

const Container: React.FC<ContainerProps> = ({ children, ...props }) => {
  return (
    <S.Container {...props}>
      <S.ContainerMaxWidth>{children}</S.ContainerMaxWidth>
    </S.Container>
  );
};

const Row: React.FC<RowProps> = ({
  gapRow = 12,
  gapColumn = { lg: 32, sm: 16 },
  ...props
}) => {
  return <S.Row gapRow={gapRow} gapColumn={gapColumn} {...props} />;
};

const Col: React.FC<ColProps> = ({ offset, ...props }) => {
  return (
    <>
      {offset && <S.Col size={offset} />}
      <S.Col {...props} />
    </>
  );
};

export { Container, Row, Col };
