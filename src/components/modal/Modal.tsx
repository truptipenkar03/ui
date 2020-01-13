import * as React from 'react';

import {
  AnimatePresence,
} from 'framer-motion';

import {
  Portal
} from "..";

import {
  ModalRoot,
  ModalMask,
  ModalContainer,
  ModalWrapper, ModalSentinel
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

enum KEY_CODES {
  'ESC' = 27,
  'TAB' = 9,
  'ENTER' = 13
}

export interface ModalProps {
  /** If true, escape key will close the modal and enter key will execute `onOk` callback */
  allowKeyboard?: boolean;

  /** Content to show in the Modal */
  children?: React.ReactNode;

  /** If true, the Modal can be closed from top right corner */
  closable?: boolean;

  /** Icon to use as the for closing the modal in the top right corner */
  closeIcon?: React.ReactNode;

  /** Props of the cancel button that can be overwritten */
  cancelButtonProps?: ButtonProps;

  /** Text to show in cancel button */
  cancelButtonText?: string;

  /** Custom footer for the Modal */
  footer?: React.ReactNode;

  /** Function to call when Cancel or close button is clicked */
  onCancel: () => void;

  /** Text to show in okay button */
  okButtonText?: string;

  /** Function to call when Okay button is clicked */
  onOk: () => void;

  /** Props of the cancel button that can be overwritten */
  okButtonProps?: ButtonProps;

  /** Title for the Modal */
  title?: React.ReactNode;

  /** If true, the Modal will be shown */
  visible: boolean;
}

export const Modal: React.FunctionComponent<ModalProps> = ({
  allowKeyboard,
  children,
  cancelButtonProps,
  cancelButtonText,
  closable,
  closeIcon,
  title,
  footer,
  okButtonProps,
  okButtonText,
  onOk,
  onCancel,
  visible
}) => {
  const previousActiveElement = React.useRef<any>(null);
  const modalWrapper = React.useRef<HTMLDivElement>(null);
  const modalSentinelStart = React.useRef<HTMLDivElement>(null);
  const modalSentinelEnd = React.useRef<HTMLDivElement>(null);

  const theme = useTheme();

  const checkFocus = React.useCallback(() => {
    if (modalWrapper.current == null || modalSentinelStart.current == null || !visible) {
      return;
    }

    if (!modalWrapper.current.contains(document.activeElement)) {
      modalSentinelStart.current.focus();
    }
  }, [modalSentinelStart, modalWrapper, visible]);

  // modifies the visibility of the modal
  const handleVisibility = React.useCallback(() => {
    if (visible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [visible]);


  // handle the ok click
  const handleOk = React.useCallback(() => {
     if (onOk) {
       onOk();
     }
  }, [onOk]);

  // handle closing the modal and calling onCancel
  const handleClose = React.useCallback(() => {
    if (onCancel) {
      onCancel();
    }
  }, [onCancel]);

  // handle keydown events for accessibility behaviours
  const handleKeyDown = React.useCallback((e) => {
    const activeElement = document.activeElement;

    if (!(modalSentinelEnd.current && modalSentinelStart.current)) {
      return;
    }

    switch(e.keyCode) {
      case KEY_CODES.ESC: {
        if (allowKeyboard) {
          handleClose();
        }
        break
      }
      case KEY_CODES.TAB: {
        if (e.shiftKey) {
          if (activeElement === modalSentinelStart.current) {
            modalSentinelEnd.current.focus();
            break;
          }
        } else if (activeElement === modalSentinelEnd.current) {
          modalSentinelStart.current.focus();
          break;
        }
        break;
      }
      case KEY_CODES.ENTER: {
        if (allowKeyboard) {
          handleOk();
        }
        break;
      }
    }
  }, [handleOk, handleClose, modalSentinelStart, modalSentinelEnd, allowKeyboard]);

  // In order to support clicking the mask to close we need to stop click events on
  // the modal container from bubbling up.
  const handleWrapClick = React.useCallback((e) => {
     e.stopPropagation();
  }, []);

  // store which element was active before the modal opens
  React.useEffect(() => {
    previousActiveElement.current = document.activeElement;

    return () => previousActiveElement.current.focus();
  }, []);

  // Want to check focus when the component updates to make sure it
  // is in the right spot
  React.useEffect(checkFocus);

  useAfterMountEffect(handleVisibility, [visible]);

  return (
    <Portal>
      <AnimatePresence>
        {visible &&
          <ModalRoot
            className={'rtk-modal-root'}
            exit={{ opacity: 0 }}
            onKeyDown={handleKeyDown}
            transition={{ duration: theme.animationTimeVeryFast }}
          >
            <ModalMask
              className={'rtk-modal-mask'}
              key="mask"
              theme={theme}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: theme.animationTimeVeryFast }}
            />
            <ModalWrapper
              className={'rtk-modal-wrapper'}
              role="document"
              tabIndex={-1}
              onKeyDown={handleKeyDown}
              ref={modalWrapper}
              onClick={handleClose}
            >
              <ModalContainer
                className={'rtk-modal'}
                role="dialog"
                initial={{ y: 24, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: theme.animationTimeVeryFast }}
                onClick={handleWrapClick}
              >
                <ModalSentinel
                  ref={modalSentinelStart}
                  tabIndex={0}
                  aria-hidden="true"
                />
                <Header
                  closable={closable}
                  closeIcon={closeIcon}
                  onCancel={handleClose}
                  theme={theme}
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
                      onCancel={handleClose}
                      onOk={handleOk}
                    />
                  }
                </Footer>
                <ModalSentinel
                  ref={modalSentinelEnd}
                  tabIndex={0}
                  aria-hidden="true"
                />
              </ModalContainer>
            </ModalWrapper>
          </ModalRoot>
        }
      </AnimatePresence>
    </Portal>
  );
};

Modal.defaultProps = {
  allowKeyboard: true,
  visible: false,
  okButtonProps: {
    type: 'primary'
  },
  cancelButtonProps: {
    ghost: true
  }
};
