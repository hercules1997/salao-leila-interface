import styled from "styled-components";

import { Button } from "../../../components";

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;

  @media screen and (max-width: 993px) {
    width: 100%;
  }
`;

export const ContainerItens = styled.div`
  display: flex;
  flex-direction: column;

  background: #f5f9f2;

  width: 40%;
  justify-content: center;
  text-align: center;
  align-items: center;

  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 30px;
    color: #000;

    div {
      display: flex;
      width: 100%;

      .ddd {
        width: 20% !important;
        margin-right: 15px;
      }
    }

    span {
      display: flex;
      flex-direction: column;
      width: 100% !important;
    }
  }

  h1 {
    margin: 0;
    margin-bottom: 5px;
    font-size: 1.3rem;
  }

  @media screen and (max-width: 993px) {
    width: 100%;
    height: 100% !important;
  }
`;

export const Label = styled.label`
  text-align: start;
  margin-top: 0.5rem;
  font-weight: 400;
`;
export const Input = styled.input`
  width: auto;
  height: 35px;
  align-items: center;
  padding: 10px;

  outline: none;
  border: none;
  border-bottom: ${(props) =>
    props.error ? "2px solid red" : "1px solid gray"};

  font-size: 1.2rem;
  color: #d6d6ba;

  &:focus {
    background-color: #fafafa;
    border-bottom: ${(props) =>
      props.error ? "2px solid red" : "2px solid gray"};
    color: #000;
  }
  @media screen and (max-width: 993px) {
    width: 100%;
  }
`;

export const Background = styled.span`
  display: flex;
  background-color: #836543;

  width: 60%;
  justify-content: center;

  img {
    width: 100%;
  }

  @media screen and (max-width: 993px) {
    display: none;
  }
`;

export const ContainerNumber = styled.span`
  display: flex;
  width: 100%;
`;
export const InputNumber = styled.input`
  position: relative;
`;
export const InputDDD = styled.input`
  position: relative;
`;
export const LabelDDD = styled.label`
  display: flex;
  width: 50%;
  position: relative;
`;
export const LabelNumber = styled.label`
  display: flex;
  width: 50%;
`;
export const Number = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
`;
export const DDD = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
`;

export const ButtonStyle = styled(Button)``;
export const SingLink = styled.p`
  margin-top: 10px;
  font-weight: 400;
  color: #000;

  a {
    cursor: pointer;
    color: #cb8631;
    font-weight: 700;
    margin-left: 20px;
    text-decoration: none;
    &:hover {
      color: orange;
    }
  }
`;
