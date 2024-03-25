import styled from "styled-components";
import { FiShoppingCart } from "react-icons/fi";

export const Container = styled.div`
  position: relative;
  cursor: pointer;
`;

export const ShoppingCartIcon = styled(FiShoppingCart)`
  font-size: 24px;
`;

export const ItemCount = styled.span`
  position: absolute;
  top: -10px;
  right: -10px;
  background-color: red;
  color: white;
  border-radius: 50%;
  padding: 2px 6px;
  font-size: 12px;
`;
