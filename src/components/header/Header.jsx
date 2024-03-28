import React from "react";
import * as S from "./Header.styles";
import { Link } from "react-router-dom";
import CartIcon from "../cart-icon/CartIcon";

function Header() {
  return (
    <S.Container>
      <S.Nav>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
      </S.Nav>
      <S.StyledLink to="/cart">
        <span>Cart</span>
        <CartIcon />
      </S.StyledLink>
    </S.Container>
  );
}

export default Header;
