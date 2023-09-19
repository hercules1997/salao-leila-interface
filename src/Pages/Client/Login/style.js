import styled from "styled-components";
import ImgLogin from "../../../common/assets/ImgLogin.jpg";

export const ContainerMaster = styled.div`
  background-color: #444444;
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  text-align: center;
  align-items: center;
  padding: 3rem 4rem;

  @media screen and (max-width: 993px) {
    display: flex;
    width: 100%;
  }
`;
export const Container = styled.div`
  display: flex;

  width: 100%;
  height: 33rem;
  box-shadow: 0px 12px 35px black;
  @media screen and (max-width: 993px) {
    display: flex;
    width: 100%;
  }
`;
export const Background = styled.span`
  display: flex;
  background-image: url("${ImgLogin}");
  background-size: cover;
  width: 60%;
  justify-content: center;

  @media screen and (max-width: 993px) {
    display: none;
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

    padding: 10px;
    color: #000;
  }

  h1 {
    margin: 0;
    margin-bottom: 5px;
    font-size: 1.3rem;
  }

  @media screen and (max-width: 993px) {
    display: flex;
    width: 100%;
  }
`;
export const Logo = styled.img`
  width: 150px;

  @media screen and (max-width: 993px) {
    display: flex;
    width: 300px;
  }
`;

export const Label = styled.label`
  text-align: start;
  margin-top: 0.5rem;
  font-weight: 400;
`;
export const Input = styled.input`
  width: 350px;
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
`;

export const SingLink = styled.p`
  margin-top: 20px;
  font-weight: 400;
  color: #000;

  a {
    cursor: pointer;
    color: #cb8631;
    margin-left: 20px;
    text-decoration: none;
    font-weight: 600;
    &:hover {
      color: orange;
    }
  }
`;
