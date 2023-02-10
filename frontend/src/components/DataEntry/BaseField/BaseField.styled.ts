import styled, { css } from 'styled-components';

export const StyledAbstractBaseField = css`
  .MuiOutlinedInput-root {
    width: 200px;
    height: 42px;
    border-radius: 8px !important;
  }
`;

export const StyledBaseFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 42px;
`;

export const StyledBaseFieldLabel = styled.label`
  font-weight: 400;
  color: #9C9C9C;
  line-height: 21px;
`;
