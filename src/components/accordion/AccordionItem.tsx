import * as React from 'react';
import styled from 'styled-components';

import {
  Collapse
} from '..';

import {
  AccordionContext
} from './context';

import {
  CollapseProps
} from "../collapse/Collapse";

interface CollapseSpacerProps {
  itemGap?: number;
}

export interface AccordionItemProps extends CollapseProps {
  /** Unique key used to identify each item */
  itemKey: string | number;
}

const CollapseSpacer = styled.div<CollapseSpacerProps>`
  height: ${(props) => `${props.itemGap}px`};
`;

/** Accordion.Item */
export const AccordionItem: React.FunctionComponent<AccordionItemProps> = (props) => (
  <AccordionContext.Consumer>
    {(value) => {
      const {
        itemKey,
        defaultExpanded
      } = props;

      const isExpanded = value.expandedItems.includes(itemKey);

      return (
        <React.Fragment>
          <Collapse
            {...props}
            defaultExpanded={defaultExpanded || isExpanded}
            expanded={isExpanded}
            onChange={value.onChange}
          />
          <CollapseSpacer itemGap={value.itemGap} />
        </React.Fragment>
      );
    }}
  </AccordionContext.Consumer>
);
