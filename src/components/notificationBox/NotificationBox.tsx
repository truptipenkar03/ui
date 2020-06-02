import * as React from 'react';

import { useTheme } from '../../hooks/useTheme';

import {
  Container,
  NotificationTextContainer,
  NotificationText,
} from './StyledNotificationBox';

import { NotificationIcon } from './NotificationIcon';
import { CloseIcon } from './CloseIcon';

export interface NotificationBoxProps {
  /** if true, the close icon will appear on the notification for interaction */
  allowClose?: boolean;

  /** className of the notification component */
  className?: string;

  /** Callback to be called when close is clicked */
  onClose?: () => void;

  /** Determines the intent of the notification for the user */
  notificationType: 'default' | 'success' | 'error' | 'warning' | 'info';
}

export const NotificationBox: React.FunctionComponent<NotificationBoxProps> = ({
  allowClose,
  children,
  className,
  onClose,
  notificationType,
}) => {
  const theme = useTheme();

  return (
    <Container
      className={`${className} rtk-validation-notification`}
      theme={theme}
      notificationType={notificationType}
    >
      <NotificationIcon notificationType={notificationType} />
      <NotificationTextContainer>
        <NotificationText>{children}</NotificationText>
      </NotificationTextContainer>
      {allowClose && <CloseIcon onClose={onClose} />}
    </Container>
  );
};

NotificationBox.defaultProps = {
  allowClose: true,
};

NotificationBox.displayName = 'NotificationBox';
