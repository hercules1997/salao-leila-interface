import PropTypes from 'prop-types'
import React from 'react'

import { useAppointment } from "../../hooks/AppointmentContext";
import {
  Container,
  Image,
  ServiceName,
  ServicePrice,
  ContainerCard,
  ButtonStyle,
  ServiceDecription
} from './style'
export function CardStatus ({ service }) {
  const { putServiceInAppoitment } = useAppointment();

  return (
    <Container>
      <Image src={service.url} alt="Imagem do servico" />
      <ContainerCard>
        <ServiceName>{service.name}</ServiceName>
        <ServicePrice>{service.formatedPrice}</ServicePrice>
        <ServiceDecription>{service.decription}</ServiceDecription>
        <ButtonStyle
          onClick={() => {
            putServiceInAppoitment(service)
          }}
         
        >
          Agendar
        </ButtonStyle>
      </ContainerCard>
    </Container>
  );
}

CardStatus.propTypes = {
  service: PropTypes.object,
};
