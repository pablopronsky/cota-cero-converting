import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { TrustBar } from '@/components/TrustBar';
import { Products } from '@/components/Products';
import { Carousel } from '@/components/Carousel';
import { Method } from '@/components/Method';
import { Difference } from '@/components/Difference';
import { WoodRestoration } from '@/components/WoodRestoration';
import { Gallery } from '@/components/Gallery';
import { ContactForm } from '@/components/ContactForm';
import { Location } from '@/components/Location';
import { FinalCTA } from '@/components/FinalCTA';
import { Footer } from '@/components/Footer';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Products />
        <Carousel />
        <Method />
        <Difference />
        <WoodRestoration />
        <Gallery />
        <ContactForm />
        <Location />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}

