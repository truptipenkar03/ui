import * as styledComponents from 'styled-components';

import { GlobalTheme } from '../theme/types';

const {
  css,
  ThemeProvider,
  ThemeContext,
} = styledComponents as styledComponents.ThemedStyledComponentsModule<
  GlobalTheme
>;

export { css, ThemeProvider, ThemeContext };
