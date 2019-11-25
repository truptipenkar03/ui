import * as React from "react";
import styled from 'styled-components';

import {
  Button
} from '../Button';

// @ts-ignore
import mdx from './Button.mdx';

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
  <React.Fragment>
    <Button type="primary">Primary</Button>
    <Spacer />
    <Button type="ghost">Ghost</Button>
    <Spacer />
    <Button type="link">Link</Button>
  </React.Fragment>
);

export const disabled = () => (
  <React.Fragment>
    <Button type="primary" disabled>Primary</Button>
    <Spacer />
    <Button type="ghost" disabled>Ghost</Button>
    <Spacer />
    <Button type="link" disabled>Link</Button>
  </React.Fragment>
);
