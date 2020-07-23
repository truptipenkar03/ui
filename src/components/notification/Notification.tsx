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
import { NotificationBoxProps } from '../notificationBox/NotificationBox';

export interface NotificationProps extends NotificationBoxProps {
  /** the title text of the notification */
  title: string;
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
