import React, { useEffect } from "react";
import useStore from "../../hooks/useStore";
import * as S from "./SuccessPage.styles";

/**
 * Represents the success page that is displayed after a successful checkout.
 * This page informs the user that their order has been processed successfully. It also provides a link to return to the homepage, allowing the user to continue shopping. The cart is cleared automatically.
 *
 * @module SuccessPage
 *
 * @returns {React.Component} Renders the success notification and a link to return to the store homepage.
 */
const SuccessPage = () => {
  const clearCart = useStore((state) => state.clearCart);

  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return (
    <S.SuccessContainer>
      <S.SuccessTitle>Your order was successful!</S.SuccessTitle>
      <S.SuccessMessage>Thank you for shopping with us.</S.SuccessMessage>
      <S.BackToStoreLink to="/">Go back to the store</S.BackToStoreLink>
    </S.SuccessContainer>
  );
};

export default SuccessPage;
