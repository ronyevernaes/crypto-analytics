import React, { ReactNode } from 'react';
import { Table as MUITable, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

export interface Column<T> {
  id: keyof T;
  label: string;
  align?: 'left' | 'center' | 'right';
}

interface TableProps<T> {
  id: string;
  data?: T[];
  columns: Column<T>[];
}

export const Table = <T,>({ id: tableId, data, columns }: TableProps<T>) => {
  return (
    <TableContainer>
      <MUITable>
        <TableHead>
          <TableRow>
            {columns.map(({ id, label }) => <TableCell key={id as string}>{label}</TableCell>)}
          </TableRow>
        </TableHead>

        <TableBody>
          {data && data.map((rowData: T, index) => (
            <TableRow key={`${tableId}-row-${index}`} >
              {columns.map(({ id }) => (
                <TableCell key={`${tableId}-row-${index}-${id as string}`} >
                  {rowData[id] as ReactNode}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </MUITable>
    </TableContainer >
  );
};
