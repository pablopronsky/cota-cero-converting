import { contactData } from '@/data/contact';

const steps = [
  {
    num: '01',
    title: 'Diagnóstico',
    desc: 'Relevamos el espacio, el soporte, la humedad, la nivelación, el uso previsto y los puntos críticos.'
  },
  {
    num: '02',
    title: 'Preparación',
    desc: 'Definimos materiales, adhesivos, accesorios, juntas, cortes, zócalos y condiciones previas.'
  },
  {
    num: '03',
    title: 'Ejecución',
    desc: 'Instalamos con equipo profesional, orden de trabajo y seguimiento técnico.'
  },
  {
    num: '04',
    title: 'Control',
    desc: 'Revisamos encuentros, terminaciones, limpieza, tolerancias y detalles finales.'
  },
  {
    num: '05',
    title: 'Entrega',
    desc: 'Entregamos la obra con recomendaciones de uso, mantenimiento y garantía.'
  }
];

export function Method() {
  return (
    <section id="metodo" className="bg-brand-graphite py-24 lg:py-32 relative overflow-hidden">
      {/* Background Graphic Grid */}
      <div className="absolute inset-0 z-0 opacity-46 pointer-events-none" style={{
        backgroundImage: `linear-gradient(90deg, rgba(195,138,90,.07) 1px, transparent 1px), linear-gradient(0deg, rgba(245,242,237,.035) 1px, transparent 1px)`,
        backgroundSize: '78px 78px'
      }} />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
        <div className="max-w-3xl mb-20">
          <h2 className="text-3xl md:text-[45px] leading-tight tracking-[0.1em] font-[800] text-brand-bone uppercase mb-8">
            El Método <br /> Cota Cero
          </h2>
          <p className="text-[15px] text-brand-bone/66 leading-relaxed max-w-2xl">
            No improvisamos sobre la obra. Medimos, preparamos, ejecutamos, controlamos y entregamos cada superficie con criterio técnico.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 md:gap-0 border border-brand-bone/10 md:border-r-0 mb-16 max-w-[100vw] overflow-x-auto md:overflow-x-visible">
          {steps.map((step, index) => (
            <div 
              key={step.num} 
              className="p-6 md:p-8 min-h-[230px] border-b md:border-b-0 md:border-r border-brand-bone/10 bg-brand-black/20 flex flex-col justify-between"
            >
              <div>
                <div className="text-[11px] font-[800] tracking-[0.16em] text-brand-copper mb-6 md:mb-10 flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-brand-copper inline-block" />
                  {step.num}
                </div>
                <h3 className="text-sm font-[800] tracking-[0.16em] uppercase text-brand-bone mb-3">
                  {step.title}
                </h3>
              </div>
              <p className="text-[12px] text-brand-bone/66 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-start">
          <a 
            href="#contacto" 
            className="inline-flex items-center gap-4 bg-brand-bone text-brand-graphite px-8 py-4 text-xs font-bold uppercase tracking-[0.16em] hover:bg-brand-copper hover:text-brand-bone transition-colors"
          >
            <span className="w-2 h-2 bg-brand-graphite inline-block group-hover:bg-brand-bone transition-colors" />
            Solicitar visita técnica
          </a>
        </div>
      </div>
    </section>
  );
}
