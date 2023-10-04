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
  const [inputTime, setTime] = useState("");
  const [inputDate, setDate] = useState("");

  // Função para envio dos dados para o agendamento
  const submitOrder = async () => {
    try {
      if (myAppointment.length > 0) {
        const appointment = myAppointment.map((service) => {
          return {
            id: service.id,
          };
        });
        await toast.promise(
          api.post("appointment", {
            services: appointment,
            date: inputDate,
            time: inputTime,
          }),
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

  // Retorno
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
                        <DateInput
                          onChange={(e) => setDate(e.target.value)}
                          required
                        />
                      </span>
                      <span>
                        <label>Hora</label>
                        <HoursInput
                          onChange={(e) => setTime(e.target.value)}
                          required
                        />
                      </span>
                    </div>
                    <div className="container-button">
                      <ButtonSubmitAppointment
                        onClick={() => {
                          if (inputDate && inputTime !== " ") {
                            submitOrder();
                            deleteService(service.id);
                          } else {
                            toast({
                              error:
                                "Falha ao realizar o agendamento, tente novamente!",
                            });
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
