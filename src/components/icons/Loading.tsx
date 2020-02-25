import * as React from 'react';

import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';

import { useTheme } from '../../hooks';

export interface LoadingProps {
  color?: string;
}

const IconSpinner = styled(FontAwesomeIcon)`
  animation: spin 1s linear infinite;

  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Loading: React.FunctionComponent<LoadingProps> = ({ color }) => {
  const theme = useTheme();

  return (
    <IconSpinner icon={faCircleNotch} color={color || theme.colors.primary} />
  );
};

export default Loading;
