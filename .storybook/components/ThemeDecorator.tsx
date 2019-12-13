import * as React from 'react';

import styled from "styled-components";

import {
  ThemeProvider
} from "../../src/styled";

import {
  Button
} from "../../src/components";

import {
  createTheme,
} from "../../src/theme";

const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const theme1 = createTheme({}, {});

const theme2 = createTheme({
  primary: 'hotpink'
}, {});

const themes = {
  theme1,
  theme2
};

const Story = ({ onClick, storyFn} : any) => {
  return (
    <React.Fragment>
      <Header>
        <Button size="small" shape="circle" onClick={onClick} />
      </Header>
      <div style={{ height: '15px' }}/>
      {storyFn()}
    </React.Fragment>
  )
};

export default (storyFn: any) => {
  const [themeIndex, setThemeIndex] = React.useState<'theme1' | 'theme2'>('theme1');

  const onClick = React.useCallback(() => {
    if (themeIndex === 'theme1') {
      setThemeIndex('theme2');
    } else {
      setThemeIndex('theme1');
    }
  },[themeIndex]);

  return (
    <ThemeProvider theme={themes[themeIndex]}>
      <Story onClick={onClick} storyFn={storyFn} />
    </ThemeProvider>
  );
};
