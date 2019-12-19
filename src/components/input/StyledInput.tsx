import styled, {
  css
} from "styled-components";

import {
  GlobalTheme
} from "../../theme/types";

import {
  InputProps,
  InputSize,
  ValidationStatus
} from "./Input";

interface StyledInputProps extends InputProps {
  inputSize?: InputSize;
}

export const Container = styled.div`
  width: 100%;
`;

export const Label = styled.label`
  ${({ theme }) => css`
    font-size: ${theme.inputLabelFontSize};
    color: ${theme.inputColor};
  `};
`;

export const Status = styled.div<{
  theme: GlobalTheme;
  validationStatus?: ValidationStatus;
}>`
  ${({ theme, validationStatus }) => css`
    font-size: ${theme.inputStatusFontSize};
    color: ${theme.inputStatusColor};

    ${validationStatus === 'error' && css`
      color: ${theme.inputStatusErrorColor};
    `}

    ${validationStatus === 'success' && css`
      color: ${theme.inputStatusSuccessColor};
    `}
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
    
    right: ${theme.inputSuffixRight};
    
    svg {
      width: ${theme.inputDefaultFontSize}px;
      height: ${theme.inputDefaultFontSize}px;
    }
    
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
  ${({ borderType, theme, inputSize, inputPrefix, inputSuffix, validationStatus }) => css`
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
    border-color: ${theme.inputBorderColor};

    box-sizing: border-box;
    
    transition: all ${theme.animationTimeFast}s;
    
    ${inputSize === 'small' && css`
      height: ${theme.inputSmallHeight};
      font-size: ${theme.inputSmallFontSize}px;
    `}
    
    ${inputSize === 'large' && css`
      height: ${theme.inputLargeHeight};
      font-size: ${theme.inputLargeFontSize}px;
    `}
    
    ${borderType === 'bottom' && css`
      padding: 10px 5px;
      background: transparent;
      border: none;
      border-radius: 0;
      border-bottom: ${theme.inputBorder};
      border-color: ${theme.inputBorderColor};
    `};
    
    ${borderType === 'none' && css`
      padding: 10px 0;
      background: transparent;
      border: none;
      color: ${theme.inputColor};
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
    
    ${(inputSuffix || validationStatus !== undefined) && css`
      padding-right: ${theme.inputDefaultFontSize*2 + 15}px;
      
      ${inputSize === 'small' && css`
        padding-right: ${theme.inputSmallFontSize + 15}px;
      `}
      
      ${inputSize === 'large' && css`
        padding-right: ${theme.inputLargeFontSize + 15}px;
      `}
    `};
    
    ${validationStatus === 'error' && css`
      border-color: ${theme.inputStatusErrorBorderColor};
    `};

    ${validationStatus === 'success' && css`
      border-color: ${theme.inputStatusSuccessBorderColor};
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
