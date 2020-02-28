import * as React from 'react';

import styled, { css } from 'styled-components';

import { useTheme } from '../../hooks';

export interface BodyProps {
  className?: string;
}

const StyledBody = styled.div`
  ${({ theme }) => css`
    color: ${theme.typographyBodyColor};
    font-family: ${theme.typographyBodyFontFamily};
    font-size: ${theme.typographyBodyFontSize};
    font-weight: ${theme.typographyBodyFontWeight};
    letter-spacing: ${theme.typographyBodyLetterSpacing};
    line-height: ${theme.typographyBodyLineHeight};
  `}
`;

export const Body: React.FunctionComponent<BodyProps> = ({
  children,
  className,
}) => {
  const theme = useTheme();

  return (
    <StyledBody className={`${className} rtk-type-body`} theme={theme}>
      {children}
    </StyledBody>
  );
};
