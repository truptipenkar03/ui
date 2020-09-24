import * as React from 'react';
import { AnimatePresence } from 'framer-motion';
import styled from 'styled-components';

import { Notification, NotificationProps } from '../notification/Notification';

export type NotificationType = Omit<NotificationProps, 'duration' | 'onClose'>;

export interface NotificationBinProps {
  /** className of the NotificationBin component */
  className?: string;

  /** The amount of time the notification will be shown in ms. (milliseconds) */
  duration?: number;

  /** Notifications to be shown. Each notification can have all props associated with the `Notification` component */
  notifications: NotificationType[];

  /** Function to call to remove a notifcation from the stack */
  onRemove: (key: string | number) => void;
}

const Container = styled.div``;

export const NotificationBin: React.FunctionComponent<NotificationBinProps> = ({
  children,
  className,
  duration,
  notifications,
  onRemove,
}) => {
  return (
    <Container className={`${className} rtk-notification-bin`}>
      <AnimatePresence initial={false}>
        {notifications.map(({ itemKey, children, ...props }) => (
          <Notification
            duration={duration}
            key={itemKey}
            itemKey={itemKey}
            onClose={onRemove}
            animate
            {...props}
          >
            {children}
          </Notification>
        ))}
      </AnimatePresence>
      {children}
    </Container>
  );
};

NotificationBin.defaultProps = {
  duration: 5000,
};

NotificationBin.displayName = 'NotificationBin';
