"use client";

import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import Link from "next/link";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { signup } from "@/redux/features/useInfoSlice";

const SignUp = () => {
  const [errorMessage, setErrorMessage] = useState("");

  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
    reset,
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
    mode: "onSubmit",
  });

  const submit = async (data) => {
    try {
      // console.log(data);
      await dispatch(signup(data));
      reset({
        name: "",
        email: "",
        password: "",
      });
      setErrorMessage("");
      window.location.replace("/home");
    } catch (error) {
      setErrorMessage("Error al registrarse");
      console.log(error);
    }
  };

  const regexEmail =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\\.,;:\s@"]+\.)+[^<>()[\]\\.,;:\s@"]{2,})$/i;

  const regextPassword =
    /^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[~`!@#$%^&*()--+={}|\\:;"'<>,.?/_₹])[a-zA-Z0-9~`!@#$%^&*()--+={}|\\:;"'<>,.?/_₹]{8,}$/;

  return (
    <div className="  min-h-screen  bg-black flex flex-col justify-center items-center">
      <div className=" w-80 text-center ">
        <img
          src="/logo_app.png"
          alt="Logo de la aplicación"
          className="w-16 mx-auto"
        />
        <p className="text-white text-2xl mb-4">MiFinanz</p>
        <h2 className="text-1xl font-bold mb-4 uppercase text-white text-center ">
          Bienvenido
        </h2>
        {errorMessage && (
          <div className="text-red-500 text-center mt-2">{errorMessage}</div>
        )}
        <form onSubmit={handleSubmit(submit)}>
          <div className="mb-4">
            <input
              placeholder="Name*"
              type="text"
              className={`w-full border rounded p-1 bg-[#44444C] text-white ${
                errors.name ? "border-red-500" : ""
              }`}
              {...register("name", {
                required: "*Este campo es obligatorio",
              })}
            />
            <div className="text-xs text-red-500 mt-1">
              <ErrorMessage errors={errors} name="name" as="span" />
            </div>
          </div>
          <div className="mb-4">
            <input
              placeholder="Email*"
              type="text"
              className={`w-full border rounded p-1 bg-[#44444C] text-white ${
                errors.email ? "border-red-500" : ""
              }`}
              {...register("email", {
                required: "*Este campo es obligatorio",
                pattern: {
                  value: regexEmail,
                  message: "Ingrese un correo electrónico valido",
                },
              })}
            />
            <div className="text-xs text-red-500 mt-1">
              <ErrorMessage errors={errors} name="email" as="span" />
            </div>
          </div>
          <div className="mb-4">
            <input
              placeholder="Password*"
              type="password"
              className={`w-full border rounded p-1 bg-[#44444C] text-white ${
                errors.password ? "border-red-500" : ""
              }`}
              {...register("password", {
                required: "*Este campo es obligatorio",
                pattern: {
                  value: regextPassword,
                  message:
                    "La contraseña debe incluir al menos una letra mayúscula y minuscula, un valor numérico y un carácter especial",
                },
                minLength: {
                  value: 8,
                  message: "La longitud mínima requerida es de 8 caracteres",
                },
              })}
            />
            <div className="text-xs text-red-500 mt-1">
              <ErrorMessage errors={errors} name="password" as="span" />
            </div>
          </div>

          <button className="text-black font-bold bg-blue-600 p-1 w-full text-center hover:bg-blue-400">
            Register
          </button>

          <div className="mt-3 text-sm flex justify-around">
            <label className="text-white">¿Ya tienes cuenta?</label>
            <span className="text-yellow-200">
              <Link href="/login">Inicia Sesión</Link>
            </span>
          </div>
          <div className="flex items-center">
            <div className="flex-grow h-0.5 bg-white"></div>
            <span className="px-2 text-white">o</span>
            <div className="flex-grow h-0.5 bg-white"></div>
          </div>

          <a href="#" className="   inline-block ">
            <img
              src="/g_button.png"
              alt="Iniciar sesión con Google"
              className="w-full h-auto hover:transform hover:scale-105"
            />
          </a>
          <a href="#" className="   inline-block ">
            <img
              src="/fb_button.png"
              alt="Iniciar sesión con Facebook"
              className="w-full h-auto hover:transform hover:scale-105"
            />
          </a>
          <a href="#" className="   inline-block ">
            <img
              src="/tw_button.png"
              alt="Iniciar sesión con Twitter"
              className="w-full h-auto hover:transform hover:scale-105"
            />
          </a>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
