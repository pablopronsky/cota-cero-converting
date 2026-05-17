import Image from 'next/image';
import { contactData } from '@/data/contact';
import { products } from '@/data/siteContent';

export function Products() {
  const generateWhatsAppLink = (productName: string) => {
    const text = encodeURIComponent(`Hola, quiero consultar por ${productName.toLowerCase()} en COTA CERO.`);
    return `${contactData.whatsappLink}?text=${text}`;
  };

  return (
    <section id="productos" className="bg-brand-bone dark:bg-brand-graphite py-24 lg:py-32 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <header className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-brand-graphite/10 dark:border-brand-bone/10 pb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-6">
               <span className="w-1.5 h-1.5 bg-brand-copper" />
               <span className="text-[10px] uppercase tracking-[0.24em] text-brand-copper font-bold">
                 Portafolio
               </span>
            </div>
            <h2 className="text-3xl md:text-[45px] leading-tight tracking-[0.02em] font-light text-brand-black dark:text-brand-bone">
              Superficies y terminaciones <br className="hidden md:block" />
              <strong className="font-[800]">para obra, hogar y espacios comerciales.</strong>
            </h2>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {products.map((product) => (
            <article key={product.id} className="group cursor-pointer">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-brand-graphite/5 dark:bg-brand-bone/5 mb-6">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              <div className="flex justify-between items-start gap-4">
                <div>
                  <h3 className="text-sm tracking-[0.16em] uppercase font-bold text-brand-black dark:text-brand-bone mb-3">
                    {product.title}
                  </h3>
                  <p className="text-[13px] text-brand-graphite/70 dark:text-brand-bone/70 text-balance">
                    {product.description}
                  </p>
                </div>
                
                <a
                  href={generateWhatsAppLink(product.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 w-8 h-8 flex items-center justify-center border border-brand-copper/30 text-brand-copper hover:bg-brand-copper hover:text-brand-bone dark:hover:text-brand-graphite transition-colors"
                  aria-label={`Consultar por ${product.title}`}
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
