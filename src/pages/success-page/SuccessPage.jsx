import React, { useEffect } from "react";
import useStore from "../../hooks/useStore";
import * as S from "./SuccessPage.styles"; // Make sure the path matches your file structure

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
