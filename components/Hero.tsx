'use client';
import { motion } from 'motion/react';
import { contactData } from '@/data/contact';
import { ArrowDownRight, ClipboardCheck } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export function Hero() {
  return (
    <section className="relative min-h-[90vh] bg-brand-bone dark:bg-brand-graphite pt-24 lg:pt-32 flex flex-col justify-between overflow-hidden transition-colors duration-300">
      {/* Background Graphic Grid */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none hidden dark:block" style={{
        backgroundImage: `linear-gradient(90deg, rgba(195,138,90,.07) 1px, transparent 1px), linear-gradient(0deg, rgba(245,242,237,.035) 1px, transparent 1px)`,
        backgroundSize: '78px 78px'
      }} />
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none block dark:hidden" style={{
        backgroundImage: `linear-gradient(90deg, rgba(195,138,90,.075) 1px, transparent 1px), linear-gradient(0deg, rgba(43,45,47,.045) 1px, transparent 1px)`,
        backgroundSize: '78px 78px'
      }} />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-12 flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="inline-flex items-center gap-2 border border-brand-graphite/20 dark:border-brand-bone/20 bg-white/50 dark:bg-black/20 rounded-full px-4 py-1.5">
                  <ClipboardCheck className="w-4 h-4 text-brand-copper" />
                  <span className="text-xs font-bold tracking-[0.05em] uppercase text-brand-graphite dark:text-brand-bone">
                    Diagnóstico de Proyecto
                  </span>
                </div>
              </div>
              
              {/* Gancho A: Frustración */}
              <h1 className="text-[clamp(32px,5vw,64px)] leading-[1.05] tracking-[-0.02em] font-light text-brand-graphite dark:text-brand-bone mb-4 max-w-[920px]">
                ¿Cansado de ver cómo una <strong className="font-[790] text-brand-copper">mala instalación</strong> arruina materiales caros?
              </h1>

              {/* Gancho B: Preparación */}
              <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-brand-graphite/90 dark:text-brand-bone/90 mb-6">
                Descubre si tu obra está realmente lista para la etapa de terminaciones.
              </h2>
              
              {/* Subtítulo: La Promesa del Test */}
              <p className="text-sm md:text-base text-brand-graphite/70 dark:text-brand-bone/70 max-w-xl mb-10 border-l-2 border-brand-copper pl-6 relative">
                Toma nuestro <strong className="font-semibold">Test de Riesgo de Terminaciones</strong> gratuito. En menos de 3 minutos, conocerás el estado real de tu cota cero y obtendrás un reporte personalizado para evitar sobrecostos, patologías de humedad y retrasos en tu obra.
              </p>

              {/* Llamado a la Acción Irresistible */}
              <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                <Link 
                  href="/test-cota-cero" 
                  className="inline-flex w-full sm:w-auto items-center justify-center bg-brand-graphite dark:bg-brand-bone text-brand-bone dark:text-brand-graphite px-8 py-5 text-sm font-bold uppercase tracking-[0.16em] hover:bg-brand-black dark:hover:bg-white transition-all hover:scale-105 shadow-xl shadow-brand-graphite/10"
                >
                  <ClipboardCheck className="w-5 h-5 mr-3 text-brand-copper" />
                  Iniciar Test Gratuito
                </Link>
                <div className="text-xs text-brand-graphite/50 dark:text-brand-bone/50 tracking-wider">
                  ⏱️ Toma 3 minutos • 📄 Reporte Inmediato
                </div>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-5 relative h-[40vh] lg:h-[65vh] w-full mt-10 lg:mt-0">
             <motion.div 
               className="w-full h-full relative border border-brand-graphite/10 dark:border-brand-bone/10 bg-brand-graphite/5 dark:bg-brand-bone/5 p-4"
               initial={{ opacity: 0, scale: 0.95 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
             >
                <div className="w-full h-full relative overflow-hidden bg-brand-graphite flex items-center justify-center text-brand-bone/30 text-sm tracking-widest uppercase">
                  {/* Real uploaded hero photo */}
                  <Image 
                    src="/hero.png" 
                    alt="Instalación profesional de superficies"
                    fill
                    className="object-cover opacity-80 mix-blend-luminosity lg:mix-blend-normal hover:scale-105 transition-all duration-1000"
                    referrerPolicy="no-referrer"
                    priority
                  />
                  {/* Testimonial / Social Proof overlay */}
                  <div className="absolute bottom-6 left-6 right-6 bg-brand-bone/90 dark:bg-brand-graphite/90 backdrop-blur-md p-6 border-l-4 border-brand-copper shadow-lg">
                    <p className="text-sm italic text-brand-graphite dark:text-brand-bone mb-3">
                      &quot;Cota Cero empieza donde otros no miran. El diagnóstico preliminar detectó humedad residual en la carpeta y nos evitó una instalación que iba a fallar desde el día uno.&quot;
                    </p>
                    <div className="flex items-center gap-2">
                       <div className="w-8 h-8 rounded-full bg-brand-copper/20 flex items-center justify-center text-xs font-bold text-brand-copper">MA</div>
                       <div className="text-xs font-bold text-brand-graphite/70 dark:text-brand-bone/70">Martín A., Arquitecto</div>
                    </div>
                  </div>
                </div>
             </motion.div>
          </div>
        </div>
      </div>

      {/* Value Proposition / Credibility Bar */}
      <div className="relative z-10 w-full mt-16 border-t border-brand-graphite/10 dark:border-brand-bone/10 bg-brand-bone dark:bg-brand-graphite transition-colors duration-300">
        <div className="mx-auto max-w-7xl flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-brand-graphite/10 dark:divide-brand-bone/10">
          <div className="flex-1 py-8 px-6 lg:px-12 flex flex-col">
            <span className="text-3xl font-light text-brand-copper mb-2">10+</span>
            <span className="text-xs font-bold uppercase tracking-[0.14em] text-brand-graphite dark:text-brand-bone">Años de control de calidad</span>
          </div>
          <div className="flex-1 py-8 px-6 lg:px-12 flex flex-col">
            <span className="text-3xl font-light text-brand-copper mb-2">90%</span>
            <span className="text-xs font-bold uppercase tracking-[0.14em] text-brand-graphite dark:text-brand-bone">De fallas se evitan con buen diagnóstico</span>
          </div>
          <div className="flex-1 py-8 px-6 lg:px-12 flex flex-col">
            <span className="text-3xl font-light text-brand-copper mb-2">3</span>
            <span className="text-xs font-bold uppercase tracking-[0.14em] text-brand-graphite dark:text-brand-bone">Áreas evaluadas en el test</span>
          </div>
        </div>
      </div>
    </section>
  );
}
