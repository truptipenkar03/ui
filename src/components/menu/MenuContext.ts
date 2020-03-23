import * as React from 'react';

export interface MenuContextProps {
  onClick?: (key: string | number) => void;
}

export const MenuContext = React.createContext<MenuContextProps>({});
