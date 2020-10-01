import * as React from 'react';

import styled, { css } from 'styled-components';

import { useTheme } from '../../hooks/useTheme';

import { Typography } from '../typography/Typography';

import { Cell } from './Cell';

import { ColumnProps, OnRowInterface } from './Table';

import { GlobalTheme } from '../../theme/types';

interface BodyProps<T> {
  columns: ColumnProps<T>[];
  data: T[];
  emptyComponent?: React.ReactNode;
  onRow?: OnRowInterface<T>;
}

const TR = styled.tr<{
  theme: GlobalTheme;
}>`
  &:hover {
    background: blue;
  }
`;

const TD = styled.td<{
  theme: GlobalTheme;
}>`
  border-bottom: ${({ theme }) => theme.tableBodyRowBorder};
  border-color: ${({ theme }) => theme.tableBodyRowBorderColor};
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
  const { columns, data, emptyComponent, onRow } = props;

  const theme = useTheme();

  const handleRowEvent = React.useCallback(
    (e, d: T) => {
      switch (e.type) {
        case 'click': {
          if (onRow && onRow.onClick) {
            onRow.onClick(d);
          }
        }
      }
    },
    [onRow]
  );

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
                {emptyComponent == null ? 'No Data' : emptyComponent}
              </Typography.Body>
            </EmptyContentContainer>
          </TD>
        </tr>
      );
    }

    return data.map((d, index) => (
      <TR key={index} onClick={e => handleRowEvent(e, d)}>
        {columns.map(c => {
          const Renderer = c.render;
          return (
            <TD key={c.key} theme={theme}>
              <Cell justify={c.justify}>
                <Typography.Body>
                  {Renderer == null ? (
                    renderDataIndex(c, d)
                  ) : (
                    <Renderer record={d} />
                  )}
                </Typography.Body>
              </Cell>
            </TD>
          );
        })}
      </TR>
    ));
  }, [data, columns, emptyComponent, renderDataIndex, theme]);

  return <tbody>{renderBodyCell()}</tbody>;
};

Body.displayName = 'TableBody';
