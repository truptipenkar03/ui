import * as React from 'react';

import styled from 'styled-components';

import Times from '../icons/Times';

import { Typography } from '../typography/Typography';

const Container = styled.div`
  padding: 4px;

  cursor: pointer;
`;

export const CloseIcon: React.FunctionComponent<any> = ({ onClose }) => {
  const handleClose = React.useCallback(() => {
    if (onClose) {
      onClose();
    }
  }, [onClose]);

  return (
    <Container onClick={handleClose}>
      <Typography.Body>
        <Times />
      </Typography.Body>
    </Container>
  );
};
