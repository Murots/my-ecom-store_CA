import React from "react";

const DiscountInfo = ({ price, discountedPrice, showDiscountPercentage = false }) => {
  const hasDiscount = discountedPrice < price;
  const discountPercentage = hasDiscount ? ((price - discountedPrice) / price) * 100 : 0;

  return (
    <>
      {hasDiscount ? (
        <>
          <p>
            Price: <del>${price}</del> ${discountedPrice}
          </p>
          {showDiscountPercentage && <p>Discount: {discountPercentage.toFixed(2)}%</p>}
        </>
      ) : (
        <p>Price: ${price}</p>
      )}
    </>
  );
};

export default DiscountInfo;
