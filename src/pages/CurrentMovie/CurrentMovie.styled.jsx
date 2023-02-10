import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledLink = styled(NavLink)`
  display: block;
  padding: 8px 16px;
  width: 50px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: #1a39a0;
    background-color: #ffcc00;
  }
`;