import { Check, X } from 'lucide-react';

export function Difference() {
  return (
    <section className="bg-brand-bone dark:bg-brand-graphite py-24 lg:py-32 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          <div className="max-w-xl">
            <div className="flex items-center gap-4 mb-8">
               <span className="w-16 h-[1px] bg-brand-copper" />
               <span className="text-[10px] uppercase tracking-[0.24em] text-brand-copper font-bold">
                 La diferencia
               </span>
            </div>
            
            <h2 className="text-3xl md:text-[45px] leading-tight tracking-[0.02em] font-light text-brand-graphite dark:text-brand-bone mb-8">
              La diferencia no está solo en el material. <br />
              <strong className="font-[800]">Está en cómo se instala.</strong>
            </h2>
            
            <p className="text-[15px] text-brand-graphite/70 dark:text-brand-bone/70 leading-relaxed border-l border-brand-copper pl-6">
              Un buen producto mal instalado puede fallar. Por eso COTA CERO trabaja cada proyecto desde la base: diagnóstico, preparación, mano de obra calificada, control de calidad y entrega profesional.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-0">
            {/* Venta Común */}
            <div className="bg-white dark:bg-brand-black border border-brand-graphite/10 dark:border-brand-bone/10 p-8 lg:p-10 flex flex-col gap-6 transition-colors duration-300">
              <h4 className="text-[11px] font-[800] tracking-[0.18em] uppercase text-brand-black dark:text-brand-bone mb-2">
                Venta común
              </h4>
              <ul className="flex flex-col gap-5">
                {[
                  'Se vende el producto.',
                  'Se presupuesta rápido.',
                  'Se instala sin mucho seguimiento.',
                  'Se entrega y termina.'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-[13px] text-brand-graphite/70 dark:text-brand-bone/70">
                    <X className="w-4 h-4 mt-0.5 text-brand-graphite/30 dark:text-brand-bone/30 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* COTA CERO */}
            <div className="bg-brand-graphite dark:bg-brand-bone border border-brand-graphite dark:border-brand-bone text-brand-bone dark:text-brand-graphite p-8 lg:p-10 flex flex-col gap-6 lg:-ml-[1px] relative z-10 lg:-translate-y-4 shadow-[0_32px_100px_rgba(31,31,31,0.14)] dark:shadow-[0_32px_100px_rgba(245,242,237,0.05)] transition-colors duration-300">
              <h4 className="text-[11px] font-[800] tracking-[0.18em] uppercase text-brand-copper mb-2 flex items-center gap-3">
                <span className="w-2 h-2 bg-brand-copper" />
                COTA CERO
              </h4>
              <ul className="flex flex-col gap-5">
                {[
                  'Se evalúa el espacio.',
                  'Se analiza la instalación.',
                  'Se prepara la superficie.',
                  'Se controla el proceso.',
                  'Se entrega con revisión final.'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-[13px] text-brand-bone/80 dark:text-brand-graphite/80">
                    <Check className="w-4 h-4 mt-0.5 text-brand-copper shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
