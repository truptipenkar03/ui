import * as React from 'react';

import styled, { css } from 'styled-components';

import { Header } from './Header';

import { Content } from './Content';

import { Footer } from './Footer';

export interface LayoutComponent<T> extends React.FunctionComponent<T> {
  Header: any;
  Content: any;
  Footer: any;
}

export interface LayoutProps {
  className?: string;
}

const Container = styled.div`
  ${({}) => css`
    height: 100%;
  `}
`;

const LayoutContainer = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;

    flex: 1;
    height: 100%;
  `}
`;

export const Layout: LayoutComponent<LayoutProps> = ({
  children,
  className,
}) => {
  return (
    <React.Fragment>
      <Container className={`${className} rtk-layout`}>
        <LayoutContainer>{children}</LayoutContainer>
      </Container>
    </React.Fragment>
  );
};

Layout.Header = Header;
Layout.Content = Content;
Layout.Footer = Footer;
