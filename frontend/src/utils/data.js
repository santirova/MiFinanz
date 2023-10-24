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

export const priceCards = [
  {
    id: 1,
    name: "FREE",
    price: "0",
    feautures: [
      "Panel",
      "Carga de Ingresos y gastos",
      "Manejo de cuentas",
      "1GB espacio en la nube",
      "Soporte",
    ],
  },
  {
    id: 2,
    name: "Standard",
    price: "3",
    feautures: [
      "Paquete Free",
      "Declaración de impuestos",
      "Manejo de metas",
      "4GB espacio en la nube",
      "Soporte",
    ],
  },
  {
    id: 3,
    name: "Full",
    price: "9",
    feautures: [
      "Paquete Standard",
      "Multiples usuarios",
      "Conexión directa con tus bancos",
      "Espacio en la nube ilimitado",
      "Soporte",
    ],
  },
];
