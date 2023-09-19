import styled from 'styled-components'

export const Container = styled.div`
  background: rgb(47, 47, 47);
  box-shadow: 0px 8px 25px gray;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
`
export const ContainerItens = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #181617;

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

