import React from "react";

import { CardCarousel, HeaderPublic } from "../../../components";
import IsloadingSpinner from "../../../components/IsloadingSpinner";
import { Container, ContainerItens } from "./style";

export function HomePublic() {
  return (
    <>
      <IsloadingSpinner />
      <HeaderPublic />
      <Container>
        <ContainerItens>
          <CardCarousel />
        </ContainerItens>
      </Container>
    </>
  );
}
