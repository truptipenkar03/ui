export interface AnimationTheme {
  time: {
    veryFast: number;
    fast: number;
    medium: number;
    slow: number;
  };
}

export interface ButtonTheme {
  borderRadius: string;
  padding: string;
  fontWeight: string;
  primary: {
    background: string;
    border: string;
    borderColor: string;
    color: string;
    hoverBackground: string;
    hoverColor: string;
    focusBackground: string;
    focusColor: string;
  };
  ghost: {
    background: string;
    border: string;
    borderColor: string;
    color: string;
    hoverBackground: string;
    hoverColor: string;
    focusBackground: string;
    focusColor: string;
  };
  link: {
    background: string;
    border: string;
    borderColor: string;
    color: string;
    hoverBackground: string;
    hoverColor: string;
    focusBackground: string;
    focusColor: string;
  };
  size: {
    small: {
      height: string;
      fontSize: string;
    };
    default: {
      height: string;
      fontSize: string;
    };
    large: {
      height: string;
      fontSize: string;
    };
  };
}

export interface Colors {
  black: string;
  blackRGB: string;
  borderColor: string;
  danger: string;
  dangerRGB: string;
  darkGrey: string;
  darkGreyRGB: string;
  disabled: string;
  disabledRGB: string;
  info: string;
  infoRGB: string;
  lightGrey: string;
  lightGreyRGB: string;
  primary: string;
  primaryRGB: string;
  secondary: string;
  secondaryRGB: string;
  success: string;
  successRGB: string;
  warning: string;
  warningRGB: string;
  white: string;
  whiteRGB: string;
}

export interface CollapseTheme {
  border: string;
  borderColor: string;
  borderRadius: string;
  boxShadow: string;
  content: {
    padding: string;
    background: string;
  };
  header: {
    color: string;
    background: string;
    hoverBackground: string;
    hoverColor: string;
    openBackground: string;
    openColor: string;
    padding: string;
    height: string;
  };
}

export interface PanelTheme {
  background: string;
  border: string;
  borderColor: string;
  borderRadius: string;
  activeBoxShadow: string;
  hoverBoxShadow: string;
}

export interface GlobalTheme {
  animations: AnimationTheme;
  button: ButtonTheme;
  colors: Colors;
  collapse: CollapseTheme;
  panel: PanelTheme;
}
