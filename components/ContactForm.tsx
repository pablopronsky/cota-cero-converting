'use client';
import { useState } from 'react';
import { contactData } from '@/data/contact';
import { ArrowRight } from 'lucide-react';

const jobTypes = [
  'Piso vinílico',
  'Piso flotante',
  'Piso de madera',
  'Deck',
  'Revestimiento',
  'Pulido / reparación',
  'Instalación',
  'No estoy seguro'
];

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    
    // TODO: Connect this to Formspree, Netlify Forms, or an API endpoint.
    // Example: fetch('https://formspree.io/f/your-id', { method: 'POST', body: new FormData(e.currentTarget) })
    setTimeout(() => {
      setStatus('success');
      (e.target as HTMLFormElement).reset();
    }, 1200);
  };

  return (
    <section id="contacto" className="bg-brand-bone dark:bg-brand-graphite py-24 lg:py-32 border-t border-brand-graphite/10 dark:border-brand-bone/10 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        
        <div>
          <div className="flex items-center gap-4 mb-6">
             <span className="w-1.5 h-1.5 bg-brand-copper" />
             <span className="text-[10px] uppercase tracking-[0.24em] text-brand-copper font-bold">
               Contacto
             </span>
          </div>
          <h2 className="text-3xl md:text-[45px] leading-tight tracking-[0.02em] font-[800] text-brand-graphite dark:text-brand-bone mb-8">
            Contanos qué <br className="hidden md:block" />
            necesitás resolver
          </h2>
          <p className="text-[15px] text-brand-graphite/70 dark:text-brand-bone/70 max-w-md mb-12">
            Completá el formulario para que podamos evaluar tu caso, o escribinos directamente por WhatsApp para una respuesta más rápida.
          </p>

          <a 
            href={contactData.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-between border border-brand-graphite dark:border-brand-bone px-8 py-4 text-xs font-bold uppercase tracking-[0.16em] text-brand-graphite dark:text-brand-bone hover:bg-brand-graphite dark:hover:bg-brand-bone hover:text-brand-bone dark:hover:text-brand-graphite transition-colors group w-full max-w-md"
          >
            <span>Escribir por WhatsApp</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="bg-white dark:bg-brand-black p-8 lg:p-12 border border-brand-graphite/10 dark:border-brand-bone/10 shadow-[0_32px_100px_rgba(31,31,31,0.05)] dark:shadow-[0_32px_100px_rgba(245,242,237,0.02)] transition-colors duration-300">
          {status === 'success' ? (
            <div className="flex flex-col items-center justify-center text-center h-full min-h-[400px] text-brand-graphite dark:text-brand-bone">
              <div className="w-12 h-12 border border-brand-copper flex items-center justify-center mb-6">
                <span className="w-2 h-2 bg-brand-copper" />
              </div>
              <h3 className="text-sm font-bold uppercase tracking-[0.16em] mb-4">Consulta Envida</h3>
              <p className="text-sm text-brand-graphite/70 dark:text-brand-bone/70 mb-8">
                Recibimos tu mensaje. Nos comunicaremos a la brevedad para asesorarte.
              </p>
              <button 
                onClick={() => setStatus('idle')}
                className="text-[10px] font-bold py-2 px-6 uppercase tracking-[0.16em] text-brand-copper border border-brand-copper hover:bg-brand-copper hover:text-brand-bone dark:hover:text-brand-black transition-colors"
              >
                Enviar otra consulta
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-[10px] uppercase tracking-[0.16em] font-bold text-brand-graphite dark:text-brand-bone">Nombre completo <span className="text-brand-copper">*</span></label>
                  <input required type="text" id="name" name="name" className="border border-brand-graphite/20 dark:border-brand-bone/20 bg-brand-bone/30 dark:bg-brand-bone/5 text-brand-graphite dark:text-brand-bone p-3 text-sm focus:outline-none focus:border-brand-copper dark:focus:border-brand-copper transition-colors" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="text-[10px] uppercase tracking-[0.16em] font-bold text-brand-graphite dark:text-brand-bone">Teléfono / WhatsApp <span className="text-brand-copper">*</span></label>
                  <input required type="tel" id="phone" name="phone" className="border border-brand-graphite/20 dark:border-brand-bone/20 bg-brand-bone/30 dark:bg-brand-bone/5 text-brand-graphite dark:text-brand-bone p-3 text-sm focus:outline-none focus:border-brand-copper transition-colors" />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="zone" className="text-[10px] uppercase tracking-[0.16em] font-bold text-brand-graphite dark:text-brand-bone">Zona de la obra</label>
                <input type="text" id="zone" name="zone" className="border border-brand-graphite/20 dark:border-brand-bone/20 bg-brand-bone/30 dark:bg-brand-bone/5 text-brand-graphite dark:text-brand-bone p-3 text-sm focus:outline-none focus:border-brand-copper transition-colors" />
              </div>

              <div className="flex flex-col gap-2 relative z-10">
                <label htmlFor="type" className="text-[10px] uppercase tracking-[0.16em] font-bold text-brand-graphite dark:text-brand-bone">Tipo de trabajo <span className="text-brand-copper">*</span></label>
                <div className="relative">
                  <select 
                    required 
                    id="type" 
                    name="type" 
                    defaultValue="" 
                    className="absolute opacity-0 w-full h-full cursor-pointer"
                    onChange={(e) => {
                      const value = e.target.value;
                      const display = document.getElementById('type-display');
                      if (display) {
                        display.textContent = value;
                        display.classList.remove('text-brand-graphite/50', 'dark:text-brand-bone/50');
                      }
                    }}
                  >
                    <option value="" disabled>Seleccionar opción</option>
                    {jobTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                  </select>
                  <div className="border border-brand-graphite/20 dark:border-brand-bone/20 bg-brand-bone/30 dark:bg-brand-bone/5 p-3 flex items-center justify-between pointer-events-none transition-colors">
                    <span id="type-display" className="text-sm text-brand-graphite/50 dark:text-brand-bone/50">Seleccionar opción</span>
                    <ArrowRight className="w-4 h-4 text-brand-graphite dark:text-brand-bone opacity-50 rotate-90" />
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-[10px] uppercase tracking-[0.16em] font-bold text-brand-graphite dark:text-brand-bone">Mensaje breve</label>
                <textarea id="message" name="message" rows={4} className="border border-brand-graphite/20 dark:border-brand-bone/20 bg-brand-bone/30 dark:bg-brand-bone/5 text-brand-graphite dark:text-brand-bone p-3 text-sm focus:outline-none focus:border-brand-copper transition-colors resize-none"></textarea>
              </div>

              <button 
                type="submit"
                disabled={status === 'submitting'}
                className="mt-4 bg-brand-graphite dark:bg-brand-bone text-brand-bone dark:text-brand-graphite px-8 py-4 text-xs font-bold uppercase tracking-[0.16em] hover:bg-brand-copper hover:text-brand-black transition-colors disabled:opacity-50"
              >
                {status === 'submitting' ? 'Enviando...' : 'Enviar consulta'}
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  );
}
