import React from 'react';
import { TECH_STACK } from '@/constants/skills';

export const TechStack: React.FC = () => {
  return (
    <section className="relative z-10 mx-auto max-w-5xl px-6 py-16">
      {/* Separador Visual */}
      <div className="mb-10 flex items-center gap-4">
        <div className="h-px flex-1 bg-zinc-800" />
        <h2 className="text-2xl font-bold tracking-tight text-white md:text-3xl">
          Stack Tecnológico
        </h2>
        <div className="h-px flex-1 bg-zinc-800" />
      </div>

      {/* Grid de Categorías */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {TECH_STACK.map((category) => (
          <div 
            key={category.title} 
            className="rounded-2xl border border-zinc-800/50 bg-zinc-900/30 p-6 backdrop-blur-sm"
          >
            <h3 className="mb-4 text-sm font-semibold tracking-wider text-blue-400 uppercase">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-lg bg-zinc-800/50 px-3 py-1.5 text-sm font-medium text-zinc-300 transition-colors hover:bg-blue-500/20 hover:text-blue-300 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};