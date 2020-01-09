import * as React from 'react';

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
  useTheme
} from "../../hooks";

export const Modal: React.FunctionComponent<any> = ({
  className,
  children,
  header,
  footer,
  visible,
  setVisibility
}) => {

  const theme = useTheme();

  return (
    <Portal>
      {visible &&
        <ModalRoot className={`${className} rtk-modal`}>
          <ModalMask theme={theme} />
          <ModalWrapper
            role="document"
            tab-index="-1"
          >
            <ModalContainer>
              <Header
                theme={theme}
                setVisibility={setVisibility}
              >
                {header}
              </Header>
              <Content theme={theme}>
                {children}
              </Content>
              <Footer>
                {footer ?
                  footer :
                  <DefaultFooter />
                }
              </Footer>
            </ModalContainer>
          </ModalWrapper>
        </ModalRoot>
      }
    </Portal>
  );
};
