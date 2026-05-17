'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CheckCircle2, ChevronRight, AlertCircle, ArrowRight, ClipboardCheck, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { contactData } from '@/data/contact';

const questions = [
  {
    id: 1,
    text: "¿Qué tipo de proyecto tenés en mente?",
    options: [
      { letter: "A", text: "Casa o departamento propio (reforma o obra nueva)", score: 2 },
      { letter: "B", text: "Local comercial, oficina o espacio corporativo", score: 3 },
      { letter: "C", text: "Proyecto de arquitectura (obra de cliente o desarrollo)", score: 3 },
      { letter: "D", text: "Todavía no tengo claro, estoy explorando", score: 0 }
    ]
  },
  {
    id: 2,
    text: "¿En qué etapa está el proyecto ahora mismo?",
    options: [
      { letter: "A", text: "Ya tengo fecha de inicio o la obra está en curso", score: 3 },
      { letter: "B", text: "Estoy planificando, empiezo en los próximos 60 días", score: 2 },
      { letter: "C", text: "Estoy evaluando opciones, sin fecha definida", score: 1 },
      { letter: "D", text: "Es solo una idea por ahora", score: 0 }
    ]
  },
  {
    id: 3,
    text: "¿Cuántos metros cuadrados aproximados tiene la superficie a intervenir?",
    options: [
      { letter: "A", text: "Menos de 30 m²", score: 1 },
      { letter: "B", text: "Entre 30 y 80 m²", score: 2 },
      { letter: "C", text: "Entre 80 y 200 m²", score: 3 },
      { letter: "D", text: "Más de 200 m²", score: 3 }
    ]
  },
  {
    id: 4,
    text: "¿Qué superficies necesitás resolver? (elegí la que mejor describe tu situación)",
    options: [
      { letter: "A", text: "Pisos (vinílico, flotante, madera, deck)", score: 2 },
      { letter: "B", text: "Revestimientos de paredes interiores o exteriores", score: 2 },
      { letter: "C", text: "Combinación de pisos y revestimientos", score: 3 },
      { letter: "D", text: "Reparación, pulido o recuperación de superficie existente", score: 2 }
    ]
  },
  {
    id: 5,
    text: "¿La instalación la hacés vos mismo o buscás quien la ejecute?",
    options: [
      { letter: "A", text: "Necesito instalación completa (materiales + mano de obra)", score: 3 },
      { letter: "B", text: "Solo el material, ya tengo quien instala", score: 1 },
      { letter: "C", text: "Quiero que me asesoren y después decido", score: 2 },
      { letter: "D", text: "No lo tengo definido todavía", score: 0 }
    ]
  },
  {
    id: 6,
    text: "¿Cuánto valorás el proceso técnico por sobre el precio?",
    options: [
      { letter: "A", text: "Lo más importante es que quede bien hecho, el precio es secundario", score: 3 },
      { letter: "B", text: "Busco equilibrio: buena ejecución a precio razonable", score: 2 },
      { letter: "C", text: "El precio es el factor principal en mi decisión", score: 0 },
      { letter: "D", text: "Depende del presupuesto que me presenten", score: 1 }
    ]
  },
  {
    id: 7,
    text: "¿Tuviste experiencias previas con instalaciones de pisos o revestimientos?",
    options: [
      { letter: "A", text: "Sí, y quedé conforme con el resultado", score: 1 },
      { letter: "B", text: "Sí, pero tuve problemas con la ejecución o los materiales", score: 3 },
      { letter: "C", text: "No, es mi primera vez", score: 2 },
      { letter: "D", text: "Trabajé con arquitecto o profesional que lo manejó", score: 2 }
    ]
  },
  {
    id: 8,
    text: "¿Hay alguien que tome decisiones técnicas o de diseño en el proyecto?",
    options: [
      { letter: "A", text: "Yo decido directamente (soy el dueño o responsable)", score: 3 },
      { letter: "B", text: "Hay un arquitecto o diseñador que define materiales", score: 3 },
      { letter: "C", text: "Tengo que consultar con otra persona antes de decidir", score: 1 },
      { letter: "D", text: "No está definido quién decide", score: 0 }
    ]
  },
  {
    id: 9,
    text: "¿La obra está en zona La Plata, Gonnet, City Bell o alrededores?",
    options: [
      { letter: "A", text: "Sí, dentro de esa zona o muy cerca", score: 3 },
      { letter: "B", text: "Está a más de 30 km pero acepto las condiciones de traslado", score: 2 },
      { letter: "C", text: "Está en otra provincia o ciudad", score: 0 },
      { letter: "D", text: "No sé exactamente la ubicación todavía", score: 0 }
    ]
  },
  {
    id: 10,
    text: "¿Cómo preferís comenzar el proceso?",
    options: [
      { letter: "A", text: "Quiero una visita técnica en obra cuanto antes", score: 3 },
      { letter: "B", text: "Prefiero hablar por WhatsApp primero y luego coordinar", score: 2 },
      { letter: "C", text: "Quiero ver materiales en el showroom antes de decidir", score: 1 },
      { letter: "D", text: "Solo busco un presupuesto estimativo por ahora", score: 0 }
    ]
  }
];

export default function ScorecardPage() {
  const [currentSlide, setCurrentSlide] = useState(-1);
  const [answers, setAnswers] = useState<number[]>(new Array(questions.length).fill(null));
  const [isCalculating, setIsCalculating] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const handleStart = () => setCurrentSlide(0);

  const handleAnswer = (questionIndx: number, optionIdx: number) => {
    const newAnswers = [...answers];
    newAnswers[questionIndx] = optionIdx;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (answers[currentSlide] === null || typeof answers[currentSlide] === 'undefined') return;
    
    if (currentSlide < questions.length - 1) {
      setCurrentSlide(prev => prev + 1);
    } else {
      setIsCalculating(true);
      setTimeout(() => {
        setIsCalculating(false);
        setShowResults(true);
      }, 2500);
    }
  };

  const handleBack = () => {
    if (currentSlide > 0) {
      setCurrentSlide(prev => prev - 1);
    }
  };

  const calculateScore = () => {
    let total = 0;
    let maxScore = 0;
    questions.forEach((q, qi) => {
      const best = Math.max(...q.options.map(o => o.score));
      maxScore += best;
      if (answers[qi] !== null && typeof answers[qi] !== 'undefined') {
        total += q.options[answers[qi]].score;
      }
    });
    return { total, maxScore, pct: Math.round((total / maxScore) * 100) || 0 };
  };

  const getDimScore = (qIndices: number[]) => {
    let got = 0;
    let max = 0;
    qIndices.forEach(qi => {
      const best = Math.max(...questions[qi].options.map(o => o.score));
      max += best;
      if (answers[qi] !== null && typeof answers[qi] !== 'undefined') {
        got += questions[qi].options[answers[qi]].score;
      }
    });
    return Math.round((got / max) * 100) || 0;
  };

  const renderIntro = () => (
    <motion.div 
      key="intro"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: -50 }}
      className="max-w-2xl mx-auto text-center py-20 px-6"
    >
      <div className="flex items-center justify-center gap-2 mb-6">
        <div className="text-[13px] tracking-[0.18em] text-brand-graphite/70 dark:text-brand-bone/70 uppercase font-medium flex items-center">
          Cota<span className="w-1.5 h-1.5 bg-brand-copper mx-1 inline-block" />Cero
        </div>
      </div>
      <h1 className="text-3xl md:text-5xl font-light text-brand-graphite dark:text-brand-bone mb-6">
        Diagnóstico de <strong className="font-[790]">Proyecto</strong>
      </h1>
      <p className="text-lg text-brand-graphite/70 dark:text-brand-bone/70 mb-10 leading-relaxed max-w-xl mx-auto">
        Respondé 10 preguntas para que podamos evaluar tu situación exacta y recomendarte el siguiente paso. 
      </p>
      <button 
        onClick={handleStart}
        className="bg-brand-graphite dark:bg-brand-bone text-brand-bone dark:text-brand-graphite px-10 py-5 font-bold uppercase tracking-widest text-sm hover:bg-brand-copper dark:hover:bg-brand-copper hover:text-white transition-colors"
      >
        Comenzar Diagnóstico
      </button>
      <p className="mt-6 text-xs text-brand-graphite/40 dark:text-brand-bone/40 uppercase tracking-widest">
        Toma menos de 3 minutos
      </p>
    </motion.div>
  );

  const renderQuestion = (index: number) => {
    const q = questions[index];
    const isSelected = (optIdx: number) => answers[index] === optIdx;

    return (
      <motion.div
        key={`q-${index}`}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        className="max-w-2xl mx-auto py-12 px-6 w-full"
      >
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
             <span className="text-[11px] font-bold text-brand-copper uppercase tracking-widest">Pregunta {index + 1} de {questions.length}</span>
          </div>
          <div className="h-1 w-full bg-brand-graphite/10 dark:bg-brand-bone/10 relative overflow-hidden rounded-full">
             <motion.div 
                className="absolute left-0 top-0 bottom-0 bg-brand-copper rounded-full"
                initial={{ width: `${(index / questions.length) * 100}%` }}
                animate={{ width: `${((index + 1) / questions.length) * 100}%` }}
             />
          </div>
        </div>

        <h2 className="text-xl md:text-2xl font-medium text-brand-graphite dark:text-brand-bone mb-10 leading-snug">
          {q.text}
        </h2>

        <div className="space-y-3">
          {q.options.map((opt, optIdx) => (
            <button
              key={optIdx}
              onClick={() => handleAnswer(index, optIdx)}
              className={`w-full text-left p-4 border transition-all duration-200 flex items-start gap-4 group rounded-md outline-none
                ${isSelected(optIdx) 
                  ? 'border-brand-copper bg-brand-copper/5 dark:bg-brand-copper/10 ring-1 ring-brand-copper shadow-sm' 
                  : 'border-brand-graphite/20 dark:border-brand-bone/20 hover:border-brand-copper hover:bg-brand-graphite/5 dark:hover:bg-brand-bone/5'
                }
              `}
              aria-pressed={isSelected(optIdx)}
            >
              <div className={`w-6 h-6 shrink-0 rounded-full border text-[11px] font-bold flex items-center justify-center transition-colors
                 ${isSelected(optIdx) 
                   ? 'border-brand-copper bg-brand-copper text-white' 
                   : 'border-brand-graphite/30 dark:border-brand-bone/30 text-brand-graphite/50 dark:text-brand-bone/50 group-hover:border-brand-copper'
                 }
              `}>
                {opt.letter}
              </div>
              <span className={`text-sm md:text-base pt-0.5 ${isSelected(optIdx) ? 'text-brand-graphite dark:text-brand-bone font-medium' : 'text-brand-graphite/80 dark:text-brand-bone/80'}`}>
                {opt.text}
              </span>
            </button>
          ))}
        </div>

        <div className="mt-8 pt-6 border-t border-brand-graphite/10 dark:border-brand-bone/10 flex justify-between items-center">
          <button 
            onClick={handleBack}
            disabled={index === 0}
            className={`text-sm flex items-center gap-2 px-4 py-2 transition-opacity ${index === 0 ? 'opacity-0 pointer-events-none' : 'text-brand-graphite/60 dark:text-brand-bone/60 hover:text-brand-graphite dark:hover:text-brand-bone'}`}
          >
            <ArrowLeft className="w-4 h-4" /> Anterior
          </button>
          
          <button
            onClick={handleNext}
            disabled={answers[index] === null}
            className={`text-sm flex items-center gap-2 px-6 py-2.5 rounded-md font-medium transition-all ${answers[index] !== null ? 'bg-brand-copper text-brand-bone hover:bg-[#b07b4e] shadow-md hover:shadow-lg hover:-translate-y-0.5' : 'bg-brand-graphite/10 dark:bg-brand-bone/10 text-brand-graphite/40 dark:text-brand-bone/40 cursor-not-allowed'}`}
          >
            {index === questions.length - 1 ? 'Ver Resultado' : 'Siguiente'} <ChevronRight className="w-4 h-4 ml-1" />
          </button>
        </div>
      </motion.div>
    );
  };

  const renderCalculating = () => (
    <motion.div
      key="calculating"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-xl mx-auto py-32 px-6 text-center w-full flex flex-col items-center"
    >
       <div className="w-16 h-16 border-4 border-brand-graphite/10 dark:border-brand-bone/10 border-t-brand-copper rounded-full animate-spin mb-8" />
       <h3 className="text-2xl font-light text-brand-graphite dark:text-brand-bone mb-4">
         Analizando variables del proyecto...
       </h3>
       <div className="space-y-2 text-brand-graphite/60 dark:text-brand-bone/60 text-sm">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>Evaluando madurez del proyecto...</motion.p>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}>Calculando idoneidad de la solución...</motion.p>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8 }}>Generando reporte y score final...</motion.p>
       </div>
    </motion.div>
  );

  const renderResults = () => {
    const { pct } = calculateScore();
    const dim1 = getDimScore([0, 1, 2]); // Madurez del proyecto
    const dim2 = getDimScore([3, 4, 7]); // Alcance e idoneidad
    const dim3 = getDimScore([5, 6, 9]); // Valoración técnica
    const dim4 = getDimScore([8, 9]);    // Claridad decisional

    let tag, tagClass, headline, body, action, whatsappMessage;

    if (pct >= 65) {
      tag = 'Cliente calificado — visita técnica recomendada';
      tagClass = 'bg-[#faeeda] text-[#854F0B] dark:bg-[#854F0B]/20 dark:text-[#faeeda]';
      headline = 'Tu proyecto tiene el perfil que trabajamos en Cota Cero.';
      body = 'Las condiciones del proyecto, la zona, el alcance y la decisión de buscar ejecución profesional hacen que una visita técnica sea el paso natural. Podemos ir a obra, evaluar el soporte y presentarte un presupuesto con criterio real.';
      action = 'Solicitar visita técnica';
      whatsappMessage = `Hola, acabo de hacer el Diagnóstico de Proyecto. Mi nivel de calificación dio ${pct}%. Me gustaría coordinar una visita técnica.`;
    } else if (pct >= 40) {
      tag = 'Proyecto en evaluación — te contactamos por WhatsApp';
      tagClass = 'bg-[#e6f1fb] text-[#185FA5] dark:bg-[#185FA5]/20 dark:text-[#e6f1fb]';
      headline = 'Tu proyecto tiene potencial, pero necesitamos conocer mejor la situación.';
      body = 'Hay puntos del proyecto que conviene aclarar antes de coordinar una visita: plazos, decisores, alcance exacto o zona de obra. Un consultor de Cota Cero te va a escribir para terminar de entender la situación.';
      action = 'Hablar por WhatsApp';
      whatsappMessage = `Hola, acabo de hacer el Diagnóstico de Proyecto y mi score dio ${pct}%. Me dijeron que el proyecto está en evaluación técnica, me gustaría charlar para avanzar.`;
    } else {
      tag = 'Proyecto prematuro o fuera de perfil';
      tagClass = 'bg-[#f1efe8] text-[#5F5E5A] dark:bg-white/10 dark:text-brand-bone';
      headline = 'Tu proyecto no está listo para una visita técnica todavía.';
      body = 'Ya sea porque el proyecto está en etapa muy temprana, el precio es el factor principal o la zona está fuera de nuestro radio operativo, por ahora no podemos garantizar que una visita agregue valor real. Guardá el contacto: cuando el proyecto avance, volvé a hacer el diagnóstico.';
      action = 'Escribir por WhatsApp de todas formas';
      whatsappMessage = `Hola, mi resultado en el diagnóstico fue ${pct}%. Sé que puede ser prematuro, pero me gustaría consultarles algo puntual.`;
    }

    return (
      <motion.div
        key="results"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-3xl mx-auto py-16 px-6 w-full"
      >
        <div className="border border-brand-graphite/20 dark:border-brand-bone/10 rounded-xl p-8 md:p-12 mb-8 bg-brand-bone dark:bg-brand-graphite shadow-sm">
          <div className={`inline-block text-[11px] font-bold tracking-[0.1em] uppercase px-3 py-1.5 rounded-md mb-6 ${tagClass}`}>
            {tag}
          </div>
          <h2 className="text-xl md:text-2xl font-medium text-brand-graphite dark:text-brand-bone mb-4 leading-tight">
            {headline}
          </h2>
          <p className="text-brand-graphite/70 dark:text-brand-bone/70 text-sm leading-relaxed mb-8">
            {body}
          </p>
          <a 
            href={`https://wa.me/${contactData.whatsapp.replace(/\+/g, '')}?text=${encodeURIComponent(whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-bold px-6 py-3 rounded-md border border-brand-copper text-brand-copper hover:bg-brand-copper/10 transition-colors"
          >
            {action} <ArrowRight className="w-4 h-4 ml-1" />
          </a>
        </div>

        <div className="border border-brand-graphite/20 dark:border-brand-bone/10 rounded-xl p-8 md:p-12 bg-white dark:bg-brand-graphite/50 shadow-sm">
          <h3 className="text-[13px] font-bold text-brand-graphite/60 dark:text-brand-bone/60 mb-6 tracking-[0.06em] uppercase">
            Análisis por dimensión
          </h3>
          
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
              <div className="text-sm text-brand-graphite/70 dark:text-brand-bone/70 sm:w-40 shrink-0">Madurez del proyecto</div>
              <div className="flex items-center gap-4 flex-1">
                <div className="flex-1 h-2 bg-brand-graphite/10 dark:bg-brand-bone/10 rounded-full overflow-hidden">
                  <motion.div initial={{ width: 0 }} animate={{ width: `${dim1}%` }} transition={{ duration: 1, delay: 0.1 }} className="h-full bg-brand-copper rounded-full" />
                </div>
                <div className="text-sm font-medium w-10 text-right">{dim1}%</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
              <div className="text-sm text-brand-graphite/70 dark:text-brand-bone/70 sm:w-40 shrink-0">Alcance e idoneidad</div>
              <div className="flex items-center gap-4 flex-1">
                <div className="flex-1 h-2 bg-brand-graphite/10 dark:bg-brand-bone/10 rounded-full overflow-hidden">
                  <motion.div initial={{ width: 0 }} animate={{ width: `${dim2}%` }} transition={{ duration: 1, delay: 0.2 }} className="h-full bg-brand-copper rounded-full" />
                </div>
                <div className="text-sm font-medium w-10 text-right">{dim2}%</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
              <div className="text-sm text-brand-graphite/70 dark:text-brand-bone/70 sm:w-40 shrink-0">Valoración técnica</div>
              <div className="flex items-center gap-4 flex-1">
                <div className="flex-1 h-2 bg-brand-graphite/10 dark:bg-brand-bone/10 rounded-full overflow-hidden">
                  <motion.div initial={{ width: 0 }} animate={{ width: `${dim3}%` }} transition={{ duration: 1, delay: 0.3 }} className="h-full bg-brand-copper rounded-full" />
                </div>
                <div className="text-sm font-medium w-10 text-right">{dim3}%</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
              <div className="text-sm text-brand-graphite/70 dark:text-brand-bone/70 sm:w-40 shrink-0">Claridad decisional</div>
              <div className="flex items-center gap-4 flex-1">
                <div className="flex-1 h-2 bg-brand-graphite/10 dark:bg-brand-bone/10 rounded-full overflow-hidden">
                  <motion.div initial={{ width: 0 }} animate={{ width: `${dim4}%` }} transition={{ duration: 1, delay: 0.4 }} className="h-full bg-brand-copper rounded-full" />
                </div>
                <div className="text-sm font-medium w-10 text-right">{dim4}%</div>
              </div>
            </div>
          </div>

          <div className="h-px bg-brand-graphite/10 dark:bg-brand-bone/10 my-8" />

          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
            <div className="text-sm font-bold text-brand-graphite dark:text-brand-bone sm:w-40 shrink-0">Score total</div>
            <div className="flex items-center gap-4 flex-1">
              <div className="flex-1 h-2 bg-brand-graphite/10 dark:bg-brand-bone/10 rounded-full overflow-hidden">
                <motion.div initial={{ width: 0 }} animate={{ width: `${pct}%` }} transition={{ duration: 1.5, ease: "easeOut" }} className="h-full bg-brand-copper rounded-full" />
              </div>
              <div className="text-sm font-bold text-brand-copper w-10 text-right">{pct}%</div>
            </div>
          </div>
        </div>

        <div className="text-center mt-8 flex flex-col items-center gap-4">
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-bold tracking-widest uppercase text-brand-graphite dark:text-brand-bone hover:text-brand-copper dark:hover:text-brand-copper transition-colors">
            <ArrowLeft className="w-4 h-4" /> Volver al inicio
          </Link>
          <button 
            onClick={() => {
              setCurrentSlide(0);
              setAnswers(new Array(questions.length).fill(null));
              setShowResults(false);
            }}
            className="text-[13px] text-brand-graphite/50 dark:text-brand-bone/50 hover:text-brand-graphite dark:hover:text-brand-bone underline underline-offset-4"
          >
            Reiniciar diagnóstico
          </button>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-brand-bone dark:bg-brand-graphite transition-colors duration-300">
      <Header />
      <main className="flex-1 pt-24 lg:pt-32 flex flex-col items-center justify-center relative">
        <div className="absolute top-0 w-full h-[50vh] bg-gradient-to-b from-brand-graphite/5 to-transparent dark:from-brand-bone/5 pointer-events-none" />
        
        <AnimatePresence mode="wait">
          {currentSlide === -1 && renderIntro()}
          {currentSlide >= 0 && currentSlide < questions.length && !isCalculating && !showResults && renderQuestion(currentSlide)}
          {isCalculating && renderCalculating()}
          {showResults && renderResults()}
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}

