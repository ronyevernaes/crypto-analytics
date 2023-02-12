import React, { FC } from 'react';
import { Button as MUIButton } from '@mui/material';

export interface ButtonProps {
  children: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
}

export const Button: FC<ButtonProps> = ({ children, type, onClick }) => {
  return <MUIButton type={type} onClick={onClick}>{children}</MUIButton>;
};
