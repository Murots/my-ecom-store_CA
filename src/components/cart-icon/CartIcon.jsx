import React from "react";
// import { Link } from "react-router-dom";
import useStore from "../../hooks/useStore";
import * as S from "./CartIcon.styles";

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
