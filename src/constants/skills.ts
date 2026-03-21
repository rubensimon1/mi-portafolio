export interface SkillCategory {
  title: string;
  skills: string[];
}

export const TECH_STACK: SkillCategory[] = [
  {
    title: "Lenguajes & Backend",
    skills: ["TypeScript", "Python", "Go", "Node.js", "C#"],
  },
  {
    title: "Frontend & UI",
    skills: ["React", "Next.js", "Tailwind CSS", "Redux", "Framer Motion"],
  },
  {
    title: "Bases de Datos & Cloud",
    skills: ["PostgreSQL", "MongoDB", "Redis", "AWS", "Docker"],
  },
  {
    title: "Herramientas & Prácticas",
    skills: ["Git", "CI/CD", "Clean Architecture", "TDD", "Agile"],
  },
];