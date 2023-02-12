import React, { FC } from 'react';

import { StyledTextField } from './TextField.styled';
import { BaseField, BaseFieldProps } from '../BaseField';

export interface TextFieldProps extends BaseFieldProps {}

export const TextField: FC<TextFieldProps> = ({ label, name, value, error, helperText, onChange }) => {
  return (
    <BaseField label={label}>
      <StyledTextField name={name} value={value} error={error} helperText={helperText} onChange={onChange} />
    </BaseField>
  );
};
