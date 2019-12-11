import * as React from 'react';

import {
  ItemGapType,
  SelectedItemsType,
  ItemKeyType
} from "./types";

interface AccordionContext {
  itemGap?: ItemGapType;
  selectedItems: SelectedItemsType;
  onChange?: (itemKey: ItemKeyType) => void;
}

export const AccordionContext = React.createContext<AccordionContext>({
  selectedItems: [],
});
