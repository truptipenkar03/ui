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
  icon?: React.ReactNode;
  children: React.ReactNode;
  expanded?: boolean;
  onClick: () => void;
  theme: GlobalTheme;
}

interface CustomProps {
  expanded?: boolean;
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
    
    ${customProps.expanded && css`
      border-bottom-right-radius: 0;
      border-bottom-left-radius: 0;
    `};
  `};
`;

const HeaderIcon: React.FunctionComponent<any> = ({
  icon,
  expanded,
  theme
}) => {
  if (icon) {
    return (
      <HeaderIconContainer>
        {icon}
      </HeaderIconContainer>
    );
  } else if (expanded) {
    return (
      <HeaderIconContainer>
        <MinusSolid
          height={theme.collapseIconSize}
          width={theme.collapseIconSize}
        />
      </HeaderIconContainer>
    )
  }

  return (
    <HeaderIconContainer>
      <PlusSolid
        height={theme.collapseIconSize}
        width={theme.collapseIconSize}
      />
    </HeaderIconContainer>
  )
};

const Header: React.FunctionComponent<HeaderProps> = ({
  icon,
  children,
  onClick,
  expanded,
  theme
}) => (
  <StyledHeader
    className="rtk-collapse-header"
    theme={theme}
    onClick={onClick}
    customProps={{
      expanded
    }}
  >
    <HeaderContent>
      {children}
    </HeaderContent>
    <HeaderIcon
      icon={icon}
      open={open}
      theme={theme}
    />
  </StyledHeader>
);

export default Header;
