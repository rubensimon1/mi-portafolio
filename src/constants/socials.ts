export interface SocialLink {
  name: string;
  href: string;
  icon: string; // Usaremos emojis para mantenerlo ligero (KISS), pero puedes usar SVGs luego
  colorClass: string;
}

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "Email (Gmail)",
    href: "mailto:ruben.sireb@gmail.com",
    icon: "✉️",
    colorClass: "hover:border-red-500/50 hover:bg-red-500/10 hover:text-red-400"
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/rsimonrebollo/",
    icon: "💼",
    colorClass: "hover:border-blue-500/50 hover:bg-blue-500/10 hover:text-blue-400"
  },
  {
    name: "GitHub",
    href: "https://github.com/rubensimon1",
    icon: "🐙",
    colorClass: "hover:border-zinc-300/50 hover:bg-zinc-300/10 hover:text-zinc-200"
  }
];