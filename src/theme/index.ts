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
    borderRadius: '5px',
    height: '32px',
    padding: '0px 15px',
    fontSize: '14px',
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
    }
  },
  colors: {
    ...colors
  },
};
