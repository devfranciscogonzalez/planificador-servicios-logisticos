import * as yup from "yup";

import {
  DESCRIPTION_VALIDATION,
  NAME_VALIDATION,
} from "../../../utils/validationSchemasBase";

export const validationSchemasCustomer = yup.object().shape({
  name: NAME_VALIDATION,
  description: DESCRIPTION_VALIDATION,
  status: yup.boolean(),
  logo: yup
    .mixed()
    .nullable()
    .test(
      "fileSize",
      "El archivo es demasiado grande (máximo 2MB)",
      (value) => {
        if (!value) return true;
        return value && value.size <= 2097152;
      }
    )
    .test(
      "fileFormat",
      "Formato no soportado (solo: jpg, jpeg, png)",
      (value) => {
        if (!value) return true;
        return (
          value && ["image/jpg", "image/jpeg", "image/png"].includes(value.type)
        );
      }
    ),
  user_id: yup.string().required("El usuario es requerido"),
});
