import * as yup from "yup";

/**
 *
 * !SCHEME REAL
 *
 */

// import {
//   EMAIL_VALIDATION,
//   NAME_VALIDATION,
//   PASSWORD_RULES,
// } from "../../../utils/validationSchemasBase";

// const NAME_VALIDATION_USER = NAME_VALIDATION.concat(
//   yup.string().matches(/^[a-zA-Z]+ [a-zA-Z]+$/, "Debe ingresar nombre completo")
// );

// const PASSWORD_CONFIRMATION_VALIDATION = PASSWORD_RULES.oneOf(
//   [yup.ref("password"), null],
//   "Las contraseñas no coinciden"
// ).required("La confirmación de la contraseña es requerida");

// const ROLE_VALIDATION = yup.string().required("Este campo es requerido");

// export const userValidationSchemaWithPassword = yup.object().shape({
//   name: NAME_VALIDATION_USER,
//   email: EMAIL_VALIDATION,
//   password: PASSWORD_RULES,
//   password_confirmation: PASSWORD_CONFIRMATION_VALIDATION,
//   role_id: ROLE_VALIDATION,
// });

// export const userValidationSchemaWithoutPassword = yup.object().shape({
//   name: NAME_VALIDATION_USER,
//   email: EMAIL_VALIDATION,
//   role_id: ROLE_VALIDATION,
//   changePassword: yup.boolean(),
//   password: yup.string().when("changePassword", ([changePassword], schema) => {
//     return changePassword
//       ? schema.concat(PASSWORD_RULES).required("La contraseña es requerida")
//       : schema.notRequired();
//   }),
//   password_confirmation: yup
//     .string()
//     .when("changePassword", ([changePassword], schema) => {
//       return changePassword
//         ? schema
//             .concat(PASSWORD_RULES)
//             .oneOf([yup.ref("password"), null], "Las contraseñas no coinciden")
//             .required("La confirmación de la contraseña es requerida")
//         : schema.notRequired();
//     }),
// });

/**
 *
 * !SCHEME DESARROLLO
 *
 */

export const userValidationSchemaWithPassword = yup.object().shape({
  name: yup.string().required("Este campo es requerido"),
  email: yup
    .string()
    .email("Correo electrónico inválido")
    .required("Este campo es requerido"),
  status: yup.boolean(),
  password: yup.string().required("La contraseña es requerida"),
  password_confirmation: yup
    .string()
    .oneOf([yup.ref("password"), null], "Las contraseñas no coinciden")
    .required("La confirmación de la contraseña es requerida"),
  role_id: yup.string().required("Este campo es requerido"),
});

export const userValidationSchemaWithoutPassword = yup.object().shape({
  name: yup.string().required("Este campo es requerido"),
  email: yup
    .string()
    .email("Correo electrónico inválido")
    .required("Este campo es requerido"),
  status: yup.boolean(),
  password: yup.string(),
  password_confirmation: yup
    .string()
    .oneOf([yup.ref("password"), null], "Las contraseñas no coinciden"),
  role_id: yup.string().required("Este campo es requerido"),
});
