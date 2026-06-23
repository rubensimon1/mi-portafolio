"use client";

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';

export const ContactForm: React.FC = () => {
  const { t } = useLanguage();
  const [status, setStatus] = useState<"IDLE" | "SENDING" | "SUCCESS" | "ERROR">("IDLE");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("SENDING");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mgonbanb", {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        setStatus("SUCCESS");
        form.reset();
      } else {
        setStatus("ERROR");
      }
    } catch (error) {
      setStatus("ERROR");
    }
  };

  return (
    <section id="contacto" className="relative z-10 mx-auto max-w-3xl px-6 py-20">
      <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-8 backdrop-blur-md shadow-2xl">
        <h2 className="mb-2 text-3xl font-bold text-white text-center">{t.contact.formTitle}</h2>
        <p className="mb-8 text-center text-zinc-400 font-light italic">
          {t.contact.formDesc}
        </p>
        
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Nombre */}
          <div className="flex flex-col gap-2">
            <label className="text-xs font-semibold uppercase tracking-wider text-zinc-500">{t.contact.labels.name}</label>
            <input 
              required 
              name="nombre"
              type="text" 
              placeholder={t.contact.placeholders.name}
              className="rounded-lg border border-zinc-800 bg-zinc-950 p-3 text-white outline-none focus:border-blue-500 transition-all"
            />
          </div>

          {/* Apellido */}
          <div className="flex flex-col gap-2">
            <label className="text-xs font-semibold uppercase tracking-wider text-zinc-500">{t.contact.labels.lastName}</label>
            <input 
              required 
              name="apellido"
              type="text" 
              placeholder={t.contact.placeholders.lastName}
              className="rounded-lg border border-zinc-800 bg-zinc-950 p-3 text-white outline-none focus:border-blue-500 transition-all"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-2 md:col-span-2">
            <label className="text-xs font-semibold uppercase tracking-wider text-zinc-500">{t.contact.labels.email}</label>
            <input 
              required 
              name="email"
              type="email" 
              placeholder={t.contact.placeholders.email}
              className="rounded-lg border border-zinc-800 bg-zinc-950 p-3 text-white outline-none focus:border-blue-500 transition-all"
            />
          </div>

          {/* Teléfono */}
          <div className="flex flex-col gap-2 md:col-span-2">
            <label className="text-xs font-semibold uppercase tracking-wider text-zinc-500">{t.contact.labels.phone}</label>
            <input 
              name="telefono"
              type="tel" 
              placeholder={t.contact.placeholders.phone}
              className="rounded-lg border border-zinc-800 bg-zinc-950 p-3 text-white outline-none focus:border-blue-500 transition-all"
            />
          </div>

          {/* Mensaje */}
          <div className="flex flex-col gap-2 md:col-span-2">
            <label className="text-xs font-semibold uppercase tracking-wider text-zinc-500">{t.contact.labels.message}</label>
            <textarea 
              required 
              name="mensaje"
              rows={4}
              placeholder={t.contact.placeholders.message}
              className="rounded-lg border border-zinc-800 bg-zinc-950 p-3 text-white outline-none focus:border-blue-500 transition-all resize-none"
            />
          </div>

          <button 
            disabled={status === "SENDING"}
            type="submit"
            className="md:col-span-2 rounded-xl bg-white py-4 font-bold text-black transition-all hover:bg-zinc-200 disabled:opacity-50 active:scale-95"
          >
            {status === "SENDING" ? t.contact.sending : t.contact.submit}
          </button>

          {status === "SUCCESS" && (
            <div className="md:col-span-2 rounded-lg bg-green-500/10 border border-green-500/20 p-4 text-center text-green-400">
              {t.contact.success}
            </div>
          )}
          {status === "ERROR" && (
            <div className="md:col-span-2 rounded-lg bg-red-500/10 border border-red-500/20 p-4 text-center text-red-400">
              {t.contact.error}
            </div>
          )}
        </form>
      </div>
    </section>
  );
};