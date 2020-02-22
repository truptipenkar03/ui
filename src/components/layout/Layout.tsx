import * as React from 'react';

import styled, { css } from 'styled-components';

import { Header } from './Header';

import { Content } from './Content';

import { Footer } from './Footer';

import { Sidebar } from './Sidebar';

export interface LayoutComponent<T> extends React.FunctionComponent<T> {
  Header: any;
  Content: any;
  Footer: any;
}

export interface LayoutProps {
  className?: string;
  sidebar?: React.ReactNode;
}
/* ${sidebar &&
  css`
    display: flex;
    flex-direction: row;
  `} */

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
  sidebar,
}) => {
  return (
    <React.Fragment>
      <Sidebar>{sidebar}</Sidebar>
      <Container className={`${className} rtk-layout`}>
        <LayoutContainer>{children}</LayoutContainer>
      </Container>
    </React.Fragment>
  );
};

Layout.Header = Header;
Layout.Content = Content;
Layout.Footer = Footer;
