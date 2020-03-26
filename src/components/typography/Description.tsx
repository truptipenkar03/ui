import * as React from 'react';

import styled, { css } from 'styled-components';

import { useTheme } from '../../hooks';

export interface DescriptionProps {
  className?: string;
}

const StyledDescription = styled.div`
  ${({ theme }) => css`
    color: ${theme.typographyDescriptionColor};
    font-family: ${theme.typographyDescriptionFontFamily};
    font-size: ${theme.typographyDescriptionFontSize};
    font-weight: ${theme.typographyDescriptionFontWeight};
    letter-spacing: ${theme.typographyDescriptionLetterSpacing};
    line-height: ${theme.typographyDescriptionLineHeight};
  `}
`;

export const Description: React.FunctionComponent<DescriptionProps> = ({
  children,
  className,
}) => {
  const theme = useTheme();

  return (
    <StyledDescription
      className={`${className} rtk-type-description`}
      theme={theme}
    >
      {children}
    </StyledDescription>
  );
};

Description.displayName = 'Description';
