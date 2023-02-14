import React, { ReactNode } from 'react';
import { Table as MUITable, TableBody, TableContainer, TableHead } from '@mui/material';

import { StyledTableRow, StyledTableHeaderRow, StyledTableCell, StyledTableHeaderCell } from './Table.styled';

export interface Column<T> {
  id: keyof T;
  label: string;
  align?: 'left' | 'center' | 'right';
}

interface TableProps<T> {
  id: string;
  data?: T[];
  columns: Column<T>[];
  loading?: boolean;
}

export const Table = <T,>({ id: tableId, data, columns, loading }: TableProps<T>) => {
  return (
    <TableContainer>
      <MUITable>
        <TableHead>
          <StyledTableHeaderRow>
            {columns.map(({ id, label }) => <StyledTableHeaderCell key={id as string}>{label}</StyledTableHeaderCell>)}
          </StyledTableHeaderRow>
        </TableHead>

        <TableBody>
          {loading}
          {!loading && data && data.map((rowData: T, index) => (
            <StyledTableRow key={`${tableId}-row-${index}`}>
              {columns.map(({ id }) => (
                <StyledTableCell key={`${tableId}-row-${index}-${id as string}`} >
                  {rowData[id] as ReactNode}
                </StyledTableCell>
              ))}
            </StyledTableRow>
          ))}
        </TableBody>
      </MUITable>
    </TableContainer >
  );
};
