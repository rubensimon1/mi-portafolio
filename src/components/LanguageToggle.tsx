"use client";

import React, { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";

export const LanguageToggle: React.FC = () => {
  const { lang, setLang } = useLanguage();
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const handleScroll = () => {
      setIsVisible(true);
      clearTimeout(timeoutId);

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

  return (
    <div 
      className={`fixed top-6 right-6 z-50 flex items-center rounded-full border border-white/10 bg-white/5 p-1 backdrop-blur-2xl shadow-2xl transition-all duration-500 ease-in-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10 pointer-events-none"
      }`}
    >
      <button
        onClick={() => setLang("es")}
        className={`rounded-full px-3 py-1.5 text-xs font-bold transition-all ${
          lang === "es"
            ? "bg-blue-600 text-white shadow-md"
            : "text-zinc-400 hover:text-white"
        }`}
      >
        ES
      </button>
      <button
        onClick={() => setLang("en")}
        className={`rounded-full px-3 py-1.5 text-xs font-bold transition-all ${
          lang === "en"
            ? "bg-blue-600 text-white shadow-md"
            : "text-zinc-400 hover:text-white"
        }`}
      >
        EN
      </button>
    </div>
  );
};
