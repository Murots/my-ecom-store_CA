import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/home-page/HomePage.jsx";
import ProductPage from "./pages/product-page/ProductPage.jsx";
import CheckoutPage from "./pages/checkout-page/CheckoutPage.jsx";
import SuccessPage from "./pages/success-page/SuccessPage.jsx";
import ContactPage from "./pages/contact-page/ContactPage.jsx";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="product/:id" element={<ProductPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/success" element={<SuccessPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
