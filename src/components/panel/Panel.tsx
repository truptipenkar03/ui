import * as React from 'react';

import styled, {
  css
} from 'styled-components';

import {
  MouseEventHandler
} from "react";

import {
  useTheme
} from '../../hooks/useTheme';

export interface PanelProps {
  /** Content to show in the paper */
  children?: React.ReactNode;

  /** classname for the paper */
  className?: string;

  /** Function to handle click event */
  onClick?: MouseEventHandler<HTMLDivElement>;
}

const Container = styled.div`
  ${({ onClick, theme }) => css`
    width: 100%;
    background: ${theme.panelBackground};
    border: ${theme.panelBorder};
    border-color: ${theme.panelBorderColor};
    border-radius: ${theme.panelBorderRadius};
    
    transition: all ${theme.animationTimeFast}s;
    
    ${onClick && css`
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
  onClick
}) => {
  const theme = useTheme();

  return (
    <Container
      className={`${className} rtk-panel`}
      onClick={onClick}
      theme={theme}
    >
      {children}
    </Container>
  );
};


