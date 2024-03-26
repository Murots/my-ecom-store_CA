import React from "react";
import useApi from "../../hooks/useApi";
import ProductCard from "../../components/product-card/ProductCard";
import { ProductsGrid } from "./HomePage.styles";

const HomePage = () => {
  const { data: products, isLoading, isError } = useApi("https://v2.api.noroff.dev/online-shop");

  if (isLoading) {
    return <div>Loading products...</div>;
  }

  if (isError) {
    return <div>Error loading products.</div>;
  }

  return (
    <ProductsGrid>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </ProductsGrid>
  );
};

export default HomePage;
