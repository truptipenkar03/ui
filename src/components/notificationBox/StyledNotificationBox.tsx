import styled, { css } from 'styled-components';

import { GlobalTheme } from '../../theme/types';

import { Typography } from '../typography/Typography';

interface ContainerProps {
  theme: GlobalTheme;
  notificationType: 'default' | 'success' | 'error' | 'warning' | 'info';
}

export const Container = styled.div<ContainerProps>`
  min-height: ${({ theme }) => theme.notificationBoxMinHeight};

  max-width: ${({ theme }) => theme.notificationBoxMaxWidth};
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  ${({ notificationType }) =>
    notificationType === 'error' &&
    css`
      background: ${({ theme }) => theme.notificationBoxErrorBackground};
    `}

  ${({ notificationType }) =>
    notificationType === 'warning' &&
    css`
      background: ${({ theme }) => theme.notificationBoxWarningBackground};
    `}

  ${({ notificationType }) =>
    notificationType === 'success' &&
    css`
      background: ${({ theme }) => theme.notificationBoxSuccessBackground};
    `}

  ${({ notificationType }) =>
    notificationType === 'info' &&
    css`
      background: ${({ theme }) => theme.notificationBoxInfoBackground};
    `}
  
  ${({ notificationType }) =>
    notificationType === 'default' &&
    css`
      background: ${({ theme }) => theme.notificationBoxDefaultBackground};
    `}

  border-radius: ${({ theme }) => theme.notificationBoxBorderRadius};
  box-shadow: ${({ theme }) => theme.notificationBoxBoxShadow};

  padding: ${({ theme }) => theme.notificationBoxPadding};
`;

export const NotificationTextContainer = styled.div`
  flex: 1;
  padding: 0 24px;
`;

export const NotificationText = styled(Typography.Body)`
  text-align: left;
`;
