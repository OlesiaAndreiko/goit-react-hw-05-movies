import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HomeCaption = styled.h2`
color: #141314;
`

export const TrendingList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

`;
export const TrendingItem = styled.li`
  display: flex;
  align-items: center;
  width: 250px;
  gap: 10px;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.2;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 0 rgb(0 0 0 / 0%);

  &:hover {
    transform: scale(0.97);
    box-shadow: 0 0 15px 3px #000;
  }
`;
export const StyledLink = styled(NavLink)`
  text-decoration: none;
  width: 100%;
  color: #141314;
`;

export const PreviewPoster = styled.img`
display: block;
   width: 100%;
  height: auto;  
  object-fit: cover;
  padding-bottom: 12px;
`;
export const NameMovie = styled.p`
  text-transform: uppercase;
  width: 250px;
  margin: 0;
  padding-left: 10px;
  margin-bottom: 3px;
`;
export const HomeWrapper = styled.div`
position: sticky;
z-index: 1300;
top: 0;
  left: 0;  
  padding: 20px;
` 
