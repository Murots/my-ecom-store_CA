import styled from "styled-components";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
`;

export const ShoppingCartIcon = styled(FiShoppingCart)`
  font-size: 20px;
`;

export const ItemCount = styled.span`
  position: absolute;
  top: -5px;
  right: -5px;
  background-color: red;
  color: white;
  border-radius: 50%;
  padding: 2px 6px;
  font-size: 12px;
`;
