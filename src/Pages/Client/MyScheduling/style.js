/* eslint-disable no-undef */
import styled from "styled-components";

export const Container = styled.div`
  background: beige;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 993px) {
    width: 100%;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-evenly;
  padding: 20px 8%;
  @media screen and (max-width: 993px) {
    display: flex;
  
    padding: 20px;
    margin-bottom: 50px;
  }
`;
export const WrapperItens = styled.div`
  width: 100%;
  display: flex;
  @media screen and (max-width: 993px) {
    width: 100%;
  }
`;
