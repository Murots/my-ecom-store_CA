import React from "react";
import Header from "../header/Header"; // Update the path as necessary
import Footer from "../footer/Footer"; // Update the path as necessary
import * as S from "./Layout.styles";

function Layout({ children }) {
  return (
    <>
      <Header />
      <S.Main>{children}</S.Main>
      <Footer />
    </>
  );
}

export default Layout;
