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
  const [inputValue, setInputValue] = useState("");
  console.log(inputValue);
  const handleInputChange = (e) => {
    const { value } = e.target;
    setInputValue(value);
  };
  const submitOrder = async () => {
    try {
      if (myAppointment.length > 0) {
        const appointment = myAppointment.map((service) => {
          return {
            id: service.id,
            time: 123,
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
        alert("Carrinho vazio");
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
                    <DateInput />
                    <HoursInput onChange={handleInputChange} />
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
