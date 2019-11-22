import colors from './colors';

import {
  GlobalTheme
} from "./types";

export const theme: GlobalTheme = {
  animations: {
    time: {
      veryFast: '0.1s',
      fast: '0.25s',
      medium: '0.5s',
      slow: '1s'
    },
    milliseconds: {
      veryFast: 100,
      fast: 250,
      medium: 500,
      slow: 1000
    }
  },
  button: {
    border: 'none',
    borderRadius: '4px',
    color: colors.white,
    height: '38px',
    padding: '5px 15px 5px 15px'
  },
  colors: {
    ...colors
  },
};
