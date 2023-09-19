import styled from "styled-components";

export const Container = styled.div`
  background: rgb(47, 47, 47);
  margin-top: 40px;
  box-shadow: 0px 12px 35px gray;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
`;
export const ContainerItens = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 450px;
  justify-content: center;
  text-align: center;
  align-items: center;

  h1 {
    display: flex;
    font-size: 3rem;
    flex-direction: column;
    text-align: center;
    margin-top: 10px;
    color: #9e775a;
  }
`;
