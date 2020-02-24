import * as React from 'react';

import styled, { css } from 'styled-components';

import { useTheme } from '../../hooks';

import { GlobalTheme } from '../../theme/types';

export interface ContentProps {
  className?: string;
}

interface ContentContainerProps {
  theme: GlobalTheme;
}

const Container = styled.div<ContentContainerProps>`
  ${() => css`
    flex: 1;
  `}
`;

export const Content: React.FunctionComponent<ContentProps> = ({
  children,
  className,
}) => {
  const theme = useTheme();

  return (
    <Container className={`${className} rtk-layout-content`} theme={theme}>
      {children}
    </Container>
  );
};
