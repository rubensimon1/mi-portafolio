"use client";

import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom'; // Importamos la herramienta de portales
import { SOCIAL_LINKS } from '@/constants/socials';

import { useLanguage } from '@/context/LanguageContext';

export const ContactModal: React.FC = () => {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Evita errores de hidratación en SSR (Server-Side Rendering) de Next.js
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  // Bloquear el scroll de la página de fondo cuando el modal está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    // Limpieza de seguridad si el componente se desmonta
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      {/* 1. EL BOTÓN DISPARADOR (Se queda en su sitio original) */}
      <button 
        onClick={() => setIsOpen(true)}
        className="group rounded-xl border border-zinc-700 px-6 py-3 text-base font-bold text-white transition-colors hover:border-zinc-500 hover:bg-zinc-900"
      >
        {t.contact.modalButton} <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
      </button>

      {/* 2. EL MODAL (Se teletransporta al final del <body> usando createPortal) */}
      {isOpen && mounted && createPortal(
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm transition-opacity"
          onClick={() => setIsOpen(false)}
        >
          <div 
            className="relative w-full max-w-md rounded-2xl border border-zinc-800 bg-zinc-950 p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute right-5 top-5 text-zinc-500 hover:text-white transition-colors"
              aria-label="Cerrar modal"
            >
              ✕
            </button>
            
            <h3 className="mb-2 text-2xl font-bold text-white">{t.contact.modalTitle}</h3>
            <p className="mb-8 text-sm text-zinc-400 font-light">
              {t.contact.modalDesc}
            </p>

            <div className="flex flex-col gap-3">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-4 rounded-xl border border-zinc-800 bg-zinc-900/50 p-4 transition-all duration-300 ${link.colorClass}`}
                >
                  <span className="text-2xl">{link.icon}</span>
                  <span className="font-semibold text-zinc-200">{link.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>,
        document.body // Destino del portal
      )}
    </>
  );
};