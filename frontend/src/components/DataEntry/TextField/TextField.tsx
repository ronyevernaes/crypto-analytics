import React, { FC } from 'react';

import { StyledTextField } from './TextField.styled';
import { BaseField, BaseFieldProps } from '../BaseField';

export interface TextFieldProps extends BaseFieldProps {}

export const TextField: FC<TextFieldProps> = ({ label }) => {
  return (
    <BaseField label={label}>
      <StyledTextField></StyledTextField>
    </BaseField>
  );
}