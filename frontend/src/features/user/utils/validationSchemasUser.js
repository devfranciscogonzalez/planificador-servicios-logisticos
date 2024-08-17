import * as yup from "yup";

import {
  EMAIL_VALIDATION,
  NAME_VALIDATION,
  PASSWORD_RULES,
} from "../../../utils/validationSchemasBase";

const PASSWORD_CONFIRMATION_VALIDATION = PASSWORD_RULES.oneOf(
  [yup.ref("password"), null],
  "Las contraseñas no coinciden"
).required("La confirmación de la contraseña es requerida");

const ROLE_VALIDATION = yup.string().required("Este campo es requerido");

export const userValidationSchemaWithPassword = yup.object().shape({
  name: NAME_VALIDATION,
  email: EMAIL_VALIDATION,
  role_id: ROLE_VALIDATION,
  password: PASSWORD_RULES,
  password_confirmation: PASSWORD_CONFIRMATION_VALIDATION,
});

export const userValidationSchemaWithoutPassword = yup.object().shape({
  name: NAME_VALIDATION,
  email: EMAIL_VALIDATION,
  role_id: ROLE_VALIDATION,
  changePassword: yup.boolean(),
  password: yup.string().when("changePassword", ([changePassword], schema) => {
    return changePassword
      ? schema.concat(PASSWORD_RULES).required("La contraseña es requerida")
      : schema.notRequired();
  }),
  password_confirmation: yup
    .string()
    .when("changePassword", ([changePassword], schema) => {
      return changePassword
        ? schema
            .concat(PASSWORD_RULES)
            .oneOf([yup.ref("password"), null], "Las contraseñas no coinciden")
            .required("La confirmación de la contraseña es requerida")
        : schema.notRequired();
    }),
});
