import * as React from 'react';

import styled, { css } from 'styled-components';

import { SortState } from '../icons';

import { ColumnProps } from './Table';

import { useTheme } from '../../hooks/useTheme';

import { GlobalTheme } from '../../theme/types';

import { HeaderCell } from './HeaderCell';

export interface HeaderProps<T> {
  columns: ColumnProps<T>[];
  onSort: (key: string | number, state: SortState) => void;
  sortedColumn: any;
}

const TH = styled.th<{
  theme: GlobalTheme;
  width?: number;
}>`
  ${({ theme, width }) => css`
    margin: 0;
    border-bottom: ${theme.tableHeadBorder};
    border-bottom-color: ${theme.tableHeadBorderColor};
    width: ${`${width}%` || 'auto'};
  `}
`;

export const Header = <T extends any = any>(props: HeaderProps<T>) => {
  const { columns, onSort, sortedColumn } = props;

  const theme = useTheme();

  return (
    <thead>
      <tr>
        {columns.map(col => (
          <TH key={col.key} theme={theme} width={col.width}>
            <HeaderCell<T>
              header
              column={col}
              onClick={onSort}
              sortedColumn={sortedColumn}
              theme={theme}
            />
          </TH>
        ))}
      </tr>
    </thead>
  );
};

Header.displayName = 'TableHead';
