import ReactSelect from "react-select";
import styled from "styled-components";

import { Button } from "../../../components/Button";

// Estilos para o container principal
export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  form {
    display: flex;
    flex-direction: column;
    background: #ffff;
    padding: 35px;
    justify-content: space-around;
    color: gray;
    width: 700px;
    height: 500px;
    box-shadow: 0 0 4px gray;
    gap: 20px;
  }
`;

// Estilos para rótulos de input
export const Label = styled.p`
  font-size: 1rem;
`;

// Estilos para campos de input
export const Input = styled.input`
  width: 100%;
  height: 40px;
  background-color: #f5f5dc;
  color: #000;
  font-size: 17px;
  padding: 12px;
  outline: none;
  border: none;
  border: ${(props) => (props.error ? "2px solid #FF0000" : "none")};

  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`;

// Estilos para o botão de envio
export const ButtonStyle = styled(Button)`
  font-size: 16px;
  padding: 10px;
  width: 100%;
  margin-top: 0;
`;

// Estilos para o rótulo de upload
export const LabelUpload = styled.label`
  cursor: pointer;
  display: flex;
  align-items: center;
  border: ${(props) => (props.error ? "2px solid #FF0000" : "dashed 1px gray")};
  color: #232323;
  padding: 8px;
  gap: 3px;
  text-align: center;
  justify-content: center;

  input {
    opacity: 0;
    width: 1px;
  }
`;

// Estilos para o componente ReactSelect
export const ReactSelectStyles = styled(ReactSelect)`
  color: #000;

  .css-10wo9uf-option {
    outline: none;
  }
`;
