import * as React from 'react';

import {
  Portal
} from "..";

import {
  ModalRoot,
  ModalMask,
  ModalContainer
} from "./StyledModal";

const ModalComponent: React.FunctionComponent = () => {
  return (
    <ModalRoot>
      <ModalMask />
      <ModalContainer>
        Stuff
      </ModalContainer>
    </ModalRoot>
  );
};

export const Foo: React.FunctionComponent = () => {
  return (
    <Portal>
      <ModalComponent />
    </Portal>
  );
};
