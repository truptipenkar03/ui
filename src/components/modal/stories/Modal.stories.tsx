import * as React from 'react';
import styled from "styled-components";

import {
  Button
} from '../..';

// @ts-ignore
import mdx from './Modal.mdx';

import {
  Foo
} from '../Modal';

export default {
  title: 'Components/Input',
  component: Foo,
  parameters: {
    docs: {
      page: mdx
    },
  },
};

export const simple = () => (
  <div>
    <Button>Open</Button>
    <Foo />
  </div>
);
