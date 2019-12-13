import * as React from 'react';

import {
  ThemeProvider
} from "../../src/styled";

import {
  Button
} from "../../src/components";

import {
  createTheme,
} from "../../src/theme";

const theme1 = createTheme({}, {});

const theme2 = createTheme({
  primary: 'hotpink',
  secondary: 'yellow'
}, {});

const themes = {
  theme1,
  theme2
};

const Foo = ({ onClick, storyFn} : any) => {
  return (
    <div>
      <Button onClick={onClick}> Toggle Theme </Button>
      <div style={{ height: '15px' }}/>
      {storyFn()}
    </div>
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
      <Foo onClick={onClick} storyFn={storyFn} />
    </ThemeProvider>
  );
};
