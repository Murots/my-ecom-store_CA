import React from "react";
import { Link } from "react-router-dom";
import * as S from "./ProductCard.styles";

const ProductCard = ({ product }) => {
  return (
    <S.Card>
      <S.ImageContainer>
        <S.Image src={product.image.url} alt={product.title} />
      </S.ImageContainer>
      <S.Info>
        <S.Title>{product.title}</S.Title>
        <S.Price>${product.price}</S.Price>
        <Link to={`/product/${product.id}`}>
          <S.Button>View Product</S.Button>
        </Link>
      </S.Info>
    </S.Card>
  );
};

export default ProductCard;
