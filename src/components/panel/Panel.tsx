import * as React from 'react';

import styled, { css } from 'styled-components';

import { MouseEventHandler } from 'react';

import { useTheme } from '../../hooks';

import { GlobalTheme } from '../../theme/types';

export interface PanelProps {
  /** Content to show in the panel */
  children?: React.ReactNode;

  /** classname for the panel */
  className?: string;

  /** if true, the panel will have margin on all sides */
  hasMargin?: boolean;

  /** Function to handle click event */
  onClick?: MouseEventHandler<HTMLDivElement>;
}

interface StyledContainerProps {
  hasMargin?: boolean;
  onClick?: MouseEventHandler<HTMLDivElement>;
  theme: GlobalTheme;
}

const Container = styled.div<StyledContainerProps>`
  ${({ hasMargin, onClick, theme }) => css`
    background: ${theme.panelBackground};
    border: ${theme.panelBorder};
    border-color: ${theme.panelBorderColor};
    border-radius: ${theme.panelBorderRadius};
    padding: ${theme.panelPadding};
    margin: ${hasMargin ? theme.panelMargin : 0};
    transition: all ${theme.animationTimeFast}s;

    box-sizing: border-box;

    ${onClick &&
      css`
        &:hover {
          cursor: pointer;
          box-shadow: ${theme.panelHoverBoxShadow};
        }

        &:active {
          box-shadow: ${theme.panelActiveBoxShadow};
        }
      `}
  `};
`;

export const Panel: React.FunctionComponent<PanelProps> = ({
  children,
  className,
  hasMargin,
  onClick,
}) => {
  const theme = useTheme();

  return (
    <Container
      className={`${className} rtk-panel`}
      hasMargin={hasMargin}
      onClick={onClick}
      theme={theme}
    >
      {children}
    </Container>
  );
};

Panel.defaultProps = {
  hasMargin: true,
};

Panel.displayName = 'Panel';
