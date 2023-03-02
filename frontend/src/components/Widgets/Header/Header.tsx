import React, { FC } from 'react';
import { MainLayout } from '../../Layouts';

import { StyledHeaderTitle } from './Header.styled';

export interface HeaderProps {
  title?: string;
}

export const Header: FC<HeaderProps> = ({ title }) => {
  return (
    <MainLayout>
      <header>
        <StyledHeaderTitle>{title}</StyledHeaderTitle>
      </header>
    </MainLayout>
  );
};
