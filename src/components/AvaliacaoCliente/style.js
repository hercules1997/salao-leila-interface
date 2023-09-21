import styled from "styled-components";

const AvaliacaoClienteContainer = styled.div`
  display: flex;
  background-color: #f7f7f7;
  border-radius: 10px;
  padding: 20px;
  margin: 20px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

const PerfilCliente = styled.div`
  width: 80px;
  margin-right: 10px;
`;

const ImagemPerfil = styled.img`
  width: 80px;
  border-radius: 50%;
`;

const AvaliacaoConteudo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const AvaliacaoHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const NomeCliente = styled.span`
  font-weight: bold;
  font-size: 1.2rem;
`;

const AvaliacaoEstrelas = styled.div`
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  height: 100%;
  align-items: center;
`;

const Estrela = styled.span`
  color: #f0d128;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 4px;
`;

const Comentario = styled.p`
  font-size: 1rem;
`;

export {
  AvaliacaoClienteContainer,
  AvaliacaoHeader,
  NomeCliente,
  AvaliacaoEstrelas,
  Estrela,
  Comentario,
  PerfilCliente,
  ImagemPerfil,
  AvaliacaoConteudo,
};
