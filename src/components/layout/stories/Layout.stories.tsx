import * as React from 'react';
import styled from 'styled-components';

import { Layout } from '../Layout';

// @ts-ignore
import mdx from './Layout.mdx';

const Container = styled.div`
  height: 768px;
`;

export default {
  title: 'Components/Layout',
  component: Layout,
  parameters: {
    docs: {
      page: mdx,
    },
  },
};

export const simple = () => {
  return (
    <Container>
      <Layout>
        <Layout.Header>Header</Layout.Header>
        <Layout.Content>Content</Layout.Content>
        <Layout.Footer>Footer</Layout.Footer>
      </Layout>
    </Container>
  );
};
