import React, { useState } from "react";
import * as S from "./Header.styles";
import CartIcon from "../cart-icon/CartIcon";
import { RxHamburgerMenu } from "react-icons/rx";
import NavLinks from "../nav-links/NavLinks";

/**
 * Header component that provides navigation links and access to the shopping cart.
 * It includes a responsive hamburger menu for smaller screens that toggles navigation links displayed by the `NavLinks` component.
 * The `CartIcon` component is used to display and link to the shopping cart.
 *
 * @component
 * @example
 * return (
 *   <Header />
 * )
 */
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
