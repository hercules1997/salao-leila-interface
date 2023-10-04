import ReactSelect from "react-select";
import styled from "styled-components";
import { Button } from "../../../components/Button";


export const Label = styled.p`
  font-size: 1rem;
`;


export const Input = styled.input`
  width: 100%;
  height: 40px;
  background-color: black;
  color: white;
  font-size: 17px;
  padding: 12px;
  outline: none;
  border-radius: 10px;
  border: none;
  border: ${(props) => (props.error ? "2px solid yellow" : "none")};

  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`;
export const Textarea = styled.textarea`
  max-width: 100%;
  min-width: 100%;

  max-height: 100px;
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
