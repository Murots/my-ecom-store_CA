import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/home-page/HomePage.jsx";
import ProductPage from "./pages/product-page/ProductPage.jsx";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="product/:id" element={<ProductPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
