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
  ${(props) => css`
    width: 100%;
    background: ${props.theme.panel.background};
    border: ${props.theme.panel.border};
    border-color: ${props.theme.panel.borderColor};
    border-radius: ${props.theme.panel.borderRadius};
    
    transition: all ${props.theme.animations.time.veryFast}s;
    
    ${props.onClick && css`
      box-shadow: ${props.theme.panel.boxShadow};
      &:hover {
        cursor: pointer;
        box-shadow: ${props.theme.panel.hoverBoxShadow}; 
      }
      
      &:active {
        box-shadow: ${props.theme.panel.boxShadow}; 
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


