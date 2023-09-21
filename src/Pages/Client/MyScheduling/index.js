import React from "react";

import { MyAppoint, Header } from "../../../components";
import IsloadingSpinner from "../../../components/IsloadingSpinner";
import { Container, Wrapper, WrapperItens } from "./style";

export function MyScheduling() {

  return (
    <Container>
      <IsloadingSpinner />
      <Header />
      <Wrapper>
        <WrapperItens>
          <MyAppoint />
        </WrapperItens>
      </Wrapper>
    </Container>
  );
}
