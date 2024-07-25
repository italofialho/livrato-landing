import React from "react";

import type { SpacerProps } from "./interface";
import * as S from "./styles";

const Spacer: React.FC<SpacerProps> = (props) => {
  return <S.Spacer {...props} />;
};

export { Spacer };
