import * as React from 'react';

import styled from 'styled-components';

import { AnimatePresence } from 'framer-motion';

import { SortState } from '../icons';

import { Header } from './Header';

import { Body } from './Body';
import { TableLoading } from './TableLoading';

export type Justify = 'flex-start' | 'center' | 'flex-end';

// We are only going to support row click for now
// and look into adding more events in the future
export interface OnRowInterface<T> {
  onClick: (record: T) => void;
}

export interface ColumnProps<T> {
  /** unique key of the column */
  key: string | number;

  /** title of the column */
  title: React.ReactNode;

  /** the index of the data to render in the column */
  dataIndex?: string;

  /** allows for customization of what is rendered in the column where `record` is the record for the row */
  render?: React.FunctionComponent<{ record: T }>;

  /** choose how to align text/components in the column */
  justify?: Justify;

  /** set the width to a percentage of total width of table */
  width?: number;

  /** if true, the column will be sortable and be provided in the `onSort` callback when clicked */
  sortable?: boolean;
}

export interface TableProps<T> {
  /** className of the table component */
  className?: string;

  /** array of columns to render */
  columns: ColumnProps<T>[];

  /** data to show in the table where T is the type of data to show */
  data: T[];

  /** component to render when there is no data to show in the table */
  emptyComponent?: React.ReactNode;

  /** if true, the table will be in a loading state */
  loading?: boolean;

  /** component to render when there is data in the table is being fetched */
  loadingComponent?: React.ReactNode;

  /** callback that is called when a column is clicked to sort */
  onSort?: (key: string, state: SortState) => void;

  /** object containing possible event callbacks for a row */
  onRow?: OnRowInterface<T>;
}

const Container = styled.div`
  position: relative;
`;

const TableContainer = styled.table`
  width: 100%;
  border-spacing: 0;
`;

export const Table = <T extends any = any>(props: TableProps<T>) => {
  const [sortedColumn, setSortedColumn] = React.useState(null);

  const {
    className,
    columns,
    data,
    emptyComponent,
    loading,
    loadingComponent,
    onSort,
    onRow,
  } = props;

  const handleSort = React.useCallback(
    (itemKey, state) => {
      if (onSort) {
        onSort(itemKey, state);
        setSortedColumn(itemKey);
      }
    },
    [onSort]
  );

  return (
    <Container className={`${className} rtk-table`}>
      <AnimatePresence>
        {loading && <TableLoading loadingComponent={loadingComponent} />}
      </AnimatePresence>
      <TableContainer>
        <Header<T>
          columns={columns}
          onSort={handleSort}
          sortedColumn={sortedColumn}
        />
        <Body<T>
          columns={columns}
          data={data}
          emptyComponent={emptyComponent}
          onRow={onRow}
        />
      </TableContainer>
    </Container>
  );
};

Table.displayName = 'Table';
