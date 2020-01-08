import * as React from 'react';

import {
  ItemGapType,
  ExpandedItemsType,
  ItemKeyType
} from "./types";

interface AccordionContext {
  itemGap?: ItemGapType;
  expandedItems: ExpandedItemsType;
  onChange?: (itemKey?: ItemKeyType) => void;
}

export const AccordionContext = React.createContext<AccordionContext>({
  expandedItems: [],
});
