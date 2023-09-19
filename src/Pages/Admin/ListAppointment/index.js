import CheckBoxIcon from '@mui/icons-material/CheckBox'
import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault'
import Paper from '@mui/material/Paper'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'


import formatCurrency from '../../../common/utils/formatCurrency'
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
  DeleteForeverIconStyle
} from './style'
import api from '../../../services/api'

export function ListAppointment() {
  const [services, setServices] = useState();

  useEffect(() => {
    async function loadOrders() {
      const { data } = await api.get("services");

      setServices(data);
    }

    loadOrders();
  }, [services]);

  function isOffer(offerStatus) {
    if (offerStatus) {
      return <CheckBoxIcon className="checkYes" />;
    }
    return <DisabledByDefaultIcon className="checkNo" />;
  }

  function editProduct(service) {
    
  }

  const deleteProduct = async (service) => {
    await toast.promise(api.delete(`services/${service.id}`), {
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
                  key={serv.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCellStyle component="th" scope="serv">
                    {serv.name}
                  </TableCellStyle>
                  <TableCellStyle>{formatCurrency(serv.price)}</TableCellStyle>
                  <TableCellStyle align="center">
                    {isOffer(serv.offer)}
                  </TableCellStyle>
                  <TableCellStyle align="center">
                    <Img src={serv.url} alt="Imagem do serviço" />
                  </TableCellStyle>
                  <TableCellStyle align="center">
                    <ModeEditIconStyle onClick={() => editProduct(serv)} />
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
