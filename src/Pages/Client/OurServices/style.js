/* eslint-disable no-undef */
import Carousel from 'react-elastic-carousel'
import styled from 'styled-components'

// import logo from '../../assets/ImgProductsBurguer.png'

export const Container = styled.div`
  background: beige;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const HomeImage = styled.img`
  /* height: 280px; */
`
export const ContainerMenu = styled.div`
  display: flex;
  justify-content: center;

  background-color: #ffff;;

  gap: 50px;
  width: 100%;
  margin-top: 5px;
  padding-top: 15px;
  text-align: center;
  align-items: center;
  box-shadow: 0px 0.5px 1px gray;
  @media screen and (max-width: 1274px) {
    overflow-x: 50px;
    scroll-behavior: 200px;
    width: 100%;
  }
`;
export const Menu = styled.button`
  cursor: pointer;
  color: ${(props) =>
    props.isActiveCategory ? "#704b34" : "gray"} !important;
  border: none;
  border-bottom: ${(props) =>
    props.isActiveCategory && "3px solid #704b34"} !important;
  padding-bottom: 3px;

  background-color: transparent;

  text-align: center;
  align-items: center;
  /* transition: 0.2s; */
  font-weight: bold;
  font-size: 1.2rem;
  line-height: 20px;

  &:hover {
    /* transition: 0.2s; */
    border-bottom: solid 3px white;
    color: white;
  }
  @media screen and (max-width: 1274px) {
    overflow-x: 50px;
    scroll-behavior: 200px;
    width: 100%;
  }
`;
export const Logo = styled.img`
  width: 220px;
`
export const ContainerProducts = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(5, 1fr);
  padding: 40px;
  gap: 10px;
  justify-items: center;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 25px;
  box-shadow: 0 0 1px black;

  @media screen and (max-width: 1274px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 20px;
    margin-bottom: 60px;
    gap: 14px;
  }
  @media screen and (max-width: 703px) {
    grid-template-columns: repeat(1, 1fr);
    padding: 20px;
    margin-bottom: 60px;
    gap: 14px;
  }
`
export const CarouselStyle = styled(Carousel)`
  .rec.rec-dot {
    background: transparent;
    border: 1px solid gray;
    @media screen and (min-width: 1142px) {
      display: none;
    }
  }
  .rec.rec-dot:hover {
    background: black;
    border: 1px solid #d6d6ba;
    box-shadow: 0px 0px 12px white;
  }
  .rec.rec-dot_active {
    background: white;
    box-shadow: 0px 0px 12px white;
  }

  .rec.rec-arrow {
    background-color: transparent;
    margin-left: 30px;
    margin-right: 30px;
    height: 100%;
    border-radius: 0;
    color: #3f3f3f;
  }

  .rec.rec-arrow:hover {
    background-color: #3f3f3f;
    color: white;
  }
  .rec.rec-arrow:disabled {
    visibility: hidden;
  }
  .rec.rec-arrow:active {
    opacity: 0.1;
  }
  .rec.rec-arrow-right {
    border-right: solid 0.5px #3f3f3f;
  }
  .rec.rec-arrow-left {
    border-left: solid 1px #3f3f3f;
  }
`
