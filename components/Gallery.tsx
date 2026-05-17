import Image from 'next/image';

const cases = [
  {
    id: 1,
    material: 'Piso Dryback',
    ambiente: 'Comercial de alto tránsito',
    trabajo: 'Nivelación y pegado profesional',
    resultado: 'Base firme e inamovible',
    img: '/Piso-dryback.png'
  },
  {
    id: 2,
    material: 'Deck Exterior',
    ambiente: 'Terraza perimetral',
    trabajo: 'Estructuración y fijación oculta',
    resultado: 'Resistencia a la intemperie',
    img: '/deck-wpc-opcion-oscura-y-fria.png'
  },
  {
    id: 3,
    material: 'Piso Laminado',
    ambiente: 'Interior residencial',
    trabajo: 'Colocación flotante y zócalos',
    resultado: 'Acabado cálido y continuo',
    img: '/Piso-laminado.png'
  }
];

export function Gallery() {
  return (
    <section id="obras" className="bg-brand-bone dark:bg-brand-graphite py-24 lg:py-32 border-t border-brand-graphite/10 dark:border-brand-bone/10 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <header className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-brand-graphite/10 dark:border-brand-bone/10 pb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-6">
               <span className="w-1.5 h-1.5 bg-brand-copper" />
               <span className="text-[10px] uppercase tracking-[0.24em] text-brand-copper font-bold">
                 Casos de obra
               </span>
            </div>
            <h2 className="text-3xl md:text-[45px] leading-tight tracking-[0.02em] font-light text-brand-graphite dark:text-brand-bone">
              Resultados de una <br className="hidden md:block" />
              <strong className="font-[800]">ejecución superior.</strong>
            </h2>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cases.map((c) => (
            <div key={c.id} className="group border border-brand-graphite/10 dark:border-brand-bone/10 bg-white dark:bg-brand-black transition-colors duration-300">
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-brand-graphite/5 dark:bg-brand-bone/5">
                 <Image
                   src={c.img}
                   alt={`Obra: ${c.material} en ${c.ambiente}`}
                   fill
                   className="object-cover transition-transform duration-700 group-hover:scale-105"
                   referrerPolicy="no-referrer"
                 />
              </div>
              <div className="p-6 md:p-8">
                <div className="flex items-center mb-6">
                  <span className="w-1 h-3 bg-brand-copper mr-3" />
                  <h3 className="text-[11px] font-[800] uppercase tracking-[0.16em] text-brand-black dark:text-brand-bone">{c.material}</h3>
                </div>
                
                <div className="flex flex-col gap-3">
                  <div className="flex justify-between border-b border-brand-graphite/10 dark:border-brand-bone/10 pb-2">
                    <span className="text-[10px] uppercase tracking-[0.12em] font-bold text-brand-graphite/50 dark:text-brand-bone/50">Ambiente</span>
                    <span className="text-[11px] text-brand-graphite dark:text-brand-bone font-medium">{c.ambiente}</span>
                  </div>
                  <div className="flex justify-between border-b border-brand-graphite/10 dark:border-brand-bone/10 pb-2">
                    <span className="text-[10px] uppercase tracking-[0.12em] font-bold text-brand-graphite/50 dark:text-brand-bone/50">Trabajo</span>
                    <span className="text-[11px] text-brand-graphite dark:text-brand-bone font-medium">{c.trabajo}</span>
                  </div>
                  <div className="flex justify-between pb-1">
                    <span className="text-[10px] uppercase tracking-[0.12em] font-bold text-brand-graphite/50 dark:text-brand-bone/50">Resultado</span>
                    <span className="text-[11px] text-brand-copper font-medium">{c.resultado}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
