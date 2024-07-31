import * as yup from "yup";

export const EMAIL_VALIDATION = yup
  .string()
  .email("Correo electrónico inválido")
  .matches(/\.com$|\.cl$/, "El correo electrónico debe terminar en .com o .cl")
  .max(100, "El correo electrónico no debe exceder los 100 caracteres")
  .required("Este campo es requerido");

export const PASSWORD_RULES = yup
  .string()
  .min(8, "La contraseña debe tener al menos 8 caracteres")
  .max(20, "La contraseña no debe exceder los 20 caracteres")
  .matches(/[a-z]/, "La contraseña debe contener al menos una letra minúscula")
  .matches(/[A-Z]/, "La contraseña debe contener al menos una letra mayúscula")
  .matches(/[0-9]/, "La contraseña debe contener al menos un número")
  .matches(
    /[@$!%*#?&]/,
    "La contraseña debe contener al menos un caracter especial"
  );

export const NAME_VALIDATION = yup
  .string()
  .required("Este campo es requerido")
  .min(3, "El nombre debe tener al menos 3 caracteres")
  .max(50, "El nombre no debe exceder los 50 caracteres");

export const DESCRIPTION_VALIDATION = yup
  .string()
  .required("Este campo es requerido")
  .min(9, "La descripción debe tener al menos 10 caracteres")
  .max(200, "La descripción no debe exceder los 200 caracteres");
