import React from "react";
import * as S from "./styles";
import type { SpacerProps } from "./interface";

const Spacer: React.FC<SpacerProps> = (props) => {
  return <S.Spacer {...props} />;
};

export { Spacer };
