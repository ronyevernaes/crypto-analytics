import React, { useState, useEffect, ReactNode } from 'react';
import { useQuery } from 'react-query';
import io from 'socket.io-client';

import { StyledListTitle, StyledRateType } from './List.styled';
import { Column, Table } from '../../Table';
import { MainLayout } from '../../Layouts';
import { get as getRates } from '../../../api/Rates';
import { PriceType, Rate } from '../../../interfaces/Rate';

export const List = () => {
  const [rates, setRates] = useState<Rate[]>([]);
  const { isLoading, data } = useQuery<any, any, Rate[], any>('txs', getRates, {
    refetchOnWindowFocus: false,
  });

  // Setup WebSocket
  useEffect(() => {
    // TODO: Extract to helper
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

  // TODO: Extract to helper
  const formatCurrency = (amount: ReactNode) =>
    (amount as number).toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 8
    });

  const columns: Column<Rate>[] = [
    {
      label: 'Date & Time',
      id: 'dateTime',
      // TODO: Extract to helper
      render: (dateTime) => {
        const dt = new Date(dateTime as string);
        const date = dt.getDate().toString().padStart(2, '0');
        const month = (dt.getMonth() + 1).toString().padStart(2, '0');
        const year = dt.getFullYear().toString();
        const hour = dt.getHours().toString().padStart(2, '0');
        const mins = dt.getMinutes().toString().padStart(2, '0');

        return `${date}/${month}/${year} ${hour}:${mins}`;
      },
    },
    { label: 'Currency From', id: 'currencyFrom' },
    { label: 'Amount 1', id: 'amount1', render: formatCurrency },
    { label: 'Currency To', id: 'currencyTo' },
    { label: 'Amount 2', id: 'amount2', render: formatCurrency },
    {
      label: 'Type',
      id: 'type',
      render: (type) => {
        const priceType = type as keyof typeof PriceType;
        return (
          <StyledRateType type={priceType}>
            {PriceType[priceType].toString()}
          </StyledRateType>
        );
      }
    },
  ];

  return ( 
    <MainLayout>
      <StyledListTitle>History</StyledListTitle>

      <Table id="exchange-table" columns={columns} loading={isLoading} data={rates} />
    </MainLayout>
  );
};