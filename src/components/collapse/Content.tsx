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
}

interface ContentProps {
  collapseType?: 'panel' | 'stack';
  ghost?: boolean;
  theme?: any;
}

export const ContentContainer: React.FunctionComponent<ContentContainerProps> = ({ children, animate }) => {
  const variants = {
    closed: {
      height: 0,
      opacity: 0
    },
    open: {
      height: 'auto',
      opacity: 1
    },
  };

  return (
    <AnimatePresence initial={false}>
      {animate === 'open' && (
        <motion.div
          key="fooooo"
          style={{ background: 'red' }}
          initial="closed"
          exit="closed"
          animate="open"
          variants={variants}
          transition={{ duration: 5 }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const StyledContent = styled.div<ContentProps>`
  ${(props) => css`
    padding: ${props.theme.collapse.contentPadding};
    //background: ${props.theme.collapse.contentBackground};
    background: blue;
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
