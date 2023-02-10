import React, { FC } from 'react';

import { Select } from '../../DataEntry';
import { BTCIcon, ETHIcon, XRPIcon, LTCIcon } from '../../Icons';
import { StyledToolbarContainer } from './Toolbar.styled';

interface HeaderProps {};

export const Toolbar: FC<HeaderProps> = () => {
  const fromOptions = [
    { label: 'Bitcoin', value: 'BTC', icon: <BTCIcon /> },
    { label: 'Ethereum', value: 'ETH', icon: <ETHIcon /> },
    { label: 'Ripple', value: 'XRP', icon: <XRPIcon /> },
    { label: 'Litcoin', value: 'LTC', icon: <LTCIcon /> },
  ];

  return (
    <StyledToolbarContainer>
      <Select options={fromOptions} label='Currency from' />
    </StyledToolbarContainer>
  );
};
