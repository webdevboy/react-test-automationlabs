import React, { ReactElement } from "react";

import { IButtonProps } from "./interfaces/button-props.interface";
import { ButtonStyled } from "./styled";
//
const Button: React.FC<IButtonProps> = ({ title, style }): ReactElement => (
  <ButtonStyled style={style || {}}>
    {title || ''}
  </ButtonStyled>
);

export default Button;
