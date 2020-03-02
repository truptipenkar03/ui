import * as React from 'react';

import styled, { css } from 'styled-components';

import { useTheme } from '../../hooks';

export interface LabelProps {
  className?: string;
}

const StyledLabel = styled.label`
  ${({ theme }) => css`
    text-transform: ${theme.typographyLabelTextTransform};
    color: ${theme.typographyLabelColor};
    font-family: ${theme.typographyLabelFontFamily};
    font-size: ${theme.typographyLabelFontSize};
    font-weight: ${theme.typographyLabelFontWeight};
    letter-spacing: ${theme.typographyLabelLetterSpacing};
    line-height: ${theme.typographyLabelLineHeight};
  `}
`;

export const Label: React.FunctionComponent<LabelProps> = ({
  children,
  className,
}) => {
  const theme = useTheme();

  return (
    <StyledLabel className={`${className} rtk-type-label`} theme={theme}>
      {children}
    </StyledLabel>
  );
};
