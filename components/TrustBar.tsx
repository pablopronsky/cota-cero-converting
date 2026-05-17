import React from 'react';

const blocks = [
  {
    title: 'Visita técnica',
    text: 'Relevamos soporte, humedad, nivelación y puntos críticos.',
  },
  {
    title: 'Instalación profesional',
    text: 'Ejecutamos con equipo preparado y criterio técnico.',
  },
  {
    title: 'Control final',
    text: 'Revisamos encuentros, cortes, limpieza y terminaciones.',
  },
  {
    title: 'Garantía y seguimiento',
    text: 'Entregamos la obra con recomendaciones claras de uso y cuidado.',
  },
];

export function TrustBar() {
  return (
    <section className="bg-brand-graphite text-brand-bone border-y border-brand-bone/10">
      <div className="mx-auto grid max-w-7xl grid-cols-1 md:grid-cols-2 xl:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-brand-bone/10">
        {blocks.map((block, index) => (
          <div key={index} className="p-8 lg:p-12 relative group hover:bg-brand-black transition-colors">
            <div className="w-1.5 h-1.5 bg-brand-copper mb-6 opacity-50 group-hover:opacity-100 transition-opacity" />
            <h3 className="text-[11px] font-bold uppercase tracking-[0.18em] text-brand-copper mb-3">
              {block.title}
            </h3>
            <p className="text-[13px] leading-relaxed text-brand-bone/70">
              {block.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
