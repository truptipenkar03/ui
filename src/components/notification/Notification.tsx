import * as React from 'react';

import { useTheme } from '../../hooks/useTheme';

import {
  Container,
  NotificationText,
  NotificationTextContainer,
  NotificationTitle,
} from './StyledNotification';

import { NotificationIcon } from '../notificationBox/NotificationIcon';
import { CloseIcon } from './CloseIcon';

export interface NotificationProps {
  /** the title text of the notification */
  title: string;

  /** if true, the close icon will appear on the notification for interaction */
  allowClose?: boolean;

  /** className of the notification component */
  className?: string;

  /** Callback to be called when close is clicked */
  onClose?: () => void;

  /** Determines the intent of the notification for the user */
  notificationType: 'default' | 'success' | 'error' | 'warning' | 'info';
}

export const Notification: React.FunctionComponent<NotificationProps> = ({
  allowClose,
  children,
  className,
  onClose,
  notificationType,
  title,
}) => {
  const theme = useTheme();

  return (
    <Container
      className={`${className} rtk-notification`}
      theme={theme}
      notificationType={notificationType}
    >
      <NotificationIcon notificationType={notificationType} />
      <NotificationTextContainer>
        <NotificationTitle>{title}</NotificationTitle>
        <NotificationText>{children}</NotificationText>
      </NotificationTextContainer>
      {allowClose && <CloseIcon onClose={onClose} />}
    </Container>
  );
};

Notification.defaultProps = {
  allowClose: true,
};

Notification.displayName = 'Notification';
