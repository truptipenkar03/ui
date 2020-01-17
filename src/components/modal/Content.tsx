import * as React from 'react';

import styled, {
  css
} from 'styled-components';

export const Content = styled.div`
  ${({ theme }) => css`
     padding: ${theme.modalContentPadding};
     
     flex: 1;
  `};
`;
