import * as React from 'react';

import {
  AnimatePresence,
  motion
} from 'framer-motion';

import styled, {
  css
} from 'styled-components';

interface ContentContainerProps {
  animate: 'open' | 'closed';
  destroyOnClose?: boolean;
  theme: any;
}

interface ContentProps {
  theme: any;
}

export const ContentContainer: React.FunctionComponent<any> = ({
  onMouseEnter,
  onMouseLeave,
  animate,
  children,
  destroyOnClose,
  theme
}) => {
  const variants = {
    closed: {
      height: 0
    },
    open: {
      height: 'auto'
    },
  };

  const content = (
    <motion.div
      key="content"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{
        overflow: 'hidden'
      }}
      initial="closed"
      exit="closed"
      animate={animate}
      variants={variants}
      transition={{ duration: theme.animationTimeVeryFast, type: 'tween' }}
    >
      {children}
    </motion.div>
  );

  return (
    <AnimatePresence initial={false}>
      { destroyOnClose ?
        animate === 'open' && content :
        content
      }
    </AnimatePresence>
  );
};

const StyledContent = styled.div<ContentProps>`
  ${({ theme }) => css`
    padding: ${theme.collapseContentPadding};
    background: ${theme.collapseContentBackground};
    border: ${theme.collapseBorder};
    border-color: ${theme.collapseBorderColor};
    border-radius: ${theme.collapseBorderRadius};
    border-top: none;
    
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  `};
`;

export const Content: React.FunctionComponent<ContentProps> = (props) => {
  const {
    children
  } = props;

  return (
    <StyledContent
      className={'rtk-collapse-content'}
      {...props}
    >
      {children}
    </StyledContent>
  );
};
