"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { axiosMiFinanz } from "@/utils/configAxios";

const PrivateRoute = ({ children }) => {
  const { push } = useRouter();
  const { token } = JSON.parse(localStorage.getItem("userInfo")) || {};
  const [content, setContent] = useState(null);

  useEffect(() => {
    const validateToken = async () => {
      if (!token) {
        push("/login");
        return;
      } else {
        setContent(children);
      }

      /*  try {
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
          push("/login");
        } else {
          console.log("valid token");
          setContent(children);
        }
      } catch (error) {
        console.error("Error al validar el token:", error);
        push("/login");
      } */
    };

    validateToken();
  }, [token]);

  return content ? content : <h1>Loading</h1>;
};

export default PrivateRoute;
