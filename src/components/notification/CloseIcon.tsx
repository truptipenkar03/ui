import * as React from 'react';

import styled from 'styled-components';

import Times from '../icons/Times';

import { Typography } from '../typography/Typography';

const Container = styled.div`
  cursor: pointer;
  align-self: flex-start;
`;

interface CloseIconProps {
  onClose?: () => void;
}

export const CloseIcon: React.FunctionComponent<CloseIconProps> = ({
  onClose,
}) => {
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
