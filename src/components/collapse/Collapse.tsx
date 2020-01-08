import * as React from 'react';

import styled, {
  css
} from 'styled-components';

import Header from './Header';

import {
  ContentContainer,
  Content
} from './Content';

import {
  useAfterMountEffect
} from "../../hooks";

import {
  useTheme
} from "../../hooks";

export interface CollapseProps {
  /** Option to handle if collapse is expanded */
  expanded?: boolean;

  /** Icon to show on the right to show the current collapse state */
  icon?: React.ReactNode;

  /** Content to show in the collapse */
  children?: React.ReactNode;

  /** classname for the collapse */
  className?: string;

  /** Determines if collapse should default to expanded */
  defaultExpanded?: boolean;

  /** When Collapse closes the content component will be unmounted */
  destroyOnClose?: boolean;

  /** Content to render in the header */
  header?: React.ReactNode;

  /** Unique key to identify collapse. Used for Accordion */
  itemKey: string | number ;

  /** Function to handle when collapse state changes */
  onChange?: (itemKey: string | number) => void;
}

interface ContainerProps {
  collapseType?: 'panel' | 'stack';
  ghost?: boolean;
}

const Container = styled.div`
  ${({theme}) => css`
    &:hover {
      .rtk-collapse-header {
        background: ${theme.collapseHeaderOpenBackground};
        border: 1px solid transparent;
        color: ${theme.collapseHeaderOpenColor}      
      }
    };
  `};
  }
`;

export const Collapse: React.FunctionComponent<CollapseProps> = ({
  expanded,
  icon,
  className,
  children,
  defaultExpanded,
  destroyOnClose,
  header,
  itemKey,
  onChange
}) => {
  const [isExpanded, setExpanded] = React.useState<boolean | undefined>(defaultExpanded);

  const theme = useTheme();

  function onHeaderClick() {
    if (expanded === undefined) {
      setExpanded(!isExpanded);

      if (onChange) {
        onChange(itemKey);
      }

    } else if (onChange) {
      onChange(itemKey);
    }
  }

  const handleSetActive = React.useCallback(() => {
    setExpanded(expanded);
  }, [expanded]);


  useAfterMountEffect(handleSetActive, [expanded]);

  return (
    <Container
      className={`${className} rtk-collapse`}
      theme={theme}
    >
      <Header
        icon={icon}
        expanded={isExpanded}
        onClick={onHeaderClick}
        theme={theme}
      >
        {header}
      </Header>
      <ContentContainer
        animate={isExpanded ? 'open' : 'closed'}
        destroyOnClose={destroyOnClose}
        theme={theme}
      >
        <Content
          theme={theme}
        >
          {children}
        </Content>
      </ContentContainer>
    </Container>
  );
};

Collapse.defaultProps = {
  expanded: undefined,
  children: '',
  className: '',
  defaultExpanded: undefined,
  destroyOnClose: false,
  header: '',
  onChange: undefined,
  itemKey: ''
};
