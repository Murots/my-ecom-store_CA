import React from "react";
import useStore from "../../hooks/useStore";
import * as S from "./CartIcon.styles";

/**
 * Component that renders a shopping cart icon with a count of items in the cart.
 *
 * @component
 * @example
 * return (
 *   <CartIcon />
 * )
 */
const CartIcon = () => {
  const itemCount = useStore((state) => state.cart.length);

  return (
    <div>
      <S.ShoppingCartIcon />
      {itemCount > 0 && <S.ItemCount>{itemCount}</S.ItemCount>}
    </div>
  );
};

export default CartIcon;
