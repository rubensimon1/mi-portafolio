export const es = {
  hero: {
    badge: "Último trabajo @ Gestorum",
    greeting: "Hola, soy ",
    name: "Rubén",
    description: (
      <>
        Técnico Superior en <span className="text-white font-medium">DAM</span> con una base sólida de 4 años en el sector informático (SMR). Especializado en el desarrollo de aplicaciones y gestión de sistemas, forjado en la metodología de alto rendimiento de <span className="text-white font-medium">42 Madrid</span>. Recientemente aportando valor como desarrollador en <span className="text-blue-400 font-medium">Gestorum</span>.
      </>
    ),
    cvButton: "Descargar Currículum",
    cvLink: "/cv.pdf",
    cvName: "CV_Ruben_Simon.pdf"
  },
  nav: {
    about: "Quién soy",
    stack: "Stack",
    featured: "Destacados",
    other: "Otros",
    courses: "Cursos",
    contact: "Contacto"
  },
  techStack: {
    title: "Stack Tecnológico",
    categories: [
      {
        title: "Mobile & Frontend Development",
        skills: ["Kotlin", "Jetpack Compose", "Android Studio", "React", "Next.js", "Tailwind CSS", "JavaScript"]
      },
      {
        title: "Backend & Core Engineering",
        skills: ["Java", "Spring Boot", "Hibernate", "Node.js", "Python", "PHP", "API REST"]
      },
      {
        title: "Systems & Low-Level Programming",
        skills: ["C", "Shell Scripting", "Linux/Unix", "SQL / MySQL", "Docker", "VirtualBox", "VMware"]
      },
      {
        title: "DevOps, Tools & Methodologies",
        skills: ["Git", "GitHub / GitLab", "Supabase", "Postman", "Peer-to-Peer (42)", "Agile / Scrum"]
      }
    ]
  },
  projects: {
    featuredTitle: "Proyectos Destacados",
    otherTitle: "Otros Proyectos",
    coursesTitle: "Cursos",
    visitRepo: "Visitar Repositorio",
    visitWeb: "Visitar Web",
    featured: [
      {
        title: "MH Mobiliario de Hogar",
        description: "Web corporativa orientada a conversión desplegada en producción. Optimización SEO y rendimiento extremo (SSG). Integración de Google Analytics 4 y arquitectura Privacy by Design (RGPD) para clientes reales.",
        tags: ["Astro", "CSS", "Web3Forms", "SEO", "GA4"],
        link: "https://www.mhintegral.com/",
        buttonText: "Visitar Web"
      },
      {
        title: "EcoLens: KMP y Machine Learning",
        description: "App móvil multiplataforma (iOS/Android). Integración de modelos de IA en dispositivo (ML Kit) y sincronización asíncrona robusta con Supabase. Clean Architecture aplicada en Kotlin Multiplatform para máxima reusabilidad.",
        tags: ["Kotlin Multiplatform", "Compose", "IA/ML", "Supabase"],
        link: "https://github.com/rubensimon1/EcoLens-KMP",
        github: "https://github.com/rubensimon1/EcoLens-KMP",
        buttonText: "Visitar Repositorio"
      },
      {
        title: "Vintage Lab | Marketplace Pro",
        description: "Plataforma Next-Gen para resell de streetwear y artículos de lujo. Altísimo rendimiento con Next.js 16 (App Router), backend en Supabase, pagos mediante Stripe y utilidades de facturación.",
        tags: ["Next.js 16", "Supabase", "Stripe", "TailwindCSS"],
        link: "https://github.com/rubensimon1/vintage-lab",
        github: "https://github.com/rubensimon1/vintage-lab",
        buttonText: "Visitar Repositorio"
      },
      {
        title: "Dev Academy (LMS)",
        description: "Plataforma moderna de aprendizaje con arquitectura de servidor. Incluye base de datos PostgreSQL (Neon), NextAuth para autenticación robusta y un foro de comunidad integrado.",
        tags: ["Next.js 16", "Prisma", "PostgreSQL", "NextAuth"],
        link: "https://github.com/rubensimon1/dev-academy",
        github: "https://github.com/rubensimon1/dev-academy",
        buttonText: "Visitar Repositorio"
      }
    ],
    other: [
      {
        title: "ERP LITE FULLSTACK",
        description: "Arquitectura escalable para la planificación de recursos empresariales. Gestión eficiente de inventario y flujos de trabajo con backend robusto en Node.js e integración SQL para el procesamiento seguro de datos.",
        tags: ["React", "Node.js", "SQL", "FullStack"],
        link: "https://github.com/rubensimon1/erp-lite-fullstack",
        github: "https://github.com/rubensimon1/erp-lite-fullstack"
      },
      {
        title: "WANDERLUXE-AI",
        description: "Integración de LLMs (Inteligencia Artificial) para asistencia inteligente. Implementación de pipelines de procesamiento en Python e interfaces reactivas modernas para la interacción fluida del usuario.",
        tags: ["Python", "IA", "Frontend", "Innovation"],
        link: "https://github.com/rubensimon1/wanderluxe-ai",
        github: "https://github.com/rubensimon1/wanderluxe-ai"
      }
    ],
    courses: [
      {
        title: "Piscine 42 Madrid",
        description: "Entrenamiento de alto rendimiento en C y Shell. Desarrollo de algoritmos bajo estricta gestión de memoria manual y lógica pura en sistemas Unix. Resolución de problemas complejos sin librerías externas.",
        tags: ["C", "Shell", "Unix", "Git"]
      }
    ]
  },
  contact: {
    modalButton: "Contáctame",
    modalTitle: "Contáctame",
    modalDesc: "Estoy disponible para nuevos proyectos y oportunidades. Elige la plataforma que prefieras:",
    formTitle: "Contáctame",
    formDesc: "Rellena el formulario y me pondré en contacto contigo lo antes posible.",
    labels: {
      name: "Nombre",
      lastName: "Apellido",
      email: "Correo Electrónico",
      phone: "Número de teléfono",
      message: "Mensaje"
    },
    placeholders: {
      name: "Ej: Alejandro",
      lastName: "Ej: López",
      email: "tu@email.com",
      phone: "+34 600 000 000",
      message: "¿En qué puedo ayudarte?"
    },
    submit: "Enviar Mensaje",
    sending: "Enviando...",
    success: "¡Mensaje enviado con éxito! Rubén te responderá pronto.",
    error: "Vaya, algo ha fallado. Por favor, inténtalo de nuevo."
  },
  footer: {
    text: "• Rubén Simón • Desarrollado con Next.js y rigor técnico."
  }
};
