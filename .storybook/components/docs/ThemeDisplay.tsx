import * as React from 'react';

import {
  Source
} from '@storybook/addon-docs/blocks';

import {
  getDefaultTheme
} from "../../../src/theme";

import {
  GlobalTheme
} from "../../../src/theme/types";

interface Props {
  component: keyof GlobalTheme;
}

export const ThemeDisplay: React.FunctionComponent<Props> = ({ component }) => {
  const theme = getDefaultTheme();

  return (
    <Source
      language="json"
      code={`${JSON.stringify(theme[component], null, 2)}`}
      format={true}
    />
  );
};
