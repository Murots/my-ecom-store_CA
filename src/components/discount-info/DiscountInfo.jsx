import React from "react";

/**
 * Displays pricing information, including discounts if applicable. It shows the normal price and
 * discounted price when a discount is available. It also show the percentage of the discount.
 *
 * @component
 * @param {Object} props
 * @param {number} props.price - The original price of the product.
 * @param {number} props.discountedPrice - The discounted price of the product.
 * @param {boolean} [props.showDiscountPercentage=false] - Whether to show the discount percentage.
 * @returns {React.Element} A JSX element displaying the price information, including discount details if applicable.
 *
 * @example
 * return (
 *   <DiscountInfo price={100} discountedPrice={80} showDiscountPercentage={true} />
 * )
 */
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
        <p>Price: ${discountedPrice}</p>
      )}
    </>
  );
};

export default DiscountInfo;
