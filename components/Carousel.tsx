'use client';
import { useRef } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { contactData } from '@/data/contact';

const slides = [
  { id: 1, title: 'Terminación Superior', desc: 'Instalación impecable', img: '/Terminacion-superior.png' },
  { id: 2, title: 'Piso de Madera', desc: 'Acabado cálido y natural', img: '/piso-de-madera.png' },
  { id: 3, title: 'Piso Laminado', desc: 'Alta durabilidad', img: '/Piso-laminado.png' },
  { id: 4, title: 'Piso Dryback', desc: 'Base perfecta para alto tránsito', img: '/Piso-dryback.png' },
  { id: 5, title: 'Deck WPC Cálido', desc: 'Para exteriores premium', img: '/deck-wpc-calido.png' },
  { id: 6, title: 'Deck WPC Oscuro / Frío', desc: 'Elegancia en exterior', img: '/deck-wpc-opcion-oscura-y-fria.png' },
  { id: 7, title: 'Revestimiento Exterior', desc: 'Protección y diseño visual', img: '/Revestimiento-exterior.png' },
];

export function Carousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  const getWhatsAppLink = (title: string) => {
    return `${contactData.whatsappLink}?text=${encodeURIComponent(`Hola, vi en la galería una foto de ${title} y quería consultar.`)}`;
  };

  return (
    <section className="bg-brand-black text-brand-bone py-24 border-t border-brand-bone/10 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-12 mb-12 flex justify-between items-end">
        <div>
          <h2 className="text-xl md:text-2xl font-light tracking-[0.1em] text-brand-bone uppercase">
            Registro <strong className="font-[800]">Visual</strong>
          </h2>
        </div>
        <div className="flex gap-4">
          <button 
            onClick={() => scroll('left')}
            className="w-10 h-10 border border-brand-bone/20 flex items-center justify-center hover:border-brand-copper hover:text-brand-copper transition-colors"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button 
            onClick={() => scroll('right')}
            className="w-10 h-10 border border-brand-bone/20 flex items-center justify-center hover:border-brand-copper hover:text-brand-copper transition-colors"
            aria-label="Siguiente"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div 
        ref={scrollRef}
        className="flex max-w-7xl mx-auto px-6 lg:px-12 gap-8 overflow-x-auto snap-x snap-mandatory pb-8 md:scrollbar-thin md:scrollbar-track-transparent md:scrollbar-thumb-brand-bone/20"
      >
        {slides.map((slide) => (
          <div key={slide.id} className="min-w-[85vw] md:min-w-[60vw] lg:min-w-[40vw] snap-center shrink-0 flex flex-col group">
            <div className="relative aspect-square lg:aspect-[4/3] w-full bg-brand-graphite overflow-hidden">
               <Image
                 src={slide.img}
                 alt={slide.title}
                 fill
                 className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                 referrerPolicy="no-referrer"
               />
               <div className="absolute inset-0 border border-brand-bone/10 pointer-events-none mix-blend-overlay" />
            </div>
            
            <div className="mt-6 flex justify-between items-start border-b border-brand-bone/10 pb-6">
               <div>
                  <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-brand-bone">
                    {slide.title}
                  </h3>
                  <p className="text-[12px] text-brand-stone mt-2 uppercase tracking-widest">{slide.desc}</p>
               </div>
               <a 
                 href={getWhatsAppLink(slide.title)}
                 target="_blank"
                 rel="noopener noreferrer"
                 className="text-[10px] font-bold uppercase tracking-[0.16em] text-brand-copper border border-brand-copper px-3 py-1.5 hover:bg-brand-copper hover:text-brand-black transition-colors"
               >
                 Consultar
               </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
