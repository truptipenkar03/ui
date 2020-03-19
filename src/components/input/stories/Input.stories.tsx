import * as React from 'react';
import styled from 'styled-components';

import { Input } from '../Input';

import { Container } from './story.components';

// @ts-ignore
import mdx from './Input.mdx';

import { Button } from '../../button/Button';

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 15px;
`;

const Spacer = styled.div`
  padding: 0 4px;
  height: 1px;
`;

export default {
  title: 'Components/Input',
  component: Input,
  parameters: {
    docs: {
      page: mdx,
    },
  },
};

export const simple = () => (
  <Container>
    <Input />
  </Container>
);

export const size = () => (
  <Container>
    <Input size="small" />
    <Input />
    <Input size="large" />
    <Input size="small" htmlType="textarea" />
    <Input htmlType="textarea" />
    <Input size="large" htmlType="textarea" />
  </Container>
);

export const types = () => (
  <Container>
    <Input description="Number" htmlType="number" defaultValue="123" />
    <Input
      description="Password"
      placeholder="Put in a secret"
      htmlType="password"
    />
    <Input
      description="Textarea"
      placeholder="Multiline text box"
      htmlType="textarea"
    />
  </Container>
);

export const border = () => (
  <Container>
    <Input placeholder="Input with border" />
    <Input borderType="bottom" placeholder="Input with bottom border" />
    <Input borderType="none" placeholder="Input without border" />
  </Container>
);

export const label = () => (
  <Container>
    <Input label="Label" />
    <Spacer />
    <Input
      label="Label"
      description="This is why this input is required"
      required
    />
  </Container>
);

export const validation = () => {
  const [status, setStatus] = React.useState<any>(undefined);
  return (
    <Container>
      <ButtonContainer>
        <Button onClick={() => setStatus(undefined)}>Default</Button>
        <Spacer />
        <Button onClick={() => setStatus('success')}>Success</Button>
        <Spacer />
        <Button onClick={() => setStatus('error')}>Error</Button>
        <Spacer />
        <Button onClick={() => setStatus('loading')}>Loading</Button>
        <Spacer />
      </ButtonContainer>
      <Input
        label="With Suffix"
        validationStatus={status}
        validationMessage={status ? `This is the ${status} status` : undefined}
      />
      <Spacer />
      <Input
        htmlType="textarea"
        placeholder={'Multiple lines \nof text \nin here'}
        validationStatus="success"
        validationMessage="Validation continues to work for text areas!"
      />
    </Container>
  );
};

export const disabled = () => (
  <Container>
    <Input disabled />
  </Container>
);

export const affix = () => (
  <Container>
    <Input inputPrefix={'A'} inputSuffix={'A'} />
  </Container>
);
