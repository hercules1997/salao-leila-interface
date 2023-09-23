import PropTypes from "prop-types";
import React, { createContext, useContext, useEffect, useState } from "react";

const AppointmentContext = createContext({});

export const AppointmentProvider = ({ children }) => {
  const [myAppointment, setMyAppointment] = useState([]);

  //*FUNÇÃO DE ATUALIZAÇÃO NO LOCALSTORANGE */
  const updateLocalStorange = async (service) => {
    await localStorage.setItem(
      "salaoleila:appoitmentInfo",
      JSON.stringify(service)
    );
  };

  const putServiceInAppoitment = async (service) => {
    const cartIndex = myAppointment.findIndex((serv) => serv.id === service.id);
    let newApointService = [];

    if (cartIndex >= 0) {
      newApointService = myAppointment;
      newApointService[cartIndex].quantity =
        newApointService[cartIndex].quantity + 1;
    } else {
      service.quantity = 1;
      newApointService = [...myAppointment, service];
      setMyAppointment(newApointService);
    }
    await updateLocalStorange(newApointService);
  };

  const deleteService = async (serviceId) => {
    const newApoint = myAppointment.filter((service) => service.id !== serviceId);
    setMyAppointment(newApoint);
    await updateLocalStorange(newApoint);
  };

  useEffect(() => {
    const loadUserData = async () => {
      const clientAppoitmentData = await localStorage.getItem(
        "salaoleila:appoitmentInfo"
      );
      if (clientAppoitmentData) {
        setMyAppointment(JSON.parse(clientAppoitmentData));
      }
    };
    loadUserData();
  }, []);

  return (
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

export const useAppointment = () => {
  const context = useContext(AppointmentContext);
  if (!context) {
    throw new Error("useAppointment must be used with Usercontext");
  }

  return context;
};

AppointmentProvider.propTypes = {
  children: PropTypes.node,
};
