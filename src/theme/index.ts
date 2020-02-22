import { colors } from './colors';

import { Colors, GlobalTheme } from './types';

export const getDefaultTheme = (themeColors: Colors = colors): GlobalTheme => ({
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
  buttonPrimaryBorder: '1px solid',
  buttonPrimaryBorderColor: 'transparent',
  buttonPrimaryColor: themeColors.lightFontColor,
  buttonPrimaryHoverBackground: themeColors.secondary,
  buttonPrimaryHoverColor: themeColors.white,
  buttonPrimaryActiveBackground: themeColors.secondary,
  buttonPrimaryActiveColor: themeColors.white,

  // ---- Danger Button ---- //
  buttonDangerBackground: themeColors.danger,
  buttonDangerBorder: '1px solid',
  buttonDangerBorderColor: 'transparent',
  buttonDangerColor: themeColors.lightFontColor,
  buttonDangerHoverBackground: themeColors.dangerSecondary,
  buttonDangerHoverColor: themeColors.white,
  buttonDangerActiveBackground: themeColors.dangerSecondary,
  buttonDangerActiveColor: themeColors.white,

  // ---- Ghost Button ---- //
  buttonGhostBackground: themeColors.primaryBackground,
  buttonGhostBorder: '1px solid',

  // ----- Link Button ---- //
  buttonLinkBackground: 'transparent',
  buttonLinkBorder: '1px solid',
  buttonLinkBorderColor: 'transparent',
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
  collapseHeaderColor: themeColors.primaryGrey,
  collapseHeaderBackground: themeColors.primaryBackground,
  collapseHeaderHoverBackground: themeColors.primary,
  collapseHeaderHoverColor: themeColors.lightFontColor,
  collapseHeaderOpenBackground: themeColors.primary,
  collapseHeaderOpenColor: themeColors.lightFontColor,
  collapseHeaderPadding: '0px 15px',
  collapseHeaderHeight: '32px',
  collapseIconSize: '10px',

  // ---- Layout ---- //
  layoutHeaderHeight: '60px',
  layoutFooterHeight: '60px',
  layoutSidebarPaddingLarge: '16px',
  layoutSidebarPaddingMedium: '8px',
  layoutSidebarPaddingSmall: '0px',
  layoutSidebarWidthLarge: '225px',
  layoutSidebarWidthMedium: '150px',
  layoutSidebarWidthSmall: '55px',

  // ---- Input ---- //
  inputBackground: themeColors.primaryBackground,
  inputBorder: '1px solid',
  inputBorderRadius: '4px',
  inputBorderColor: themeColors.borderColor,
  inputFocusBorderColor: themeColors.primary,
  inputColor: themeColors.darkFontColor,
  inputDefaultHeight: '32px',
  inputDefaultFontSize: 14,
  inputStatusMessageHeight: '15px',
  inputLabelFontSize: '12px',
  inputStatusFontSize: '12px',
  inputStatusColor: themeColors.placeholderDarkFontColor,
  inputStatusErrorColor: themeColors.danger,
  inputStatusErrorBorderColor: themeColors.danger,
  inputStatusSuccessColor: themeColors.success,
  inputStatusSuccessBorderColor: themeColors.success,
  inputStatusLoadingColor: themeColors.placeholderDarkFontColor,
  inputStatusLoadingBorderColor: themeColors.borderColor,
  inputSmallHeight: '24px',
  inputSmallFontSize: 12,
  inputLargeHeight: '44px',
  inputLargeFontSize: 18,
  inputPadding: '0 10px',
  inputPlaceholderColor: themeColors.placeholderDarkFontColor,
  inputPrefixLeft: '10px',
  inputSuffixRight: '10px',

  // ---- Media Screen ---- //
  mediaScreenSmall: '700px',
  mediaScreenMedium: '748px',
  mediaScreenLarge: '992px',
  mediaScreenVeryLarge: '1200px',

  // ---- Modal ---- //
  modalBackground: themeColors.primaryBackground,
  modalBorder: 'none',
  modalBorderColor: 'transparent',
  modalBorderRadius: '4px',
  modalBoxShadow: `0px 4px 12px rgba(${themeColors.blackRGB}, 0.15)`,
  modalContentPadding: '32px',
  modalFooterBackground: themeColors.secondaryBackground,
  modalFooterHeight: '60px',
  modalFooterPadding: '0 32px',
  modalHeaderBackground: 'transparent',
  modalHeaderColor: themeColors.primary,
  modalHeaderMarginTop: '24px',
  modalHeaderPadding: '0 32px',
  modalMaskBackground: `rgba(${themeColors.blackRGB}, 0.45)`,
  modalMinHeight: '200px',
  modalMinWidth: '520px',

  // ---- Panel ---- //
  panelBackground: themeColors.primaryBackground,
  panelBorder: 'none',
  panelBorderColor: 'none',
  panelBorderRadius: '4px',
  panelPadding: '24px',
  panelMargin: '32px',
  panelActiveBoxShadow: `0px 0px 4px rgba(${themeColors.blackRGB},0.20)`,
  panelHoverBoxShadow: `0px 7px 21px rgba(${themeColors.blackRGB},0.07)`,

  // ---- Typography ---- //
  typographyTitleFontFamily: '"Encode Sans", sans-serif',

  typographyTitle1Color: themeColors.titleFontColor,
  typographyTitle1FontSize: '36px',
  typographyTitle1FontWeight: '700',
  typographyTitle1LineHeight: '1.1',
  typographyTitle1LetterSpacing: '0',

  typographyTitle2Color: themeColors.titleFontColor,
  typographyTitle2FontSize: '24px',
  typographyTitle2FontWeight: '700',
  typographyTitle2LineHeight: '1.1',
  typographyTitle2LetterSpacing: '0',

  typographyTitle3Color: themeColors.titleFontColor,
  typographyTitle3FontSize: '18px',
  typographyTitle3FontWeight: '700',
  typographyTitle3LineHeight: '1.1',
  typographyTitle3LetterSpacing: '0',

  typographyTitle4Color: themeColors.titleFontColor,
  typographyTitle4FontSize: '16px',
  typographyTitle4FontWeight: '700',
  typographyTitle4LineHeight: '1.1',
  typographyTitle4LetterSpacing: '0',

  typographyTitle5Color: themeColors.titleFontColor,
  typographyTitle5FontSize: '14px',
  typographyTitle5FontWeight: '700',
  typographyTitle5LineHeight: '1.1',
  typographyTitle5LetterSpacing: '0',

  typographyTitle6Color: themeColors.titleFontColor,
  typographyTitle6FontSize: '12px',
  typographyTitle6FontWeight: '700',
  typographyTitle6LineHeight: '1.1',
  typographyTitle6LetterSpacing: '0',

  typographySubtitleColor: themeColors.subtitleFontColor,
  typographySubtitleFontFamily: '"Lato" sans-serif',
  typographySubtitleFontSize: '16px',
  typographySubtitleFontWeight: '700',
  typographySubtitleLineHeight: '1.5',
  typographySubtitleLetterSpacing: '0',

  typographyBodyColor: themeColors.bodyFontColor,
  typographyBodyFontFamily: '"Lato" sans-serif',
  typographyBodyFontSize: '16px',
  typographyBodyFontWeight: '400',
  typographyBodyLineHeight: '1.5',
  typographyBodyLetterSpacing: '0',

  // ---- Divider ---- //
  dividerBorder: themeColors.borderColor,
  dividerBackground: themeColors.borderColor,
  dividerTextPrimaryBackground: themeColors.primaryBackground,
  dividerTextColor: themeColors.bodyFontColor,

  colors: {
    ...themeColors,
  },
});

export const createTheme = (
  colorOverrides: Partial<Colors>,
  themeOverrides: Partial<GlobalTheme>
): GlobalTheme => {
  const themeColors = {
    ...colors,
    ...colorOverrides,
  };

  const theme = getDefaultTheme(themeColors);

  return {
    ...theme,
    ...themeOverrides,
  };
};
