import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.div`
  background: beige;

  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 100px;

  .rec.rec-dot {
    background: transparent;
    box-shadow: 0px 0px 8px #9e775a;
    border: none !important;
  }
  .rec.rec-dot:hover {
    background: #9e775a;
    border: none;
    box-shadow: 0px 0px 2px #ffff;
  }
  .rec.rec-dot_active {
    background: #9e775a;
    border: none;
    box-shadow: none;
    box-shadow: 0px 0px 9px #000;
  }

  .rec.rec-arrow {
    background-color: transparent;
    margin-left: 10px;
    margin-right: 10px;
    /* height: 100%; */
    border-radius: 50%;
    color: #9e775a;
    @media screen and (max-width: 993px) {
      margin: 0;
    }
  }

  .rec.rec-arrow:hover {
    background-color: #9e775a;
    color: white;
  }
  .rec.rec-arrow:disabled {
    visibility: hidden;
  }
  .rec.rec-arrow:active {
    opacity: 0.1;
  }
  .rec.rec-arrow-right {
    border-right: solid 0.5px #9e775a;
  }
  .rec.rec-arrow-left {
    border-left: solid 1px #9e775a;
  }

  h1 {
    font-size: 3rem;
    color: #9e775a;
    @media screen and (max-width: 993px) {
      font-size: 1.5rem;
    }
  }
`;

export const ContainerItens = styled.div`
  width: 100%;
  /* margin-top: 10px; */
  padding: 0px 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 5px 15px gray;
  @media screen and (max-width: 993px) {
    margin-top: 0;
  }
`

export const ImgCategory = styled.img`
  width: 100%;
  height: 22rem;
  box-shadow: 0px 1px 12px gray;

  cursor: pointer;
  @media screen and (max-width: 993px) {
    width: 100%;
  }
`

export const Button = styled(Link)`
  background-color: #9e775a;

  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 20px;
  font-weight: bold;
  border: none;
  text-align: center;
  text-decoration: none;
  box-shadow: 0px 8px 10px gray;
  font-size: 1.2rem;
 
  color: #d6d6ba;

  cursor: pointer;

  &:hover {
    color: #000;
    background-color: #d6d6ba;
    transition: 0.8s;
  }

  &:active {
    opacity: 0.7;
  }
  @media screen and (max-width: 993px) {
    width: 100%;
    font-size: 1.2rem;
  }
`;
