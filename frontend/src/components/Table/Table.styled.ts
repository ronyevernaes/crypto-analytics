import styled, { css } from 'styled-components';
import { TableRow, TableCell } from '@mui/material';

const BaseStyledTableCell = css`
  border-bottom: none !important;
  :first-child {
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }

  :last-child {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }
`;

export const StyledTableCell = styled(TableCell)`
  ${BaseStyledTableCell}
  padding: 16px 4px !important;
`;

export const StyledTableHeaderCell = styled(TableCell)`
  ${BaseStyledTableCell}
  padding: 4px !important;
`

export const StyledTableRow = styled(TableRow)`
  border: none;
  &:nth-of-type(even) {
    background-color: #eeeeee;
  }
  &:last-child td, &:last-child th {}
`;

export const StyledTableHeaderRow = styled(TableRow)`
  border: none;
  background-color: #eeeeee;
`;
