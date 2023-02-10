import React, { FC, ReactNode } from 'react';
import { MenuItem } from '@mui/material';

import { StyledSelect } from './Select.styled';
import { BaseField, BaseFieldProps } from '../BaseField';
export interface SelectOption {
  label: ReactNode;
  value: string;
  icon?: ReactNode;
}

export interface SelectProps extends BaseFieldProps {
  options: SelectOption[];
};

export const Select: FC<SelectProps> = ({ options, label }) => {
  return (
    <BaseField label={label}>
      <StyledSelect>
        {options.map(({ label, value, icon }) => (
          <MenuItem value={value} key={value}>
            {icon ? icon : ''}
            {label}
          </MenuItem>
        ))}
      </StyledSelect>
    </BaseField>
  );
};
