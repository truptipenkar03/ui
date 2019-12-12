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

export const ContentContainer: React.FunctionComponent<ContentContainerProps> = ({
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
      style={{
        overflow: 'hidden'
      }}
      initial="closed"
      exit="closed"
      animate={animate}
      variants={variants}
      transition={{ duration: theme.animations.time.veryFast, type: 'tween' }}
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
  ${(props) => css`
    padding: ${props.theme.collapse.content.padding};
    background: ${props.theme.collapse.content.background};
    border: ${props.theme.collapse.border};
    border-color: ${props.theme.collapse.borderColor};
    border-radius: ${props.theme.collapse.borderRadius};
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
