export interface Colors {
  black: string;
  blackRGB: string;
  borderColor: string;
  danger: string;
  dangerRGB: string;
  dangerSecondary: string;
  dangerSecondaryRGB: string;
  darkFontColor: string;
  darkFontColorRGB: string;
  success: string;
  titleFontColor: string;
  subtitleFontColor: string;
  bodyFontColor: string;
  placeholderLightFontColor: string;
  placeholderLightFontColorRGB: string;
  placeholderDarkFontColor: string;
  placeholderDarkFontColorRGB: string;
  primary: string;
  primaryRGB: string;
  primaryBackground: string;
  primaryBackgroundRGB: string;
  primaryGrey: string;
  primaryGreyRGB: string;
  secondary: string;
  secondaryRGB: string;
  secondaryBackground: string;
  secondaryBackgroundRGB: string;
  lightFontColor: string;
  lightFontColorRGB: string;
  white: string;
  whiteRGB: string;
}

export interface GlobalTheme {

  // ---- Animation Time ---- //
  animationTimeVeryFast: number;
  animationTimeFast: number;
  animationTimeMedium: number;
  animationTimeSlow: number;

  // ---- Button ---- //
  buttonBorderRadius: string;
  buttonPadding: string;
  buttonFontWeight: string;
  buttonSmallHeight: string;
  buttonSmallFontSize: string;
  buttonDefaultHeight: string;
  buttonDefaultFontSize: string;
  buttonLargeHeight: string;
  buttonLargeFontSize: string;

  // ---- Primary Button ---- //
  buttonPrimaryBackground: string;
  buttonPrimaryBorder: string;
  buttonPrimaryBorderColor: string;
  buttonPrimaryColor: string;
  buttonPrimaryHoverBackground: string;
  buttonPrimaryHoverColor: string;
  buttonPrimaryActiveBackground: string;
  buttonPrimaryActiveColor: string;

  // ---- Danger Button ---- //
  buttonDangerBackground: string;
  buttonDangerBorder: string;
  buttonDangerBorderColor: string;
  buttonDangerColor: string;
  buttonDangerHoverBackground: string;
  buttonDangerHoverColor: string;
  buttonDangerActiveBackground: string;
  buttonDangerActiveColor: string;

  // ---- Ghost Button ---- //
  buttonGhostBackground: string;
  buttonGhostBorder: string;

  // ----- Link Button ---- //
  buttonLinkBackground: string;
  buttonLinkBorder: string;
  buttonLinkBorderColor: string;
  buttonLinkColor: string;
  buttonLinkHoverBackground: string;
  buttonLinkHoverColor: string;
  buttonLinkActiveBackground: string;
  buttonLinkActiveColor: string;

  // ---- Collapse ---- //
  collapseBorder: string;
  collapseBorderColor: string;
  collapseBorderRadius: string;
  collapseBoxShadow: string;
  collapseContentPadding: string;
  collapseContentBackground: string;
  collapseHeaderColor: string;
  collapseHeaderBackground: string;
  collapseHeaderHoverBackground: string;
  collapseHeaderHoverColor: string;
  collapseHeaderOpenBackground: string;
  collapseHeaderOpenColor: string;
  collapseHeaderPadding: string;
  collapseHeaderHeight: string;
  collapseIconSize: string;


  // ---- Panel ---- //
  panelBackground: string;
  panelBorder: string;
  panelBorderColor: string;
  panelBorderRadius: string;
  panelPadding: string;
  panelMargin: string;
  panelActiveBoxShadow: string;
  panelHoverBoxShadow: string;


  // ---- Input ---- //
  inputBackground: string;
  inputBorder: string;
  inputBorderRadius: string;
  inputBorderColor: string;
  inputFocusBorderColor: string;
  inputColor: string;
  inputDefaultHeight: string;
  inputDefaultFontSize: number;
  inputStatusMessageHeight: string;
  inputStatusFontSize: string;
  inputStatusColor: string;
  inputStatusErrorColor: string;
  inputStatusErrorBorderColor: string;
  inputStatusSuccessColor: string;
  inputStatusSuccessBorderColor: string;
  inputStatusLoadingColor: string;
  inputStatusLoadingBorderColor: string;
  inputLabelFontSize: string;
  inputSmallHeight: string;
  inputSmallFontSize: number;
  inputLargeHeight: string;
  inputLargeFontSize: number;
  inputPadding: string;
  inputPlaceholderColor: string;
  inputPrefixLeft: string;
  inputSuffixRight: string;

  // ---- Media Screen ---- //
  mediaScreenSmall: string;
  mediaScreenMedium: string;
  mediaScreenLarge: string;
  mediaScreenVeryLarge: string;

  // ---- Modal ---- //
  modalBackground: string;
  modalBorder: string;
  modalBorderColor: string;
  modalBorderRadius: string;
  modalBoxShadow: string;
  modalContentPadding: string;
  modalFooterBackground: string;
  modalFooterHeight: string;
  modalFooterPadding: string;
  modalHeaderBackground: string;
  modalHeaderColor: string;
  modalHeaderMarginTop: string;
  modalHeaderPadding: string;
  modalMaskBackground: string;
  modalMinHeight: string;
  modalMinWidth: string;

  // ---- Typography ---- //
  typographyTitleFontFamily: string;
  typographyTitle1Color: string;
  typographyTitle1FontSize: string;
  typographyTitle1FontWeight: string;
  typographyTitle1LineHeight: string;
  typographyTitle1LetterSpacing: string;

  typographyTitle2Color: string;
  typographyTitle2FontSize: string;
  typographyTitle2FontWeight: string;
  typographyTitle2LineHeight: string;
  typographyTitle2LetterSpacing: string;

  typographyTitle3Color: string;
  typographyTitle3FontSize: string;
  typographyTitle3FontWeight: string;
  typographyTitle3LineHeight: string;
  typographyTitle3LetterSpacing: string;

  typographyTitle4Color: string;
  typographyTitle4FontSize: string;
  typographyTitle4FontWeight: string;
  typographyTitle4LineHeight: string;
  typographyTitle4LetterSpacing: string;

  typographyTitle5Color: string;
  typographyTitle5FontSize: string;
  typographyTitle5FontWeight: string;
  typographyTitle5LineHeight: string;
  typographyTitle5LetterSpacing: string;

  typographyTitle6Color: string;
  typographyTitle6FontSize: string;
  typographyTitle6FontWeight: string;
  typographyTitle6LineHeight: string;
  typographyTitle6LetterSpacing: string;

  typographySubtitleColor: string;
  typographySubtitleFontFamily: string;
  typographySubtitleFontSize: string;
  typographySubtitleFontWeight: string;
  typographySubtitleLineHeight: string;
  typographySubtitleLetterSpacing: string;

  typographyBodyColor: string;
  typographyBodyFontFamily: string;
  typographyBodyFontSize: string;
  typographyBodyFontWeight: string;
  typographyBodyLineHeight: string;
  typographyBodyLetterSpacing: string;
  // ---- Divider ---- //
  dividerBorder: string;
  dividerBackground: string;
  dividerTextPrimaryBackground: string;

  colors: Colors;
}
