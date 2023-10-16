'use client'

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
      <figure className=" w-80 text-center ">
        <img
          src="/logo_app.png"
          alt="Logo de la aplicación"
          class="w-16 mx-auto"
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
          <div class="flex items-center">
            <div class="flex-grow h-0.5 bg-white"></div>
            <span class="px-2 text-white">o</span>
            <div class="flex-grow h-0.5 bg-white"></div>
          </div>

          <a href="#" class="   inline-block ">
            <img
              src="/g_button.png"
              alt="Iniciar sesión con Google"
              class="w-full h-auto hover:transform hover:scale-105"
            />
          </a>
          <a href="#" class="   inline-block ">
            <img
              src="/fb_button.png"
              alt="Iniciar sesión con Facebook"
              class="w-full h-auto hover:transform hover:scale-105"
            />
          </a>
          <a href="#" class="   inline-block ">
            <img
              src="/tw_button.png"
              alt="Iniciar sesión con Twitter"
              class="w-full h-auto hover:transform hover:scale-105"
            />
          </a>
        </form>
      </figure>
    </div>
  );
};

export default Login;
