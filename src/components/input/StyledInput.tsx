import styled, {
  css
} from "styled-components";

import {
  GlobalTheme
} from "../../theme/types";

import {
  InputProps,
  InputSize
} from "./Input";

interface StyledInputProps extends InputProps {
  inputSize?: InputSize;
}

export const Container = styled.div`
  width: 100%;
`;

export const Label = styled.label<{
  theme: GlobalTheme;
  inputSize?: InputSize;
}>`
  ${({ theme, inputSize }) => css`
    font-size: ${theme.inputDefaultFontSize};
    color: ${theme.inputColor};

    ${inputSize === 'small' && css`
      font-size: ${theme.inputSmallFontSize};
    `}
      
    ${inputSize === 'large' && css`
      font-size: ${theme.inputLargeFontSize};
    `}
  `}
`;

export const Error = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.danger};
  `};
`;

export const AffixContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const Affix = styled.div<{
  theme: GlobalTheme;
  inputSize?: InputSize;
  isPrefix?: boolean;
}>`
  ${({ theme, inputSize, isPrefix }) => css`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    height: ${theme.inputDefaultHeight};
    
    width: ${theme.inputDefaultFontSize}px;
    right: ${theme.inputSuffixRight};
    
    ${inputSize === 'small' && css`
      height: ${theme.inputSmallHeight};
      width: ${theme.inputSmallFontSize}px;
    `}
    
    ${inputSize === 'large' && css`
      height: ${theme.inputLargeHeight};
      width: ${theme.inputLargeFontSize}px;
    `}
    
    ${isPrefix && css`
      left: ${theme.inputPrefixLeft};
    `}
  `};
`;

export const StyledInput = styled.input<StyledInputProps>`
  ${({ borderType, error, theme, inputSize, inputPrefix, inputSuffix }) => css`
    height: ${theme.inputDefaultHeight};
    font-size: ${theme.inputDefaultFontSize}px;
    
    width: 100%;
    -webkit-appearance: none;
    font-family: inherit;
    
    background: ${theme.inputBackground};
    color: ${theme.inputColor};
    
    padding: ${theme.inputPadding};
    border: ${theme.inputBorder};
    border-color: ${theme.inputBorderColor};
    border-radius: ${theme.inputBorderRadius};
    border-color: ${error ? theme.colors.danger : theme.inputBorderColor};

    box-sizing: border-box;
    
    ${inputSize === 'small' && css`
      height: ${theme.inputSmallHeight};
      font-size: ${theme.inputSmallFontSize}px;
    `}
    
    ${inputSize === 'large' && css`
      height: ${theme.inputLargeHeight};
      font-size: ${theme.inputLargeFontSize}px;
    `}
    
    ${error && css`
      border-color: ${theme.colors.danger};
    `}
    
    ${borderType === 'bottom' && css`
      padding: 10px 5px;
      background: transparent;
      border: none;
      border-radius: 0;
      border-bottom: ${theme.inputBorder};
      border-color: ${error ? theme.colors.danger : theme.inputBorderColor};
    `};
    
    ${borderType === 'none' && css`
      padding: 10px 0;
      background: transparent;
      border: none;
      color: ${error ? theme.colors.danger : theme.inputColor};
    `};
    
    ${inputPrefix && css`
      padding-left: ${theme.inputDefaultFontSize + 15}px;
      
      ${inputSize === 'small' && css`
        padding-left: ${theme.inputSmallFontSize + 15}px;
      `}
      
      ${inputSize === 'large' && css`
        padding-left: ${theme.inputLargeFontSize + 15}px;
      `}
    `};
    
    ${inputSuffix && css`
      padding-right: ${theme.inputDefaultFontSize + 15}px;
      
      ${inputSize === 'small' && css`
        padding-right: ${theme.inputSmallFontSize + 15}px;
      `}
      
      ${inputSize === 'large' && css`
        padding-right: ${theme.inputLargeFontSize + 15}px;
      `}
    `};
    
    
    &:read-only {
      cursor: pointer;
    }
  
    &::placeholder {
      color: ${theme.inputPlaceholderColor};
    }
  
    &:disabled {
      cursor: not-allowed;
      opacity: 0.5;
    }
    
    &:focus {
      border-color: ${theme.inputFocusBorderColor};
 
      ${borderType === 'bottom' && css`
        border: none;
        border-bottom: 1px solid ${theme.inputFocusBorderColor};
        border-radius: 0;
      `};
  
      ${borderType === 'none' && css`
        border: none;
      `};
  
      outline: none;
    }
  `};
`;
