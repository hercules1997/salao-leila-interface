import { yupResolver } from "@hookform/resolvers/yup";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as Yup from "yup";

import { ErrorMessage } from "../../../components";
import paths from "../../../common/constants/paths";

import {
  Container,
  Label,
  Input,
  ButtonStyle,
  LabelUpload,
  ReactSelectStyles,
} from "./style";
import api from "../../../services/api";

export function NewService() {
  const [fileName, setFileName] = useState(null);
  const [categories, setCategories] = useState([]);
  const { push } = useNavigate();
  try {
  } catch (error) {}
  const schema = Yup.object().shape({
    name: Yup.string().required("Nome obrigatório"),
    price: Yup.string().required("Preço obrigatório"),
    decription: Yup.string().required("Descrição obrigatória"),
    category: Yup.object().required("Categoria obrigatória"),
    file: Yup.mixed()
      .test("required", "Carregue um arquivo", (value) => {
        return value?.length > 0;
      })
      .test(
        "fileSize",
        "Arquivo muito grande! Por favor, carregue menor que 4MB",
        (value) => {
          return value[0]?.size <= 400000;
        }
      )
      .test("type", "Carregue arquivos apenas jpeg/png", (value) => {
        return (
          value[0]?.type === "image/jpeg" || value[0]?.type === "image/png"
        );
      }),
  });

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (data) => {
    try {
      const serviceDataFormData = new FormData();
      serviceDataFormData.append("name", data.name);
      serviceDataFormData.append("price", data.price);
      serviceDataFormData.append("decription", data.decription);
      serviceDataFormData.append("category_id", data.category.id);
      serviceDataFormData.append("file", data.file[0]);

      await toast.promise(api.post("services", serviceDataFormData), {
        pending: "Registrando Serviço...",
        success: "Serviço registrado com sucesso!",
        error: "Falha ao registrar, por favor tente novamente!",
      });

      setTimeout(() => {
        push(paths.ListAppointment);
      }, 3000);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get("categories");
      setCategories(data);
    }
    loadCategories();
  }, []);

  return (
    <Container>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Label>Nome</Label>
          <Input
            type="text"
            {...register("name")}
            error={errors.name?.message}
          />
          <ErrorMessage>{errors.name?.message}</ErrorMessage>
        </div>
        <div>
          <Label>Preço</Label>
          <Input
            type="number"
            {...register("price")}
            error={errors.price?.message}
          />
          <ErrorMessage>{errors.price?.message}</ErrorMessage>
        </div>
        <div>
          <Label>Descrição do serviço</Label>
          <Input
            type="text"
            {...register("decription")}
            error={errors.decription?.message}
          />
          <ErrorMessage>{errors.decription?.message}</ErrorMessage>
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
        <div>
          <Controller
            name="category"
            control={control}
            render={({ field }) => {
              return (
                <ReactSelectStyles
                  {...field}
                  options={categories}
                  getOptionLabel={(cat) => cat.name}
                  getOptionValue={(cat) => cat.id}
                  placeholder="Categorias"
                  error={errors.category?.message}
                />
              );
            }}
          ></Controller>
          <ErrorMessage>{errors.category?.message}</ErrorMessage>
        </div>

        <ButtonStyle>Adiconar produto</ButtonStyle>
      </form>
    </Container>
  );
}
