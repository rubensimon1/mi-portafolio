"use client";

import React, { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";

export const Navbar: React.FC = () => {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const handleScroll = () => {
      // Siempre que hacemos scroll, la barra se muestra
      setIsVisible(true);
      
      // Limpiamos el timeout anterior
      clearTimeout(timeoutId);

      // Si no estamos en lo más alto de la página, la ocultamos tras 1.5s
      if (window.scrollY > 50) {
        timeoutId = setTimeout(() => {
          setIsVisible(false);
        }, 1500);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeoutId);
    };
  }, []);

  const handleScrollClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const elem = document.getElementById(targetId);
    if (elem) {
      window.scrollTo({
        top: elem.offsetTop - 80,
        behavior: "smooth"
      });
    }
  };

  const navLinks = [
    { name: t.nav.about, href: "about" },
    { name: t.nav.stack, href: "stack" },
    { name: t.nav.featured, href: "proyectos-destacados" },
    { name: t.nav.other, href: "otros-proyectos" },
    { name: t.nav.courses, href: "cursos" },
    { name: t.nav.contact, href: "contacto" },
  ];

  return (
    <nav 
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-in-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10 pointer-events-none"
      }`}
    >
      <ul className="flex items-center gap-1 md:gap-2 rounded-full border border-zinc-800 bg-zinc-900/80 px-4 py-2 backdrop-blur-md shadow-lg overflow-x-auto max-w-[90vw] scrollbar-hide">
        {navLinks.map((link) => (
          <li key={link.href}>
            <a
              href={`#${link.href}`}
              onClick={(e) => handleScrollClick(e, link.href)}
              className="px-3 py-1.5 text-xs md:text-sm font-semibold text-zinc-400 transition-colors hover:text-white whitespace-nowrap"
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
