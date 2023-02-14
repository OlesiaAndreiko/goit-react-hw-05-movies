import styled from 'styled-components';

export const CastList = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const CastDescription = styled.p`
  color: #4a4646;
  font-size: 16px;
  line-height: 1.3;
  font-weight: 500;
  margin: 0;
  padding: 3px;
`;
