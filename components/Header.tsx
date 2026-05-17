'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Logo } from './Logo';
import { ThemeToggle } from './ThemeToggle';
import { contactData } from '@/data/contact';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'motion/react';

const NAV_LINKS = [
  { name: 'Productos', href: '#productos' },
  { name: 'El Método', href: '#metodo' },
  { name: 'Obras', href: '#obras' },
  { name: 'Contacto', href: '#contacto' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-40 transition-all duration-300',
        isScrolled ? 'bg-brand-bone/95 dark:bg-[#2b2d2f]/95 py-3 shadow-md backdrop-blur-md' : 'bg-transparent py-5 lg:py-6'
      )}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 lg:px-12">
        <Link href="/" className="relative z-50">
          <Logo size="sm" wordColorClass={isMobileMenuOpen ? 'text-brand-bone' : 'text-brand-graphite dark:text-brand-bone'} />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 md:flex">
          <div className="flex gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-xs font-bold uppercase tracking-[0.16em] text-brand-graphite dark:text-brand-bone hover:text-brand-copper dark:hover:text-brand-copper transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
          <ThemeToggle />
          <a
            href={contactData.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-brand-copper px-5 py-2.5 text-xs font-bold uppercase tracking-[0.16em] text-brand-copper hover:bg-brand-copper hover:text-brand-bone dark:hover:text-brand-graphite transition-colors"
          >
            WhatsApp
          </a>
        </nav>

        {/* Mobile Toggle & Actions */}
        <div className="md:hidden flex items-center gap-4 relative z-50">
          <ThemeToggle />
          <button
            className={cn(
              "p-2 transition-colors",
              isMobileMenuOpen ? 'text-brand-bone' : 'text-brand-graphite dark:text-brand-bone'
            )}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 flex flex-col justify-center bg-brand-black px-6 pt-24 pb-12"
          >
            <nav className="flex flex-col gap-8">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-light uppercase tracking-wider text-brand-bone"
                >
                  {link.name}
                </Link>
              ))}
              <div className="mt-8">
                <a
                  href={contactData.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block border border-brand-copper px-6 py-3 text-xs font-bold uppercase tracking-[0.16em] text-brand-copper"
                >
                  Escribir por WhatsApp
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
