import React from "react";
import * as S from "./NavLinks.styles";

const NavLinks = ({ onClose }) => {
  return (
    <S.NavContainer>
      <S.StyledLink to="/" onClick={onClose}>
        Home
      </S.StyledLink>
      <S.StyledLink to="/contact" onClick={onClose}>
        Contact
      </S.StyledLink>
    </S.NavContainer>
  );
};

export default NavLinks;
