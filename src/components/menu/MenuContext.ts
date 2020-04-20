import * as React from 'react';

export interface MenuContextProps {
  onClick?: (key: string | number) => void;
  selectedItem?: string | number;
}

export const MenuContext = React.createContext<MenuContextProps>({});
