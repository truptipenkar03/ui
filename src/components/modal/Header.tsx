import * as React from 'react';

import styled, {
  css
} from 'styled-components';

import {
  Icon
} from '../..';

const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    
    display: grid;
    grid-template-columns: auto 0.1fr;
    align-items: center;
    
    background: ${theme.modalHeaderBackground};
    color: ${theme.modalHeaderColor};
    
    border-top-right-radius: ${theme.modalBorderRadius};
    border-top-left-radius: ${theme.modalBorderRadius};

    font-size: 24px;
    font-weight: bold;
    box-sizing: border-box;
  `};
`;

const Title = styled.div`
  ${({ theme }) => css`
    padding: ${theme.modalHeaderPadding};
  `};
`;

const Close = styled.div`
  ${({ theme }) => css`
    padding: ${theme.modalHeaderPadding};
    align-self: end;
    cursor: pointer;
    
    transition: all ${theme.animationTimeFast}s;
    opacity: 0.7;

    &:hover {
      opacity: 1;
    }
  `};
`;

export const Header: React.FunctionComponent<any> = ({
  children,
  closable,
  onCancel
}) => {
  return (
    <Container className="rtk-modal-header">
      <Title>
        {children}
      </Title>
      {closable &&
        <Close onClick={onCancel}>
          <Icon.TimesSolid />
        </Close>
      }
    </Container>
  );
};

Header.defaultProps = {
  closable: true
};
