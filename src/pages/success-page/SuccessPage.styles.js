import styled from "styled-components";
import { Link } from "react-router-dom";
import { buttonStyle } from "../../styles/GlobalStyles";

export const SuccessContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
  padding: 20px;
  text-align: center;
`;

export const SuccessTitle = styled.h1`
  color: #4bb543;
  margin-bottom: 20px;
`;

export const SuccessMessage = styled.p`
  font-size: 16px;
  margin-bottom: 30px;
`;

export const BackToStoreLink = styled(Link)`
  ${buttonStyle}
  text-decoration: none;
`;
