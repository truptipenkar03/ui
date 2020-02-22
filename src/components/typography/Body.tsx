import * as React from 'react';

import styled, { css } from 'styled-components';

import { useTheme } from '../../hooks';

const StyledBody = styled.span`
  ${({ theme }) => css`
    display: inline-block;
    color: ${theme.typographyBodyColor};
    font-family: ${theme.typographyBodyFontFamily};
    font-size: ${theme.typographyBodyFontSize};
    font-weight: ${theme.typographyBodyFontWeight};
    letter-spacing: ${theme.typographyBodyLetterSpacing};
    line-height: ${theme.typographyBodyLineHeight};
  `}
`;

export const Body: React.FunctionComponent = ({ children }) => {
  const theme = useTheme();

  return <StyledBody theme={theme}>{children}</StyledBody>;
};
