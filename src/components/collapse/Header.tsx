import * as React from 'react';

import styled, {
  css
} from 'styled-components';

interface HeaderProps {
  /** Content to show in the left of the Header */
  children: React.ReactNode;

  /** Content to show in the right of the Header */
  headerRight: React.ReactNode;

  /** State of the collapse for custom handling */
  open?: boolean;

  /** Function to handle when header is clicked */
  onClick: () => void;

  /** Global theme in ThemeProvider */
  theme: any;
}

interface CustomProps {
  open?: boolean;
}

interface StyledHeaderProps {
  customProps: CustomProps;
  onClick: () => void;
  theme: any;
}

const HeaderLeft = styled.div`
  height: 100%;
`;

const HeaderRight = styled.div`
  justify-self: flex-end;
  align-self: center;
`;

const StyledHeader = styled.div<StyledHeaderProps>`
  ${({ customProps, theme }) => css`
    display: grid;
    grid-template-columns: auto 0.2fr;

    background: ${theme.collapseHeaderBackground};
    border: ${theme.collapseBorder};
    border-color: ${theme.collapseBorderColor};
    border-radius: ${theme.collapseBorderRadius};
    color: ${theme.collapseHeaderColor};

    padding: ${theme.collapseHeaderPadding};
    height: ${theme.collapseHeaderHeight};
  
    box-sizing: border-box;
    user-select: none;
    cursor: pointer;
    
    transition: all ${theme.animationTimeVeryFast}s;
    
    &:hover {
      background: ${theme.collapseHeaderHoverBackground};
      border: 1px solid transparent;
      color: ${theme.collapseHeaderHoverColor};
    };
    
    ${customProps.open && css`
      background: ${theme.collapseHeaderOpenBackground};
      border: 1px solid transparent;
      border-bottom-right-radius: 0;
      border-bottom-left-radius: 0;
      color: ${theme.collapseHeaderOpenColor}
    `};
  `};
`;

const Header: React.FunctionComponent<HeaderProps> = ({
  children,
  onClick,
  headerRight,
  open,
  theme
}) => (
  <StyledHeader
    className="rtk-collapse-header"
    theme={theme}
    onClick={onClick}
    customProps={{
      open
    }}
  >
    <HeaderLeft>
      {children}
    </HeaderLeft>
    <HeaderRight>
      {headerRight}
    </HeaderRight>
  </StyledHeader>
);

export default Header;
