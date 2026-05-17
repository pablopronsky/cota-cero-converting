import type {Metadata} from 'next';
import { Montserrat } from 'next/font/google';
import { ThemeProvider } from '@/components/ThemeProvider';
import './globals.css';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
});

export const metadata: Metadata = {
  title: 'COTA CERO — Superficies y Terminaciones',
  description: 'Terminaciones superiores, sin improvisación. Pisos, revestimientos, decks y trabajos en madera con diagnóstico, instalación profesional y control de calidad en obra.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="es" className={`${montserrat.variable} scroll-smooth scroll-pt-24`} suppressHydrationWarning>
      <body className="antialiased font-sans bg-brand-bone text-brand-graphite dark:bg-[#2b2d2f] dark:text-brand-bone transition-colors duration-300" suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
