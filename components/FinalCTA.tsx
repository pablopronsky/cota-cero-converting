import { contactData } from '@/data/contact';

export function FinalCTA() {
  return (
    <section className="bg-brand-bone dark:bg-brand-graphite text-brand-graphite dark:text-brand-bone py-32 border-t border-brand-graphite/10 dark:border-brand-bone/10 text-center px-6 transition-colors duration-300">
      <div className="mx-auto max-w-3xl">
        <div className="flex justify-center items-center gap-4 mb-8">
           <span className="w-8 h-[1px] bg-brand-copper" />
           <span className="text-[10px] uppercase tracking-[0.24em] text-brand-copper font-bold">
             Comenzar
           </span>
           <span className="w-8 h-[1px] bg-brand-copper" />
        </div>
        
        <h2 className="text-3xl md:text-5xl leading-[1.1] tracking-[-0.02em] font-light mb-8">
          Empezá tu obra desde <br className="hidden md:block" />
          <strong className="font-[800]">una base correcta.</strong>
        </h2>
        
        <p className="text-[15px] text-brand-graphite/70 dark:text-brand-bone/70 mb-12 max-w-xl mx-auto">
          Te ayudamos a elegir el material adecuado, preparar la superficie, instalar con criterio técnico y entregar una terminación superior.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#contacto" 
            className="inline-flex items-center justify-center bg-brand-graphite dark:bg-brand-bone text-brand-bone dark:text-brand-graphite px-8 py-4 text-xs font-bold uppercase tracking-[0.16em] hover:bg-brand-black dark:hover:bg-white transition-colors"
          >
            Solicitar asesoramiento
          </a>
          <a 
            href={contactData.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center border border-brand-graphite dark:border-brand-bone text-brand-graphite dark:text-brand-bone px-8 py-4 text-xs font-bold uppercase tracking-[0.16em] hover:bg-brand-copper hover:text-brand-bone hover:border-brand-copper dark:hover:bg-brand-copper dark:hover:border-brand-copper transition-colors"
          >
            Escribir por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
