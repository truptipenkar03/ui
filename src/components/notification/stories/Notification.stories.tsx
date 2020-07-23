/* eslint-disable */

import * as React from 'react';
import styled from 'styled-components';

import { Notification } from '../Notification';

// @ts-ignore
import mdx from './Notification.mdx';

export default {
  title: 'Components/Notification',
  component: Notification,
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
    <Notification notificationType="default" title="Title Text">
      Insert message here.
    </Notification>
    <Spacer />
    <Notification notificationType="warning" title="Warning">
      Insert warning message here.
    </Notification>
    <Spacer />
    <Notification notificationType="info" title="Info">
      Insert info message here.
    </Notification>
    <Spacer />
    <Notification notificationType="success" title="Success!">
      Insert info success here.
    </Notification>
    <Spacer />
    <Notification notificationType="error" title="Error">
      Insert info error here.
    </Notification>
  </React.Fragment>
);
