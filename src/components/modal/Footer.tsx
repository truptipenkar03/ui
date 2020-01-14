import * as React from 'react';

import styled, {
  css
} from 'styled-components';

import {
  Button,
  ButtonProps
} from "..";

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
    height: ${theme.modalFooterHeight};
    
    display: flex;
    align-items: center;
    justify-content: flex-end;

    padding: ${theme.modalFooterPadding};
    box-sizing: border-box;
    
    border-bottom-right-radius: ${theme.modalBorderRadius};
    border-bottom-left-radius: ${theme.modalBorderRadius};
    background: ${theme.modalFooterBackground};
  `};
`;

const CancelButton = styled(Button)`
  margin-left: 16px;
  align-self: end;
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
    <React.Fragment>
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
    </React.Fragment>
  );
};

DefaultFooter.defaultProps = {
  okButtonText: 'Okay',
  cancelButtonText: 'Cancel'
};
