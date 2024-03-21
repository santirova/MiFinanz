import "./globals.css";
import { Poppins } from "next/font/google";
import { ProviderWrapper } from "@/redux/providers";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Helvetica", "sans-serif"],
});

export const metadata = {
  title: "MiFinanz",
  description: "Plataforma para gestionar tus finanzas personales",
};

export default function RootLayout({ children }) {
  const { darkMode } =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("darkMode")) || {}
      : {};

  return (
    <html lang="es" className={` ${darkMode == "light" ? "" : "dark"}`}>
      <body className={poppins.className}>
        <ProviderWrapper>{children}</ProviderWrapper>
      </body>
    </html>
  );
}
