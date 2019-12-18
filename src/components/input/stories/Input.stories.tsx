import * as React from 'react';
import styled from "styled-components";

import {
  Input
} from '../Input';

import {
  Container
} from './story.components';

import {
  SvgCircleNotch
} from "../../icons/CircleNotch";

// @ts-ignore
import mdx from './Input.mdx';

import {
  Button
} from "../..";

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
`;

export default {
  title: 'Components/Input',
  component: Input,
  parameters: {
    docs: {
      page: mdx
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
  </Container>
);

export const validation = () => {
  const [status, setStatus] = React.useState<any>('default');
  const [showMessage, toggleMessage] = React.useState(true);
  return (
    <Container>
      <ButtonContainer>
        <Button onClick={() => setStatus('default')}>
          Default
        </Button>
        <Button onClick={() => setStatus('success')}>
          Success
        </Button>
        <Button onClick={() => setStatus('error')}>
          Error
        </Button>
        <Button onClick={() => setStatus('loading')}>
          Loading
        </Button>
        <Button onClick={() => toggleMessage(!showMessage)}>
          Toggle Message
        </Button>
      </ButtonContainer>
      <Input
        validationStatus={status}
        validationMessage={showMessage ? `This is the ${status} status` : undefined}
      />
      <Input
        validationStatus={status}
        validationMessage={showMessage ? `This is the ${status} status` : undefined}
      />
    </Container>
  )
};

export const disabled = () => (
  <Container>
    <Input disabled />
  </Container>
);

export const affix = () => (
  <Container>
    <Input inputPrefix={<SvgCircleNotch />} inputSuffix={<SvgCircleNotch />} />
  </Container>
);

