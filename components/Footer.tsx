import { Logo } from './Logo';
import { contactData } from '@/data/contact';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-brand-black px-6 py-16 text-brand-bone lg:px-12 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-4">
        {/* Brand */}
        <div className="lg:col-span-1">
          <Logo size="sm" wordColorClass="text-brand-bone" />
          <p className="mt-4 text-[10px] font-bold uppercase tracking-[0.24em] text-brand-stone">
            Superficies y terminaciones
          </p>
          <div className="mt-8 flex gap-6">
            <a href={contactData.instagram} target="_blank" rel="noopener noreferrer" className="text-xs font-bold uppercase tracking-[0.16em] text-brand-bone hover:text-brand-copper">
              Instagram
            </a>
            <a href={contactData.whatsappLink} target="_blank" rel="noopener noreferrer" className="text-xs font-bold uppercase tracking-[0.16em] text-brand-bone hover:text-brand-copper">
              WhatsApp
            </a>
          </div>
        </div>

        {/* Contact Links */}
        <div className="lg:col-span-1">
          <h4 className="mb-6 text-xs font-bold uppercase tracking-[0.18em] text-brand-copper">Contacto</h4>
          <ul className="flex flex-col gap-4 text-sm text-brand-bone/70">
            <li>
              <a href={`mailto:${contactData.email}`} className="hover:text-brand-bone">
                {contactData.email}
              </a>
            </li>
            <li>
              <a href={contactData.whatsappLink} target="_blank" rel="noopener noreferrer" className="hover:text-brand-bone">
                {contactData.whatsapp}
              </a>
            </li>
          </ul>
        </div>

        {/* Location Info */}
        <div className="lg:col-span-1">
          <h4 className="mb-6 text-xs font-bold uppercase tracking-[0.18em] text-brand-copper">Local</h4>
          <ul className="flex flex-col gap-4 text-sm text-brand-bone/70 border-l border-brand-bone/10 pl-4">
            <li>
              <a href={contactData.mapsLink} target="_blank" rel="noopener noreferrer" className="hover:text-brand-bone block leading-relaxed">
                {contactData.address}
              </a>
            </li>
            <li className="flex items-start gap-3 mt-2">
               <span className="mt-1 block h-1.5 w-1.5 shrink-0 bg-brand-copper" />
               <span>{contactData.hours}</span>
            </li>
          </ul>
        </div>
        
        {/* Navigation */}
        <div className="lg:col-span-1 lg:text-right">
           <h4 className="mb-6 text-xs font-bold uppercase tracking-[0.18em] text-brand-copper">Navegación</h4>
           <ul className="flex flex-col gap-4 text-sm text-brand-bone/70 lg:items-end">
            <li><Link href="#productos" className="hover:text-brand-bone">Productos</Link></li>
            <li><Link href="#metodo" className="hover:text-brand-bone">El Método</Link></li>
            <li><Link href="#obras" className="hover:text-brand-bone">Obras Realizadas</Link></li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-16 max-w-7xl border-t border-brand-bone/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-brand-bone/50">
          &copy; {new Date().getFullYear()} COTA CERO. Todos los derechos reservados.
        </p>
        <p className="text-[10px] uppercase tracking-widest text-brand-bone/30">
          Precisión Material · Ejecución Superior
        </p>
      </div>
    </footer>
  );
}
