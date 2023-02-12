import React, { ChangeEvent, FC, ReactNode } from 'react';
import { MenuItem, FormHelperText, SelectChangeEvent } from '@mui/material';

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

export const Select: FC<SelectProps> = ({ options, label, name, value, error, helperText, onChange }) => {
  const localOnChange = (event: SelectChangeEvent<unknown>) => {
    onChange && onChange(event as ChangeEvent);
  };

  return (
    <BaseField label={label}>
      <StyledSelect name={name} error={error} value={value} onChange={localOnChange}>
        {options.map(({ label, value, icon }) => (
          <MenuItem value={value} key={value}>
            {icon ? icon : ''}
            {label}
          </MenuItem>
        ))}
      </StyledSelect>
      {helperText && <FormHelperText error={error}>{helperText}</FormHelperText>}
    </BaseField>
  );
};
