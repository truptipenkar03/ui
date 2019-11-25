import * as React from 'react';

import {
  StyledButton
} from "./StyledButton";

import {
  MouseEventHandler
} from "react";

import {
  useTheme
} from "../../hooks/useTheme";

export type ButtonType = 'primary' | 'ghost' | 'link';

export interface ButtonProps {
  /** Type of the button */
  type?: ButtonType;

  /** Content to show in the button */
  children?: React.ReactNode;

  /** classname for the button */
  className?: string;

  /** Disabled state of the button */
  disabled?: boolean;

  /** HTML Type of the button */
  htmlType?: string;

  /** Function to handle click event */
  onClick?: MouseEventHandler<HTMLButtonElement>;

  /** Ref to be passed to the button */
  ref?: React.Ref<HTMLButtonElement>;
}

export const Button: React.FunctionComponent<ButtonProps> = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    children,
    type,
    ...rest
  } = props;

  const theme = useTheme();

  return (
    <StyledButton
      ref={ref}
      buttonType={type}
      theme={theme}
      {...rest}
    >
      {children}
    </StyledButton>
  );
});

Button.defaultProps = {
  type: 'primary',
  children: '',
  className: '',
  disabled: false,
  onClick: undefined
};
