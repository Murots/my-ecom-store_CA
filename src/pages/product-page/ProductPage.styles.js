import styled from "styled-components";

export const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

export const ProductLayout = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

export const ProductImageContainer = styled.div`
  flex: 1;
  max-width: 100%;

  @media (min-width: 768px) {
    max-width: 50%;
  }
`;

export const ProductImage = styled.img`
  width: auto;
  max-width: 35vw;
  max-height: 80vh;
  border-radius: 8px;
`;

export const ProductInfo = styled.div`
  flex: 1;
  padding: 0 20px;

  @media (min-width: 768px) {
    max-width: 50%;
  }
`;

export const ProductTitle = styled.h2`
  font-size: 2rem;
  color: #333;
  margin-bottom: 20px;
  margin-top: 0;
`;

export const ProductDescription = styled.p`
  font-size: 1rem;
  color: #666;
  line-height: 1.6;
  margin-bottom: 50px;
`;

export const AddToCartButton = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #0056b3;
  }

  margin-bottom: 20px;
`;
