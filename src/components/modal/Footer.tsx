import * as React from 'react';

import styled, {
  css
} from 'styled-components';

import {
  Button
} from "..";

import {
  ButtonProps
} from "../button/Button";

interface FooterProps {
  cancelButtonProps?: ButtonProps;
  cancelButtonText?: React.ReactNode;
  okButtonProps?: ButtonProps;
  onCancel?: () => void;
  okButtonText?: React.ReactNode;
  onOk?: () => void;
}

export const Footer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 60px;
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
  
  height: 100%;
`;

export const DefaultFooter: React.FunctionComponent<FooterProps> = ({
  cancelButtonProps,
  cancelButtonText,
  okButtonProps,
  onCancel,
  okButtonText,
  onOk
}) => {

  return (
    <DefaultFooterContainer>
      <Button
        onClick={onOk}
        {...okButtonProps}
      >
        {okButtonText}
      </Button>
      <CancelButton
        onClick={onCancel}
        ghost
        {...cancelButtonProps}
      >
        {cancelButtonText}
      </CancelButton>
    </DefaultFooterContainer>
  );
};

DefaultFooter.defaultProps = {
  okButtonText: 'Okay',
  cancelButtonText: 'Cancel'
};
