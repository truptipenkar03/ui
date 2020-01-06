import * as React from 'react';

import {
  StyledButton
} from "./StyledButton";

import {
  motion
} from "framer-motion";

import {
  Icon
} from '../icons';

import {
  MouseEventHandler
} from "react";

import {
  useTheme
} from "../../hooks";

export type ButtonType = 'primary' | 'danger' | 'link';
export type ShapeType = 'circle' | 'default';
export type SizeType = 'small' | 'default' | 'large';

export interface ButtonProps {
  /** Type of the button */
  type?: ButtonType;

  /** Content to show in the button */
  children?: React.ReactNode;

  /** classname for the button */
  className?: string;

  /** Disabled state of the button */
  disabled?: boolean;

  /** Makes the background of button transparent */
  ghost?: boolean;

  /** HTML Type of the button */
  htmlType?: string;

  /** Loading state of the button */
  loading?: boolean;

  /** Function to handle click event */
  onClick?: MouseEventHandler<HTMLButtonElement>;

  /** Ref to be passed to the button */
  ref?: React.Ref<HTMLButtonElement>;

  /** Shape of the button */
  shape?: ShapeType;

  /** Size of the button */
  size?: SizeType;
}

function getTypeStyle(type, ghost, theme) {
  switch(type) {
    case 'primary': {
      if (ghost) {
        return theme.buttonPrimaryBackground;
      }
      return theme.buttonPrimaryColor;
    }
    case 'danger': {
      if (ghost) {
        return theme.buttonDangerBackground;
      }
      return theme.buttonDangerColor;
    }
    case 'link': {
      return theme.buttonLinkColor;
    }
  }
}

function getSizeStyle(size, theme) {
  switch(size) {
    case 'small': {
      return theme.buttonSmallFontSize;
    }
    case 'large': {
      return theme.buttonLargeFontSize;
    }
    default: {
      return theme.buttonDefaultFontSize;
    }
  }
}

export const Button: React.FunctionComponent<ButtonProps> = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    children,
    className,
    ghost,
    loading,
    type,
    shape,
    size,
    ...rest
  } = props;

  const theme = useTheme();

  const widthAndHeight = getSizeStyle(size, theme);

  return (
    <StyledButton
      ref={ref}
      buttonType={type}
      className={`${className} rtk-button`}
      customProps={{
        loading,
        ghost,
        shape,
        size
      }}
      theme={theme}
      {...rest}
    >
      <motion.div
        variants={{
          loading: {
            width: widthAndHeight,
            marginRight: shape === 'circle' ? 0 : 5,
            transition: { type: 'tween'}
           },
          notLoading: { width: 0, marginRight: 0}
        }}
        animate={loading ? 'loading' : 'notLoading'}
        transition={{ type: 'tween', duration: theme.animationTimeVeryFast, delay: theme.animationTimeVeryFast }}
      >
        {loading ?
          <Icon.Loading
            fill={getTypeStyle(type, ghost, theme)}
            height={widthAndHeight}
            width={widthAndHeight}
          />:
          null
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
  ghost: false,
  loading: false,
  onClick: undefined,
  shape: 'default',
  size: 'default'
};
