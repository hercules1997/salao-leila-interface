/* eslint-disable jsx-a11y/alt-text */
import React from "react";

import { CardCarousel, Header } from "../../../components";

import IsloadingSpinner from "../../../components/IsloadingSpinner";
import { Container, ContainerItens } from "./style";

export function Home() {
  return (
    <>
      <IsloadingSpinner />
      <Header />
      <Container>
          <h1>ESPECIALIDADES</h1>
        <ContainerItens>
          <CardCarousel /> 
        </ContainerItens>
      </Container>
    </>
  );
}
