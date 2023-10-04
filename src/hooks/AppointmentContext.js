import PropTypes from "prop-types";
import React, { createContext, useContext, useEffect, useState } from "react";

// Criação do contexto para os dados de agendamento
const AppointmentContext = createContext({});

// Provedor de contexto para dados de agendamento
export const AppointmentProvider = ({ children }) => {
  // Estado para armazenar os dados de agendamento
  const [myAppointment, setMyAppointment] = useState([]);

  //* FUNÇÃO PARA ATUALIZAR O LOCAL STORAGE COM OS DADOS DE AGENDAMENTO */
  const updateLocalStorage = async (service) => {
    await localStorage.setItem(
      "salaoleila:appointmentInfo",
      JSON.stringify(service)
    );
  };

  // Função para adicionar um serviço ao agendamento
  const putServiceInAppoitment = async (service) => {
    const appointmentIndex = myAppointment.findIndex(
      (serv) => serv.id === service.id
    );
    let newApointService = [];

    if (appointmentIndex >= 0) {
      newApointService = myAppointment;
      newApointService[appointmentIndex].index += 1;
    } else {
      service.index = 1;
      newApointService = [...myAppointment, service];
      setMyAppointment(newApointService);
    }
    await updateLocalStorage(newApointService);
  };

  // Função para remover um serviço do agendamento
  const deleteService = async (serviceId) => {
    const newAppointment = myAppointment.filter(
      (service) => service.id !== serviceId
    );
    setMyAppointment(newAppointment);
    await updateLocalStorage(newAppointment);
  };

  // Efeito para carregar dados do agendamento do local storage quando a página é carregada
  useEffect(() => {
    const loadUserData = async () => {
      const clientAppointmentData = await localStorage.getItem(
        "salaoleila:appointmentInfo"
      );
      if (clientAppointmentData) {
        setMyAppointment(JSON.parse(clientAppointmentData));
      }
    };



    loadUserData();

  }, []);

  return (
    // Fornecer o contexto com as funções e dados de agendamento
    <AppointmentContext.Provider
      value={{
        putServiceInAppoitment,
        myAppointment,
        deleteService,

      }}
    >
      {children}
    </AppointmentContext.Provider>
  );
};

// Hook personalizado para acessar o contexto de dados de agendamento
export const useAppointment = () => {
  const context = useContext(AppointmentContext);
  if (!context) {
    throw new Error("useAppointment must be used with AppointmentContext");
  }

  return context;
};

// PropType para o componente de Provedor de Agendamento
AppointmentProvider.propTypes = {
  children: PropTypes.node,
};
