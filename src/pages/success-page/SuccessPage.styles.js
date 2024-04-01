import styled from "styled-components";
import { Link } from "react-router-dom";

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
  display: inline-block;
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.2s;

  &:hover {
    background-color: #0056b3;
  }
`;
