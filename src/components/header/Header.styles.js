import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #f8f9fa;
`;

export const Nav = styled.nav`
  a {
    margin-right: 20px;
    text-decoration: none;
    color: black;
    font-weight: 600;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const StyledLink = styled(Link)`
  display: flex;
  gap: 10px;
  background-color: #b8e0d2;
  padding: 5px 20px 2px 20px;
  border: 1px solid #6da99f;
  border-radius: 8px;
  text-decoration: none;
  transition: transform 0.2s, background-color 0.2s;
  color: black;
  font-weight: 600;

  &:hover {
    text-decoration: none;
    transform: scale(1.05);
  }
`;
