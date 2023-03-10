import React, { ChangeEvent, FC, ReactNode } from 'react';

import { StyledBaseFieldContainer, StyledBaseFieldLabel } from './BaseField.styled';

export interface BaseFieldProps {
  label?: string;
  name?: string;
  value?: string | number;
  error?: boolean;
  helperText?: string;
  onChange?: (event: ChangeEvent) => void;
}

interface InnerBaseFieldProps extends BaseFieldProps {
  children: ReactNode;
}

export const BaseField: FC<InnerBaseFieldProps> = ({ children, label }) => {
  return (
    <StyledBaseFieldContainer>
      {label && <StyledBaseFieldLabel>{label}</StyledBaseFieldLabel>}
      {children}
    </StyledBaseFieldContainer>
  );
};
