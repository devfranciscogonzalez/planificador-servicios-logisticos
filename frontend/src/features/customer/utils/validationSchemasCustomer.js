import * as yup from "yup";

/**
 *
 * !SCHEME REAL
 *
 */

// import {
//   DESCRIPTION_VALIDATION,
//   NAME_VALIDATION,
// } from "../../../utils/validationSchemasBase";

// export const validationSchemasCustomer = yup.object().shape({
//   name: NAME_VALIDATION,
//   description: DESCRIPTION_VALIDATION,
//   status: yup.boolean(),
//   logo: yup.mixed()
//     .required("El logo es requerido")
//     .test(
//       "fileSize",
//       "El archivo es demasiado grande",
//       (value) => value && value.size <= 2097152 // 2MB
//     )
//     .test(
//       "fileFormat",
//       "Formato no soportado",
//       (value) =>
//         value && ["image/jpg", "image/jpeg", "image/png"].includes(value.type)
//     ),
//   user_id: yup.string().required("El ID del usuario es requerido"),
// });

/**
 *
 * !SCHEME DESARROLLO
 *
 */

export const validationSchemasCustomer = yup.object().shape({
  name: yup.string().required("El nombre es requerido"),
  description: yup.string().required("La descripción es requerida"),
  status: yup.boolean(),
  logo: yup.mixed().nullable(),
  // .test(
  //   "fileSize",
  //   "El archivo es demasiado grande",
  //   (value) => !value || (value instanceof File && value.size <= 2097152) // 2MB
  // )
  // .test(
  //   "fileFormat",
  //   "Formato no soportado",
  //   (value) =>
  //     !value ||
  //     (value instanceof File &&
  //       ["image/jpg", "image/jpeg", "image/png"].includes(value.type))
  // ),
  user_id: yup.string().required("El ID del usuario es requerido"),
});
