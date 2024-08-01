import React from "react";

import type { ColProps, ContainerProps, RowProps } from "./interface";
import * as S from "./styles";

const Container: React.FC<ContainerProps> = ({ children, id, ...props }) => {
  return (
    <S.Container id={id} {...props}>
      <S.ContainerMaxWidth>{children}</S.ContainerMaxWidth>
    </S.Container>
  );
};

const Row: React.FC<RowProps> = ({
  $gapRow = 12,
  $gapColumn = { lg: 32, sm: 16 },
  ...props
}) => {
  return <S.Row $gapRow={$gapRow} $gapColumn={$gapColumn} {...props} />;
};

const Col: React.FC<ColProps> = ({ $offset, ...props }) => {
  return (
    <>
      {$offset && <S.Col $size={$offset} />}
      <S.Col {...props} />
    </>
  );
};

export { Col, Container, Row };
