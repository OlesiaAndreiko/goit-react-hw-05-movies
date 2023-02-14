import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const BackLink = styled(NavLink)`
  display: flex;
  align-items: flex-end;
  gap: 8px;
  padding: 10px 10px;
  width: 130px;
  border-radius: 4px;
  text-decoration: none;
  color: #141314;
  background-color: #dfebe8;
  /*  */
  font-weight: 500;
  font-size: 18px;
  margin-bottom: 15px;
`;
export const MovieCard = styled.div`
  display: flex;
  gap: 20px;
  /* color: #8c8c8c; */
`

export const MoviePoster = styled.div`
  /* display: flex; */
` 
export const MovieDescription= styled.div`
  display: flex;
  flex-direction: column;
  color: #250c27;
` 
export const MovieCaption = styled.h2`

`

export const StyledLink = styled(NavLink)`
  display: block;
  padding: 8px 16px;
  width: 60px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  padding: 10px 20px;
    font-size: 18px;
    font-weight: 700;
    text-align: center;

  &.active {
    color: #1a39a0;
    background-color: #ffcc00;
  }
`;
export const DetalisList = styled.ul`
  display: flex;
  list-style: none;
`

export const TextDescription = styled.p`
  color: #4a4646;
  font-size: 18px;
    line-height: 1.67;
    font-weight: 500;
`
