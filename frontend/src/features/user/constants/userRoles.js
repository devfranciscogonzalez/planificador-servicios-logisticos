import {
  amber,
  green,
  indigo,
  orange,
  purple,
  red,
} from "@mui/material/colors";

export const ROLES_USER = {
  JEFE_COMERCIAL: "Jefe Comercial",
  CUSTOMER_SERVICE: "Customer Service",
  PORTERO: "Portero",
  ROMANA: "Romana",
  SUPERVISOR: "Supervisor",
  ADMINISTRADOR: "Administrador",
};

export const ROLE_COLORS = {
  1: purple[500], // ID para JEFE_COMERCIAL
  2: green[500], // ID para CUSTOMER_SERVICE
  3: orange[500], // ID para PORTERO
  4: indigo[500], // ID para ROMANA
  5: amber[500], // ID para SUPERVISOR
  6: red[500], // ID para ADMINISTRADOR
};

export const ROLEFEATURES = {
  "Jefe Comercial": [
    "Registrar nuevos usuarios, actualizar y eliminar usuarios, cambiar su contraseña y su estado de habilitado a deshabilitado.",
    "Visualizar los diferentes tipos de productos, agregar nuevos, actualizar y eliminar, visualizar los diferentes tipos de negocios.",
    "Agregar, actualizar o eliminar servicios, visualizar los diferentes tipos de servicios.",
    "Crear servicios, visualizar los diferentes servicios.",
    "Registrar, actualizar y eliminar clientes, visualizar los diferentes clientes y su estado (habilitado o deshabilitado).",
    "Agregar una nueva tarifa, visualizar y cambiar el estado a tarifa inactiva de las tarifas vigentes, visualizar las tarifas inactivas.",
    "Crear nueva orden de servicio en base a una tarifa vigente, visualizar las órdenes de servicio vigentes, reprogramarlas o marcarlas como finalizadas, y visualizar las órdenes de servicio reprogramadas y finalizadas.",
    "Ingresar patente de camión.",
    "Registrar ingreso al recinto del camión.",
    "Registrar peso de ingreso del camión.",
    "Confirmar servicio, ingresar contenedor o ingresar comentario.",
    "Registrar peso de salida.",
    "Registrar salida del recinto.",
  ],
  "Customer Service": [
    "Crear nueva orden de servicio en base a una tarifa vigente, visualizar las órdenes de servicio vigentes, reprogramarlas o marcarlas como finalizadas, y visualizar las órdenes de servicio reprogramadas y finalizadas.",
    "Ingresar patente de camión.",
  ],
  Portero: [
    "Registrar ingreso al recinto del camión.",
    "Registrar salida del recinto.",
  ],
  Romana: [
    "Registrar peso de ingreso del camión.",
    "Registrar peso de salida.",
  ],
  Supervisor: [
    "Confirmar servicio, ingresar contenedor o ingresar comentario.",
  ],
  Administrador: [
    "Registrar nuevos usuarios, actualizar y eliminar usuarios, cambiar su contraseña y su estado de habilitado a deshabilitado.",
    "Visualizar los diferentes tipos de productos, agregar nuevos, actualizar y eliminar, visualizar los diferentes tipos de negocios.",
    "Agregar, actualizar o eliminar servicios, visualizar los diferentes tipos de servicios.",
    "Crear servicios, visualizar los diferentes servicios.",
    "Registrar, actualizar y eliminar clientes, visualizar los diferentes clientes y su estado (habilitado o deshabilitado).",
    "Agregar una nueva tarifa, visualizar y cambiar el estado a tarifa inactiva de las tarifas vigentes, visualizar las tarifas inactivas.",
    "Crear nueva orden de servicio en base a una tarifa vigente, visualizar las órdenes de servicio vigentes, reprogramarlas o marcarlas como finalizadas, y visualizar las órdenes de servicio reprogramadas y finalizadas.",
    "Ingresar patente de camión.",
    "Registrar ingreso al recinto del camión.",
    "Registrar peso de ingreso del camión.",
    "Confirmar servicio, ingresar contenedor o ingresar comentario.",
    "Registrar peso de salida.",
    "Registrar salida del recinto.",
  ],
};
