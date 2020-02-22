import * as React from 'react';

import styled, { css } from 'styled-components';

import { useTheme } from '../../hooks';

const StyledSubtitle = styled.span`
  ${({ theme }) => css`
    display: block;
    color: ${theme.typographySubtitleColor};
    font-family: ${theme.typographySubtitleFontFamily};
    font-size: ${theme.typographySubtitleFontSize};
    font-weight: ${theme.typographySubtitleFontWeight};
    letter-spacing: ${theme.typographySubtitleLetterSpacing};
    line-height: ${theme.typographySubtitleLineHeight};
  `}
`;

export const Subtitle: React.FunctionComponent = ({ children }) => {
  const theme = useTheme();

  return <StyledSubtitle theme={theme}>{children}</StyledSubtitle>;
};
