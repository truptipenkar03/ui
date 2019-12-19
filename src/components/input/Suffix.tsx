import * as React from 'react';
import {AnimatePresence, motion} from "framer-motion";

import {
  Icon
} from "../icons";

import {
  Affix
} from "./StyledInput";

import TimesSolid from "../icons/TimesSolid";
import CheckSolid from "../icons/CheckSolid";
import {validation} from "./stories/Input.stories";

export const Suffix: React.FunctionComponent<any> = ({
  validationStatus,
  theme,
  iconDim,
  inputSuffix,
  size,
  hasFeedbackIcon,
  style
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
    <Affix
      style={{ display: 'flex', alignItems: 'center' }}
      theme={theme}
      inputSize={size}
    >
      <motion.div
        key="suffix"
        variants={{
          hasFeedback: {
            paddingRight: '8px'
          },
          noFeedback: {
            paddingRight: 0
          }
        }}
        animate={hasFeedback ? 'hasFeedback' : 'noFeedback'}
        transition={{duration: theme.animationTimeVeryFast}}
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
    </Affix>
  )
};
