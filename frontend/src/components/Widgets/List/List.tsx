import React from 'react';

import { StyledListTitle } from './List.styled';
import { Table } from '../../Table';
import { MainLayout } from '../../Layouts';

export const List = () => { 
  const columns = [
    { label: 'Date & Time', id: 'dateTime' },
    { label: 'Currency From', id: 'currencyFrom' },
    { label: 'Amount 1', id: 'amount1' },
    { label: 'Currency To', id: 'currencyTo' },
    { label: 'Amount 2', id: 'amount2' },
    { label: 'Type', id: 'type' } 
  ];

  return ( 
    <MainLayout>
      <StyledListTitle>History</StyledListTitle>

      <Table id="exchange-table" columns={columns} /> 
    </MainLayout>
  );
};