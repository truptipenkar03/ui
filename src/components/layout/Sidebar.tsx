import * as React from 'react';

import styled, { css } from 'styled-components';

import { useTheme } from '../../hooks';

import { GlobalTheme } from '../../theme/types';

interface SidebarProps {
  className?: string;
}

interface SidebarContainerProps {
  theme: GlobalTheme;
}

const Container = styled.div<SidebarContainerProps>`
  ${({ theme }) => css`
    height: 100%;
    width: ${theme.layoutSidebarWidthFull};
  `}
`;

export const Sidebar: React.FunctionComponent<SidebarProps> = ({
  children,
  className,
}) => {
  const theme = useTheme();

  return (
    <Container className={`${className} rtk-layout-sidebar`} theme={theme}>
      {children}
    </Container>
  );
};
