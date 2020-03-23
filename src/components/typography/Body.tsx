import * as React from 'react';

import styled, { css } from 'styled-components';

import { useTheme } from '../../hooks';
import { GlobalTheme } from '../../theme/types';

export interface BodyProps {
  /** className of the body text */
  className?: string;

  /** If true, the style of the text will change */
  disabled?: boolean;
}

interface StyledBodyProps {
  disabled?: boolean;
  theme: GlobalTheme;
}

const StyledBody = styled.div<StyledBodyProps>`
  ${({ disabled, theme }) => css`
    color: ${theme.typographyBodyColor};
    font-family: ${theme.typographyBodyFontFamily};
    font-size: ${theme.typographyBodyFontSize};
    font-weight: ${theme.typographyBodyFontWeight};
    letter-spacing: ${theme.typographyBodyLetterSpacing};
    line-height: ${theme.typographyBodyLineHeight};

    ${disabled &&
      css`
        color: ${theme.typographyBodyDisabledColor};
      `}
  `}
`;

export const Body: React.FunctionComponent<BodyProps> = ({
  children,
  className,
  disabled,
}) => {
  const theme = useTheme();

  return (
    <StyledBody
      className={`${className} rtk-type-body`}
      theme={theme}
      disabled={disabled}
    >
      {children}
    </StyledBody>
  );
};
