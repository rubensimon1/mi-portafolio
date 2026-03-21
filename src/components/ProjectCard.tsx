import React from 'react';
import { Project } from '@/constants/projects';

/**
 * Componente ProjectCard: Diseño premium con efecto de iluminación lateral (spotlight)
 * y micro-interacciones en hover.
 */
export const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="group relative rounded-2xl border border-zinc-800 bg-zinc-900/80 p-6 shadow-2xl transition-all duration-300 ease-out hover:-translate-y-2 hover:border-blue-500/50 hover:bg-zinc-900/20 hover:shadow-blue-500/10">
      
      {/* Efecto de luz difusa de fondo (exclusivo para hover) */}
      <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-600 opacity-0 blur-sm transition duration-500 group-hover:opacity-20" />

      {/* Contenido de la tarjeta */}
      <div className="relative z-10 flex h-full flex-col justify-between">
        <div>
          <h3 className="text-2xl font-bold tracking-tight text-white group-hover:text-blue-400 transition-colors">
            {project.title}
          </h3>
          <p className="mt-3 text-base text-zinc-400 leading-relaxed font-light">
            {project.description}
          </p>
          <div className="mt-5 flex flex-wrap gap-2.5">
            {project.tags.map((tag) => (
              <span 
                key={tag} 
                className="rounded-full bg-zinc-800 px-3 py-1 text-xs font-semibold text-zinc-300 border border-zinc-700/50 transition-colors group-hover:border-blue-500/20 group-hover:bg-blue-950/20 group-hover:text-blue-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Enlaces con diseño de botones fantasma */}
        <div className="mt-8 flex gap-4 pt-4 border-t border-zinc-800/50">
          {project.github && (
            <a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
            >
              GitHub Código
            </a>
          )}
          <a 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="group/link ml-auto inline-flex items-center gap-1.5 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors"
          >
            Visitar Demo 
            <span className="transition-transform group-hover/link:translate-x-1">→</span>
          </a>
        </div>
      </div>
    </div>
  );
};