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
  ${(props) => css`
    display: flex;
    align-items: center;

    background: ${props.theme.collapse.header.background};
    border: ${props.theme.collapse.border};
    border-color: ${props.theme.collapse.borderColor};
    border-radius: ${props.theme.collapse.borderRadius};
    color: ${props.theme.collapse.header.color};

    padding: ${props.theme.collapse.header.padding};
    height: ${props.theme.collapse.header.height};
  
    box-sizing: border-box;
    user-select: none;
    cursor: pointer;
    
    transition: all ${props.theme.animations.time.veryFast}s;
    
    &:hover {
      background: ${props.theme.collapse.header.hoverBackground};
      border: 1px solid transparent;
      color: ${props.theme.collapse.header.hoverColor};
    };
    
    ${props.customProps.open && css`
      background: ${props.theme.collapse.header.openBackground};
      border: 1px solid transparent;
      border-bottom-right-radius: 0;
      border-bottom-left-radius: 0;
      color: ${props.theme.collapse.header.openColor}
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
