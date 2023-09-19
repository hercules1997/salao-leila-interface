import styled from 'styled-components'
import { Button } from '../Button'

export const Container = styled.div`
  background-color: #ffff;


  display: flex;
  flex-direction: column;
  width: 250px;
  box-shadow: 0px 2px 9px gray;

  @media screen and (max-width: 993px) {
    /* display: block; */
    width: 100%;
  }
`
export const ServicePrice = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 1.6rem;
  line-height: 21px;
  color: gray;

  @media screen and (max-width: 993px) {
    padding-top: 40px;
    padding-bottom: 10px;
  }
`

export const ContainerCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  height: 250px;
  width: 100%;
 justify-content: space-around;
text-align: start;
  @media screen and (max-width: 993px) {
    width: 60%;
  }
`

export const Image = styled.img`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 200px;

  justify-content: center;
  align-items: center;
  text-align: center;


  @media screen and (max-width: 993px) {

    padding: 20px 10px;
  }
`
export const ServiceName = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 1.5rem;
  text-align: center;
  line-height: 19px;
  color: gray;
`
export const ServiceDecription = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 1rem;
  line-height: 18px;
  color: gray;
`
export const ButtonStyle = styled(Button)`
  color: black;
  border: 0.4px solid #704b34;
  background: transparent;
  
  &:hover {
    color: #ffff;
  }
`;