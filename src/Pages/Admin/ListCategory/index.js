import Paper from "@mui/material/Paper";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

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
import {  useNavigate } from "react-router-dom";

export function ListCategory({ categoria }) {
  console.log(categoria);
  const [categories, setCategories] = useState([]);
  const  location  = useNavigate();
  useEffect(() => {
    async function loadCategories() {
      try {
        const { data } = await api.get("categories");
        setCategories(data);
      } catch (error) {
        console.error("Erro ao carregar serviços:", error);
      }
    }

    loadCategories();
  }, []);
 

  // Função para editar um produto
  function editCategory(cat) {
    location(paths.EditCategory, { state: { cat }});
    console.log(cat)
  }

  // Função para excluir um produto
  const deleteCategory = async (cate) => {
    try {
      await toast.promise(api.delete(`categories/${cate.id}`), {
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
                Nome
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
            {categories &&
              categories.map((cat) => (
                <TableRowStyle
                  key={cat.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCellStyle component="th" scope="cat">
                    {cat.name}
                  </TableCellStyle>
                  <TableCellStyle align="center">
                    <Img src={cat.url} alt="Imagem da categoria" />
                  </TableCellStyle>
                  <TableCellStyle align="center">
                    <ModeEditIconStyle onClick={() => editCategory(cat)} />
                  </TableCellStyle>
                  <TableCellStyle align="center">
                    <DeleteForeverIconStyle
                      onClick={() => deleteCategory(cat)}
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
