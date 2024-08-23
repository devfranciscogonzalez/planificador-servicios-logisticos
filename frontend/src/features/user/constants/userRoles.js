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
  3: amber[500], // ID para SUPERVISOR
  4: orange[500], // ID para PORTERO
  5: indigo[500], // ID para ROMANA
  6: red[500], // ID para ADMINISTRADOR
};

export const ROLEFEATURES = {
  "Jefe Comercial": [
    "Registrar, actualizar o eliminar usuarios, visualizar los diferentes usuarios, cambiar su contraseña y su estado (habilitado o deshabilitado).",
    "Agregar, visualizar, actualizar o eliminar productos, visualizar los diferentes tipos de negocios.",
    "Agregar, visualizar, actualizar o eliminar servicios, visualizar los diferentes tipos de servicios.",
    "Registrar, actualizar o eliminar clientes, visualizar los diferentes clientes y cambiar su estado (habilitado o deshabilitado).",
    "Agregar una nueva tarifa, visualizar y cambiar el estado a inactiva de las tarifas vigentes, visualizar las tarifas inactivas.",
    "Crear orden de servicio en base a una tarifa vigente, visualizar las órdenes de servicio vigentes, reprogramarlas o marcarlas como finalizadas, y visualizar las órdenes de servicio reprogramadas y finalizadas.",
    "Ingresar patente de camión.",
    "Registrar ingreso del camión a las instalaciones.",
    "Registrar peso de ingreso del camión.",
    "Confirmar orden de servicio, ingresar contenedor o ingresar comentario.",
    "Registrar peso de salida del camión.",
    "Registrar salida del camión a las instalaciones.",
  ],
  "Customer Service": [
    "Agregar, visualizar, actualizar o eliminar productos, visualizar los diferentes tipos de negocios.",
    "Agregar, visualizar, actualizar o eliminar servicios, visualizar los diferentes tipos de servicios.",
    "Registrar, actualizar o eliminar clientes, visualizar los diferentes clientes y cambiar su estado (habilitado o deshabilitado).",
    "Agregar una nueva tarifa, visualizar y cambiar el estado a inactiva de las tarifas vigentes, visualizar las tarifas inactivas.",
    "Crear orden de servicio en base a una tarifa vigente, visualizar las órdenes de servicio vigentes, reprogramarlas o marcarlas como finalizadas, y visualizar las órdenes de servicio reprogramadas y finalizadas.",
    "Ingresar patente de camión.",
  ],
  Portero: [
    "Registrar ingreso del camión a las instalaciones.",
    "Registrar salida del camión a las instalaciones.",
  ],
  Romana: [
    "Registrar peso de ingreso del camión.",
    "Registrar peso de salida del camión.",
  ],
  Supervisor: [
    "Confirmar orden de servicio, ingresar contenedor o ingresar comentario.",
  ],
  Administrador: [
    "Registrar, actualizar o eliminar usuarios, visualizar los diferentes usuarios, cambiar su contraseña y su estado (habilitado o deshabilitado).",
    "Agregar, visualizar, actualizar o eliminar productos, visualizar los diferentes tipos de negocios.",
    "Agregar, visualizar, actualizar o eliminar servicios, visualizar los diferentes tipos de servicios.",
    "Registrar, actualizar o eliminar clientes, visualizar los diferentes clientes y cambiar su estado (habilitado o deshabilitado).",
    "Agregar una nueva tarifa, visualizar y cambiar el estado a inactiva de las tarifas vigentes, visualizar las tarifas inactivas.",
    "Crear orden de servicio en base a una tarifa vigente, visualizar las órdenes de servicio vigentes, reprogramarlas o marcarlas como finalizadas, y visualizar las órdenes de servicio reprogramadas y finalizadas.",
    "Ingresar patente de camión.",
    "Registrar ingreso del camión a las instalaciones.",
    "Registrar peso de ingreso del camión.",
    "Confirmar servicio, ingresar contenedor o ingresar comentario.",
    "Registrar peso de salida del camión.",
    "Registrar salida de las instalaciones.",
  ],
};
