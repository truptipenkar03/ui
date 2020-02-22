import * as React from 'react';

import styled, { css } from 'styled-components';

import { useTheme } from '../../hooks';

import { GlobalTheme } from '../../theme/types';

interface FooterProps {
  className?: string;
}

interface FooterContainerProps {
  theme: GlobalTheme;
}

const Container = styled.div<FooterContainerProps>`
  ${({ theme }) => css`
    height: ${theme.layoutFooterHeight};
  `}
`;

export const Footer: React.FunctionComponent<FooterProps> = ({
  children,
  className,
}) => {
  const theme = useTheme();

  return (
    <Container className={`${className} rtk-layout-footer`} theme={theme}>
      {children}
    </Container>
  );
};
