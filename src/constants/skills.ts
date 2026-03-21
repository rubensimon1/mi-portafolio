export interface SkillCategory {
  title: string;
  skills: string[];
}

export const TECH_STACK: SkillCategory[] = [
  {
    title: "Mobile & Frontend Development",
    // Resaltamos tu capacidad de crear interfaces modernas
    skills: ["Kotlin", "Jetpack Compose", "Android Studio", "React", "Next.js", "Tailwind CSS", "JavaScript"]
  },
  {
    title: "Backend & Core Engineering",
    // Aquí demostramos robustez en lógica de negocio
    skills: ["Java", "Spring Boot", "Hibernate", "Node.js", "Python", "PHP", "API REST"]
  },
  {
    title: "Systems & Low-Level Programming",
    // Este es tu gran diferencial (42 + SMR). C y Shell van primero.
    skills: ["C", "Shell Scripting", "Linux/Unix", "SQL / MySQL", "Docker", "VirtualBox", "VMware"]
  },
  {
    title: "DevOps, Tools & Methodologies",
    // GitLab y GitHub juntos demuestran que conoces distintos flujos de trabajo
    skills: ["Git", "GitHub / GitLab", "Supabase", "Postman", "Peer-to-Peer (42)", "Agile / Scrum"]
  }
];