import styled from 'styled-components'

import { Button } from '../../../components'

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;

  @media screen and (max-width: 993px) {
    width: 100%;
  }
`
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
`


export const Label = styled.label`
margin-top: 5px;
  text-align: start;
  font-weight: 400;
`

export const ButtonStyle = styled(Button)`

`
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
