import React from "react";

import { CardCarousel, HeaderPublic } from "../../../components";
import IsloadingSpinner from "../../../components/IsloadingSpinner";
import { Container, ContainerAvaliacao, ContainerItens } from "./style";
import AvaliacaoCliente from "../../../components/AvaliacaoCliente";
import avatar1 from "../../../common/assets/avatar1.jpg";
import avatar2 from "../../../common/assets/avatar2.jpg";
import avatar3 from "../../../common/assets/avatar3.jpg";
import GraficoPersonalizado from "../../../components/GraficoPersonalizado";

export function HomePublic() {
  const dadosAvaliacoes = [8, 2, 1];
  return (
    <>
      <IsloadingSpinner />
      <HeaderPublic />
      <Container>
        <ContainerItens>
          <CardCarousel />
        </ContainerItens>
        <ContainerAvaliacao>
          <h2>Avaliações de nossos clientes</h2>
          <GraficoPersonalizado dados={dadosAvaliacoes} />
          <AvaliacaoCliente
            nome="Amanda Takyda Yokatawa"
            avaliacao={5}
            comentario="Ótimo serviço!"
            fotoPerfil={avatar3}
          />
          <AvaliacaoCliente
            nome="Johana Vitício Priolli"
            avaliacao={4}
            comentario="Excelente atendimento!"
            fotoPerfil={avatar1}
          />
          <AvaliacaoCliente
            nome="Jhonatan Quintino Cabral"
            avaliacao={3}
            comentario="Bom, mas pode melhorar."
            fotoPerfil={avatar2}
          />
        </ContainerAvaliacao>
      </Container>
    </>
  );
}
