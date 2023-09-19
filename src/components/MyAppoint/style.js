import HighlightOffTwoToneIcon from "@mui/icons-material/HighlightOffTwoTone";
import EventSharpIcon from "@mui/icons-material/EventSharp";
import styled from "styled-components";

import { Button } from "../Button";

export const ContainerMaster = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const Container = styled.div`
  margin-top: 30px;

  margin-bottom: 20px;
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(1, 1fr);
  gap: 10px;
`;
export const EmpyCart = styled.div`
  display: flex;
  margin: 0;
  color: #704b34cf;
  font-size: 3rem;
  padding: 20px;

  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const Appointmernt = styled(EventSharpIcon)`
  color: #704b34cf;
  font-size: 8rem !important;
`;

export const Img = styled.img`
  width: 120px;
  height: 100px;
`;
export const ProductDecription = styled.p`
  display: flex;

  color: gray;
  p {
    color: gray;
    width: 25px;
    border-radius: 12px;

    padding: 2px;
  }
`;

export const Decription = styled.div`
  width: 100%;
  padding-left: 10px;
  .decriptAling {
    display: flex;
    flex-direction: column;
  }
  .quanty {
    display: flex;
    gap: 15px;
  }
`;

export const Content = styled.div`
  display: flex;
  padding: 10px;
  background: #ffff;
  box-shadow: 0px 0px 2px gray;
  margin-bottom: 5px;

  font-size: 1rem;

  .quantity-container {
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    gap: 20px;
    margin-top: 10px;
  }

  .img {
  }

  button {
    padding: 2px;
    border: none;
    cursor: pointer;
    color: gray;
    font-size: 18px;
    background: transparent;
  }
  button:hover {
    font-weight: bold;
  }
  button:active {
    opacity: 0.7;
  }
`;

export const ButtonStyleTwo = styled(Button)``;
export const ButtonStyleThree = styled(Button)`
  margin-top: 1px;
  margin-bottom: 5px;
  padding: 10px;
  width: 100%;
  text-align: center;
  box-shadow: 0px 0px 2px black;
`;
export const ContainerButtom = styled.div``;
export const ContainerContent = styled.div`
  position: relative;
  background-color: #704b34cf;
`;

export const TrashAt = styled(HighlightOffTwoToneIcon)`
  color: #704b34cf !important;
`;
export const Trash = styled.button`
  background: transparent;
  position: absolute;
  justify-content: end;
  cursor: pointer;
  align-items: end;
  right: -10px;
  top: -14px;

  width: 14px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  border: none;
  text-align: end;
  align-items: end;
`;
export const ContainerEmpyCart = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  text-align: center;
  width: 100vw;
`;

export const DateInput = styled.input.attrs({ type: "date" })`
  color: #704b34cf;
  background-color: beige;
  width: 200px;
  display: flex;
  text-align: center;
  height: 30px;
  border: 1px solid #ccc;
  justify-content: center;
  align-items: center;
  padding: 10px;
  cursor: pointer;
`;
export const HoursInput = styled.input.attrs({ type: "time" })`
  color: #704b34cf;
  background-color: beige;
  width: 200px;
  display: flex;
  text-align: center;
  height: 30px;
  border: 1px solid #ccc;
  justify-content: center;
  align-items: center;
  padding: 10px;
  outline: none;
  cursor: pointer;
`;

export const ButtonAppointment = styled(Button)`
  margin-top: 1px;
  background: gray;
  margin-bottom: 20px;
  padding: 10px;
  justify-content: end;
  align-items: end;
  float: right;
  font-size: 1rem;
  width: auto;

  &:hover {
    text-shadow: 0 0 10px black;
  }
`;
