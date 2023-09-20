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
  ButtonStyleThree,
  ContainerContent,
  DateInput,
  Appointmernt,
  ContainerMaster,
  ContainerEmpyCart,
  Decription,
  HoursInput,
  ButtonAppointment,
} from "./style";
import { toast } from "react-toastify";
import { useState } from "react";

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

  console.log(inputValueTime);
  console.log(inputValueDate);
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
          myAppointment.map((product) => (
            <>
              <ContainerContent>
                <Trash onClick={() => deleteService(product.id)}>
                  <TrashAt />
                </Trash>
                <Content key={product.id}>
                  <Img src={product.url} />
                  <Decription>
                    <div className="decriptAling">
                      <ProductDecription>
                        Tipo: {product.name}{" "}
                      </ProductDecription>
                      <ProductDecription>
                        Detalhes: {product.decription}
                      </ProductDecription>
                      <ProductDecription>
                        Valor: {product.price}
                      </ProductDecription>
                    </div>
                    <p>Dias disponiveis:</p>
                    <div className="quanty">
                      <sapn>Seg</sapn>
                      <sapn>Ter</sapn>
                      <sapn>Qua</sapn>
                      <sapn>Qui</sapn>
                      <sapn>Sex</sapn>
                    </div>
                  </Decription>
                  <ProductDecription></ProductDecription>
                  <div className="quantity-container">
                    Selecione a uma data e horário:
                    <DateInput onChange={handleInputDate} />
                    <HoursInput onChange={handleInputTime} />
                  </div>
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
        <ButtonStyleThree onClick={() => navigate(paths.OurServices)}>
          Selecionar serviços
        </ButtonStyleThree>
      </ContainerButtom>
      {myAppointment && myAppointment.length > 0 ? (
        <ButtonAppointment onClick={submitOrder}>Agendar</ButtonAppointment>
      ) : (
        <></>
      )}
    </ContainerMaster>
  );
}
