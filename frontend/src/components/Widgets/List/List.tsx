import React, { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import io from 'socket.io-client';

import { StyledListTitle } from './List.styled';
import { Column, Table } from '../../Table';
import { MainLayout } from '../../Layouts';
import { get as getRates } from '../../../api/Rates';
import { Rate } from '../../../interfaces/Rate';

export const List = () => {
  const [rates, setRates] = useState<Rate[]>([]);
  const { isLoading, data } = useQuery<any, any, Rate[], any>('txs', getRates, {
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    // TODO: Wrap this into a helper function
    if (process.env.REACT_APP_WS_URL === undefined) {
      throw new Error('Undefined WebSocket URL');
    }

    const socket = io(process.env.REACT_APP_WS_URL || '');
    socket.on('connect', () => console.log('Connected to the server'));
    socket.on('newRate', (newRate: Rate) => {
      setRates((currentRates) => [newRate, ...currentRates]);
    });

    return () => {
      socket.disconnect();
    };
  }, [])

  useEffect(() => setRates(data || []), [data]);

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