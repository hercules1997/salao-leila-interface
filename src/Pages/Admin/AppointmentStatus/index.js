import Paper from "@mui/material/Paper";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

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
} from "./style";
import api from "../../../services/api";

export function AppointmentStatus() {
  const [appointment, setAppointment] = useState();

  useEffect(() => {
    async function loadOrders() {
      const { data } = await api.get("appointment");

      setAppointment(data);
    }

    loadOrders();
  }, []);

  function editService(service) {}

  const deleteService = async (service) => {
    await toast.promise(api.delete(`appointment/${service.id}`), {
      pending: "Deletando serviço...",
      success: "Serviço deletado com sucesso!",
      error: "Falha ao deletar serviço, por favor tente novamente",
    });
  };

  return (
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
                Data do serviço
              </TableCellStyle>
              <TableCellStyle align="center" className="table-row">
                Editar
              </TableCellStyle>
              <TableCellStyle align="center" className="table-row">
                Excluir
              </TableCellStyle>
            </TableRowStyle>
          </TableHeadStyle>
          <TableBodyStyle>
            {appointment &&
              appointment.map((serv) => (
                <TableRowStyle
                  key={serv.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCellStyle component="th" scope="serv">
                    {serv.user.name}
                  </TableCellStyle>
                  <TableCellStyle>{serv.status}</TableCellStyle>
                  <TableCellStyle align="center"></TableCellStyle>
                  <TableCellStyle align="center"></TableCellStyle>
                  <TableCellStyle align="center">
                    <ModeEditIconStyle onClick={() => editService(serv)} />
                  </TableCellStyle>
                  <TableCellStyle align="center">
                    <DeleteForeverIconStyle
                      onClick={() => deleteService(serv)}
                    />
                  </TableCellStyle>
                </TableRowStyle>
              ))}
          </TableBodyStyle>
        </TableStyle>
      </TableContainerStyle>
    </Container>
  );
}
