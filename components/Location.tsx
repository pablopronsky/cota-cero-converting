import { contactData } from '@/data/contact';
import { MapPin, Clock } from 'lucide-react';

export function Location() {
  return (
    <section className="bg-brand-black text-brand-bone py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        <div>
          <h2 className="text-3xl md:text-[45px] leading-tight tracking-[0.02em] font-[800] mb-8 uppercase text-brand-bone">
            Visitá <br className="hidden md:block" /> nuestro local
          </h2>
          <p className="text-[15px] text-brand-bone/70 max-w-md mb-12">
            Conocé materiales, terminaciones, muestras y opciones para tu obra o proyecto.
          </p>

          <div className="flex flex-col gap-8 mb-12">
            <div className="flex items-start gap-4">
               <MapPin className="w-5 h-5 text-brand-copper shrink-0 mt-1" />
               <div>
                  <h4 className="text-[10px] uppercase tracking-[0.16em] font-bold text-brand-copper mb-1">Dirección</h4>
                  <p className="text-sm text-brand-bone/80">{contactData.address}</p>
               </div>
            </div>
            <div className="flex items-start gap-4">
               <Clock className="w-5 h-5 text-brand-copper shrink-0 mt-1" />
               <div>
                 <h4 className="text-[10px] uppercase tracking-[0.16em] font-bold text-brand-copper mb-1">Horario</h4>
                 <p className="text-sm text-brand-bone/80">{contactData.hours}</p>
               </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <a 
              href={contactData.mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-bone text-brand-graphite px-6 py-3 text-[11px] font-bold uppercase tracking-[0.16em] hover:bg-brand-copper hover:text-brand-black transition-colors"
            >
              Cómo llegar
            </a>
            <a 
              href={contactData.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-brand-bone/20 text-brand-bone px-6 py-3 text-[11px] font-bold uppercase tracking-[0.16em] hover:border-brand-copper hover:text-brand-copper transition-colors"
            >
              WhatsApp
            </a>
            <a 
              href={contactData.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-brand-bone/20 text-brand-bone px-6 py-3 text-[11px] font-bold uppercase tracking-[0.16em] hover:border-brand-copper hover:text-brand-copper transition-colors"
            >
              Instagram
            </a>
          </div>
        </div>

        <div className="relative aspect-square md:aspect-[4/3] w-full bg-brand-graphite p-6 lg:p-8 flex items-center justify-center border border-brand-bone/10 shadow-2xl">
          <div className="absolute inset-4 border border-brand-copper/30 pointer-events-none" />
          <div className="text-center z-10">
             <div className="w-16 h-16 border-2 border-brand-copper rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-6 h-6 text-brand-copper" />
             </div>
             <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-brand-bone mb-2">Showroom Técnico</h3>
             <p className="text-xs text-brand-stone uppercase tracking-widest mb-8">Gonnet, Buenos Aires</p>
             <a 
                href={contactData.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border border-brand-copper text-brand-copper px-6 py-3 text-[10px] font-bold uppercase tracking-[0.16em] hover:bg-brand-copper hover:text-brand-black transition-colors"
             >
                Abrir en Maps
             </a>
          </div>
        </div>

      </div>
    </section>
  );
}
