import React from "react";
import { useParams } from "react-router-dom";
import useApi from "../../hooks/useApi";
import useStore from "../../hooks/useStore";
import DiscountInfo from "../../components/discount-info/DiscountInfo";
import Reviews from "../../components/review-info/ReviewInfo";
import * as S from "./ProductPage.styles";

/**
 * Represents a component that displays detailed information about a specific product.
 * It uses the `useParams` hook to extract the product ID from the URL, the `useApi` hook to fetch product details from an API, and the `useStore` hook from Zustand for state management to handle adding products to the cart.
 *
 * @module ProductPage
 *
 * @param {Object} props - The component props.
 * @param {Object} props.product - Product object containing details like title, description, image, and pricing.
 *
 * @returns {React.Component} The ProductPage component which displays the product image, description, dynamic pricing information, and a button to add the product to the shopping cart.
 */
function ProductPage() {
  let { id } = useParams();
  const { data: product, isLoading, isError } = useApi(`https://v2.api.noroff.dev/online-shop/${id}`);
  const addToCart = useStore((state) => state.addToCart);

  if (isLoading) {
    return <S.PageContainer>Loading...</S.PageContainer>;
  }

  if (isError || !product) {
    return <S.PageContainer>Error loading product.</S.PageContainer>;
  }

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <S.PageContainer>
      <S.ProductLayout>
        <S.ProductImageContainer>
          <S.ProductImage src={product.image.url} alt={product.title} />
        </S.ProductImageContainer>
        <S.ProductInfo>
          <S.ProductTitle>{product.title}</S.ProductTitle>
          <S.ProductDescription>{product.description}</S.ProductDescription>
          <DiscountInfo price={product.price} discountedPrice={product.discountedPrice} showDiscountPercentage={true} />
          <S.AddToCartButton onClick={handleAddToCart}>Add to Cart</S.AddToCartButton>
        </S.ProductInfo>
      </S.ProductLayout>
      <Reviews reviews={product.reviews} />
    </S.PageContainer>
  );
}

export default ProductPage;
