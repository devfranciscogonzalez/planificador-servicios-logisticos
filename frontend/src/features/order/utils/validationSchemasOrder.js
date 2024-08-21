import * as yup from "yup";

export const validationSchemasOrder = yup.object().shape({
  date: yup.string().required("La fecha es requerida"),
  code: yup.string().required("El código es requerido"),
  rate_id: yup.string().required("El la tarifa es requerido"),
  customer_id: yup.string().required("El cliente es requerido"),
  planning_id: yup.string().required("El la planificación es requerido"),
  schedule_id: yup.string().required("El horario es requerido"),
  service_type_id: yup.string().required("El tipo de servicio es requerido"),
  service_id: yup.string().required("El servicio es requerido"),
  product_id: yup.string().required("El producto es requerido"),
  business_id: yup.string().required("El negocio es requerido"),
  route_id: yup.string().required("El la ruta es requerido"),
  status: yup.boolean().required("El estado es requerido"),
  user_id: yup.string().required("El usuario es requerido"),
});

export const validationSchemasOrderTruck = yup.object().shape({
  truck_plate: yup
    .string()
    .matches(
      /^[A-Z0-9]{2}-[A-Z0-9]{2}-[A-Z0-9]{2}$/,
      "Formato de patente inválido (XX-XX-XX)"
    ),
  customer_service_name: yup
    .string()
    .required("El nombre del Customer Service es requerido"),
});

export const validationSchemaWeightEntry = yup.object().shape({
  weight_entry: yup
    .number()
    .min(0, "El peso no puede ser negativo")
    .max(500000, "El peso no puede ser mayor a 500000 kg")
    .required("El peso es requerido"),
});

export const validationSchemaWeightOutput = yup.object().shape({
  weight_exit: yup
    .number()
    .min(0, "El peso no puede ser negativo")
    .max(500000, "El peso no puede ser mayor a 500000 kg")
    .required("El peso es requerido"),
});

export const validationSchemaStatus = yup.object().shape({
  status: yup.boolean().required("El estado es requerido"),
  comment: yup
    .string()
    .nullable()
    .max(500, "El comentario no puede tener más de 255 caracteres"),
  container: yup
    .string()
    .nullable()
    .transform((value, originalValue) => {
      return originalValue === "" ? null : value;
    })
    .matches(
      /^[A-Z0-9]{8}$/,
      "Formato de contenedor inválido. Ej: ABCD1234"
    ),
});
