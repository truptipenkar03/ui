import styled, {
  css
} from 'styled-components';

export const Content = styled.div`
  ${({ theme }) => css`
     padding: ${theme.modalContentPadding};
     overflow: auto;
     flex: 1;
  `};
`;
