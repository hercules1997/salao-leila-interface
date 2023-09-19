/* eslint-disable no-undef */
import styled from 'styled-components'

import { Button } from '../../../components'

export const Container = styled.div`

  background: #2f2f2f;
  background: black;
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 993px) {
    width: 100%;
    padding-bottom: 100px;
  }
`

export const HomeImage = styled.img`
  box-shadow: 0px 12px 35px black;
`

export const ContainerResume = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  background: rgb(18 18 18);
  box-shadow: 0 0 1.2px white;
  height: 320px;
  padding: 20px;
  border-radius: 12px;
  @media screen and (max-width: 993px) {
    width: 100%;
  }
`
export const Wampper = styled.div`
  display: flex;
  width: 100%;
  text-align: center;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  font-size: 20px;
  padding: 5px;
  border-radius: 8px;

  @media screen and (max-width: 993px) {
   p {
    text-align: start;
   }
  }
`

export const ContainerFormData = styled.div`
  display: flex;
  width: 40%;
  justify-content: center;
  text-align: center;

  @media screen and (max-width: 993px) {
    width: 100%;
    margin-top: 20px;
  }
`

export const FormPayment = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  background: rgb(18 18 18);
  padding: 14px;
  border-radius: 12px;
  box-shadow: 0 0 1.2px white;
  gap: 5px;
  @media screen and (max-width: 993px) {

    width: 100%;
  }
`
export const ContainerItems = styled.div`
  margin-top: 20px;

  width: 100%;
  display: flex;
  padding: 20px;
  justify-content: center;
  align-items: center;
  justify-items: center;
  @media screen and (max-width: 993px) {
    flex-direction: column;
    width: 100%;
  }
`

export const Input = styled.input`
  border-radius: 10px;
  border: none;
  padding: 8px;
  width: 100%;
  background-color: #3f3f3f;

  @media screen and (max-width: 993px) {
    width: 100%;
  }
`
export const Label = styled.label`
  display: flex;
  width: 100%;
  color: white;

  text-align: start;
  @media screen and (max-width: 993px) {
    width: 100%;
  }
`
export const ButtonStyle = styled(Button)`
  width: 100%;
  color: black;
  background-color: greenyellow;
  @media screen and (max-width: 993px) {
    width: 100%;
  }
`
