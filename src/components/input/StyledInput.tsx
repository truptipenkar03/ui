import styled, { css } from 'styled-components';

import { GlobalTheme } from '../../theme/types';

import { InputProps, InputSize } from './Input';

import { Status } from '../formItem/FormItem';

import { Typography } from '../typography/Typography';

interface StyledInputProps extends InputProps {
  inputSize?: InputSize;
  status?: Status;
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
  ${({ borderType, theme, type, inputSize, status }) => css`
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
    
    transition: border ${theme.animationTimeFast}s;
    
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

    ${status === 'error' &&
      css`
        border-color: ${theme.inputStatusErrorBorderColor};
      `};

    ${status === 'success' &&
      css`
        border-color: ${theme.inputStatusSuccessBorderColor};
      `};
      
    ${status === 'warning' &&
      css`
        border-color: ${theme.inputStatusWarningBorderColor};
      `};
    
    ${status === 'loading' &&
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
