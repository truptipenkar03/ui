import * as React from 'react';

import styled from 'styled-components';

import { useTheme } from '../../hooks';

import CircleNotch from './CircleNotch';

export interface LoadingProps {
  fill?: string;
}

const CircleNotchSpinner = styled(CircleNotch)`
  fill: ${props => props.fill};
  animation: spin 1s linear infinite;

  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Loading: React.FunctionComponent<LoadingProps> = ({ fill }) => {
  const theme = useTheme();

  return <CircleNotchSpinner fill={fill || theme.colors.primary} />;
};

export default Loading;
