import React, { FC } from 'react';
import { Button as MUIButton } from '@mui/material';

export interface ButtonProps {
  children: string;
  onClick: () => void;
}

export const Button: FC<ButtonProps> = ({ children, onClick }) => {
  return <MUIButton onClick={onClick}>{children}</MUIButton>;
};
