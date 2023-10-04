import AddCircleIcon from '@mui/icons-material/AddCircle'
import HomeIcon from '@mui/icons-material/Home'
import ListAltIcon from '@mui/icons-material/ListAlt'
import EventSharpIcon from "@mui/icons-material/EventSharp";
import paths from "../../common/constants/paths";

const listLinks = [
  {
    id: 1,
    label: "Página Inicial",
    link: paths.HomeInit,
    icon: HomeIcon,
  },
  {
    id: 2,
    label: "Status de agendamentos",
    link: paths.AppointmentStatus,
    icon: EventSharpIcon,
  },

  {
    id: 3,
    label: "Novo serviço",
    link: paths.NewService,
    icon: AddCircleIcon,
  },
  {
    id: 4,
    label: "Nova categoria",
    link: paths.NewCategory,
    icon: AddCircleIcon,
  },
  {
    id: 5,
    label: "Lista de serviços",
    link: paths.ListAppointment,
    icon: ListAltIcon,
  },
  {
    id: 6,
    label: "Lista das categorias",
    link: paths.ListCategory,
    icon: ListAltIcon,
  },
];

export default listLinks
