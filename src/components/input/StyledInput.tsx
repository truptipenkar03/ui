import styled, { css } from 'styled-components';

import { GlobalTheme } from '../../theme/types';

import { InputProps, InputSize, ValidationStatus } from './Input';

import { Typography } from '../typography/Typography';

interface StyledInputProps extends InputProps {
  inputSize?: InputSize;
}

export const Container = styled.div`
  width: 100%;
`;

export const Label = styled(Typography.Body)<{ required?: boolean }>`
  ${({ theme, required }) => css`
    ${required &&
      css`
        ::before {
          content: '* ';
          color: ${theme.colors.red};
        }
      `}
  `};
`;

export const Description = styled(Typography.Description)`
  ${() => css`
    margin-bottom: 4px;
  `};
`;

export const Status = styled.div<{
  theme: GlobalTheme;
  validationStatus?: ValidationStatus;
}>`
  ${({ theme, validationStatus }) => css`
    font-size: ${theme.inputStatusFontSize};
    color: ${theme.inputStatusColor};

    ${validationStatus === 'error' &&
      css`
        color: ${theme.inputStatusErrorColor};
      `}

    ${validationStatus === 'success' &&
      css`
        color: ${theme.inputStatusSuccessColor};
      `}
      
    ${validationStatus === 'warning' &&
      css`
        color: ${theme.inputStatusWarningColor};
      `}    
    
    ${validationStatus === 'loading' &&
      css`
        color: ${theme.inputStatusLoadingColor};
      `}
  `};
`;

export const AffixContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const Prefix = styled.div<{
  theme: GlobalTheme;
  inputSize?: InputSize;
}>`
  ${({ theme, inputSize }) => css`
    position: absolute;
    display: flex;
    align-items: center;

    height: ${theme.inputDefaultHeight};
    left: ${theme.inputPrefixLeft};

    svg {
      width: ${theme.inputDefaultFontSize}px;
      height: ${theme.inputDefaultFontSize}px;
    }

    ${inputSize === 'small' &&
      css`
        height: ${theme.inputSmallHeight};

        svg {
          width: ${theme.inputSmallFontSize}px;
          height: ${theme.inputSmallFontSize}px;
        }
      `}

    ${inputSize === 'large' &&
      css`
        height: ${theme.inputLargeHeight};

        svg {
          width: ${theme.inputLargeFontSize}px;
          height: ${theme.inputLargeFontSize}px;
        }
      `}
  `};
`;

export const FeedbackMessage = styled.div`
  height: ${({ theme }) => theme.inputStatusMessageHeight};
`;

export const StyledInput = styled.input<StyledInputProps>`
  ${({
    borderType,
    theme,
    type,
    inputSize,
    inputPrefix,
    inputSuffix,
    validationStatus,
    hasFeedbackIcon,
  }) => css`
    height: ${theme.inputDefaultHeight};               
    font-size: ${theme.inputDefaultFontSize}px;
    
    width: 100%;
    -webkit-appearance: none;
    font-family: ${theme.inputFontFamily};
    
    background: ${theme.inputBackground};
    color: ${theme.inputColor};
    
    padding: ${theme.inputPadding};
    border: ${theme.inputBorder};
    border-color: ${theme.inputBorderColor};
    border-radius: ${theme.inputBorderRadius};
    border-color: ${theme.inputBorderColor};

    box-sizing: border-box;
    
    transition: all ${theme.animationTimeFast}s;
    
    ${inputSize === 'small' &&
      css`
        height: ${theme.inputSmallHeight};
        font-size: ${theme.inputSmallFontSize}px;
      `}
    
    ${inputSize === 'large' &&
      css`
        height: ${theme.inputLargeHeight};
        font-size: ${theme.inputLargeFontSize}px;
      `}

    ${type === 'textarea' &&
      css`
        height: 6em;
        padding: ${theme.inputTextAreaPadding};
        resize: vertical;
      `}
    
    ${borderType === 'bottom' &&
      css`
        padding: 10px 5px;
        background: transparent;
        border: none;
        border-radius: 0;
        border-bottom: ${theme.inputBorder};
        border-color: ${theme.inputBorderColor};
      `};
    
    ${borderType === 'none' &&
      css`
        padding: 10px 0;
        background: transparent;
        border: none;
        color: ${theme.inputColor};
      `};
    
    // has prefix
    ${inputPrefix &&
      css`
        padding-left: ${theme.inputDefaultFontSize + 15}px;

        ${inputSize === 'small' &&
          css`
            padding-left: ${theme.inputSmallFontSize + 15}px;
          `}

        ${inputSize === 'large' &&
          css`
            padding-left: ${theme.inputLargeFontSize + 15}px;
          `}
      `};
    
    ${inputSuffix &&
      css`
      padding-right: ${theme.inputDefaultFontSize + 15}px;
      
      ${inputSize === 'small' &&
        css`
          padding-right: ${theme.inputSmallFontSize + 15}px;
        `}
      
      ${inputSize === 'large' &&
        css`
          padding-right: ${theme.inputLargeFontSize + 15}px;
        `}
      
       ${validationStatus !== undefined &&
         hasFeedbackIcon &&
         css`
           padding-right: ${theme.inputDefaultFontSize * 2 + 20}px;

           ${inputSize === 'small' &&
             css`
               padding-right: ${theme.inputSmallFontSize * 2 + 20}px;
             `}

           ${inputSize === 'large' &&
             css`
               padding-right: ${theme.inputLargeFontSize * 2 + 20}px;
             `}
         `}
    `};

    ${validationStatus === 'error' &&
      css`
        border-color: ${theme.inputStatusErrorBorderColor};
      `};

    ${validationStatus === 'success' &&
      css`
        border-color: ${theme.inputStatusSuccessBorderColor};
      `};
      
    ${validationStatus === 'warning' &&
      css`
        border-color: ${theme.inputStatusWarningColor};
      `};
    
    ${validationStatus === 'loading' &&
      css`
        border-color: ${theme.inputStatusLoadingBorderColor};
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

      ${borderType === 'bottom' &&
        css`
          border: none;
          border-bottom: 1px solid ${theme.inputFocusBorderColor};
          border-radius: 0;
        `};

      ${borderType === 'none' &&
        css`
          border: none;
        `};

      outline: none;
    }
  `};
`;
