"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { es } from "@/locales/es";
import { en } from "@/locales/en";

type Language = "es" | "en";
type Translations = typeof es;

interface LanguageContextProps {
  lang: Language;
  t: Translations;
  setLang: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Language>("es");

  useEffect(() => {
    // Intentar recuperar el idioma guardado, o usar el del navegador
    const stored = localStorage.getItem("portfolio-lang") as Language;
    if (stored === "es" || stored === "en") {
      setLang(stored);
    } else {
      const browserLang = navigator.language.startsWith("en") ? "en" : "es";
      setLang(browserLang);
    }
  }, []);

  const handleSetLang = (newLang: Language) => {
    setLang(newLang);
    localStorage.setItem("portfolio-lang", newLang);
    document.documentElement.lang = newLang;
  };

  const t = lang === "en" ? en : es;

  return (
    <LanguageContext.Provider value={{ lang, t, setLang: handleSetLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
