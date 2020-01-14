import * as React from 'react';

import styled, {
  css
} from 'styled-components';

const Container = styled.div`
  ${({ theme }) => css`
     padding: ${theme.modalContentPadding};
     
     flex: 1;
  `};
`;

export const Content: React.FunctionComponent<any> = ({
  children
}) => {
  return (
    <Container>
      {children}
    </Container>
  );
};
