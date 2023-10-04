import CloseIcon from "@mui/icons-material/Close";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  text-align: center;
  box-shadow: 0px 2px 5px gray;
`;

export const DeleteForeverIconStyle = styled(CloseIcon)`
  width: 80px;
  color: red;
  cursor: pointer;
  &:hover {
    font-weight: bold;
    color: rosybrown;
  }
`;

export const ListVoid = styled.div`
  display: flex;
  width: 100%;
  height: 500px;
  font-size: 4rem;
  justify-content: center;
  align-items: center;
  box-shadow: none;
  background-color: #fff;
  border-radius: 8px;
  color: #9e775a;
`;

export const ModeEditIconStyle = styled(ModeEditIcon)`
  width: 80px;
  color: gray;
  cursor: pointer;
  &:hover {
    font-weight: bold;
    color: #000;
  }
`;
export const TableRowStyle = styled(TableRow)`
  font-weight: bold;
  height: 50px;
  background: #ffff !important;
`;
export const TableCellStyle = styled(TableCell)`
  width: 20px;
  color: #000 !important;
  font-size: 1.2rem !important;
`;

export const TableHeadStyle = styled(TableHead)``;
export const TableContainerStyle = styled(TableContainer)`
  border: none !important;
  border-radius: 12px !important;
`;
export const TableBodyStyle = styled(TableBody)``;
export const TableStyle = styled(Table)``;
