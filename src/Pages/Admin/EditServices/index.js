import { yupResolver } from "@hookform/resolvers/yup";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import * as Yup from "yup";
import { ErrorMessage } from "../../../components";
import { InputCheckBox, Textarea } from "./style";
import api from "../../../services/api";
import paths from "../../../common/constants/paths";
import {
  Container,
  Label,
  Input,
  ButtonStyle,
  ReactSelectStyles,
  LabelUpload,
  ButtonCancel,
} from "../NewService/style";

export function EditServices() {
  const [fileName, setFileName] = useState(null);
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();
  const {
    state: { serv },
  } = useLocation();

  const schema = Yup.object().shape({
    name: Yup.string().required("Digite o nome do serviço"),
    price: Yup.string().required("Digite o preço do serviço"),
    category: Yup.object().required("Escolha uma cartegoria"),
    decription: Yup.string().required("Digite uma descrição"),
    offer: Yup.bool(),
  });

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (data) => {
    const serviceFormData = new FormData();
    serviceFormData.append("name", data.name);
    serviceFormData.append("price", data.price);
    serviceFormData.append("decription", data.decription);
    serviceFormData.append("category_id", data.category.id);
    serviceFormData.append("file", data.file[0]);
    serviceFormData.append("offer", data.offer);

    await toast.promise(api.put(`services/${serv.id}`, serviceFormData), {
      pending: "Editando novo produto...",
      success: "Produto editatdo com sucesso!",
      error: "Falha ao editar o produto",
    });

    setTimeout(() => {
      navigate(paths.ListAppointment);
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
    navigate(paths.ListAppointment);
  }

  return (
    <Container>
      <ButtonCancel className="exit" onClick={() => exit()} />
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Label>Nome</Label>
          <Input
            type="text"
            {...register("name")}
            defaultValue={serv.name}
            error={errors.name?.message}
          />
          <ErrorMessage>{errors.name?.message}</ErrorMessage>
        </div>
        <div>
          <Label>Preço</Label>
          <Input
            type="number"
            {...register("price")}
            defaultValue={serv.price}
            error={errors.price?.message}
          />
          <ErrorMessage>{errors.price?.message}</ErrorMessage>
        </div>
        <div>
          <Label>Descrição do serviço</Label>
          <Textarea
            type="text"
            {...register("decription")}
            defaultValue={serv.decription}
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
            defaultValue={serv.category}
            render={({ field }) => {
              return (
                <ReactSelectStyles
                  {...field}
                  options={categories}
                  getOptionLabel={(cat) => cat.name}
                  getOptionValue={(cat) => cat.id}
                  placeholder="Categorias"
                  error={errors.category?.message}
                  defaultValue={serv.category}
                />
              );
            }}
          ></Controller>
          <ErrorMessage>{errors.category?.message}</ErrorMessage>
        </div>
        <div>
          <Label>
            <InputCheckBox
              type="checkbox"
              {...register("offer")}
              defaultChecked={serv.offer}
            />
            Produto em Oferta?
          </Label>
        </div>
        <ButtonStyle>Editar produto</ButtonStyle>
      </form>
    </Container>
  );
}
