export interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;   // He añadido el "?" para que sea opcional
  github?: string; // Ya era opcional
}

export const PROJECTS: Project[] = [
  {
    title: "EcoLens: Reciclaje Inteligente",
    description: "App Android que utiliza IA (MobileNetV2) para identificar residuos y asignar su contenedor correcto. Incluye sistema de gamificación con mascota virtual y ranking global sincronizado en tiempo real.",
    tags: ["Kotlin", "Jetpack Compose", "IA/ML", "Supabase"],
    link: "https://github.com/rubensimon1/EcoLens",
    github: "https://github.com/rubensimon1/EcoLens"
  },
  {
    title: "Piscine 42 Madrid",
    description: "Desarrollo de algoritmos y herramientas de sistema en C y Shell, trabajando en entornos Unix bajo estricta gestión de memoria y lógica pura.",
    tags: ["C", "Shell", "Unix", "Git"],
    // Al no poner 'link' ni 'github', no aparecerá ningún botón en esta tarjeta
  },
  {
    title: "ERP LITE FULLSTACK",
    description: "Sistema de planificación de recursos empresariales (ERP) simplificado. Diseñado para gestionar procesos internos, inventarios y flujos de trabajo de manera eficiente e intuitiva.",
    tags: ["React", "Node.js", "SQL", "FullStack"],
    link: "https://github.com/rubensimon1/erp-lite-fullstack",
    github: "https://github.com/rubensimon1/erp-lite-fullstack"
  },
  {
    title: "WANDERLUXE-AI",
    description: "Aplicación innovadora potenciada por Inteligencia Artificial para la gestión y asistencia inteligente, explorando la integración de modelos de lenguaje en interfaces modernas.",
    tags: ["Python", "IA", "Frontend", "Innovation"],
    link: "https://github.com/rubensimon1/wanderluxe-ai",
    github: "https://github.com/rubensimon1/wanderluxe-ai"
  }
];