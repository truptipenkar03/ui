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

  const {
    button,
    animations: {
      time
    }
  } = theme;

  const iconToShow = loadingIcon || <SvgCircleNotch fill={button[type || 'primary'].color} />;

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
        variants={{
          loading: {
            width: button.fontSize,
            marginRight: 5,
            transition: { type: 'tween'}
           },
          notLoading: { width: 0, marginRight: 0}
        }}
        animate={loading ? 'loading' : 'notLoading'}
        layoutTransition={{ type: 'tween', duration: time.veryFast, delay: time.veryFast }}
      >
        {loading &&
          <motion.div
            style={{ height: button.fontSize, width: button.fontSize, transformOrigin: 'center center' }}
            animate={{rotate: 360}}
            transition={{ duration: time.slow, loop: Infinity, ease: 'linear'}}
          >
            {iconToShow}
          </motion.div>
        }
      </motion.div>
      <span>{children}</span>
    </StyledButton>
  );
});

Button.defaultProps = {
  type: 'primary',
  children: '',
  className: '',
  disabled: false,
  loading: false,
  onClick: undefined
};
