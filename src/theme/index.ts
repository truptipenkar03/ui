import colors from './colors';

import {
  GlobalTheme
} from "./types";

export const theme: GlobalTheme = {
  animations: {
    time: {
      veryFast: 0.1,
      fast: 0.25,
      medium: 0.5,
      slow: 1
    },
  },
  button: {
    borderRadius: '4px',
    padding: '0px 15px',
    fontWeight: '400',
    primary: {
      background: colors.primary,
      border: 'none',
      borderColor: 'none',
      color: colors.white,
      hoverBackground: colors.secondary,
      hoverColor: colors.white,
      focusBackground: colors.secondary,
      focusColor: colors.white,
    },
    ghost: {
      background: 'transparent',
      border: '1px solid',
      borderColor: colors.primary,
      color: colors.primary,
      hoverBackground: colors.primary,
      hoverColor: colors.white,
      focusBackground: colors.primary,
      focusColor: colors.white,
    },
    link: {
      background: 'transparent',
      border: 'none',
      borderColor: 'none',
      color: colors.primary,
      hoverBackground: 'transparent',
      hoverColor: colors.secondary,
      focusBackground: 'transparent',
      focusColor: colors.secondary,
    },
    size: {
      small: {
        height: '24px',
        fontSize: '14px'
      },
      default: {
        height: '32px',
        fontSize: '14px'
      },
      large: {
        height: '44px',
        fontSize: '16px'
      }
    }
  },
  colors: {
    ...colors
  },
  collapse: {
    borderRadius: '8px',
    boxShadow: `0px 0px 4px rgba(${colors.blackRGB},0.20)`,
    contentPadding: '10px',
    contentBackground: colors.white,
    headerBackground: colors.white,
    headerHeight: '40px',
    headerPadding: '0px 10px',
  }
};
