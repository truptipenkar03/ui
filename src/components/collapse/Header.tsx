import * as React from 'react';

import styled, {
  css
} from 'styled-components';

interface HeaderProps {
  /** Content to show in the Header */
  children: React.ReactNode;

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

const StyledHeader = styled.div<StyledHeaderProps>`
  ${({ customProps, theme }) => css`
    display: flex;
    align-items: center;

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
    {children}
  </StyledHeader>
);

export default Header;
