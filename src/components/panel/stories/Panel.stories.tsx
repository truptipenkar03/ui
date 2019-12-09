import * as React from 'react';
import styled from 'styled-components';

// @ts-ignore
import mdx from './Panel.mdx';

import {
  Panel
} from '../Panel';

const Container = styled.div`
  max-width: 400px;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
`;

export default {
  title: 'Components/Panel',
  component: Panel,
  parameters: {
    docs: {
      page: mdx
    },
  },
};

export const standard = () => {
  return (
    <Container>
      <Panel>
        <Content />
      </Panel>
    </Container>
  );
};

export const clickable = () => {
  return (
    <Container>
      <Panel onClick={() => console.log('clicked')}>
        <Content>Click Me!</Content>
      </Panel>
    </Container>
  );
};

