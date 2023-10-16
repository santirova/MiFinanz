"use client";

import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
    reset,
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onSubmit",
  });

  const onSubmit = (data) => {
    if (isValid) {
      alert(JSON.stringify(data));
      reset();
    }
  };

  return (
    <div className="  h-screen  bg-black flex flex-col justify-center items-center">
      <div className=" w-80 text-center ">
        <img
          src="/logo_app.png"
          alt="Logo de la aplicación"
          className="w-16 mx-auto"
        />
        <p className="text-white text-2xl mb-4">MiFinanz</p>
        <h2 className="text-1xl font-bold mb-4 uppercase text-white text-center ">
          Bienvenido otra vez
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <input
              placeholder="Email*"
              type="text"
              className="w-full border rounded p-1 bg-[#44444C] text-white"
              {...register("email", { required: "*Este campo es obligatorio" })}
            />
            <div className="text-xs text-red-500 mt-1">
              <ErrorMessage errors={errors} name="email" as="span" />
            </div>
          </div>
          <div className="mb-4">
            <input
              placeholder="Password*"
              type="password"
              className="w-full border rounded p-1 bg-[#44444C] text-white"
              {...register("password", {
                required: "*Este campo es obligatorio",
              })}
            />
            <div className="text-xs text-red-500 mt-1">
              <ErrorMessage errors={errors} name="password" as="span" />
            </div>
          </div>
          <button className="text-black font-bold bg-blue-600 p-1 w-full text-center hover:bg-blue-400">
            Login
          </button>
          <div className="mt-3 text-sm flex justify-around">
            <label className="text-white">¿No tienes cuenta?</label>
            <span className="text-yellow-200">
              <a href="#">Inscríbete</a>
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

export default Login;
