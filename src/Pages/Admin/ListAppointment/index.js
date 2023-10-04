import Paper from "@mui/material/Paper";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import formatDate from "../../../common/utils/formatDate";
import {
  Container,
  ModeEditIconStyle,
  TableBodyStyle,
  TableCellStyle,
  TableContainerStyle,
  TableHeadStyle,
  TableRowStyle,
  TableStyle,
  DeleteForeverIconStyle,
  ListVoid,
} from "./style";
import api from "../../../services/api";
import paths from "../../../common/constants/paths";
import { useNavigate } from "react-router-dom";

export function ListAppointment() {
  const [appointment, setAppointment] = useState();
  const location = useNavigate();

  useEffect(() => {
    async function loadOrders() {
      const { data } = await api.get("appointment");

      setAppointment(data);
    }

    loadOrders();
  }, []);

  // Função para editar status do serviço
  function editAppointment(appoint) {
    location(paths.EditAppointment, { state: { appoint } });


  }

  // Função para cancelar o agendamento
  const deleteAppointment = async (service) => {
    await toast.promise(api.delete(`appointment/${service.id}`), {
      pending: "Cancelando agendamento...",
      success: "Agendamento deletado com sucesso!",
      error: "Falha ao cancelar agendamento, por favor tente novamente",
    });
  };


  return appointment?.length !== 0 ? (
    <Container>
      <TableContainerStyle component={Paper} className="table-container">
        <TableStyle
          sx={{ minWidth: 600 }}
          size="small"
          aria-label="a dense table"
        >
          <TableHeadStyle className="table-head">
            <TableRowStyle>
              <TableCellStyle className="table-row" align="center">
                Clientes
              </TableCellStyle>
              <TableCellStyle style={{ width: "120px" }} className="table-row">
                Status
              </TableCellStyle>
              <TableCellStyle className="table-row" align="center">
                Serviços
              </TableCellStyle>
              <TableCellStyle align="center" className="table-row">
                Data
              </TableCellStyle>
              <TableCellStyle align="center" className="table-row">
                Horário
              </TableCellStyle>
              <TableCellStyle align="center" className="table-row">
                Editar
              </TableCellStyle>
              <TableCellStyle align="center" className="table-row">
                Cancelar
              </TableCellStyle>
            </TableRowStyle>
          </TableHeadStyle>
          <TableBodyStyle>
            {appointment &&
              appointment.map((appoint) => (
                <TableRowStyle
                  key={appoint}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCellStyle component="th" scope="appoint">
                    {appoint.user.name}
                  </TableCellStyle>
                  <TableCellStyle>{appoint.status}</TableCellStyle>
                  <TableCellStyle align="center">
                    {appoint.services[0].name}
                  </TableCellStyle>
                  <TableCellStyle align="center">
                    {formatDate(appoint.date)}
                  </TableCellStyle>
                  <TableCellStyle align="center">{appoint.time}</TableCellStyle>
                  <TableCellStyle align="center">
                    <ModeEditIconStyle
                      onClick={() => editAppointment(appoint)}
                    />
                  </TableCellStyle>
                  <TableCellStyle align="center">
                    <DeleteForeverIconStyle
                      onClick={() => deleteAppointment(appoint)}
                    />
                  </TableCellStyle>
                </TableRowStyle>
              ))}
          </TableBodyStyle>
        </TableStyle>
      </TableContainerStyle>
    </Container>
  ) : (
    <ListVoid>Lista Vazia</ListVoid>
  );
}
