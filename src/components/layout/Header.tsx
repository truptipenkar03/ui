import * as React from 'react';

import styled, { css } from 'styled-components';

import { useTheme } from '../../hooks';

import { GlobalTheme } from '../../theme/types';

export interface HeaderProps {
  className?: string;
}

interface HeaderContainerProps {
  theme: GlobalTheme;
}

const Container = styled.div<HeaderContainerProps>`
  ${({ theme }) => css`
    height: ${theme.layoutHeaderHeight};
  `}
`;

export const Header: React.FunctionComponent<HeaderProps> = ({
  children,
  className,
}) => {
  const theme = useTheme();

  return (
    <Container className={`${className} rtk-layout-header`} theme={theme}>
      {children}
    </Container>
  );
};
