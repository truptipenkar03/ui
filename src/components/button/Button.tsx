import * as React from 'react';

import {
  StyledButton
} from "./StyledButton";

import {
  motion
} from "framer-motion";

import { SvgCircleNotch } from '../icons/CircleNotch';

import {
  MouseEventHandler
} from "react";

import {
  useTheme
} from "../../hooks/useTheme";

import {StyledChildren} from "./StyledChildren";

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

  /** Loading state of the button */
  loading?: boolean;

  /** Loading icon of the button */
  loadingIcon?: React.ReactNode;

  /** Function to handle click event */
  onClick?: MouseEventHandler<HTMLButtonElement>;

  /** Ref to be passed to the button */
  ref?: React.Ref<HTMLButtonElement>;
}

export const Button: React.FunctionComponent<ButtonProps> = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    children,
    className,
    loading,
    loadingIcon,
    type,
    ...rest
  } = props;

  const theme = useTheme();

  const { button } = theme;

  const test = {
    loading: { width: button.fontSize },
    notLoading: { width: 0 }
  };

  return (
    <StyledButton
      ref={ref}
      buttonType={type}
      className={className}
      loading={loading}
      theme={theme}
      {...rest}
    >
      <motion.div
        variants={test}
        animate={loading ? 'loading' : 'notLoading'}
        transition={{type: 'tween'}}
      >
        {loading &&
          <motion.div
            style={{ height: button.fontSize, width: button.fontSize }}
            animate={{rotate: 360, transformOrigin: 'center center'}}
            transition={{ duration: theme.animations.time.slow, loop: Infinity, ease: 'linear'}}
          >
            {loadingIcon}
          </motion.div>
        }
      </motion.div>
      <StyledChildren loading={loading}>{children}</StyledChildren>
    </StyledButton>
  );
});

Button.defaultProps = {
  type: 'primary',
  children: '',
  className: '',
  disabled: false,
  loading: false,
  loadingIcon: <SvgCircleNotch />,
  onClick: undefined
};
