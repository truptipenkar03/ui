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

const StyledHeader = styled.div<HeaderProps>`
  ${(props) => css`
    display: flex;
    align-items: center;

    background: ${props.theme.collapse.headerBackground};
    border: ${props.theme.collapse.border};
    border-color: ${props.theme.collapse.borderColor};
    border-radius: ${props.theme.collapse.borderRadius};

    ${props.open && css`
      border-bottom: 1px solid ${props.theme.colors.borderColor};
      border-bottom-right-radius: 0;
      border-bottom-left-radius: 0;
    `};

    padding: ${props.theme.collapse.headerPadding};
    height: ${props.theme.collapse.headerHeight};
  
    box-sizing: border-box;
    cursor: pointer;
    
    transition: all ${props.theme.animations.time.veryFast}s;
    
    &:hover {
      background: ${props.theme.colors.primary};
      border: 0;
    };
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
    open={open}
  >
    {children}
  </StyledHeader>
);

export default Header;
