export interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string;
  github?: string;
}

export const PROJECTS: Project[] = [
  {
    title: "API de Alto Rendimiento",
    description: "Microservicio desarrollado en Go y Redis para gestionar picos de tráfico de 10k RPS.",
    tags: ["Go", "Redis", "Docker"],
    link: "https://demo.proyecto.com",
    github: "https://github.com/tuusuario/proyecto"
  },
  {
    title: "Plataforma SaaS de Análisis",
    description: "Dashboard interactivo con visualización de datos en tiempo real.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    link: "https://saas-demo.io",
  }
];