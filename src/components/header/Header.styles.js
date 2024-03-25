import styled from "styled-components";

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

    &:hover {
      text-decoration: underline;
    }
  }
`;
