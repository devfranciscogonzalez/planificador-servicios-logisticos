import * as yup from "yup";

export const validationSchemasRate = yup.object().shape({
  customer_id: yup.string().required("El cliente es requerido"),
  service_type_id: yup.string().required("El tipo de servicio es requerido"),
  service_id: yup.string().required("El servicio es requerido"),
  product_id: yup.string().required("El producto es requerido"),
  business_id: yup.string().required("El negocio es requerido"),
  start_date: yup.date().required("La fecha de inicio es requerida"),
  end_date: yup.date().required("La fecha de término es requerida"),
  route_id: yup.string().required("El la ruta es requerido"),
  status: yup.boolean(),
  price: yup
    .number()
    .required("El precio es requerido")
    .typeError("El precio debe ser un número")
    .min(1000, "El precio debe ser mayor a 1000"),
  currency: yup.string().required("La moneda es requerida"),
  user_id: yup.string().required("El ID del usuario es requerido"),
});
