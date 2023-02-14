import React, { useState, useEffect } from 'react';
import { useQuery } from 'react-query';

import { StyledListTitle } from './List.styled';
import { Column, Table } from '../../Table';
import { MainLayout } from '../../Layouts';
import getRates from '../../../api/Rates';
import { Rate, PriceType } from '../../../interfaces/Rate';

export const List = () => {
  const [rates, setRates] = useState<Rate[]>([]);
  const { isLoading, data } = useQuery<any, any,Exclude<Rate, PriceType>[], any>('txs', getRates);

  useEffect(() => {
    setRates(
      data 
      ? data?.map<Rate>(d => ({ ...d, type: PriceType.exchanged }))
      : []
    );
  }, [data]);

  const columns: Column<Rate>[] = [
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

      <Table id="exchange-table" columns={columns} loading={isLoading} data={rates} />
    </MainLayout>
  );
};