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

const Container = styled.div<{ sidebar: boolean }>`
  ${({ sidebar }) => css`
    ${sidebar &&
      css`
        display: flex;
        flex-direction: row;
      `}

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
    <Container
      className={`${className} rtk-layout`}
      sidebar={sidebar !== undefined}
    >
      {sidebar && <Sidebar>{sidebar}</Sidebar>}
      <LayoutContainer>{children}</LayoutContainer>
    </Container>
  );
};

Layout.Header = Header;
Layout.Content = Content;
Layout.Footer = Footer;
