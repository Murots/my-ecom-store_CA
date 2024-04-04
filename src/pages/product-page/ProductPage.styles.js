import styled from "styled-components";
import { buttonStyle } from "../../styles/GlobalStyles";

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
  margin-bottom: 20px;

  @media (min-width: 768px) {
    max-width: 50%;
    background-color: #e9ecef;
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  max-width: 100%;
  height: auto;
  display: block;
  box-sizing: border-box;

  @media (min-width: 768px) {
    padding: 0;
    max-height: 80vh;
    width: auto;
    margin: auto;
  }
`;

export const ProductInfo = styled.div`
  flex: 1;

  @media (min-width: 768px) {
    max-width: 50%;
    padding: 0 20px;
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
  ${buttonStyle}
  font-size: 1rem;
  margin-bottom: 20px;
`;
