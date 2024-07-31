import * as yup from "yup";

/**
 *
 * !SCHEME REAL
 *
 */

// import { EMAIL_VALIDATION, PASSWORD_RULES } from "../../../utils/validationSchemasBase";

// const PASSWORD_VALIDATION = PASSWORD_RULES.required(
//   "La contraseña es requerida"
// );

// export const loginValidationSchema = yup.object().shape({
//   email: EMAIL_VALIDATION,
//   password: PASSWORD_VALIDATION,
// });

/**
 *
 * !SCHEME DESARROLLO
 *
 */

export const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Correo electrónico inválido")
    .required("Este campo es requerido"),
  password: yup.string().required("La contraseña es requerida"),
});
