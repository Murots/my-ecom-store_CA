import React from "react";
import useStore from "../../hooks/useStore";
import * as S from "./CheckoutPage.styles";
import { Link } from "react-router-dom";

const CheckoutPage = () => {
  const cart = useStore((state) => state.cart);
  const clearCart = useStore((state) => state.clearCart);

  if (cart.length === 0) {
    return <S.EmptyCartMessage>Your shopping cart is empty.</S.EmptyCartMessage>;
  }

  return (
    <S.CheckoutContainer>
      {cart.map((item, index) => (
        <S.CartItem key={index}>
          <span>{item.title}</span> <span>${item.price}</span>
        </S.CartItem>
      ))}
      <S.ConclusionContainer>
        <S.TotalAmount>Total: ${cart.reduce((total, item) => total + item.price, 0).toFixed(2)}</S.TotalAmount>
        <div>
          <S.Button onClick={clearCart}>Clear cart</S.Button>
          <Link to="/success">
            <S.Button>Checkout</S.Button>
          </Link>
        </div>
      </S.ConclusionContainer>
    </S.CheckoutContainer>
  );
};

export default CheckoutPage;
