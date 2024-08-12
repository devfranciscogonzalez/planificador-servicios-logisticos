import { createBrowserRouter } from "react-router-dom";
import { ROLES_USER } from "../features/user/constants/userRoles";
import {
  CustomerPage,
  DashboardPage,
  ErrorPage,
  LoginPage,
  OrderConfirmPage,
  OrderInputPage,
  OrderOutputPage,
  OrderPage,
  OrderTruckPage,
  OrderWeightInputPage,
  OrderWeightOutputPage,
  ProductPage,
  RatePage,
  ServicePage,
  UserPage,
  UserProfile,
} from "../pages";
import { ProtectedRoutes, PublicRoutes, RoleProtectedElement } from "./";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicRoutes />,
    errorElement: <ErrorPage />,
    children: [{ index: true, element: <LoginPage /> }],
  },
  {
    element: <ProtectedRoutes />,
    errorElement: <ErrorPage />,
    children: [
      { path: "app/dashboard", element: <DashboardPage /> },
      { path: "app/profile", element: <UserProfile /> },
      {
        path: "app/products",
        element: (
          <RoleProtectedElement
            allowedRoles={[ROLES_USER.ADMINISTRADOR, ROLES_USER.JEFE_COMERCIAL]}
          >
            <ProductPage />
          </RoleProtectedElement>
        ),
      },
      {
        path: "app/users",
        element: (
          <RoleProtectedElement
            allowedRoles={[ROLES_USER.ADMINISTRADOR, ROLES_USER.JEFE_COMERCIAL]}
          >
            <UserPage />
          </RoleProtectedElement>
        ),
      },
      {
        path: "app/customers",
        element: (
          <RoleProtectedElement
            allowedRoles={[ROLES_USER.ADMINISTRADOR, ROLES_USER.JEFE_COMERCIAL]}
          >
            <CustomerPage />
          </RoleProtectedElement>
        ),
      },
      {
        path: "app/services",
        element: (
          <RoleProtectedElement
            allowedRoles={[ROLES_USER.ADMINISTRADOR, ROLES_USER.JEFE_COMERCIAL]}
          >
            <ServicePage />
          </RoleProtectedElement>
        ),
      },
      {
        path: "app/rates",
        element: (
          <RoleProtectedElement
            allowedRoles={[ROLES_USER.ADMINISTRADOR, ROLES_USER.JEFE_COMERCIAL]}
          >
            <RatePage />
          </RoleProtectedElement>
        ),
      },
      {
        path: "app/orders",
        element: (
          <RoleProtectedElement
            allowedRoles={[
              ROLES_USER.ADMINISTRADOR,
              ROLES_USER.JEFE_COMERCIAL,
              ROLES_USER.CUSTOMER_SERVICE,
            ]}
          >
            <OrderPage />
          </RoleProtectedElement>
        ),
      },
      {
        path: "app/orders-truck",
        element: (
          <RoleProtectedElement
            allowedRoles={[
              ROLES_USER.ADMINISTRADOR,
              ROLES_USER.JEFE_COMERCIAL,
              ROLES_USER.CUSTOMER_SERVICE,
            ]}
          >
            <OrderTruckPage />
          </RoleProtectedElement>
        ),
      },
      {
        path: "app/orders-confirm",
        element: (
          <RoleProtectedElement
            allowedRoles={[ROLES_USER.ADMINISTRADOR,ROLES_USER.JEFE_COMERCIAL, ROLES_USER.SUPERVISOR]}
          >
            <OrderConfirmPage />
          </RoleProtectedElement>
        ),
      },
      {
        path: "app/orders-input",
        element: (
          <RoleProtectedElement
            allowedRoles={[
              ROLES_USER.ADMINISTRADOR,
              ROLES_USER.JEFE_COMERCIAL,
              ROLES_USER.PORTERO,
            ]}
          >
            <OrderInputPage />
          </RoleProtectedElement>
        ),
      },
      {
        path: "app/orders-output",
        element: (
          <RoleProtectedElement
            allowedRoles={[
              ROLES_USER.ADMINISTRADOR,
              ROLES_USER.JEFE_COMERCIAL,
              ROLES_USER.PORTERO,
            ]}
          >
            <OrderOutputPage />
          </RoleProtectedElement>
        ),
      },
      {
        path: "app/orders-weight-input",
        element: (
          <RoleProtectedElement
            allowedRoles={[
              ROLES_USER.ADMINISTRADOR,
              ROLES_USER.JEFE_COMERCIAL,
              ROLES_USER.ROMANA,
            ]}
          >
            <OrderWeightInputPage />
          </RoleProtectedElement>
        ),
      },
      {
        path: "app/orders-weight-output",
        element: (
          <RoleProtectedElement
            allowedRoles={[
              ROLES_USER.ADMINISTRADOR,
              ROLES_USER.JEFE_COMERCIAL,
              ROLES_USER.ROMANA,
            ]}
          >
            <OrderWeightOutputPage />
          </RoleProtectedElement>
        ),
      },
    ],
  },
]);

export default router;
