import * as React from 'react';
import styled from "styled-components";

import {
  Button
} from '../../button/Button';

import {
  Input
} from '../../input/Input';

// @ts-ignore
import mdx from './Modal.mdx';

import {
  Modal
} from '../Modal';
import {Field, Formik, withFormik} from "formik";

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
      <Button onClick={() => setVisibility(true)}>Open Simple Modal</Button>
      <Modal
        title={'Title'}
        onOk={onOk}
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

export const customFooter = () => {
  const [visible, setVisibility] = React.useState(false);

  const onCancel = React.useCallback(() => {
    setVisibility(false);
  }, []);

  const onOk = React.useCallback(() => {
    setVisibility(false);
  }, []);

  return (
    <div>
      <Button onClick={() => setVisibility(true)}>Open Custom Footer Modal</Button>
      <Modal
        title={'Title'}
        onOk={onOk}
        onCancel={onCancel}
        footer={(
          <React.Fragment>
            <Button
              onClick={onCancel}
              ghost
            >
              Cancel
            </Button>
            <div style={{ height: '1px', width: '16px' }}/>
            <Button
              onClick={onOk}
            >
              Finish
            </Button>
          </React.Fragment>
        )}
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

export const asyncClose = () => {
  const [visible, setVisibility] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const onCancel = React.useCallback(() => {
    setVisibility(false);
  }, []);

  const onOk = React.useCallback(() => {
    setLoading(true);

    setTimeout(() => {
      setVisibility(false);
      setLoading(false);
    }, 3000);

  }, []);

  return (
    <div>
      <Button onClick={() => setVisibility(true)}>Open Modal with Async Logic</Button>
      <Modal
        title={'Title'}
        onOk={onOk}
        onCancel={onCancel}
        closable={!loading}
        allowKeyboard={!loading}
        cancelButtonProps={{
          disabled: loading
        }}
        okButtonProps={{
          loading
        }}
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

const InnerModal: React.FunctionComponent = () => {
  return (
    <Modal visible footer="some footer" onCancel={noOp} onOk={noOp}>
      <Content />
    </Modal>
  );
};

const WrappedModal: React.FunctionComponent = () => {
  return (
    <Modal visible footer="some footer" onCancel={noOp} onOk={noOp}>
      <Foo />
    </Modal>
  );
};

const Foo = () => (
  <React.Fragment>
    <Field name={"input1"}/>
    <Field name={"input2"}/>
  </React.Fragment>
);

const Content = withFormik({
  enableReinitialize: false,
  // mapPropsToValues: () => ({input1: "hi", input2: "hey"}),
  handleSubmit: noOp // handled by modal buttons
})(Foo);

const Test = withFormik({
  enableReinitialize: false,
  // mapPropsToValues: () => ({input1: "hi", input2: "hey"}),
  handleSubmit: noOp // handled by modal buttons
})(WrappedModal);


// eslint-disable-next-line no-unused-vars
const ModalForm = () => {
  return (
    <Modal visible footer="some footer" onCancel={noOp} onOk={noOp}>
      <Formik initialValues={{input1: "hi", input2: "hey"}} onSubmit={noOp}>
        <form>
          <Field name={"input1"}/>
          <Field name={"input2"}/>
        </form>
      </Formik>
    </Modal>
  )
};

function noOp() {
  return;
}

const ModalFormHOC = withFormik({
  enableReinitialize: false,
  // mapPropsToValues: () => ({input1: "hi", input2: "hey"}),
  handleSubmit: noOp // handled by modal buttons
})(InnerModal);

export const useFormik = () => {
  const [visible, setVisibility] = React.useState(false);

  const onCancel = React.useCallback(() => {
    setVisibility(false);
  }, []);

  const onOk = React.useCallback(() => {
    setVisibility(false);
  }, []);

  return (
    <div>
      {/*<Test />*/}
      <InnerModal />
      {/*<ModalFormHOC />*/}
      {/*<ModalForm />*/}
    </div>
  );
};

