import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
`;
export const ContainerAvaliacao = styled.div`
  background: beige;
  display: flex;
  flex-direction: column;
  padding: 10px 40px;
  width: 100%;

  h2 {
    text-align: center;
    color: #9e775a;
    margin-bottom: 15px;
  }
`;
export const ContainerItens = styled.div`
  display: flex;
  flex-direction: column;


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
