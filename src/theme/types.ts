export interface AnimationTheme {
  time: {
    veryFast: string;
    fast: string;
    medium: string;
    slow: string;
  };
  milliseconds: {
    veryFast: number;
    fast: number;
    medium: number;
    slow: number;
  };
}

export interface ButtonTheme {
  border: string;
  borderRadius: string;
  color: string;
  height: string;
  padding: string;
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

export interface GlobalTheme {
  animations: AnimationTheme;
  button: ButtonTheme;
  colors: Colors;
}
