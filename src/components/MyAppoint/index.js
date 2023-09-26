import React from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import paths from "../../common/constants/paths";
import { useAppointment } from "../../hooks/AppointmentContext";
import {
  Container,
  Img,
  Content,
  ProductDecription,
  Trash,
  EmpyCart,
  ContainerButtom,
  TrashAt,
  ButtonStyle,
  ContainerContent,
  DateInput,
  Appointmernt,
  ContainerMaster,
  ContainerEmpyCart,
  Decription,
  HoursInput,
  ButtonSubmitAppointment,
} from "./style";
import { toast } from "react-toastify";
import { useState } from "react";
import formatCurrency from "../../common/utils/formatCurrency";

export function MyAppoint() {
  const navigate = useNavigate();
  const { myAppointment, deleteService } = useAppointment();
  const [inputValueTime, setInputValueTime] = useState("");
  const [inputValueDate, setInputValueDate] = useState("");

  const handleInputTime = (e) => {
    const { value } = e.target;
    setInputValueTime(JSON.stringify(value));
  };

  const handleInputDate = (event) => {
    const { value } = event.target;

    setInputValueDate(JSON.stringify(value));
  };

  const submitOrder = async () => {
    try {
      if (myAppointment.length > 0) {
        const appointment = myAppointment.map((service) => {
          return {
            id: service.id,
            date: inputValueDate,
            time: inputValueTime,
          };
        });
        await toast.promise(
          api.post("appointment", { services: appointment }),
          {
            pending: "Realizando seu agendamento, por favor aguarde ...",
            success: "Agendamento realizado com sucesso!",
            error: "Falha ao realizar o agendamento, tente novamente!",
          }
        );
      } else {
        alert("Desculpe, nenhum agendamento adicionado");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <ContainerMaster>
      <Container>
        {myAppointment && myAppointment.length ? (
          myAppointment.map((service) => (
            <>
              <ContainerContent>
                <Trash onClick={() => deleteService(service.id)}>
                  <TrashAt />
                </Trash>
                <Content key={service.id}>
                  <Img src={service.url} />
                  <Decription>
                    <div className="decriptAling">
                      <ProductDecription>
                        Tipo: {service.name}
                      </ProductDecription>
                      <ProductDecription>
                        Detalhes: {service.decription}
                      </ProductDecription>
                      <ProductDecription>
                        Valor: {formatCurrency(service.price)}
                      </ProductDecription>
                    </div>
                    <p>Dias disponiveis:</p>
                    {/* //TODO Fazer a lógica dos dias disponiveis // */}
                    <div className="dispo">
                      <sapn>Seg</sapn>
                      <sapn>Ter</sapn>
                      <sapn>Qua</sapn>
                      <sapn>Qui</sapn>
                      <sapn>Sex</sapn>
                    </div>
                  </Decription>

                  <form>
                    <div>
                      <span>
                        <label>Data</label>
                        <DateInput onChange={handleInputDate} required />
                      </span>
                      <span>
                        <label>Hora</label>
                        <HoursInput onChange={handleInputTime} required />
                      </span>
                    </div>
                    <div className="container-button">
                      <ButtonSubmitAppointment
                        onClick={() => {
                          if (inputValueDate && inputValueTime !== " ") {
                            submitOrder();
                            deleteService(service.id);
                          } else {
                            alert(
                              "Por favor, preencha os campos de data e hora."
                            );
                          }
                        }}
                      >
                        Agendar
                      </ButtonSubmitAppointment>
                    </div>
                  </form>
                </Content>
              </ContainerContent>
            </>
          ))
        ) : (
          <ContainerEmpyCart>
            <EmpyCart>
              <Appointmernt />
              Nenhum agendamento
            </EmpyCart>
          </ContainerEmpyCart>
        )}
      </Container>
      <ContainerButtom>
        <ButtonStyle onClick={() => navigate(paths.OurServices)}>
          Selecionar serviços
        </ButtonStyle>
      </ContainerButtom>
    </ContainerMaster>
  );
}
