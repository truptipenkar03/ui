/* eslint-disable */

import * as React from 'react';
import styled from 'styled-components';

import { NotificationBox } from '../NotificationBox';

// @ts-ignore
import mdx from './NotificationBox.mdx';

export default {
  title: 'Components/NotificationBox',
  component: NotificationBox,
  parameters: {
    docs: {
      page: mdx,
    },
  },
};

const Spacer = styled.div`
  height: 16px;
`;

export const simple = () => (
  <React.Fragment>
    <NotificationBox notificationType="warning">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget dui
      posuere, blandit massa sit amet, rutrum risus.
    </NotificationBox>
    <Spacer />
    <NotificationBox notificationType="error">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget dui
      posuere, blandit massa sit amet, rutrum risus.
    </NotificationBox>
    <Spacer />
    <NotificationBox notificationType="success">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget dui
      posuere, blandit massa sit amet, rutrum risus.
    </NotificationBox>
    <Spacer />
    <NotificationBox notificationType="info">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget dui
      posuere, blandit massa sit amet, rutrum risus.
    </NotificationBox>
    <Spacer />
    <NotificationBox notificationType="default">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget dui
      posuere, blandit massa sit amet, rutrum risus.
    </NotificationBox>
  </React.Fragment>
);
