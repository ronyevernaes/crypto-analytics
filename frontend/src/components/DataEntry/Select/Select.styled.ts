import styled from 'styled-components';
import { Select } from '@mui/material';

export const StyledSelectContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledLabel = styled.label`
  font-weight: 400;
  color: #9C9C9C;
  line-height: 21px;
`;

export const StyledSelect = styled(Select)`
  width: 200px;
  height: 42px;
  flex-grow: 0;
`;