import * as React from 'react';

import styled, { css } from 'styled-components';

import { useTheme } from '../../hooks/useTheme';

import { Typography } from '../typography/Typography';

import { Cell } from './Cell';

import { ColumnProps } from './Table';

import { GlobalTheme } from '../../theme/types';

interface BodyProps<T> {
  columns: ColumnProps<T>[];
  data: T[];
  emptyState?: React.ReactNode;
}

const TD = styled.td<{
  theme: GlobalTheme;
}>`
  ${({ theme }) => css`
    border-bottom: ${theme.tableBodyRowBorder};
    border-color: ${theme.tableBodyRowBorderColor};
  `}
`;

const EmptyContentContainer = styled.div`
  ${({ theme }) => css`
    height: ${theme.tableEmptyContainerHeight};

    display: flex;
    align-items: center;
    justify-content: center;
  `}
`;

export const Body = <T extends any = any>(props: BodyProps<T>) => {
  const { columns, data, emptyState } = props;

  const theme = useTheme();

  const renderDataIndex = React.useCallback((column, data) => {
    if (column.dataIndex == null) {
      // eslint-disable-next-line no-console
      console.warn(
        `You must supply a dataIndex or render function for column: ${column.key}`
      );
      return null;
    } else {
      return data[column.dataIndex];
    }
  }, []);

  const renderBodyCell = React.useCallback(() => {
    if (data.length === 0) {
      return (
        <tr>
          <TD colSpan={columns.length}>
            <EmptyContentContainer theme={theme}>
              <Typography.Body>
                {emptyState == null ? 'No Data' : emptyState}
              </Typography.Body>
            </EmptyContentContainer>
          </TD>
        </tr>
      );
    }

    return data.map(d => (
      <tr key={d.key}>
        {columns.map(c => (
          <TD key={c.key} theme={theme}>
            <Cell justify={c.justify}>
              <Typography.Body>
                {c.render == null ? renderDataIndex(c, d) : c.render(d)}
              </Typography.Body>
            </Cell>
          </TD>
        ))}
      </tr>
    ));
  }, [data, columns, emptyState, renderDataIndex, theme]);

  return <tbody>{renderBodyCell()}</tbody>;
};

Body.displayName = 'TableBody';
