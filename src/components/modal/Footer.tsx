import * as React from 'react';

import styled, {
  css
} from 'styled-components';

import {
  Button
} from "..";

export const Footer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    padding: ${theme.modalFooterPadding};
    box-sizing: border-box;
    
    border-bottom-right-radius: ${theme.modalBorderRadius};
    border-bottom-left-radius: ${theme.modalBorderRadius};
    background: ${theme.modalFooterBackground};
  `};
`;

const CancelButton = styled(Button)`
  margin-left: 16px;
`;

const DefaultFooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const DefaultFooter: React.FunctionComponent<any> = ({
  okText,
  cancelText,
  onOk,
  onCancel
}) => {
  return (
    <DefaultFooterContainer>
      <Button>Okay</Button>
      <CancelButton ghost>Cancel</CancelButton>
    </DefaultFooterContainer>
  )
};
