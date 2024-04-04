import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #e9ecef;
`;

export const Hamburger = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: flex;
  }
`;

export const Nav = styled.nav`
  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  }
`;

export const StyledLink = styled(Link)`
  display: flex;
  gap: 10px;
  background-color: #b8e0d2;
  padding: 5px 17px 2px 17px;
  border: 1px solid #6da99f;
  border-radius: 8px;
  text-decoration: none;
  transition: transform 0.2s, background-color 0.2s;
  color: black;
  font-weight: 600;
  position: relative;

  &:hover {
    text-decoration: none;
    transform: scale(1.05);
  }
`;
