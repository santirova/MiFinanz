import blogCategory from "@/assets/landing/blogCategory.png";
import blogFee from "@/assets/landing/blogFee.png";
import blogGoal from "@/assets/landing/blogGoal.png";

export const navLinks = [
  {
    name: "INICIO",
    hash: "#inicio",
  },
  {
    name: "BLOG",
    hash: "#blog",
  },
  {
    name: "PLUS",
    hash: "#plus",
  },
  {
    name: "NOSOTROS",
    hash: "#nosotros",
  },
  {
    name: "SOPORTE",
    hash: "#soporte",
  },
];
export const blogEntries = [
  {
    id: 1,
    image: blogGoal,
    authorAndDate: "Jhon Wick • 20 Jan 2023",
    title: "Cómo llegar a tus metas",
    desciption:
      "¡Es posible! El primer paso es establecer objetivos claros y realistas. Luego, traza un plan detallado y divide tus metas en pasos manejables...",
    tags: ["#Métodos", "#Aplicación", "#Metas"],
  },
  {
    id: 2,
    image: blogCategory,
    authorAndDate: "Martin Gomez • 23 Nov 2023",
    title: "Registrar categorias",
    desciption:
      "Las categorías de gastos son una herramienta clave en la gestión financiera personal. Estas categ...",
    tags: ["#Métodos", "#Aplicación", "#Metas"],
  },
  {
    id: 3,
    image: blogFee,
    authorAndDate: "Lana Swart • 18 Oct 2023",
    title: "En cuotas",
    desciption:
      "Pagar en cuotas puede ser beneficioso en ciertas situaciones financieras. Aquí hay algunas circunstancias en las que puede ser útil...",
    tags: ["#Lista", "#Tarjetas"],
  },
];
