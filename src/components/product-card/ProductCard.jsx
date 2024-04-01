import React from "react";
import { Link } from "react-router-dom";
import * as S from "./ProductCard.styles";
import DiscountInfo from "../discount-info/DiscountInfo";

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
          <Link to={`/product/${product.id}`}>
            <S.Button>View Product</S.Button>
          </Link>
        </S.Info>
      </S.Card>
    </S.StyledLink>
  );
};

// const ProductCard = ({ product }) => {
//   return (
//     <S.Card>
//       <S.ImageContainer>
//         <S.Image src={product.image.url} alt={product.title} />
//       </S.ImageContainer>
//       <S.Info>
//         <S.Title>{product.title}</S.Title>
//         <S.Price>
//           <DiscountInfo price={product.price} discountedPrice={product.discountedPrice} showDiscountPercentage={false} />
//         </S.Price>
//         <Link to={`/product/${product.id}`}>
//           <S.Button>View Product</S.Button>
//         </Link>
//       </S.Info>
//     </S.Card>
//   );
// };

export default ProductCard;
