/* eslint-disable */

import * as React from 'react';
import styled from 'styled-components';

import { Tabs } from '../Tabs';

// @ts-ignore
import mdx from './Tabs.mdx';

const Container = styled.div`
  background: white;
  height: 60px;

  display: flex;
  align-items: flex-end;
`;

export default {
  title: 'Components/Tabs',
  component: Tabs,
  parameters: {
    docs: {
      page: mdx,
    },
  },
};

export const simple = () => {
  const [selectedTab, setSelectedTab] = React.useState<string | number>('2');

  return (
    <Container>
      <Tabs
        defaultSelectedItem="2"
        selectedItem={selectedTab}
        onTabClick={key => setSelectedTab(key)}
      >
        <Tabs.Item title="Tab 1" itemKey="1" />
        <Tabs.Item title="Tab 2" itemKey="2" />
        <Tabs.Item
          title={
            <div>
              <span>Tab 3</span>
            </div>
          }
          itemKey="3"
        />
      </Tabs>
    </Container>
  );
};
