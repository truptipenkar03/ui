import * as React from "react";
import {MouseEventHandler} from "react";
import styled, {css} from "styled-components";
import {ButtonType, ShapeType, SizeType} from "./Button";

interface CustomProps {
  loading?: boolean;
  ghost?: boolean;
  shape?: ShapeType;
  size?: SizeType;
}

interface StyledButtonProps {
  buttonType?: ButtonType;
  children?: React.ReactNode;
  className?: string;
  customProps: CustomProps;
  disabled?: boolean;
  type?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  ref?: React.Ref<HTMLButtonElement>;
}

export const StyledButton = styled.button<StyledButtonProps>`
  ${(props) => css`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    border: ${props.theme.button.border};
    border-radius: ${props.theme.button.borderRadius};
    cursor: pointer;
    font-size: ${props.theme.button.size[props.customProps.size || 'default'].fontSize};
    font-weight: ${props.theme.button.fontWeight};
    height: ${props.theme.button.size[props.customProps.size || 'default'].height};
    line-height: 1;
    padding: ${props.theme.button.padding};
    white-space: nowrap;
    outline: 0;
    user-select: none;
    touch-action: manipulation;

    transition: all ${props.theme.animations.time.fast}s;
    
   -webkit-tap-highlight-color: transparent;

    // ----------- Primary --------- //
    ${(props.buttonType === 'primary') && css`
      background: ${props.theme.button.primary.background};
      color: ${props.theme.button.primary.color};
      border: ${props.theme.button.primary.border};  
      border-color: ${props.theme.button.primary.borderColor};
      
      &:hover {
        background: ${props.theme.button.primary.hoverBackground};
        color: ${props.theme.button.primary.hoverColor};
      }
      
      &:active {
        background: ${props.theme.button.primary.activeBackground};
        color: ${props.theme.button.primary.activeColor};
      }
      
      ${(props.disabled || props.customProps.loading) && css`
        &:hover {
          background: ${props.theme.button.primary.background};
          color: ${props.theme.button.primary.hoverColor};
        }
        
        &:active {
          background: ${props.theme.button.primary.background};
          color: ${props.theme.button.primary.activeColor};
        }
      `};
    `};
    
    // ----------- Danger --------- //
    ${(props.buttonType === 'danger') && css`
      background: ${props.theme.button.danger.background};
      border: ${props.theme.button.danger.border};
      border-color: ${props.theme.button.danger.borderColor};
      color: ${props.theme.button.danger.color};

      &:hover {
        background: ${props.theme.button.danger.hoverBackground};
        color: ${props.theme.button.danger.hoverColor};
      }

      &:active {
        background: ${props.theme.button.danger.activeBackground};
        color: ${props.theme.button.danger.activeColor};
      }

      ${(props.disabled || props.customProps.loading) && css`
        &:hover {
          background: ${props.theme.button.danger.background};
          color: ${props.theme.button.danger.color};
        }

        &:active {
          background: ${props.theme.button.danger.background};
          color: ${props.theme.button.danger.color};
        }
      `};
    `};
    
    // ----------- Link --------- //
    ${(props.buttonType === 'link') && css`
      background: ${props.theme.button.link.background};
      border: ${props.theme.button.link.border};
      border-color: ${props.theme.button.link.borderColor};
      color: ${props.theme.button.link.color};

      &:hover {
        background: ${props.theme.button.link.hoverBackground};
        color: ${props.theme.button.link.hoverColor};
        text-decoration: underline;
      }

      &:active {
        background: ${props.theme.button.link.activeBackground};
        color: ${props.theme.button.link.activeColor};
        text-decoration: underline;
      }

      ${(props.disabled || props.customProps.loading) && css`
        &:hover {
          background: ${props.theme.button.link.background};
          color: ${props.theme.button.link.color};
          text-decoration: none;
        }

        &:active {
          background: ${props.theme.button.link.background};
          color: ${props.theme.button.link.color};
          text-decoration: none;
        }
      `};
    `};
    
    // ----------- Ghost --------- //
    ${props.customProps.ghost && css`
      background: transparent;
      border: ${props.theme.button.ghost.border};
      border-color: ${props.theme.button[props.buttonType || 'primary'].background};
      color: ${props.buttonType === 'link' ?
        props.theme.button.link.color :
        props.theme.button[props.buttonType || 'primary'].background
      };
  
      &:hover {
        background: ${props.theme.button[props.buttonType || 'primary'].background};
        color: ${props.theme.button[props.buttonType || 'primary'].hoverColor};
      }
      
      &:active {
        background: ${props.buttonType !== 'link' &&
          props.theme.button[props.buttonType || 'primary'].activeBackground
        };
        color: ${props.theme.button.ghost.activeColor};
      }
      
      ${(props.disabled || props.customProps.loading) && css`
        &:hover {
          background: ${props.theme.button.ghost.background};
          color: ${props.theme.button.ghost.color};
        }
        
        &:focus {
          background: ${props.theme.button.ghost.background};
          color: ${props.theme.button.ghost.color};
        }
      `};
    `};


    ${(props.disabled || props.customProps.loading) && css`
      pointer-events: none;
      opacity: 0.5;
    `};

    // ----------- Circle --------- //
    ${props.customProps.shape === 'circle' && css`
      padding: 0;
      min-width: ${props.theme.button.size[props.customProps.size || 'default'].height};
      text-align: center;
      border-radius: 50%;

      ${props.customProps.loading && css`
        span {
          display: none;
        }
      `};
    `}

    &::-moz-focus-inner {
      border: none;
    }
  `};
`;
