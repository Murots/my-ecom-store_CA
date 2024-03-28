import React from "react";
import * as S from "./Footer.styles";

function Footer() {
  return <S.Container>© {new Date().getFullYear()} My E-Commerce Store. All rights reserved.</S.Container>;
}

export default Footer;
