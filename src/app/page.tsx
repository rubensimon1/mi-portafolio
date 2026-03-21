import { PROJECTS } from '@/constants/projects';
import { ProjectCard } from '@/components/ProjectCard';
import { TechStack } from '@/components/TechStack';
import { ContactModal } from '@/components/ContactModal'; 
import { ContactForm } from '@/components/ContactForm'; 

export default function PortfolioPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-zinc-200 selection:bg-blue-500/30">
      
      {/* --- EFECTOS DE FONDO AMBIENTAL --- */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full bg-blue-600 opacity-15 blur-[128px]" aria-hidden="true" />
      <div className="pointer-events-none absolute top-[60vh] -right-40 h-[600px] w-[600px] rounded-full bg-cyan-500 opacity-10 blur-[128px]" aria-hidden="true" />

      {/* --- SECCIÓN HERO --- */}
      <section className="relative z-10 mx-auto max-w-5xl px-6 pt-32 pb-24 md:pt-40">
        <div className="inline-flex items-center rounded-full border border-blue-500/20 bg-blue-950/20 px-3 py-1 text-xs font-semibold text-blue-400">
          En Prácticas Profesionales @ Gestorum
        </div>
        
        <h1 className="mt-6 text-6xl font-extrabold tracking-tighter text-white sm:text-8xl">
          Hola, soy <span className="bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-transparent">Rubén</span>
        </h1>
        
        <p className="mt-8 max-w-3xl text-xl text-zinc-400 leading-relaxed font-light">
          Técnico Superior en <span className="text-white font-medium">DAM</span> con una base sólida de 4 años en el sector informático (SMR). 
          Especializado en el desarrollo de aplicaciones y gestión de sistemas, forjado en la metodología de alto rendimiento de <span className="text-white font-medium">42 Madrid</span>. 
          Actualmente aportando valor en las prácticas de <span className="text-blue-400 font-medium">Gestorum</span>.
        </p>
        
        <div className="mt-12 flex flex-wrap gap-5">
          <a 
            href="/cv.pdf"
            download="CV_Ruben_Simon.pdf"
            className="group rounded-xl bg-white px-6 py-3 text-base font-bold text-black transition-all hover:bg-zinc-200 hover:shadow-lg hover:shadow-white/10"
          >
            Descargar Currículum
          </a>
          
          <ContactModal />
        </div>
      </section>

      {/* --- STACK TECNOLÓGICO --- */}
      <TechStack />

      {/* --- SECCIÓN PROYECTOS --- */}
      <section id="proyectos" className="relative z-10 mx-auto max-w-5xl px-6 py-20">
        <div className="mb-12 flex items-center gap-4">
          <div className="h-px flex-1 bg-zinc-800" />
          <h2 className="text-3xl font-extrabold tracking-tight text-white md:text-4xl">
            Proyectos Destacados
          </h2>
          <div className="h-px flex-1 bg-zinc-800" />
        </div>
        
        <div className="grid gap-8 md:grid-cols-2">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>

      {/* --- SECCIÓN DE CONTACTO (Formulario) --- */}
      <ContactForm />

      {/* --- FOOTER --- */}
      <footer className="relative z-10 border-t border-zinc-800 bg-black/50 py-12 text-center">
        <p className="text-sm text-zinc-500 font-light">
          © {new Date().getFullYear()} • Rubén Simón • Desarrollado con Next.js y rigor técnico.
        </p>
      </footer>
    </main>
  );
}