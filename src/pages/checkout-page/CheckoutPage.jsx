import React from "react";
import useStore from "../../hooks/useStore";
import * as S from "./CheckoutPage.styles";
import { Link } from "react-router-dom";

/**
 * A React component that renders the checkout page.
 * It displays the items in the shopping cart and allows users to either clear the cart or proceed to checkout.
 *
 * @module CheckoutPage
 *
 * @returns {React.Component} The CheckoutPage component renders the cart's contents and provides options to clear the cart or proceed with the checkout.
 */
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
          <span>{item.title}</span> <span>${item.discountedPrice}</span>
        </S.CartItem>
      ))}
      <S.ConclusionContainer>
        <S.TotalAmount>Total: ${cart.reduce((total, item) => total + item.discountedPrice, 0).toFixed(2)}</S.TotalAmount>
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
