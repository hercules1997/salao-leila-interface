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
import paths from '../../common/constants/paths';
import { useNavigate } from 'react-router-dom';
export function CardServices ({ service }) {
  const { putServiceInAppoitment } = useAppointment();
  const navigate = useNavigate()

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
            
          navigate(paths.Appointment);
          }}
         
        >
          Agendar
        </ButtonStyle>
      </ContainerCard>
    </Container>
  );
}

CardServices.propTypes = {
  service: PropTypes.object,
};
