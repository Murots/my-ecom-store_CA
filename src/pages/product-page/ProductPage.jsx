import React from "react";
import { useParams } from "react-router-dom";
import useApi from "../../hooks/useApi";
import useStore from "../../hooks/useStore";
import DiscountInfo from "../../components/discount-info/DiscountInfo";
import Reviews from "../../components/review-info/ReviewInfo";
import * as S from "./ProductPage.styles";

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
