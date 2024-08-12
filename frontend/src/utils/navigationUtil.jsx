import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import ArrowCircleLeftRoundedIcon from "@mui/icons-material/ArrowCircleLeftRounded";
import ArrowCircleRightRoundedIcon from "@mui/icons-material/ArrowCircleRightRounded";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ListAltIcon from "@mui/icons-material/ListAlt";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import PeopleIcon from "@mui/icons-material/People";
import PostAddIcon from "@mui/icons-material/PostAdd";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import RecommendIcon from "@mui/icons-material/Recommend";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";

import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";
import { ROLES_USER } from "../features/user/constants/userRoles";

const navigationByRole = {
  [ROLES_USER.ADMINISTRADOR]: [
    { name: "Dashboard", path: "/dashboard", icon: <DashboardIcon /> },
    { name: "Usuarios", path: "/users", icon: <PeopleIcon /> },
    {
      name: "Productos",
      path: "/products",
      icon: <ProductionQuantityLimitsIcon />,
    },
    { name: "Servicios", path: "/services", icon: <PostAddIcon /> },
    { name: "Clientes", path: "/customers", icon: <SupportAgentIcon /> },
    { name: "Tarifas", path: "/rates", icon: <ShoppingCartIcon /> },
    { name: "Orden de Servicio", path: "/orders", icon: <ListAltIcon /> },
    {
      name: "Registrar Patente",
      path: "/orders-truck",
      icon: <LocalShippingIcon />,
    },
    {
      name: "OS Confirmación",
      path: "/orders-confirm",
      icon: <RecommendIcon />,
    },
    {
      name: "OS Ingreso",
      path: "/orders-input",
      icon: <ArrowCircleRightRoundedIcon />,
    },
    {
      name: "OS Salida",
      path: "/orders-output",
      icon: <ArrowCircleLeftRoundedIcon />,
    },
    {
      name: "OS Ingreso Peso",
      path: "/orders-weight-input",
      icon: <ArrowCircleDownIcon />,
    },
    {
      name: "OS Salida Peso",
      path: "/orders-weight-output",
      icon: <ArrowCircleUpIcon />,
    },
  ],
  [ROLES_USER.JEFE_COMERCIAL]: [
    { name: "Dashboard", path: "/dashboard", icon: <DashboardIcon /> },
    { name: "Usuarios", path: "/users", icon: <PeopleIcon /> },
    {
      name: "Productos",
      path: "/products",
      icon: <ProductionQuantityLimitsIcon />,
    },
    { name: "Servicios", path: "/services", icon: <PostAddIcon /> },
    { name: "Clientes", path: "/customers", icon: <SupportAgentIcon /> },
    { name: "Tarifas", path: "/rates", icon: <ShoppingCartIcon /> },
    { name: "Orden de Servicio", path: "/app/orders", icon: <ListAltIcon /> },
    {
      name: "OS Confirmación",
      path: "/orders-confirm",
      icon: <RecommendIcon />,
    },
    {
      name: "OS Ingreso",
      path: "/orders-input",
      icon: <ArrowCircleRightRoundedIcon />,
    },
    {
      name: "OS Salida",
      path: "/app/orders-output",
      icon: <ArrowCircleLeftRoundedIcon />,
    },
    {
      name: "OS Ingreso Peso",
      path: "/app/orders-weight-input",
      icon: <ArrowCircleDownIcon />,
    },
    {
      name: "OS Salida Peso",
      path: "/app/orders-weight-output",
      icon: <ArrowCircleUpIcon />,
    },
  ],
  [ROLES_USER.CUSTOMER_SERVICE]: [
    { name: "Dashboard", path: "/dashboard", icon: <DashboardIcon /> },
    { name: "Orden de Servicio", path: "/orders", icon: <ListAltIcon /> },
    {
      name: "Registrar Patente",
      path: "/app/orders-truck",
      icon: <LocalShippingIcon />,
    },
  ],
  [ROLES_USER.ROMANA]: [
    { name: "Dashboard", path: "/dashboard", icon: <DashboardIcon /> },
    {
      name: "OS Ingreso Peso",
      path: "/orders-weight-input",
      icon: <ArrowCircleDownIcon />,
    },
    {
      name: "OS Salida Peso",
      path: "/orders-weight-output",
      icon: <ArrowCircleUpIcon />,
    },
  ],
  [ROLES_USER.PORTERO]: [
    { name: "Dashboard", path: "/dashboard", icon: <DashboardIcon /> },
    {
      name: "OS Ingreso",
      path: "/orders-input",
      icon: <ArrowCircleRightRoundedIcon />,
    },
    {
      name: "OS Salida",
      path: "/orders-output",
      icon: <ArrowCircleLeftRoundedIcon />,
    },
  ],
  [ROLES_USER.SUPERVISOR]: [
    { name: "Dashboard", path: "/dashboard", icon: <DashboardIcon /> },
    {
      name: "OS Confirmación",
      path: "/orders-confirm",
      icon: <RecommendIcon />,
    },
  ],
};

export const getRoleNavigationItems = (role) => {
  const items = navigationByRole[role] || [];

  return items.map((item) => (
    <ListItemButton key={item.name} component={Link} to={item.path}>
      <ListItemIcon> {item.icon}</ListItemIcon>
      <ListItemText primary={item.name} />
    </ListItemButton>
  ));
};
