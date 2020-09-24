/* eslint-disable */

import * as React from 'react';
import styled from 'styled-components';

import { Button } from '../../button/Button';

import { NotificationBin, NotificationType } from '../NotificationBin';

const Spacer = styled.div`
  height: 16px;
`;

// @ts-ignore
import mdx from './NotificationBin.mdx';

export default {
  title: 'Components/NotificationBin',
  component: NotificationBin,
  parameters: {
    docs: {
      page: mdx,
    },
  },
};

export const simple = () => {
  const [notifications, setNotifications] = React.useState<NotificationType[]>(
    []
  );

  const add = React.useCallback(() => {
    // @ts-ignore
    setNotifications(currentNotifications => {
      const randomNumber = Math.floor(Math.random() * 999);
      const newNotifcation = {
        itemKey: randomNumber,
        title: `Notification: ${randomNumber}`,
        children: <div>This is the description.</div>,
        notificationType: 'success',
      };

      return [...currentNotifications, newNotifcation];
    });
  }, []);

  const remove = React.useCallback(key => {
    setNotifications(currentNotifications => {
      return currentNotifications.filter(n => n.itemKey !== key);
    });
  }, []);

  return (
    <div>
      <Button onClick={add}>Add</Button>
      <Spacer />
      <NotificationBin notifications={notifications} onRemove={remove} />
    </div>
  );
};
