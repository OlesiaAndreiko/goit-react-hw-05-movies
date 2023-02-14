import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const Header = styled.header`
  position: sticky;
  top: 0;
  left: 0;  
  width: 100%;
  z-index: 1200;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  background-color: #c4dee6;
  padding: 8px 0;
  margin-bottom: 16px;

  > nav {
    display: flex;
    padding: 0 20px;
    font-size: 20px;
    font-weight: 600;
  }
`;
export const StaledLink = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: #1a39a0;
    background-color: #ffcc00;
  }
`;