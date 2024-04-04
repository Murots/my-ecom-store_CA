import styled from "styled-components";
import { buttonStyle } from "../../styles/GlobalStyles";

export const CheckoutContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #e1e1e1;

  &:last-child {
    border-bottom: none;
  }
`;

export const TotalAmount = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin: 20px 0;
`;

export const Button = styled.button`
  ${buttonStyle}
  font-size: 1rem;
  margin-right: 10px;

  &:last-child {
    margin-right: 0;
  }
`;

export const EmptyCartMessage = styled.p`
  text-align: center;
  font-size: 16px;
`;

export const ConclusionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-top: 20px;
`;
