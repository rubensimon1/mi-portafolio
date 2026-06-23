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

  const [isOpenMobile, setIsOpenMobile] = useState(false);

  // Cerrar el menú si hacemos scroll y se oculta la barra
  useEffect(() => {
    if (!isVisible) setIsOpenMobile(false);
  }, [isVisible]);

  return (
    <nav 
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-in-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10 pointer-events-none"
      }`}
    >
      {/* --- DESKTOP MENU --- */}
      <ul className="hidden md:flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-2xl shadow-2xl">
        {navLinks.map((link) => (
          <li key={link.href}>
            <a
              href={`#${link.href}`}
              onClick={(e) => handleScrollClick(e, link.href)}
              className="px-3 py-1.5 text-sm font-semibold text-zinc-400 transition-colors hover:text-white whitespace-nowrap"
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>

      {/* --- MOBILE MENU --- */}
      <div className="md:hidden relative flex flex-col items-center">
        <button
          onClick={() => setIsOpenMobile(!isOpenMobile)}
          className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 backdrop-blur-2xl shadow-2xl text-white font-semibold text-sm transition-colors hover:border-white/20"
        >
          <span>Menu</span>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth={2} 
            stroke="currentColor" 
            className={`w-4 h-4 transition-transform duration-300 ${isOpenMobile ? "rotate-180" : ""}`}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </button>

        {/* Mobile Dropdown */}
        <div 
          className={`absolute top-full mt-3 w-[200px] rounded-2xl border border-white/10 bg-white/5 backdrop-blur-2xl shadow-2xl transition-all duration-300 origin-top ${
            isOpenMobile ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
          }`}
        >
          <ul className="flex flex-col p-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={`#${link.href}`}
                  onClick={(e) => {
                    setIsOpenMobile(false);
                    handleScrollClick(e, link.href);
                  }}
                  className="block w-full rounded-lg px-4 py-3 text-center text-sm font-semibold text-zinc-300 transition-colors hover:bg-zinc-800 hover:text-white"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
