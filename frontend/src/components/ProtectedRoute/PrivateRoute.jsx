"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { axiosMiFinanz } from "@/utils/configAxios";

const PrivateRoute = ({ children }) => {
  const { push } = useRouter();
  const { token } = JSON.parse(localStorage.getItem("userInfo"));
  console.log(token);

  useEffect(() => {
    const validateToken = async () => {
      if (!token) {
        console.log("No hay token");
        push("/login");
        return;
      }
      try {
        console.log("dentro del try");
        // Realiza una llamada a la ruta del servidor para validar el token
        const response = await axiosMiFinanz("/user/validate-token", {
          method: "GET",
          headers: {
            "x-auth-token": `${token}`, // Agrega el token al encabezado de autorización
          },
        });
        if (response.status !== 200) {
          // El token no es válido, realiza la acción de cerrar sesión
          console.log("invalid token");
          push("/login"); // Redirige a la página de inicio de sesión si el token no es válido
        } else {
          console.log("valid token");
        }
      } catch (error) {
        console.error("Error al validar el token:", error);
        // Maneja el error de validación aquí
        push("/login"); // Redirige a la página de inicio de sesión en caso de error
      }
    };

    // Llama a la función para validar el token
    validateToken();
  }, []);

  return <>{children}</>;
};

export default PrivateRoute;
