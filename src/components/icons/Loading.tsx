import * as React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faCircleNotch } from '@fortawesome/free-solid-svg-icons/faCircleNotch';

import { useTheme } from '../../hooks';

export interface LoadingProps {
  color?: string;
}

const Loading: React.FunctionComponent<LoadingProps> = ({ color }) => {
  const theme = useTheme();

  return (
    <FontAwesomeIcon
      icon={faCircleNotch}
      color={color || theme.colors.primary}
      spin
    />
  );
};

export default Loading;
