import CheckBoxIcon from "@mui/icons-material/CheckBox";
import DisabledByDefaultIcon from "@mui/icons-material/DisabledByDefault";
import Paper from "@mui/material/Paper";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

import formatCurrency from "../../../common/utils/formatCurrency";
import {
  Container,
  Img,
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
import paths from "../../../common/constants/paths";
import { useNavigate } from "react-router-dom";

export function ListServices() {
  const [services, setServices] = useState();
  const location = useNavigate();
  useEffect(() => {
    async function loadServices() {
      try {
        const { data } = await api.get("services");
        setServices(data);
      } catch (error) {
        console.error("Erro ao carregar serviços:", error);
      }
    }

    loadServices();
  }, []);

  // Função para exibir ícone de oferta ou indisponível
  function isOffer(offerStatus) {
    return offerStatus ? (
      <CheckBoxIcon className="checkYes" />
    ) : (
      <DisabledByDefaultIcon className="checkNo" />
    );
  }

  // Função para editar um produto
  function editService(serv) {
    location(paths.EditServices, { state: { serv } });
  }

  // Função para excluir um produto
  const deleteProduct = async (service) => {
    try {
      await toast.promise(api.delete(`services/${service.id}`), {
        pending: "Deletando serviço...",
        success: "Serviço deletado com sucesso!",
        error: "Falha ao deletar serviço, por favor tente novamente",
      });
    } catch (error) {
      console.error("Erro ao deletar serviço:", error);
    }
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
                Serviços
              </TableCellStyle>
              <TableCellStyle style={{ width: "120px" }} className="table-row">
                Preço
              </TableCellStyle>
              <TableCellStyle className="table-row" align="center">
                Serviços em oferta
              </TableCellStyle>
              <TableCellStyle align="center" className="table-row">
                Imagem do serviço
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
              {services &&
                services.map((serv) => (
                  <TableRowStyle
                    serv={serv}
                    key={serv.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCellStyle component="th" scope="serv">
                      {serv.name}
                    </TableCellStyle>
                    <TableCellStyle>
                      {formatCurrency(serv.price)}
                    </TableCellStyle>
                    <TableCellStyle align="center">
                      {isOffer(serv.offer)}
                    </TableCellStyle>
                    <TableCellStyle align="center">
                      <Img src={serv.url} alt="Imagem do serviço" />
                    </TableCellStyle>
                    <TableCellStyle align="center">
                      <ModeEditIconStyle onClick={() => editService(serv)} />
                    </TableCellStyle>
                    <TableCellStyle align="center">
                      <DeleteForeverIconStyle
                        onClick={() => deleteProduct(serv)}
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
