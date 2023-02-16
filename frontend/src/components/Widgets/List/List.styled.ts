import styled from 'styled-components';
import { PriceType } from '../../../interfaces/Rate';

export const StyledListTitle = styled.h2``;

interface StyledRateTypeProps {
  type: keyof typeof PriceType;
}

export const StyledRateType = styled.span<StyledRateTypeProps>`
  font-weight: 700;
  color: ${({ type }) => type === 'live' ? '#5dbe7e' : '#6368df'};
`;
