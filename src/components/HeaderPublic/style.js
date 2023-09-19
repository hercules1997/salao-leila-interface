import styled from 'styled-components'

export const Container = styled.div`
  background: #f5f9f2;
  display: flex;
  font-size: 1.1rem;
  position: sticky;
  top: 0;
  width: 100%;
  height: 45px;
  z-index: 10;
  flex-direction: row;
  padding: 5px;
  /* align-items: center; */
  justify-content: space-between;

  @media screen and (max-width: 993px) {
    display: none;
    width: 100%;
  }
`;
export const ContainerItems = styled.div`
  display: flex;
  width: 100%;
  gap: 30px;
  justify-content: end;
  margin-right: 8%;
`

export const PageLink = styled.button`
  display: flex;
  background: none;
  color: #704b34;
font-size: 1rem;
  border: none;
  cursor: pointer;
  align-items: center;

  &:hover {
    color: #9e775a;
    border-bottom: 1px solid #9e775a;
  }
  @media screen and (max-width: 993px) {
    display: flex;
  }
`;
export const ContainerMenu = styled.span`
  display: none;
  width: 100%;
  display: flex;
  justify-content: center;
`
export const MenuHeader = styled.div`
  display: none;
  width: 98%;
  height: 80px;
  background: black;
  z-index: 2000;
  /* padding: 20px; */
  border-radius: 20px;

  @media screen and (max-width: 993px) {
    display: flex;
    position: fixed;
    bottom: 10px;
    align-items: center;
    justify-content: center;
    justify-items: center;
  }
`
export const Icons = styled.button`
  background: transparent;
  border: none;
  width: 100%;


  font-size: 1.5rem;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: space-around;
  &:hover {
    color: orange;
    border-bottom: 1px solid orange;
  }
`
