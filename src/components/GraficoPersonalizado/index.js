import React from "react";
import { BarContainer, BarLabel, GraficoContainer, Bar } from "./style";

const GraficoPersonalizado = ({ dados }) => {
  const maxAvaliacao = Math.max(...dados);

  return (
    <GraficoContainer>
      {dados.map((valor, indice) => (
        <BarContainer key={indice}>
          <BarLabel quantidade={5 - indice} ></BarLabel>
          <Bar width={`${(valor / maxAvaliacao) * 100}%`}></Bar>
        </BarContainer>
      ))}
    </GraficoContainer>
  );
};

export default GraficoPersonalizado;
