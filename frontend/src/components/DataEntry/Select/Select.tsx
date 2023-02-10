import React, { FC, ReactNode } from 'react';
import { MenuItem } from '@mui/material';

import { StyledSelectContainer, StyledLabel, StyledSelect } from './Select.styled';

export interface SelectOption {
  label: ReactNode;
  value: string;
  icon?: ReactNode;
}

export interface SelectProps {
  options: SelectOption[];
  label?: string;
};

export const Select: FC<SelectProps> = ({ options, label }) => {
  return (
    <StyledSelectContainer>
      {label && <StyledLabel>{label}</StyledLabel>}
      <StyledSelect>
        {options.map(({ label, value, icon }) => (
          <MenuItem value={value} key={value}>
            {icon ? icon : ''}
            {label}
          </MenuItem>
        ))}
      </StyledSelect>
    </StyledSelectContainer>
  );
};
