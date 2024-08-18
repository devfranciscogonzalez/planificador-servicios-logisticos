import * as yup from "yup";

import {
  DESCRIPTION_VALIDATION,
  NAME_VALIDATION,
} from "../../../utils/validationSchemasBase";

export const validationSchemasService = yup.object().shape({
  name: NAME_VALIDATION,
  description: DESCRIPTION_VALIDATION,
  service_type_id: yup.string().required("El tipo de servicio es requerido"),
  user_id: yup.string().required("El usuario es requerido"),
});
