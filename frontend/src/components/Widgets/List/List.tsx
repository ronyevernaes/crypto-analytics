import React, { useState, useEffect } from 'react';
import { useQuery } from 'react-query';

import { StyledListTitle } from './List.styled';
import { Column, Table } from '../../Table';
import { MainLayout } from '../../Layouts';
import getTxs from '../../../api/Tx';
import { Tx, PriceType } from '../../../interfaces/Tx';

export const List = () => {
  const [txs, setTxs] = useState<Tx[]>([]);
  const { isLoading, data } = useQuery<any, any,Exclude<Tx, PriceType>[], any>('txs', getTxs);

  useEffect(() => {
    setTxs(
      data 
      ? data?.map<Tx>(d => ({ ...d, type: PriceType.exchanged }))
      : []
    );
  }, [data]);

  const columns: Column<Tx>[] = [
    { label: 'Date & Time', id: 'dateTime' },
    { label: 'Currency From', id: 'currencyFrom' },
    { label: 'Amount 1', id: 'amount1' },
    { label: 'Currency To', id: 'currencyTo' },
    { label: 'Amount 2', id: 'amount2' },
    { label: 'Type', id: 'type' },
  ];

  return ( 
    <MainLayout>
      <StyledListTitle>History</StyledListTitle>

      <Table id="exchange-table" columns={columns} loading={isLoading} data={txs} />
    </MainLayout>
  );
};