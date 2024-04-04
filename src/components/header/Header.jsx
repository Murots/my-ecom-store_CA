import React, { useState } from "react";
import * as S from "./Header.styles";
import CartIcon from "../cart-icon/CartIcon";
import { RxHamburgerMenu } from "react-icons/rx";
import NavLinks from "../nav-links/NavLinks";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <S.Container>
      <S.Hamburger onClick={() => setIsOpen(!isOpen)}>
        <RxHamburgerMenu size="1.5em" />
      </S.Hamburger>
      <S.Nav isOpen={isOpen}>
        <NavLinks onClose={() => setIsOpen(false)} />
      </S.Nav>
      <S.StyledLink to="/checkout">
        <span>Cart</span>
        <CartIcon />
      </S.StyledLink>
    </S.Container>
  );
}

export default Header;
