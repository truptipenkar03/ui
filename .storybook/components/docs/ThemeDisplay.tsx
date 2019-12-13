import * as React from 'react';

import {
  Source
} from '@storybook/addon-docs/blocks';

import {
  getDefaultTheme
} from "../../../src/theme";

import {
  GlobalTheme
} from "../../../src/theme/types";

interface Props {
  component: keyof GlobalTheme;
  colors?: boolean;
}

export const ThemeDisplay: React.FunctionComponent<Props> = ({ component, colors }) => {
  const theme = getDefaultTheme();

  const themeSource = `
    // ---- Animation ---- //
    animationTimeVeryFast: 0.1,
    animationTimeFast: 0.25,
    animationTimeMedium: 0.5,
    animationTimeSlow: 1,
  
    // ---- Button ---- //
    buttonBorderRadius: '4px',
    buttonPadding: '0px 15px',
    buttonFontWeight: '400',
    buttonSmallHeight: '24px',
    buttonSmallFontSize: '14px',
    buttonDefaultHeight: '32px',
    buttonDefaultFontSize: '14px',
    buttonLargeHeight: '44px',
    buttonLargeFontSize: '16px',
  
    // ---- Primary Button ---- //
    buttonPrimaryBackground: themeColors.primary,
    buttonPrimaryBorder: 'none',
    buttonPrimaryBorderColor: 'none',
    buttonPrimaryColor: themeColors.white,
    buttonPrimaryHoverBackground: themeColors.secondary,
    buttonPrimaryHoverColor: themeColors.white,
    buttonPrimaryActiveBackground: themeColors.secondary,
    buttonPrimaryActiveColor: themeColors.white,
  
    // ---- Danger Button ---- //
    buttonDangerBackground: themeColors.danger,
    buttonDangerBorder: 'none',
    buttonDangerBorderColor: 'none',
    buttonDangerColor: themeColors.white,
    buttonDangerHoverBackground: themeColors.dangerSecondary,
    buttonDangerHoverColor: themeColors.white,
    buttonDangerActiveBackground: themeColors.dangerSecondary,
    buttonDangerActiveColor: themeColors.white,
  
    // ---- Ghost Button ---- //
    buttonGhostBorder: '1px solid',
  
    // ----- Link Button ---- //
    buttonLinkBackground: 'transparent',
    buttonLinkBorder: 'none',
    buttonLinkBorderColor: 'none',
    buttonLinkColor: themeColors.primary,
    buttonLinkHoverBackground: 'transparent',
    buttonLinkHoverColor: themeColors.secondary,
    buttonLinkActiveBackground: 'transparent',
    buttonLinkActiveColor: themeColors.secondary,
  
    // ---- Collapse ---- //
    collapseBorder: '1px solid',
    collapseBorderColor: themeColors.borderColor,
    collapseBorderRadius: '4px',
    collapseBoxShadow: 'none',
    collapseContentPadding: '10px',
    collapseContentBackground: 'transparent',
    collapseHeaderColor: themeColors.black,
    collapseHeaderBackground: themeColors.white,
    collapseHeaderHoverBackground: themeColors.primary,
    collapseHeaderHoverColor: themeColors.white,
    collapseHeaderOpenBackground: themeColors.primary,
    collapseHeaderOpenColor: themeColors.white,
    collapseHeaderPadding: '0px 15px',
    collapseHeaderHeight: '32px',
  
    // ---- Panel ---- //
    panelBackground: themeColors.white,
    panelBorder: 'none',
    panelBorderColor: 'none',
    panelBorderRadius: '4px',
    panelActiveBoxShadow: 0px 0px 4px rgba(themeColors.blackRGB,0.20),
    panelHoverBoxShadow: 0px 7px 21px rgba(themeColors.blackRGB,0.07)
  `;

  const themeColorSource = `
    black: '#000000',
    blackRGB: '0,0,0',
    borderColor: '#CCCCCC',
    danger: '#C43836',
    dangerRGB: '196,56,54',
    dangerSecondary: '#9B3230',
    dangerSecondaryRGB: '155,50,48',
    darkGrey: '#C4C4C4',
    darkGreyRGB: '196,196,196',
    disabled: '#60586F',
    disabledRGB: '96,88,111',
    info: '#0C95FF',
    infoRGB: '12,149,255',
    lightGrey: '#C4C4C4',
    lightGreyRGB: '196,196,196',
    primary: '#23618E',
    primaryRGB: '35,97,142',
    secondary: '#23316E',
    secondaryRGB: '35,49,110',
    success: '#0BE894',
    successRGB: '11,232,148',
    warning: '#FF9F0C',
    warningRGB: '255,159,12',
    white: '#FFFFFF',
    whiteRGB: '255,255,255',
  `;

  return (
    <Source
      language="javascript"
      code={colors ? themeColorSource : themeSource}
      format={true}
    />
  );
};
