import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp'
import HighlightOffTwoToneIcon from '@mui/icons-material/HighlightOffTwoTone'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  background: rgb(47, 47, 47);
  background: black;
  flex-direction: column;
  color: white;

  @media screen and (max-width: 993px) {
    flex-direction: column;
    display: flex;
    width: 100%;
    z-index: 900;
  }
`
export const ContainerItems = styled.div`
margin-top: 80px;
  @media screen and (max-width: 993px) {
    margin: 0;
  }

`
export const ButtonClose = styled(HighlightOffTwoToneIcon)`
  display: flex;
  position: absolute;
  right: 30px;
  cursor: pointer;
  top: 150px;
  font-size: 2.5rem !important;

  @media screen and (max-width: 993px) {
    top: 50px;
  }
`
export const ContainerUser = styled.div`
  p {
    margin-left: 20px;
  }
`
export const Header = styled.p`
  margin-top: 6%;
  margin-left: 18px;
  font-size: 1.4rem;
  margin-bottom: 20px;
  display: none;
  @media screen and (max-width: 993px) {
    display: flex;
    margin-top: 15%;
    margin-left: 18px;
    font-size: 1.4rem;
    margin-bottom: 20px;
  }
`
export const ContainerLinks = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
`
export const Links = styled.a`
  justify-content: start;
  text-align: start;
  color: gray;
  padding: 20px;
  font-size: 1.4rem;
  width: 35%;
  border: none;

  cursor: pointer;

  @media screen and (max-width: 993px) {
    width: 100%;
  }

  &:hover {
    font-weight: #929090;
    font-weight: bold;
  }
`
export const PageLinkExit = styled.button`
  display: none;
  @media screen and (max-width: 993px) {
    display: flex;
    color: #fa9600;
    cursor: pointer;
    background: transparent;
    margin-top: 20px;
    font-size: 1.4rem;
    text-align: start;
    border: none;
    &:hover {
      font-weight: 1000;
    }
  }
`
export const ContainerText = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`
export const AccountCircle = styled(AccountCircleSharpIcon)`
  color: #898989 !important;
  font-size: 90px !important;
  margin-left: 50px;
  margin-top: 30px;
`
