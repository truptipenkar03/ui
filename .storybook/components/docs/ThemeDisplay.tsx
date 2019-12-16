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
    buttonSmallFontSize: '12px',
    buttonDefaultHeight: '32px',
    buttonDefaultFontSize: '14px',
    buttonLargeHeight: '44px',
    buttonLargeFontSize: '16px',
  
    // ---- Primary Button ---- //
    buttonPrimaryBackground: themeColors.primary,
    buttonPrimaryBorder: 'none',
    buttonPrimaryBorderColor: 'none',
    buttonPrimaryColor: themeColors.lightFontColor,
    buttonPrimaryHoverBackground: themeColors.secondary,
    buttonPrimaryHoverColor: themeColors.white,
    buttonPrimaryActiveBackground: themeColors.secondary,
    buttonPrimaryActiveColor: themeColors.white,
  
    // ---- Danger Button ---- //
    buttonDangerBackground: themeColors.danger,
    buttonDangerBorder: 'none',
    buttonDangerBorderColor: 'none',
    buttonDangerColor: themeColors.lightFontColor,
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
    collapseContentBackground: themeColors.primaryBackground,
    collapseHeaderColor: themeColors.darkFontColor,
    collapseHeaderBackground: themeColors.primaryBackground,
    collapseHeaderHoverBackground: themeColors.primary,
    collapseHeaderHoverColor: themeColors.lightFontColor,
    collapseHeaderOpenBackground: themeColors.primary,
    collapseHeaderOpenColor: themeColors.lightFontColor,
    collapseHeaderPadding: '0px 15px',
    collapseHeaderHeight: '32px',
  
    // ---- Panel ---- //
    panelBackground: themeColors.primaryBackground,
    panelBorder: 'none',
    panelBorderColor: 'none',
    panelBorderRadius: '4px',
    panelActiveBoxShadow: \`0px 0px 4px rgba(themeColors.blackRGB},0.20)\`,
    panelHoverBoxShadow: \`0px 7px 21px rgba(themeColors.blackRGB},0.07)\`,
  
  
    // ---- Input ---- //
    inputBackground: themeColors.primaryBackground,
    inputBorder: '1px solid',
    inputBorderRadius: '4px',
    inputBorderColor: themeColors.borderColor,
    inputFocusBorderColor: themeColors.primary,
    inputColor: themeColors.darkFontColor,
    inputDefaultHeight: '32px',
    inputDefaultFontSize: 14,
    inputSmallHeight: '24px',
    inputSmallFontSize: 12,
    inputLargeHeight: '44px',
    inputLargeFontSize: 18,
    inputPadding: '10px 0 10px 10px',
    inputPlaceholderColor: themeColors.placeholderDarkFontColor,
    inputPrefixLeft: '10px',
    inputSuffixRight: '10px',
  
    colors: {
      ...themeColors
    }
  `;

  const themeColorSource = `
    black: '#000000',
    blackRGB: '0,0,0',
    borderColor: '#CCCCCC',
    danger: '#C43836',
    dangerRGB: '196,56,54',
    dangerSecondary: '#9B3230',
    dangerSecondaryRGB: '155,50,48',
    darkFontColor: '#30302F',
    darkFontColorRGB: '48, 48, 48',
    placeholderLightFontColor: '#C9C7C7',
    placeholderLightFontColorRGB: '199,199,199',
    placeholderDarkFontColor: '#545450',
    placeholderDarkFontColorRGB: '84,84,80',
    primary: '#23618E',
    primaryRGB: '35,97,142',
    primaryBackground: '#FFFFFF',
    primaryBackgroundRGB: '255,255,255',
    secondary: '#23316E',
    secondaryRGB: '35,49,110',
    secondaryBackground: '#f1f1f1',
    secondaryBackgroundRGB: '241,241,241',
    lightFontColor: '#EFEFEF',
    lightFontColorRGB: '239, 239, 239',
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
