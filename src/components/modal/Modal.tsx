import * as React from 'react';

import {
  motion
} from 'framer-motion';

import {
  Portal
} from "..";

import {
  ModalRoot,
  ModalMask,
  ModalContainer,
  ModalWrapper
} from "./StyledModal";

import {
  Header
} from './Header';

import {
  Content
} from './Content';

import {
  DefaultFooter,
  Footer
} from './Footer';

import {
  useAfterMountEffect,
  useTheme
} from "../../hooks";

import {
  ButtonProps
} from "../button/Button";
import {AnimatePresence} from "framer-motion";
import set = Reflect.set;

export interface ModalProps {
  /** Content to show in the Modal */
  children?: React.ReactNode;

  /** classname for the Modal */
  className?: string;

  /** If true, the Modal can be closed from top right corner */
  closable?: boolean;

  /** Props of the cancel button that can be overwritten */
  cancelButtonProps?: ButtonProps;

  /** Text to show in cancel button */
  cancelButtonText?: string;

  /** Custom footer for the Modal */
  footer?: React.ReactNode;

  /** Function to call when Cancel or close button is clicked */
  onCancel?: () => void;

  /** Text to show in okay button */
  okButtonText?: string;

  /** Function to call when Okay button is clicked */
  onOk?: () => void;

  /** Props of the cancel button that can be overwritten */
  okButtonProps?: ButtonProps;

  /** Title for the Modal */
  title?: React.ReactNode;

  /** If true, the Modal will be shown */
  visible: boolean;
}

export const Modal: React.FunctionComponent<ModalProps> = ({
  className,
  children,
  cancelButtonProps,
  cancelButtonText,
  closable,
  title,
  footer,
  okButtonProps,
  okButtonText,
  onOk,
  onCancel,
  visible
}) => {
  const [isVisible, setVisibility] = React.useState<boolean>(visible || false);
  const modalStart = React.useRef(null);
  const modalEnd = React.useRef(null);

  const theme = useTheme();

  const handleVisibility = React.useCallback(() => {
    if (visible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.removeAttribute('style');
    }
    setVisibility(visible);
  }, [visible]);

  const handleOkClick = React.useCallback(() => {
     if (onOk) {
       onOk();
     }
  }, [onOk]);

  const close = React.useCallback(() => {
    if (onCancel) {
      onCancel();
    }
    setVisibility(false);
  }, [onCancel]);

  const handleKeyDown = React.useCallback((e) => {
    console.log(e.keyCode);
  }, []);
  // In order to support clicking the mask to close we need to stop click events on
  // the modal container from bubbling up.
  const handleWrapClick = React.useCallback((e) => {
     e.stopPropagation();
  }, []);

  useAfterMountEffect(handleVisibility, [visible]);

  return (
    <Portal>
      <AnimatePresence>
        {isVisible &&
          <ModalRoot
            className={`${className} rtk-modal`}
            exit={{ opacity: 0 }}
            transition={{ duration: theme.animationTimeVeryFast }}
            tabIndex={-1}
          >
            <ModalMask
              tabIndex={-1}
              key="mask"
              theme={theme}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: theme.animationTimeVeryFast }}
            />
            <ModalWrapper
              role="document"
              tabIndex={-1}
              onKeyDown={handleKeyDown}
              // onClick={close}
            >
              <ModalContainer
                tabIndex={-1}
                initial={{ y: 24, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: theme.animationTimeVeryFast }}
                // onClick={handleWrapClick}
              >
                <Header
                  closable={closable}
                  onCancel={close}
                  theme={theme}
                  setVisibility={setVisibility}
                >
                  {title}
                </Header>
                <Content theme={theme}>
                  {children}
                </Content>
                <Footer>
                  {footer ?
                    footer :
                    <DefaultFooter
                      cancelButtonProps={cancelButtonProps}
                      cancelButtonText={cancelButtonText}
                      okButtonProps={okButtonProps}
                      okButtonText={okButtonText}
                      onCancel={close}
                      onOk={handleOkClick}
                    />
                  }
                </Footer>
              </ModalContainer>
            </ModalWrapper>
          </ModalRoot>
        }
      </AnimatePresence>
    </Portal>
  );
};

Modal.defaultProps = {
  visible: false,
  okButtonProps: {
    type: 'primary'
  },
  cancelButtonProps: {
    ghost: true
  }
};
