import { Link } from "react-router-dom";
import styled from "styled-components";
import { buttonStyle } from "../../styles/GlobalStyles";

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export const Card = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.02);
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  padding-top: 100%;
  position: relative;
`;

export const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Info = styled.div`
  padding: 20px;
`;

export const Title = styled.h3`
  margin: 0;
  color: #333;
  font-size: 18px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const Price = styled.div`
  color: #666;
  font-size: 16px;
  margin: 10px 0;
`;

export const Button = styled.button`
  ${buttonStyle}
`;
