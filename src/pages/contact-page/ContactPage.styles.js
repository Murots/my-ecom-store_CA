import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const FormTitle = styled.h1`
  color: #333;
  margin-bottom: 20px;
`;

export const StyledForm = styled.form`
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-weight: bold;
  color: #333;
`;

export const Input = styled.input`
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  margin-top: 5px;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

export const TextArea = styled.textarea`
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  margin-top: 5px;
  height: 100px;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

export const ErrorMessage = styled.p`
  color: #ff0000;
  margin-top: 5px;
`;

export const SubmitButton = styled.button`
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.2s;

  &:hover {
    background-color: #0056b3;
  }
`;
