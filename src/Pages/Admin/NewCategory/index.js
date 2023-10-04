import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as Yup from "yup";

// Importações de componentes, estilos e serviços
import { ErrorMessage } from "../../../components"; // Importa o componente ErrorMessage
import paths from "../../../common/constants/paths"; // Importa constantes de paths
import {
  Container, // Estilo Container
  Label, // Rótulo de input
  Input, // Campo de input
  ButtonStyle, // Estilo de botão
  LabelUpload, // Rótulo para upload de arquivo
} from "./style"; // Importa estilos do componente
import api from "../../../services/api"; // Importa o serviço de API
import { yupResolver } from "@hookform/resolvers/yup";

// Componente NewService para adicionar um novo serviço
export function NewCategory() {
  const [fileName, setFileName] = useState(null); // Estado para armazenar o nome do arquivo selecionado
  const [categoria, setCategories] = useState([]); // Estado para armazenar as categorias de serviço
  const navigate = useNavigate(); // Hook de navegação

  // Esquema de validação com Yup
  const schema = Yup.object().shape({
    name: Yup.string().required("Nome obrigatório"),

    file: Yup.mixed()
      .test("required", "Carregue um arquivo", (value) => {
        return value?.length > 0;
      })
      .test(
        "fileSize",
        "Arquivo muito grande! Por favor, carregue menor que 4MB",
        (value) => {
          return value[0]?.size <= 4000000;
        }
      )
      .test("type", "Carregue arquivos apenas jpeg/png", (value) => {
        return (
          value[0]?.type === "image/jpeg" ||
          value[0]?.type === "image/png" ||
          value[0]?.type === "image/webp"
        );
      }),
  });

  // useForm para gerenciar o formulário com o esquema de validação
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  // Função que é executada quando o formulário é enviado
  const onSubmit = async (data) => {
    try {
      const categoriesFormData = new FormData();
      categoriesFormData.append("name", data.name);
      categoriesFormData.append("file", data.file[0]);

      //  toast.promise para exibir mensagens de sucesso ou erro ao enviar o formulário
      await toast.promise(api.post("categories", categoriesFormData), {
        pending: "Registrando Categoria...",
        success: "Categoria registrado com sucesso!",
        error: "Falha ao registrar, por favor tente novamente!",
      });

      //  setTimeout para navegar para a página de listagem após um atraso de 3 segundos
      setTimeout(() => {
        navigate(paths.ListCategory);
      }, 3000);
    } catch (error) {
      console.log(error);
    }
  };

  // Efeito para carregar categorias de serviço
  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get("categories");
      setCategories(data);
    }
    loadCategories();
  }, []);

  return (
    <Container categ={categoria} >
      {/* Formulário com onSubmit que chama a função onSubmit */}
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
          {/* Componente para carregar uma imagem */}
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
         
          <ErrorMessage>{errors.category?.message}</ErrorMessage>
        </div>

        {/* Botão para adicionar o produto */}
        <ButtonStyle>Adicionar categoria</ButtonStyle>
      </form>
    </Container>
  );
}
