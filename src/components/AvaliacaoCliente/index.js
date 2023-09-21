import React from "react";
import {
  AvaliacaoClienteContainer,
  AvaliacaoConteudo,
  AvaliacaoEstrelas,
  AvaliacaoHeader,
  Comentario,
  Estrela,
  ImagemPerfil,
  NomeCliente,
  PerfilCliente,
} from "./style";

const AvaliacaoCliente = ({ nome, avaliacao, comentario, fotoPerfil }) => {
  return (
    <AvaliacaoClienteContainer>
      <PerfilCliente>
        <ImagemPerfil src={fotoPerfil} alt={`Foto de perfil de ${nome}`} />
      </PerfilCliente>
      <AvaliacaoConteudo>
        <AvaliacaoHeader>
          <NomeCliente>{nome}</NomeCliente>
          <AvaliacaoEstrelas>
            {Array.from({ length: avaliacao }).map((_, index) => (
              <Estrela key={index}>★</Estrela>
            ))}
          </AvaliacaoEstrelas>
        </AvaliacaoHeader>
        <Comentario>{comentario}</Comentario>
      </AvaliacaoConteudo>
    </AvaliacaoClienteContainer>
  );
};

export default AvaliacaoCliente;
