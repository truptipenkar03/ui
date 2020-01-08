import * as React from 'react';

import {
  motion,
  AnimatePresence
} from "framer-motion";

import {
  Button
} from '../..';

// @ts-ignore
import mdx from './Portal.mdx';

import {
  Portal
} from '../Portal';

export default {
  title: 'Components/Portal',
  component: Portal,
  parameters: {
    docs: {
      page: mdx
    },
  },
};


export const simple = () => {
  const [showPortal, setShowPortal] = React.useState(false);
  return (
    <React.Fragment>
      <Button onClick={() => setShowPortal(!showPortal)}>
        Show Portal
      </Button>
      <AnimatePresence>
        {showPortal &&
        <Portal>
          <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
          >
            <div>I am the portal</div>
          </motion.div>
        </Portal>
        }
      </AnimatePresence>
      <Portal>
        <div style={{visibility: 'hidden'}}>
          <div>I am the portal</div>
        </div>
      </Portal>
    </React.Fragment>
  );
};
