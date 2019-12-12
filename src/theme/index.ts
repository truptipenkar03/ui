import {
  colors
} from './colors';

import {
  Colors,
  GlobalTheme
} from "./types";

export const getDefaultTheme = (themeColors: Colors = colors): GlobalTheme => ({
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
      background: themeColors.primary,
      border: 'none',
      borderColor: 'none',
      color: themeColors.white,
      hoverBackground: themeColors.secondary,
      hoverColor: themeColors.white,
      activeBackground: themeColors.secondary,
      activeColor: themeColors.white,
    },
    danger: {
      background: themeColors.danger,
      border: 'none',
      borderColor: 'none',
      color: themeColors.white,
      hoverBackground: themeColors.dangerSecondary,
      hoverColor: themeColors.white,
      activeBackground: themeColors.dangerSecondary,
      activeColor: themeColors.white,
    },
    ghost: {
      border: '1px solid',
    },
    link: {
      background: 'transparent',
      border: 'none',
      borderColor: 'none',
      color: themeColors.primary,
      hoverBackground: 'transparent',
      hoverColor: themeColors.secondary,
      activeBackground: 'transparent',
      activeColor: themeColors.secondary,
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
  collapse: {
    border: '1px solid',
    borderColor: themeColors.borderColor,
    borderRadius: '4px',
    boxShadow: 'none',
    content: {
      padding: '10px',
      background: 'transparent'
    },
    header: {
      color: themeColors.black,
      background: themeColors.white,
      hoverBackground: themeColors.primary,
      hoverColor: themeColors.white,
      openBackground: themeColors.primary,
      openColor: themeColors.white,
      padding: '0px 15px',
      height: '32px'
    }
  },
  panel: {
    background: themeColors.white,
    border: 'none',
    borderColor: 'none',
    borderRadius: '4px',
    activeBoxShadow: `0px 0px 4px rgba(${themeColors.blackRGB},0.20)`,
    hoverBoxShadow: `0px 7px 21px rgba(${themeColors.blackRGB},0.07)`
  }
});

export const createTheme = (colorOverrides: Partial<Colors>, themeOverrides: Partial<GlobalTheme>): GlobalTheme => {
  const themeColors = {
    ...colors,
    ...colorOverrides
  };

  const theme = getDefaultTheme(themeColors);

  return {
    ...themeOverrides,
    ...theme
  };
};
