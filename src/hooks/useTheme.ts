import * as React from 'react';

import {
  createTheme
} from "../theme";

import {
  GlobalTheme
} from "../theme/types";

import {
  ThemeContext
} from "styled-components";

// theme hook to get the current theme;
export const useTheme = () => {
  const theme = createTheme({}, {});

  return React.useContext<GlobalTheme>(ThemeContext) || theme;
};
