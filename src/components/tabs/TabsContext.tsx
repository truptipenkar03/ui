import * as React from 'react';
import { ActiveItem } from './types';

export interface TabsContextProps {
  defaultSelectedItem?: string | number;
  onClick?: (key: string | number, e: React.MouseEvent<HTMLDivElement>) => void;
  setActiveItem?: React.Dispatch<React.SetStateAction<ActiveItem | undefined>>;
  selectedItem?: string | number;
}

export const TabsContext = React.createContext<TabsContextProps>({});
