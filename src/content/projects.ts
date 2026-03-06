import HyperGamerX from "@assets/imgs/projects/hypergamerx.webp";
import Ruleta from "@assets/imgs/projects/ruleta-nextjs.webp"
import Calculadora from "@assets/imgs/projects/calculator.webp"
import { tecnologies } from "./tecnologies";

export const projects = [
  {
    title: "HyperGamerX - Blog de videojuegos",
    description: "Desarrollé una plataforma de artículos de videojuegos con un enfoque en diseño y experiencia de usuario utilizando Figma. Se optimizo la pagina web, además, de centrarse en el SEO y la integración de Google Analitycs",
    image: HyperGamerX,
    link: "https://www.hypergamerx.com/",
    tecnologies: [
      tecnologies.Astro,
      tecnologies.Preact,
      tecnologies.Typescript,
      tecnologies.Javascript,
      tecnologies.Tailwindcss,
      tecnologies.Git,
      tecnologies.Figma,
      tecnologies.Vercel,
    ]
  },
  {
    title: "Ruleta Nextjs - TailwindCS",
    description: "Desarrollé una ruleta interactiva con React que permite agregar y eliminar opciones. Los datos se guardan localmente y se mantiene una experiencia visual atractiva con react-custom-roulette, react-icons y efectos con react-particles.",
    image: Ruleta,
    link: "https://ruleta-project.vercel.app/",
    tecnologies: [
      tecnologies.Nextjs,
      tecnologies.Javascript,
      tecnologies.Git,
      tecnologies.Vercel
    ]
  },
  {
    title: "Calculadora",
    description: "La calculadora que desarrollé en ReactjS es una herramienta versátil y funcional que permite realizar operaciones matemáticas de forma fácil y rápida. Su diseño intuitivo y elegante la convierte en la opción perfecta para quienes necesitan realizar cálculos en línea.",
    image: Calculadora,
    link: "https://calculator-react-js-tailwind-css.vercel.app/",
    tecnologies: [
      tecnologies.React,
      tecnologies.Tailwindcss,
      tecnologies.Git,
      tecnologies.Vercel
    ]
  }
]