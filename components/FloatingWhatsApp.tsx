'use client';
import { MessageCircle } from 'lucide-react';
import { contactData } from '@/data/contact';
import { motion, useScroll, useMotionValueEvent } from 'motion/react';
import { useState } from 'react';

export function FloatingWhatsApp() {
  const { scrollY } = useScroll();
  const [isVisible, setIsVisible] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    // Show after scrolling down 300px
    if (latest > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  });

  return (
    <motion.a
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: isVisible ? 1 : 0, opacity: isVisible ? 1 : 0 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      href={contactData.whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_16px_32px_rgba(37,211,102,0.3)] hover:bg-[#20ba56] transition-colors duration-300 md:bottom-10 md:right-10"
      aria-label="Escribir por WhatsApp"
    >
      <MessageCircle className="h-7 w-7" />
    </motion.a>
  );
}
