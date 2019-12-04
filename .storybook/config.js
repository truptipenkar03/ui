import * as React from 'react';

import {
  addDecorator,
  addParameters,
  configure
} from '@storybook/react';

import ThemeDecorator from './components/ThemeDecorator';
import theme from './theme';

addParameters({
  options: {
    brandTitle: 'Arctic Wolf UI',
    theme: theme,
    showPanel: false,
    showRoots: true
  },
});

addDecorator(story => ThemeDecorator(story));

// automatically import all files ending in *.stories.js
configure(
  [
    require.context('../src', true, /\.stories\.mdx$/),
    require.context('../src', true, /\.stories\.tsx$/),
  ],
  module
);
