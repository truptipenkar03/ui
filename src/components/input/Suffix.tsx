import * as React from 'react';

import {
  AnimatePresence,
  motion
} from "framer-motion";

import styled, {
  css
} from "styled-components";

import {
  Icon
} from "../icons";

import TimesSolid from "../icons/TimesSolid";
import CheckSolid from "../icons/CheckSolid";
import {GlobalTheme} from "../../theme/types";
import {InputSize} from "./Input";

export const StyledSuffix = styled.div<{
  theme: GlobalTheme;
  inputSize?: InputSize;
  isPrefix?: boolean;
}>`
  ${({ theme, inputSize, isPrefix }) => css`
    position: absolute;
    
    display: flex;
    align-items: center;

    height: ${theme.inputDefaultHeight};
    right: ${theme.inputSuffixRight};
    
    svg {
      width: ${theme.inputDefaultFontSize}px;
      height: ${theme.inputDefaultFontSize}px;
    }
    
    ${inputSize === 'small' && css`
      height: ${theme.inputSmallHeight};
      
      svg {
        width: ${theme.inputSmallFontSize}px;
        height: ${theme.inputSmallFontSize}px;
      }
    `}
    
    ${inputSize === 'large' && css`
      height: ${theme.inputLargeHeight};
      
      svg {
        width: ${theme.inputLargeFontSize}px;
        height: ${theme.inputLargeFontSize}px;
      }
    `}
    
    ${isPrefix && css`
      left: ${theme.inputPrefixLeft};
    `}
  `};
`;

export const Suffix: React.FunctionComponent<any> = ({
  validationStatus,
  theme,
  iconDim,
  inputSuffix,
  size,
  hasFeedbackIcon
}) => {
  let suffixContent;
  switch (validationStatus) {
    case 'error': {
      suffixContent = <TimesSolid fill={theme.colors.danger} />;
      break;
    }
    case 'success': {
      suffixContent = <CheckSolid fill={theme.colors.success} />;
      break;
    }
    case 'loading': {
      suffixContent = (
        <Icon.Loading
          height={`${iconDim}px`}
          width={`${iconDim}px`}
        />
      );
      break;
    }
  }

  const hasFeedback = (hasFeedbackIcon && validationStatus !== undefined);
  return (
    <StyledSuffix
      theme={theme}
      inputSize={size}
    >
      <motion.div
        key="suffix"
        style={{ position: 'relative' }}
        variants={{
          hasFeedback: {
            marginRight: '8px'
          },
          noFeedback: {
            marginRight: 0
          }
        }}
        animate={hasFeedback ? 'hasFeedback' : 'noFeedback'}
      >
        {inputSuffix}
      </motion.div>
      <AnimatePresence>
        {hasFeedback &&
          <motion.div
            key="feedback"
            style={{position: 'relative'}}
            initial={{opacity: 0, right: '-10px'}}
            animate={{opacity: 1, right: '0px'}}
            exit={{opacity: 0, right: '-10px' }}
            transition={{duration: theme.animationTimeVeryFast}}
          >
            {suffixContent}
          </motion.div>
        }
      </AnimatePresence>
    </StyledSuffix>
  )
};
