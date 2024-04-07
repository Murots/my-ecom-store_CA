import React from "react";
import * as S from "./ProductCard.styles";
import DiscountInfo from "../discount-info/DiscountInfo";

/**
 * Component that displays a product card with an image, title, and price information.
 * It includes a link to the individual product's page and may show discount information if applicable.
 *
 * @param {Object} props - Component props.
 * @param {Object} props.product - The product data to display in the card.
 * @param {string} props.product.id - Unique identifier for the product.
 * @param {string} props.product.title - Title of the product.
 * @param {string} props.product.image.url - URL of the product's image.
 * @param {number} props.product.price - Price of the product.
 * @param {number} [props.product.discountedPrice] - Discounted price of the product, if any.
 * @returns {React.Element} A styled product card component.
 *
 * @example
 * <ProductCard product={{
 *   id: "1",
 *   title: "Classic Watch",
 *   image: { url: "path/to/image.jpg" },
 *   price: 150,
 *   discountedPrice: 100
 * }} />
 */
const ProductCard = ({ product }) => {
  return (
    <S.StyledLink to={`/product/${product.id}`}>
      <S.Card>
        <S.ImageContainer>
          <S.Image src={product.image.url} alt={product.title} />
        </S.ImageContainer>
        <S.Info>
          <S.Title>{product.title}</S.Title>
          <S.Price>
            <DiscountInfo price={product.price} discountedPrice={product.discountedPrice} showDiscountPercentage={false} />
          </S.Price>
          <S.Button>View Product</S.Button>
        </S.Info>
      </S.Card>
    </S.StyledLink>
  );
};

export default ProductCard;
