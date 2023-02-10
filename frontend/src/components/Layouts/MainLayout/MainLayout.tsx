import React, { FC, ReactNode } from 'react';
import { Grid } from '@mui/material';
export interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <Grid container>
      <Grid item sm={2} />
      <Grid item sm={8}>
        {children}
      </Grid>
      <Grid item sm={2} />
    </Grid>
  );
}