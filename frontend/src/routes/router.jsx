import { createBrowserRouter } from "react-router-dom";
import { ROLES_USER } from "../features/user/constants/userRoles";
import {
  CustomerPage,
  HomePage,
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
    path: "/app",
    element: <ProtectedRoutes />,
    errorElement: <ErrorPage />,
    children: [
      { path: "home", element: <HomePage /> },
      { path: "profile", element: <UserProfile /> },
      {
        path: "users",
        element: (
          <RoleProtectedElement
            allowedRoles={[ROLES_USER.ADMINISTRADOR, ROLES_USER.JEFE_COMERCIAL]}
          >
            <UserPage />
          </RoleProtectedElement>
        ),
      },
      {
        path: "products",
        element: (
          <RoleProtectedElement
            allowedRoles={[
              ROLES_USER.ADMINISTRADOR,
              ROLES_USER.JEFE_COMERCIAL,
              ROLES_USER.CUSTOMER_SERVICE,
            ]}
          >
            <ProductPage />
          </RoleProtectedElement>
        ),
      },
      {
        path: "customers",
        element: (
          <RoleProtectedElement
            allowedRoles={[
              ROLES_USER.ADMINISTRADOR,
              ROLES_USER.JEFE_COMERCIAL,
              ROLES_USER.CUSTOMER_SERVICE,
            ]}
          >
            <CustomerPage />
          </RoleProtectedElement>
        ),
      },
      {
        path: "services",
        element: (
          <RoleProtectedElement
            allowedRoles={[
              ROLES_USER.ADMINISTRADOR,
              ROLES_USER.JEFE_COMERCIAL,
              ROLES_USER.CUSTOMER_SERVICE,
            ]}
          >
            <ServicePage />
          </RoleProtectedElement>
        ),
      },
      {
        path: "rates",
        element: (
          <RoleProtectedElement
            allowedRoles={[
              ROLES_USER.ADMINISTRADOR,
              ROLES_USER.JEFE_COMERCIAL,
              ROLES_USER.CUSTOMER_SERVICE,
            ]}
          >
            <RatePage />
          </RoleProtectedElement>
        ),
      },
      {
        path: "orders",
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
        path: "orders-truck",
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
        path: "orders-confirm",
        element: (
          <RoleProtectedElement
            allowedRoles={[
              ROLES_USER.ADMINISTRADOR,
              ROLES_USER.JEFE_COMERCIAL,
              ROLES_USER.SUPERVISOR,
            ]}
          >
            <OrderConfirmPage />
          </RoleProtectedElement>
        ),
      },
      {
        path: "orders-input",
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
        path: "orders-output",
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
        path: "orders-weight-input",
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
        path: "orders-weight-output",
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
