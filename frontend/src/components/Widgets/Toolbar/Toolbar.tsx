import React, { FC } from 'react';
import { Select, TextField } from '../../DataEntry';
import { BTCIcon, ETHIcon, XRPIcon, LTCIcon } from '../../Icons';
import { StyledToolbarContainer, StyledToolbarTitle, StyledToolbarForm, StyledEqualSign } from './Toolbar.styled';

interface ToolbarProps {};

export const Toolbar: FC<ToolbarProps> = () => {
  const fromOptions = [
    { label: 'Bitcoin', value: 'BTC', icon: <BTCIcon /> },
    { label: 'Ethereum', value: 'ETH', icon: <ETHIcon /> },
    { label: 'Ripple', value: 'XRP', icon: <XRPIcon /> },
    { label: 'Litcoin', value: 'LTC', icon: <LTCIcon /> },
  ];

  const toOptions = [
    { label: 'USD', value: 'USD' },
  ];

  return (
    <StyledToolbarContainer>
      <StyledToolbarTitle>Exchange</StyledToolbarTitle>

      <StyledToolbarForm>
        <Select options={fromOptions} label='Currency from' />
        <TextField label='Amount' />
        <StyledEqualSign>=</StyledEqualSign>
        <Select options={toOptions} label='Currency to' />
        <TextField label='Amount' />
      </StyledToolbarForm>

    </StyledToolbarContainer>
  );
};
