import styled from "styled-components";

const GraficoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
padding-right: 50px;
`;

const BarContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  width: 100%;
`;

const BarLabel = styled.div`
  width: 150px;
  text-align: right;
  padding-right: 10px;

  &::before {
    content: "${(props) => "★".repeat(props.quantidade)}";
    display: block;
    color: #f0d128;
    font-size: 20px;
    height: 100%;
    width: ${(props) => props.width};
  }
`;

const Bar = styled.div`
  flex-grow: 1;
  height: 10px;
  background-color: #ffff;
  border-radius: 15px;
  position: relative;
  &::before {
    content: "";
    border-radius: 15px;

    display: block;
    background-color: #f0d128;
    height: 100%;
    width: ${(props) => props.width};
  }
`;
export { GraficoContainer, BarContainer, BarLabel, Bar };
