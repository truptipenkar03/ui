import * as React from "react";
import {MouseEventHandler} from "react";
import styled, {css} from "styled-components";
import {ButtonType} from "./Button";

interface StyledButtonProps {
  buttonType?: ButtonType;
  children?: React.ReactNode;
  className?: string;
  disabled?: boolean;
  loading?: boolean;
  type?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  ref?: React.Ref<HTMLButtonElement>;
}


export const StyledButton = styled.button<StyledButtonProps>`
  ${(props) => css`
    display: flex;
    flex-direction: row;
    align-items: center;

    border: ${props.theme.button.border};
    border-radius: ${props.theme.button.borderRadius};
    cursor: pointer;
    font-size: ${props.theme.button.fontSize};
    font-weight: ${props.theme.button.fontWeight};
    height: ${props.theme.button.height};
    padding: ${props.theme.button.padding};
    white-space: nowrap;
    outline: 0;

    transition: all ${props.theme.animations.time.fast};

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
      
      &:focus {
        background: ${props.theme.button.primary.hoverBackground};
        color: ${props.theme.button.primary.focusColor};
      }
      
      ${(props.disabled || props.loading) && css`
        &:hover {
          background: ${props.theme.button.primary.background};
          color: ${props.theme.button.primary.hoverColor};
        }
        
        &:focus {
          background: ${props.theme.button.primary.background};
          color: ${props.theme.button.primary.focusColor};
        }
      `};
    `};
    
    // ----------- Ghost --------- //
    ${(props.buttonType === 'ghost') && css`
      background: ${props.theme.button.ghost.background};
      border: ${props.theme.button.ghost.border};
      border-color: ${props.theme.button.ghost.borderColor};
      color: ${props.theme.button.ghost.color};
  
      &:hover {
        background: ${props.theme.button.ghost.hoverBackground};
        color: ${props.theme.button.ghost.hoverColor};
      }
      
      &:focus {
        background: ${props.theme.button.ghost.hoverBackground};
        color: ${props.theme.button.ghost.focusColor};
      }
      
      ${(props.disabled || props.loading) && css`
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
      
      &:focus {
        background: ${props.theme.button.link.hoverBackground};
        color: ${props.theme.button.link.focusColor};
        text-decoration: underline;
      }
      
      ${(props.disabled || props.loading) && css`
        &:hover {
          background: ${props.theme.button.link.background};
          color: ${props.theme.button.link.color};
          text-decoration: none;
        }
        
        &:focus {
          background: ${props.theme.button.link.background};
          color: ${props.theme.button.link.color};
          text-decoration: none;
        }
      `};
    `};
    
    ${(props.disabled || props.loading) && css`
      pointer-events: none;
      opacity: 0.5;
    `};
  `};
`;
