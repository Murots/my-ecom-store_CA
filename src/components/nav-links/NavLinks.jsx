import React from "react";
import * as S from "./NavLinks.styles";

/**
 * Component for rendering navigation links. This component displays links to the Home and Contact pages.
 * It receives a callback function `onClose` that is called when a link is clicked, closing mobile navigation menu.
 *
 * @param {Object} props - Component props
 * @param {Function} props.onClose - Function to call when a link is clicked
 * @returns {React.Element} The rendered element with navigation links
 *
 * @example
 * <NavLinks onClose={() => console.log('Navigating away...')} />
 */
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
