import * as React from "react";
import styled from 'styled-components';

import {
  Button
} from '../Button';

// @ts-ignore
import mdx from './Button.mdx';

const Container = styled.div`
  display: flex;
`;

const Spacer = styled.span`
  height: 1px;
  padding: 5px;
`;

export default {
  title: 'Components|Button',
  component: Button,
  parameters: {
    docs: {
      page: mdx
    },
  },
};

export const types = () => (
  <Container>
    <Button type="primary">Primary</Button>
    <Spacer />
    <Button type="ghost">Ghost</Button>
    <Spacer />
    <Button type="link">Link</Button>
  </Container>
);

export const disabled = () => (
  <Container>
    <Button onClick={() => console.log('clicked')} type="primary" disabled>Primary</Button>
    <Spacer />
    <Button type="ghost" disabled>Ghost</Button>
    <Spacer />
    <Button type="link" disabled>Link</Button>
  </Container>
);

export const loading = () => {
  const [loading, toggleLoading] = React.useState(false);

  const handleToggle = React.useCallback(() => {
    toggleLoading(!loading);
  }, [loading, toggleLoading]);

  return (
    <React.Fragment>
      <div style={{marginBottom: '15px' }}>
        <Button onClick={handleToggle}>{loading ? 'Cancel Loading' : 'Start Loading'}</Button>
      </div>
      <Container>
        <Button
          type="primary"
          onClick={handleToggle}
          loading={loading}
        >
          Primary
        </Button>
        <Spacer />
        <Button
          type="ghost"
          onClick={handleToggle}
          loading={loading}
        >
          Ghost
        </Button>
        <Spacer />
        <Button
          type="link"
          onClick={handleToggle}
          loading={loading}
        >
          Link
        </Button>
      </Container>
    </React.Fragment>
  );
};

export const shape = () => (
  <Container>
    <Button shape="circle" type="primary">P</Button>
    <Spacer />
    <Button shape="circle" type="ghost">G</Button>
    <Spacer />
    <Button shape="circle" loading type="primary">P</Button>
  </Container>
);

