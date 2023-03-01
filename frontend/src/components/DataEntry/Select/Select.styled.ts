import styled from 'styled-components';
import { Select } from '@mui/material';

// import { StyledAbstractBaseField } from '../BaseField/BaseField.styled';

export const StyledSelect = styled(Select)`
  width: 200px;
  height: 42px;
  border-radius: 8px !important;

  flex-grow: 0;
  display: flex;
  align-content: center;
`;

export const StyledSelectOptionIconWrapper = styled.div`
  display: inline-block;
  margin-top: 2px;
  margin-right: 8px;
`;

export const StyledSelectOptionLabel = styled.div`
  display: inline-block;
`;
