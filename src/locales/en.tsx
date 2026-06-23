export const en = {
  hero: {
    badge: "Last position @ Gestorum",
    greeting: "Hi, I'm ",
    name: "Rubén",
    description: (
      <>
        <span className="text-white font-medium">DAM</span> Graduate with a solid 4-year foundation in IT (SMR). Specialized in application development and systems management, forged in the high-performance methodology of <span className="text-white font-medium">42 Madrid</span>. Recently adding value as a developer at <span className="text-blue-400 font-medium">Gestorum</span>.
      </>
    ),
    cvButton: "Download Resume",
    cvLink: "/cv.pdf",
    cvName: "CV_Ruben_Simon.pdf"
  },
  nav: {
    about: "About Me",
    stack: "Stack",
    featured: "Featured",
    other: "Other",
    courses: "Courses",
    contact: "Contact"
  },
  techStack: {
    title: "Tech Stack",
    categories: [
      {
        title: "Mobile & Frontend Development",
        skills: ["Kotlin", "Jetpack Compose", "Android Studio", "React", "Next.js", "Tailwind CSS", "JavaScript"]
      },
      {
        title: "Backend & Core Engineering",
        skills: ["Java", "Spring Boot", "Hibernate", "Node.js", "Python", "PHP", "REST API"]
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
    featuredTitle: "Featured Projects",
    otherTitle: "Other Projects",
    coursesTitle: "Courses",
    visitRepo: "View Repository",
    visitWeb: "Visit Website",
    featured: [
      {
        title: "MH Mobiliario de Hogar",
        description: "Corporate website optimized for conversion and deployed in production. Extreme SEO and performance optimization (SSG). Integration of Google Analytics 4 and Privacy by Design (GDPR) architecture for real clients.",
        tags: ["Astro", "CSS", "Web3Forms", "SEO", "GA4"],
        link: "https://www.mhintegral.com/",
        buttonText: "Visit Website"
      },
      {
        title: "EcoLens: KMP & Machine Learning",
        description: "Cross-platform mobile app (iOS/Android). Integration of on-device AI models (ML Kit) and robust asynchronous synchronization with Supabase. Clean Architecture applied in Kotlin Multiplatform for maximum reusability.",
        tags: ["Kotlin Multiplatform", "Compose", "AI/ML", "Supabase"],
        link: "https://github.com/rubensimon1/EcoLens-KMP",
        github: "https://github.com/rubensimon1/EcoLens-KMP",
        buttonText: "View Repository"
      }
    ],
    other: [
      {
        title: "ERP LITE FULLSTACK",
        description: "Scalable architecture for enterprise resource planning. Efficient inventory and workflow management with a robust Node.js backend and SQL integration for secure data processing.",
        tags: ["React", "Node.js", "SQL", "FullStack"],
        link: "https://github.com/rubensimon1/erp-lite-fullstack",
        github: "https://github.com/rubensimon1/erp-lite-fullstack"
      },
      {
        title: "WANDERLUXE-AI",
        description: "Integration of LLMs (Artificial Intelligence) for smart assistance. Implementation of processing pipelines in Python and modern reactive interfaces for fluid user interaction.",
        tags: ["Python", "AI", "Frontend", "Innovation"],
        link: "https://github.com/rubensimon1/wanderluxe-ai",
        github: "https://github.com/rubensimon1/wanderluxe-ai"
      }
    ],
    courses: [
      {
        title: "Piscine 42 Madrid",
        description: "High-performance training in C and Shell. Algorithm development under strict manual memory management and pure logic in Unix systems. Complex problem solving without external libraries.",
        tags: ["C", "Shell", "Unix", "Git"]
      }
    ]
  },
  contact: {
    modalButton: "Contact Me",
    modalTitle: "Contact Me",
    modalDesc: "I am available for new projects and opportunities. Choose your preferred platform:",
    formTitle: "Contact Me",
    formDesc: "Fill out the form and I will get back to you as soon as possible.",
    labels: {
      name: "Name",
      lastName: "Last Name",
      email: "Email Address",
      phone: "Phone Number",
      message: "Message"
    },
    placeholders: {
      name: "Ex: Alexander",
      lastName: "Ex: Lopez",
      email: "your@email.com",
      phone: "+34 600 000 000",
      message: "How can I help you?"
    },
    submit: "Send Message",
    sending: "Sending...",
    success: "Message sent successfully! Rubén will reply soon.",
    error: "Oops, something went wrong. Please try again."
  },
  footer: {
    text: "• Rubén Simón • Developed with Next.js and technical rigor."
  }
};
