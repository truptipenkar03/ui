import * as React from 'react';
import styled from "styled-components";

import {
  Button
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
  return (
    <div>
      <Button onClick={() => setVisibility(true)}>Open</Button>
      <Modal
        header={'Add Contact'}
        visible={visible}
        setVisibility={setVisibility}
      >
        <ModalContent>
          asdfasdf
        </ModalContent>
      </Modal>
    </div>
  );
};
