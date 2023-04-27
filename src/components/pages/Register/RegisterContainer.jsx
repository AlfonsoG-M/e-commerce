import { useState } from "react";
import { useFormik } from "formik";
import Register from "./Register";

import * as Yup from "yup";

const RegisterContainer = () => {
const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const { values, handleSubmit, handleChange, errors } = useFormik({
    initialValues: {
      name: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: (data) => {
      console.log(data);
      console.log("se envio el formulario");
    },
    validationSchema: Yup.object().shape({
      name: Yup.string()
        .required("Este es campo es obligatorio")
        .min(3, " el nombre es muy corto"),
      lastName: Yup.string().required("Este es campo es obligatorio"),
      email: Yup.string()
        .email("El texto no corresponde a un email")
        .required("Este es campo es obligatorio"),
      password: Yup.string()
        .required("Este es campo es obligatorio")
        .min(6, "la contraseña es muy corta")
        .max(15, "la contraseña es muy larga")
        .matches(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,15}$/, {
          message:
            "La contraseña debe tener al menos una minuscula, una mayuscula, un numero y un simbolo",
        }),
      confirmPassword: Yup.string()
        .required("Este es campo es obligatorio")
        .oneOf([Yup.ref("password"), null], "Las contraseñas no coinciden"),
    }),
    validateOnChange: false,
  });

  return (
    <Register
    showPassword={showPassword}
    handleClickShowPassword ={handleClickShowPassword }
    handleMouseDownPassword ={handleMouseDownPassword }
      values={values}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      errors={errors}
    />
  );
};

export default RegisterContainer;
