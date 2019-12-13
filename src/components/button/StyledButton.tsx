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
  ${({ buttonType, customProps, disabled, theme }) => css`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    border: ${theme.buttonBorder};
    border-radius: ${theme.buttonBorderRadius};
    cursor: pointer;
    font-size: ${theme.buttonDefaultFontSize};
    font-weight: ${theme.buttonFontWeight};
    height: ${theme.buttonDefaultHeight};
    line-height: 1;
    padding: ${theme.buttonPadding};
    white-space: nowrap;
    outline: 0;
    user-select: none;
    touch-action: manipulation;

    transition: all ${theme.animationTimeFast}s;
    
   -webkit-tap-highlight-color: transparent;
   
   // ----------- Size Small --------- //
    ${(customProps.size === 'small') && css`
      font-size: ${theme.buttonSmallFontSize};
      height: ${theme.buttonSmallHeight};
    `}
    
   // ----------- Size Large --------- //
    ${(customProps.size === 'large') && css`
      font-size: ${theme.buttonLargeFontSize};
      height: ${theme.buttonLargeHeight};
    `}

    // ----------- Primary --------- //
    ${(buttonType === 'primary') && css`
      background: ${theme.buttonPrimaryBackground};
      color: ${theme.buttonPrimaryColor};
      border: ${theme.buttonPrimaryBorder};  
      border-color: ${theme.buttonPrimaryBorderColor};
      
      &:hover {
        background: ${theme.buttonPrimaryHoverBackground};
        color: ${theme.buttonPrimaryHoverColor};
      }
      
      &:active {
        background: ${theme.buttonPrimaryActiveBackground};
        color: ${theme.buttonPrimaryActiveColor};
      }
      
      ${customProps.ghost && css`
        background: transparent;
        border: ${theme.buttonGhostBorder};
        border-color: ${theme.buttonPrimaryBackground};
        color: ${theme.buttonPrimaryBackground};
        
        &:hover {
          border: ${theme.buttonGhostBorder};
          border-color: transparent;
        }
  
        &:active {
          border: ${theme.buttonGhostBorder};
          border-color: transparent;
        }
      `}
    `};
    
    // ----------- Danger --------- //
    ${(buttonType === 'danger') && css`
      background: ${theme.buttonDangerBackground};
      border: ${theme.buttonDangerBorder};
      border-color: ${theme.buttonDangerBorderColor};
      color: ${theme.buttonDangerColor};

      &:hover {
        background: ${theme.buttonDangerHoverBackground};
        color: ${theme.buttonDangerHoverColor};
      }

      &:active {
        background: ${theme.buttonDangerActiveBackground};
        color: ${theme.buttonDangerActiveColor};
      }
      
      ${customProps.ghost && css`
        background: transparent;
        border: ${theme.buttonGhostBorder};
        border-color: ${theme.buttonDangerBackground};
        color: ${theme.buttonDangerBackground};
        
        &:hover {
          border: ${theme.buttonGhostBorder};
          border-color: transparent;
        }
  
        &:active {
          border: ${theme.buttonGhostBorder};
          border-color: transparent;
        }
      `}
      
    `};
    
    // ----------- Link --------- //
    ${(buttonType === 'link') && css`
      background: ${theme.buttonLinkBackground};
      border: ${theme.buttonLinkBorder};
      border-color: ${theme.buttonLinkBorderColor};
      color: ${theme.buttonLinkColor};

      &:hover {
        background: ${theme.buttonLinkHoverBackground};
        color: ${theme.buttonLinkHoverColor};
        text-decoration: underline;
      }

      &:active {
        background: ${theme.buttonLinkActiveBackground};
        color: ${theme.buttonLinkActiveColor};
        text-decoration: underline;
      }
    `};

    ${(disabled || customProps.loading) && css`
      pointer-events: none;
      opacity: 0.5;
    `};

    // ----------- Circle --------- //
    ${customProps.shape === 'circle' && css`
      padding: 0;
      min-width: ${theme.buttonDefaultHeight};
      text-align: center;
      border-radius: 50%;
      
      // ----------- Size Small --------- //
      ${(customProps.size === 'small') && css`
        min-width: ${theme.buttonSmallHeight};
      `}
      
     // ----------- Size Large --------- //
      ${(customProps.size === 'large') && css`
        min-width: ${theme.buttonLargeHeight};
      `}

      ${customProps.loading && css`
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
