import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
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
