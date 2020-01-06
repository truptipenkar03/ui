import * as React from 'react';

import styled from 'styled-components';

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
} from "../../hooks/useTheme";

export interface CollapseProps {
  /** Option to handle if collapse is active */
  active?: boolean;

  /** Content to show in the collapse */
  children?: React.ReactNode;

  /** classname for the collapse */
  className?: string;

  /** Determines if collapse should default to open */
  defaultActive?: boolean;

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

const Container = styled.div``;

export const Collapse: React.FunctionComponent<CollapseProps> = ({
  active,
  className,
  children,
  defaultActive,
  destroyOnClose,
  header,
  itemKey,
  onChange
}) => {
  const [isActive, setActive] = React.useState<boolean | undefined>(defaultActive);

  const theme = useTheme();

  function onHeaderClick() {
    if (active === undefined) {
      setActive(!isActive);

      if (onChange) {
        onChange(itemKey);
      }

    } else if (onChange) {
      onChange(itemKey);
    }
  }

  const handleSetActive = React.useCallback(() => {
    setActive(active);
  }, [active]);

  useAfterMountEffect(handleSetActive, [active]);

  return (
    <Container className={`${className} rtk-collapse`}>
      <Header
        open={isActive}
        headerRight={isActive ? 'bar' : 'foo'}
        onClick={onHeaderClick}
        theme={theme}
      >
        {header}
      </Header>
      <ContentContainer
        animate={isActive ? 'open' : 'closed'}
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
  active: undefined,
  children: '',
  className: '',
  defaultActive: undefined,
  destroyOnClose: false,
  header: '',
  onChange: undefined,
  itemKey: ''
};
