import * as React from 'react';
import styled from 'styled-components';

import {
  storiesOf
} from '@storybook/react';

import {
  Collapse
} from '../Collapse';

// @ts-ignore
import mdx from './Collapse.mdx';

export default {
  title: 'Components/Collapse',
  component: Collapse,
  parameters: {
    docs: {
      page: mdx
    },
  },
};

const Container = styled.div`
  max-width: 400px;
  padding: 10px;
`;

const StyledCollapseContent = styled.div`
  height: 200px;
`;

const CollapseContent = ({ children }: any) => (
  <StyledCollapseContent>
    {children}
  </StyledCollapseContent>
);

const TestContent = () => {
  React.useEffect(() => {
    console.log('mounted');

    return () => console.log('unmounted');
  }, []);

  return (
    <CollapseContent />
  );
};

export const simple = () => (
  <Container>
    <Collapse
      header="Click Me"
      itemKey="default"
    >
      <CollapseContent />
    </Collapse>
  </Container>
);

export const open = () => (
  <Container>
    <Collapse
      header="Click Me"
      defaultExpanded
      itemKey="default"
    >
      <TestContent />
    </Collapse>
  </Container>
);

export const destroy = () => (
  <Container>
    <Collapse
      header="Click Me"
      itemKey="default"
      destroyOnClose
    >
      <TestContent />
    </Collapse>
  </Container>
);
