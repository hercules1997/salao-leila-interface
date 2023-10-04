import { yupResolver } from "@hookform/resolvers/yup";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import * as Yup from "yup";
import { ErrorMessage } from "../../../components";
import api from "../../../services/api";
import paths from "../../../common/constants/paths";
import {
  Container,
  Label,
  Input,
  ButtonStyle,
  LabelUpload,
  ButtonCancel,
} from "../NewService/style";

export function EditCategory() {
  const [fileName, setFileName] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();
  const {
    state: { cat },
  } = useLocation();

  const schema = Yup.object().shape({
    name: Yup.string("Digite o nome do serviço"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (data) => {
    const categoryFormData = new FormData();
    categoryFormData.append("name", data.name);
    categoryFormData.append("file", data.file[0]);

    await toast.promise(api.put(`categories/${cat.id}`, categoryFormData), {
      pending: "Editando categoria...",
      success: "Categoria editatda com sucesso!",
      error: "Falha ao editar o categoria",
    });

    setTimeout(() => {
      navigate(paths.ListCategory);
    }, 1000);
  };

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get("categories");
      setCategories(data);
    }
    loadCategories();
  }, []);
    function exit() {
      navigate(paths.ListCategory);
    }
  return (
    <Container>
      <ButtonCancel className="exit" onClick={() => exit()}/>
    
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Label>Nome</Label>
          <Input
            type="text"
            {...register("name")}
            defaultValue={cat.name}
            error={errors.name?.message}
          />
          <ErrorMessage>{errors.name?.message}</ErrorMessage>
        </div>
        <div>
          <LabelUpload>
            {fileName || (
              <>
                <CloudUploadIcon />
                Carregar imagem
              </>
            )}

            <Input
              type="file"
              id="image-input"
              accept="image/png, image/jpeg"
              {...register("file")}
              onChange={(value) => {
                setFileName(value.target.files[0]?.name);
              }}
              error={errors.file?.message}
            />
          </LabelUpload>
          <ErrorMessage>{errors.file?.message}</ErrorMessage>
        </div>

        <ButtonStyle>Editar categoria</ButtonStyle>
      </form>
    </Container>
  );
}
