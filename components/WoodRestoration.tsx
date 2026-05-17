import Image from 'next/image';

export function WoodRestoration() {
  return (
    <section id="restauracion" className="bg-brand-bone dark:bg-brand-graphite py-24 lg:py-32 border-t border-brand-graphite/10 dark:border-brand-bone/10 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <header className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8 pb-12 border-b border-brand-graphite/10 dark:border-brand-bone/10">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-6">
               <span className="w-1.5 h-1.5 bg-brand-copper" />
               <span className="text-[10px] uppercase tracking-[0.24em] text-brand-copper font-bold">
                 Servicio destacado
               </span>
            </div>
            <h2 className="text-3xl md:text-[45px] leading-tight tracking-[0.02em] font-light text-brand-graphite dark:text-brand-bone">
              Pulido y restauración <br className="hidden md:block" />
              <strong className="font-[800]">de maderas nobles.</strong>
            </h2>
          </div>
          <div className="max-w-xs">
            <p className="text-[13px] text-brand-graphite/70 dark:text-brand-bone/70 border-l border-brand-copper pl-4">
              Recuperamos el valor original de tus pisos mediante un trabajo analítico, respetuoso y de alta tecnología.
            </p>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 lg:gap-8">
          {/* Antes */}
          <div className="group relative">
            <div className="absolute bottom-6 left-6 z-10 bg-brand-black text-brand-bone px-4 py-2 text-[10px] font-bold uppercase tracking-[0.16em] backdrop-blur-md">
              Antes
            </div>
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-brand-graphite/5 dark:bg-brand-bone/5">
              <Image 
                src="/piso-de-madera.png" 
                alt="Piso de madera percudido antes de restaurar" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105 grayscale sepia-[.4] contrast-75 brightness-75"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="pt-6">
              <h3 className="text-sm tracking-[0.16em] uppercase font-bold text-brand-black dark:text-brand-bone mb-2">Estado original</h3>
              <p className="text-[13px] text-brand-graphite/70 dark:text-brand-bone/70">Piso de madera desgastado y opaco por el tránsito continuo.</p>
            </div>
          </div>

          {/* Después */}
          <div className="group relative">
            <div className="absolute bottom-6 left-6 z-10 bg-brand-copper text-brand-bone px-4 py-2 text-[10px] font-bold uppercase tracking-[0.16em] backdrop-blur-md">
              Después
            </div>
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-brand-graphite/5 dark:bg-brand-bone/5">
              <Image 
                src="/piso-de-madera.png" 
                alt="Piso de madera restaurado por Cota Cero" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="pt-6">
              <h3 className="text-sm tracking-[0.16em] uppercase font-bold text-brand-black dark:text-brand-bone mb-2">Restauración COTA CERO</h3>
              <p className="text-[13px] text-brand-graphite/70 dark:text-brand-bone/70">Superficie revitalizada, nivelada y protegida con terminación premium.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
