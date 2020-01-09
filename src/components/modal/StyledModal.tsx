// import * as React from 'react';

import styled, {
  css
} from 'styled-components';

export const ModalRoot = styled.div``;

export const ModalMask = styled.div`
  ${({ theme }) => css`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    height: 100%;
    width: 100%;

    background: ${theme.modalMaskBackground};
  `}
`;

export const ModalWrapper = styled.div`
  ${() => css`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    height: 100%;
    width: 100%;
    
    display: flex;
    
    align-items: center;
    justify-content: center;
  `}
`;

export const ModalContainer = styled.div`
  ${({ theme }) => css`
    min-height: ${theme.modalMinHeight};
    min-width: ${theme.modalMinWidth};
    
    background: ${theme.modalBackground};
    border: ${theme.modalBorder};
    border-color: ${theme.modalBorderColor};
    border-radius: ${theme.modalBorderRadius};
    
    box-shadow: ${theme.modalBoxShadow};
  `};
`;

export const StyledModal = styled.div``;
