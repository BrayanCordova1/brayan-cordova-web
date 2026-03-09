import HyperGamerX from "@assets/imgs/projects/hypergamerx.webp";
import ElRetoWiki from "@assets/imgs/projects/elreto-wiki.webp";
import LumiaCreatorsWeb from "@assets/imgs/projects/lumia-creators-web.webp";
import LumiaCreators from "@assets/imgs/projects/lumia-creators.webp"
import Eco from "@assets/imgs/projects/eco.webp"
import { tecnologies } from "./tecnologies";

export const projects = [
  {
    title: "ECO - App de Reportes Ciudadanos",
    description: "Aplicación móvil interactiva para la gestión y trazabilidad en tiempo real de incidencias de servicios públicos (agua y luz). Desarrollé un sistema completo que incluye geolocalización (GIS), autenticación de usuarios, notificaciones, sistema de calificaciones e integración directa con la API de RENIEC para validación de identidad",
    image: Eco,
    link: "https://github.com/BrayanCordova1/eco-project",
    tecnologies: [
      tecnologies.ReactNative,
      tecnologies.Typescript,
      tecnologies.Tailwindcss,
      tecnologies.Git,
      tecnologies.Supabase,
      tecnologies.Expo,
      tecnologies.Figma
    ]
  },
  {
    title: "Lumia Creators Web - Web Corporativa",
    description: "Diseño y desarrollo de la web corporativa del estudio. Implementé una interfaz de alto rendimiento con un reproductor de video customizado y carruseles fluidos. La arquitectura incluye un sistema de contacto seguro procesado con Resend y validación anti-bots mediante Cloudflare Turnstile",
    image: LumiaCreatorsWeb,
    link: "https://www.lumiacreators.com/",
    tecnologies: [
      tecnologies.Astro,
      tecnologies.Typescript,
      tecnologies.Tailwindcss,
      tecnologies.Git,
      tecnologies.Vercel,
      tecnologies.Cloudflare,
      tecnologies.Resend,
      tecnologies.Mdx
    ]
  },
  {
    title: "Lumia Creators - Eventos y Mods en Java",
    description: "Diseño y programación de mecánicas de juego exclusivas para eventos interactivos y miniseries. Desarrollo e implementación de lógica compleja a través de Datapacks y modificaciones (mods) en Java, optimizando la experiencia de usuario y el rendimiento interno del servidor.",
    image: LumiaCreators,
    link: "https://www.lumiacreators.com/es/proyectos/elreto",
    tecnologies: [
      tecnologies.Java,
      tecnologies.Datapack,
      tecnologies.Git,
      tecnologies.Json,
      tecnologies.FabricMc
    ]
  },
  {
    title: "El Reto Wiki (Gestión de Datos y UI compleja)",
    description: "Plataforma web dinámica desarrollada para una miniserie, diseñada para gestionar un alto volumen de información. Creé un sistema interconectado para visualizar crafteos, tiendas y estadísticas de ítems en tiempo real, junto con un módulo de retos diarios y un historial de cambios (changelog) para la comunidad",
    image: ElRetoWiki,
    link: "https://elreto-wiki.vercel.app/",
    tecnologies: [
      tecnologies.Astro,
      tecnologies.Typescript,
      tecnologies.Tailwindcss,
      tecnologies.Git,
      tecnologies.Vercel,
      tecnologies.React
    ]
  },
  {
    title: "HyperGamerX - Blog de videojuegos",
    description: "Desarrollé una plataforma de artículos de videojuegos con un enfoque en diseño y experiencia de usuario utilizando Figma. Se optimizó la página web, además, de centrarse en el SEO y la integración de Google Analytics",
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
      tecnologies.Mdx
    ]
  }
]