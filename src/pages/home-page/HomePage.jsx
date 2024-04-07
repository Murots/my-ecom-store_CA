import React, { useState } from "react";
import useApi from "../../hooks/useApi";
import ProductCard from "../../components/product-card/ProductCard";
import { ProductsGrid, SearchInput } from "./HomePage.styles";

/**
 * A React component that renders the home page with a product listing and a search functionality.
 * It uses the `useApi` hook to fetch products from a specified API and displays them using the `ProductCard` component.
 * A search input allows users to filter products by title.
 *
 * @module HomePage
 *
 * @returns {React.Component} The HomePage component which renders a list of products that can be filtered through a search input.
 */
const HomePage = () => {
  const { data, isLoading, isError } = useApi("https://v2.api.noroff.dev/online-shop");
  const products = data || [];
  const [searchQuery, setSearchQuery] = useState("");

  if (isLoading) {
    return <div>Loading products...</div>;
  }

  if (isError) {
    return <div>Error loading products.</div>;
  }

  const filteredProducts = products.filter((product) => product.title.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <div>
      <SearchInput type="text" placeholder="Search products..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
      <ProductsGrid>
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ProductsGrid>
    </div>
  );
};

export default HomePage;
