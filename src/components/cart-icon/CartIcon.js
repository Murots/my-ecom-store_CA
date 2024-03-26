import React from "react";
import * as S from "./CartIcon.styles";
// import { Link } from "react-router-dom";

function CartIcon({ itemCount }) {
  // itemCount should be passed from a global state or context
  return (
    <S.Container>
      <S.ShoppingCartIcon />
      {itemCount > 0 && <S.ItemCount>{itemCount}</S.ItemCount>}
    </S.Container>
  );
}

export default CartIcon;
