import * as React from 'react';
import styled from "styled-components";

import {
  Button,
  Input
} from '../..';

// @ts-ignore
import mdx from './Modal.mdx';

import {
  Modal
} from '../Modal';

const ModalContent = styled.div`
  min-height: 200px;
`;

export default {
  title: 'Components/Modal',
  component: Modal,
  parameters: {
    docs: {
      page: mdx
    },
  },
};

export const simple = () => {
  const [visible, setVisibility] = React.useState(false);

  const onCancel = React.useCallback(() => {
     setVisibility(false);
  }, []);

  const onOk = React.useCallback(() => {
    setVisibility(false);
  }, []);

  return (
    <div>
      <Button onClick={() => setVisibility(true)}>Open</Button>
      <Modal
        title={'Add Contact'}
        onOk={onOk}
        okButtonText={'Add'}
        onCancel={onCancel}
        visible={visible}
      >
        <ModalContent>
          <Input label={'First Name'} />
          <Input label={'Last Name'} />
          <Input label={'Email'} />
          <Input label={'Password'} />
        </ModalContent>
      </Modal>
    </div>
  );
};
