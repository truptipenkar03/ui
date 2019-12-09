import * as React from 'react';
import styled from 'styled-components';
import * as _ from 'lodash';

import {
  AccordionItem,
  AccordionItemProps
} from './AccordionItem';

import {
  AccordionContext
} from './context';

import {
  ItemGapType,
  ItemKeyType
} from "./types";

export interface AccordionFunctionComponent<T = {}> extends React.FunctionComponent<T> {
  Item: React.FunctionComponent<AccordionItemProps>;
}

export interface AccordionProps {
  /** Accordion Item. See Collapse for supported props. */
  children: React.ReactNode;

  /** classname for the collapse */
  className?: string;

  /** Use classic accordion where a single item is open at a time */
  classic?: boolean;

  /** Determines which collapses should be active on initial render */
  defaultSelectedItems?: (string|number)[];

  /** Vertical gap between items */
  itemGap?: ItemGapType;

  /** Function to handle when collapse state changes */
  onChange?: (selectedItems: ItemKeyType[]) => void;

  /** Determines which collapses should be active */
  selectedItems?: (string|number)[];
}

const Container = styled.div``;

export const Accordion: AccordionFunctionComponent<AccordionProps> = ({
  children,
  classic,
  className,
  defaultSelectedItems,
  itemGap,
  onChange,
  selectedItems: customSelectedItems
}) => {
  const [selectedItems, setSelectedItems] = React.useState<(string|number)[]>(defaultSelectedItems || []);

  function getClassicItems(key: ItemKeyType) {
    return _.includes(selectedItems, key) ?
      [] :
      [key];
  }

  function getItems(key: ItemKeyType) {
    return _.includes(selectedItems, key) ?
      selectedItems.filter((i: ItemKeyType) => i !== key) :
      selectedItems.concat(key);
  }

  function onCollapseChange(key: ItemKeyType): void {
    const newItems = classic ? getClassicItems(key) : getItems(key);

    if (onChange) {
      onChange(newItems);
    }

    if (customSelectedItems == null) {
      setSelectedItems(newItems);
    }
  }

  React.useEffect(() => {
     if (customSelectedItems == null) {
       return;
     } else {
       setSelectedItems(customSelectedItems);
     }
  }, [customSelectedItems]);

  return (
    <AccordionContext.Provider
      value={{
        itemGap,
        selectedItems,
        onChange: onCollapseChange
      }}
    >
      <Container className={className}>
        {children}
      </Container>
    </AccordionContext.Provider>
  );
};

Accordion.defaultProps = {
  children: '',
  classic: false,
  className: '',
  defaultSelectedItems: [],
  itemGap: 20,
  onChange: undefined
};

Accordion.Item = AccordionItem;

export default Accordion;
