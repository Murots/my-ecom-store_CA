import styled from "styled-components";

export const SearchInput = styled.input`
  padding: 10px;
  width: calc(100% - 30px);
  box-sizing: border-box;
  display: block;
  margin: 15px 15px 30px 15px;

  @media (min-width: 768px) {
    width: 60vw;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin: 15px;

  @media (max-width: 1199px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;
