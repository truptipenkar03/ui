import * as React from 'react';

import styled, {
  css
} from 'styled-components';

import {
  GlobalTheme
} from "../../theme/types";

import PlusSolid from "../icons/PlusSolid";
import MinusSolid from "../icons/MinusSolid";

interface HeaderProps {
  activeIcon?: React.ReactNode;
  children: React.ReactNode;
  open?: boolean;
  onClick: () => void;
  theme: GlobalTheme;
}

interface CustomProps {
  open?: boolean;
}

interface StyledHeaderProps {
  customProps: CustomProps;
  onClick: () => void;
  theme: any;
}

const HeaderContent = styled.div`
`;

const HeaderIconContainer = styled.div`
  display: flex;
  align-items: center;

  justify-self: end;
`;

const StyledHeader = styled.div<StyledHeaderProps>`
  ${({ customProps, theme }) => css`
    display: grid;
    grid-template-columns: auto 0.2fr;
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

const HeaderIcon: React.FunctionComponent<any> = ({
  activeIcon,
  open
}) => {
  if (activeIcon) {
    return (
      <HeaderIconContainer>
        {activeIcon}
      </HeaderIconContainer>
    );
  } else if (open) {
    return (
      <HeaderIconContainer>
        <MinusSolid />
      </HeaderIconContainer>
    );
  }

  return (
    <HeaderIconContainer>
      <PlusSolid />
    </HeaderIconContainer>
  );
};

const Header: React.FunctionComponent<HeaderProps> = ({
  activeIcon,
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
    <HeaderContent>
      {children}
    </HeaderContent>
    <HeaderIcon
      activeIcon={activeIcon}
      open={open}
    />
  </StyledHeader>
);

export default Header;
