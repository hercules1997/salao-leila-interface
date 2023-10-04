import { yupResolver } from "@hookform/resolvers/yup";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import * as Yup from "yup";
import { ErrorMessage } from "../../../components";
import api from "../../../services/api";
import paths from "../../../common/constants/paths";
import { Container, Label, Input, ButtonStyle } from "../NewService/style";
import { useState } from "react";

export function EditAppointment() {
  // eslint-disable-next-line no-unused-vars
  const [appointment, setAppointment] = useState([]);

  const navigate = useNavigate();
  const {
    state: { appoint },
  } = useLocation();

  const schema = Yup.object().shape({
    status: Yup.string().required("Status é obrigatório"),
    date: Yup.string().required("Data é obrigatório"),
    time: Yup.string().required("Horário é obrigatório"),
  });

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (data) => {
    const appointment = {
      services: [{}],
      status: data.status,
      date: data.date,
      time: data.time,
    };
    console.log(appoint._id);
    await toast.promise(api.put(`appointment/${appoint._id}`, appointment), {
      pending: "Editando agendamento...",
      success: "Agendamento editatdo com sucesso!",
      error: "Falha ao editar o agendamento",
    });

    setTimeout(() => {
      navigate(paths.AppointmentStatus);
    }, 1000);
  };

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get("appointment");
      setAppointment(data);
    }
    loadCategories();
  }, []);

  function exit() {
    navigate(paths.AppointmentStatus);
  }

  return (
    <Container>
      <button className="exit" onClick={() => exit()}>
        X
      </button>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Label>Nome</Label>
          <h2>{appoint.user.name}</h2>
        </div>
        <div>
          <Label>Status</Label>
          <Input
            type="text"
            {...register("status")}
            defaultValue={appoint.status}
            error={errors.status?.message}
          />
          <ErrorMessage>{errors.status?.message}</ErrorMessage>
        </div>
        <div>
          <Label>Data</Label>
          <Input
            type="date"
            {...register("date")}
            defaultValue={appoint.date}
            error={errors.date?.message}
          />
          <ErrorMessage>{errors.date?.message}</ErrorMessage>
        </div>
        <div>
          <Label>Hora</Label>
          <Input
            type="time"
            {...register("time")}
            defaultValue={appoint.time}
            error={errors.time?.message}
          />
          <ErrorMessage>{errors.time?.message}</ErrorMessage>
        </div>
        <div></div>

        <ButtonStyle>Editar agendamento</ButtonStyle>
      </form>
    </Container>
  );
}
