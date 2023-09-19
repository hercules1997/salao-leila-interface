import AccountCircleSharpIcon from "@mui/icons-material/AccountCircleSharp";
import styled from "styled-components";

export const Container = styled.div`
  background: #f5f9f2;
  display: flex;
  box-shadow: 0px 0.5008px 1px gray;
  font-size: 1.1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  flex-direction: row;
  padding: 5px;
  justify-content: space-between;

  @media screen and (max-width: 993px) {
    display: none;
    width: 100%;
  }
`;

export const MenuDevice = styled.div`
  display: none;
  @media screen and (max-width: 993px) {
    display: flex;
    position: fixed;
    bottom: 6px;
    margin: 0;
    padding: 5px;
    z-index: 1000;
  }
`;

export const ContainerLeft = styled.div`
  display: flex;

  gap: 30px;
  margin-left: 3%;
`;

export const PageLink = styled.button`
  display: flex;
  color: gray;
  background: transparent;
  cursor: pointer;
  text-decoration: none;
  border: none;
  align-items: center;
  font-size: 1.2rem;
  flex-direction: row;

  img {
    width: 50px;
    padding: 3px;
  }

  &:hover {
    font-weight: bold;
  }

  .notficationCart {
    color: gray;
    width: 25px;
    background: red;
    border-radius: 50%;
    font-size: 1rem;
    padding: 2px;
    text-align: center;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    position: absolute;
    display: flex;
    margin-left: 27px;
    margin-bottom: 30px;

    @media screen and (max-width: 993px) {
      display: unset;
      z-index: 2000;
    }
  }
`;

export const PageLinkAdmin = styled.button`
  display: flex;
  color: gray;
  display: ${(props) => (props.isAdmin ? "active" : "none")};
  background: transparent;
  cursor: pointer;
  text-decoration: none;
  border: none;
  align-items: center;

  font-size: 1.2rem;

  flex-direction: row;

  &:hover {
    font-weight: bold;
  }
`;
export const PageLinkExit = styled.button`
  color: red;
  cursor: pointer;
  background: transparent;
  font-size: 1.2rem;
  border: none;
  &:hover {
    font-weight: 1000;
  }
`;

export const ContainerRight = styled.div`
  display: flex;
  margin-right: 3%;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  .barra {
    border-right: 0.5008px solid gray;
    height: 40px;
    box-shadow: 0px 0px 10px gray;
    margin: 5px 30px;
  }
`;
export const ContainerText = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  align-items: flex-start;
  p {
    color: gray;
    font-size: 1.3rem;
  }
`;

export const AccountCircleSharpIconStyle = styled(AccountCircleSharpIcon)`
  color: gray !important;
  font-size: 40px !important;
`;
