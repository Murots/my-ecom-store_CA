import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavContainer = styled.nav`
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    position: absolute;
    top: 60px;
    left: 0;
    right: 0;
    background-color: #e9ecef;
    padding: 10px 20px;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-weight: 600;
  margin-right: 20px;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    margin-bottom: 15px;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;
