"use client";

import React, { useState } from 'react';

export const ContactForm: React.FC = () => {
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
        <h2 className="mb-2 text-3xl font-bold text-white text-center">Hablemos de tu proyecto</h2>
        <p className="mb-8 text-center text-zinc-400 font-light italic">
          Rellena el formulario y me pondré en contacto contigo lo antes posible.
        </p>
        
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Nombre */}
          <div className="flex flex-col gap-2">
            <label className="text-xs font-semibold uppercase tracking-wider text-zinc-500">Nombre</label>
            <input 
              required 
              name="nombre"
              type="text" 
              placeholder="Ej: Alejandro"
              className="rounded-lg border border-zinc-800 bg-zinc-950 p-3 text-white outline-none focus:border-blue-500 transition-all"
            />
          </div>

          {/* Apellido */}
          <div className="flex flex-col gap-2">
            <label className="text-xs font-semibold uppercase tracking-wider text-zinc-500">Apellido</label>
            <input 
              required 
              name="apellido"
              type="text" 
              placeholder="Ej: López"
              className="rounded-lg border border-zinc-800 bg-zinc-950 p-3 text-white outline-none focus:border-blue-500 transition-all"
            />
          </div>

          {/* Email (Importante para que puedas responderles) */}
          <div className="flex flex-col gap-2 md:col-span-2">
            <label className="text-xs font-semibold uppercase tracking-wider text-zinc-500">Correo Electrónico</label>
            <input 
              required 
              name="email"
              type="email" 
              placeholder="tu@email.com"
              className="rounded-lg border border-zinc-800 bg-zinc-950 p-3 text-white outline-none focus:border-blue-500 transition-all"
            />
          </div>

          {/* Teléfono */}
          <div className="flex flex-col gap-2 md:col-span-2">
            <label className="text-xs font-semibold uppercase tracking-wider text-zinc-500">Número de teléfono</label>
            <input 
              name="telefono"
              type="tel" 
              placeholder="+34 600 000 000"
              className="rounded-lg border border-zinc-800 bg-zinc-950 p-3 text-white outline-none focus:border-blue-500 transition-all"
            />
          </div>

          {/* Mensaje */}
          <div className="flex flex-col gap-2 md:col-span-2">
            <label className="text-xs font-semibold uppercase tracking-wider text-zinc-500">Mensaje</label>
            <textarea 
              required 
              name="mensaje"
              rows={4}
              placeholder="¿En qué puedo ayudarte?"
              className="rounded-lg border border-zinc-800 bg-zinc-950 p-3 text-white outline-none focus:border-blue-500 transition-all resize-none"
            />
          </div>

          <button 
            disabled={status === "SENDING"}
            type="submit"
            className="md:col-span-2 rounded-xl bg-white py-4 font-bold text-black transition-all hover:bg-zinc-200 disabled:opacity-50 active:scale-95"
          >
            {status === "SENDING" ? "Enviando..." : "Enviar Mensaje"}
          </button>

          {status === "SUCCESS" && (
            <div className="md:col-span-2 rounded-lg bg-green-500/10 border border-green-500/20 p-4 text-center text-green-400">
              ¡Mensaje enviado con éxito! Rubén te responderá pronto.
            </div>
          )}
          {status === "ERROR" && (
            <div className="md:col-span-2 rounded-lg bg-red-500/10 border border-red-500/20 p-4 text-center text-red-400">
              Vaya, algo ha fallado. Por favor, inténtalo de nuevo.
            </div>
          )}
        </form>
      </div>
    </section>
  );
};