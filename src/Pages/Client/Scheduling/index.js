import React, { useState } from "react";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
const Container = styled.div`
  font-family: Arial, sans-serif;
  padding: 20px;
`;

const ServiceSelection = styled.div`
  margin-bottom: 20px;
`;

const ServiceItem = styled.label`
  display: block;
  margin-bottom: 10px;
  font-weight: bold;
`;

const DateSelection = styled.div`
  margin-top: 20px;
`;

const BookingButton = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

export function Scheduling() {
  const [selectedServices, setSelectedServices] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const services = [
    { id: 1, name: "Corte de cabelo", price: 30.0 },
    { id: 2, name: "Coloração", price: 50.0 },
    { id: 3, name: "Manicure", price: 20.0 },
    // Adicione mais serviços aqui
  ];

  const handleServiceSelection = (service) => {
    // Lógica para selecionar serviços
    if (selectedServices.includes(service)) {
      setSelectedServices(selectedServices.filter((s) => s !== service));
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };

  const handleBookingSubmit = async () => {
    try {
      const response = await axios.post("/api/booking", {
        services: selectedServices,
        date: selectedDate,
      });
      alert(response.data.message);
      // Redirecionar o cliente para o histórico de agendamentos, por exemplo
    } catch (error) {
      console.error(error);
      alert("Erro ao agendar. Por favor, tente novamente mais tarde.");
    }
  };

  return (
    <Container>
      <h1>Agendamento</h1>
      <ServiceSelection>
        <h2>Selecionar Serviços:</h2>
        {services.map((service) => (
          <ServiceItem key={service.id}>
            <input
              type="checkbox"
              onChange={() => handleServiceSelection(service)}
              checked={selectedServices.includes(service)}
            />
            {service.name} - R$ {service.price.toFixed(2)}
          </ServiceItem>
        ))}
      </ServiceSelection>
      <DateSelection>
        <h2>Selecionar Data:</h2>
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          dateFormat="dd/MM/yyyy"
          minDate={new Date()} // Evitar datas passadas
        />
        <BookingButton onClick={handleBookingSubmit}>Agendar</BookingButton>
      </DateSelection>
    </Container>
  );
}


