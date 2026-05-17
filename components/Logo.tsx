'use client';
import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

interface LogoProps {
  className?: string; // Container classes
  wordColorClass?: string; // Kept for backwards compatibility, but we will mostly rely on theme and image switching
  size?: 'sm' | 'md' | 'lg' | 'xl';
  withDescriptor?: boolean;
}

export function Logo({ className, size = 'md', withDescriptor = false, wordColorClass }: LogoProps) {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  const dimensions = {
    sm: { width: 150, height: 28 }, // Assuming approximate ratio, adjust as needed
    md: { width: 220, height: 42 },
    lg: { width: 300, height: 56 },
    xl: { width: 400, height: 75 },
  };

  const dim = dimensions[size];

  // If we are in mobile menu and it's open, the wordColorClass might be forcing it to be light
  // (e.g. 'text-brand-bone'). We can check if wordColorClass includes 'brand-bone' to force negative logo.
  const isForcedWhite = wordColorClass?.includes('text-brand-bone') && !wordColorClass?.includes('dark:text-brand-bone');

  if (!mounted) {
    return (
      <div 
        className={cn("relative", className)} 
        style={{ width: dim.width, height: dim.height }}
      />
    );
  }

  const isDark = resolvedTheme === 'dark' || isForcedWhite;

  const src = isDark
    ? (withDescriptor ? '/cota_cero_logo_negativo_con_descriptor_outline.svg' : '/cota_cero_logo_negativo_outline.svg')
    : (withDescriptor ? '/cota_cero_logo_con_descriptor_outline.svg' : '/cota_cero_logo_principal_outline.svg');

  return (
    <div className={cn("inline-flex items-center justify-center", className)}>
      <Image 
        src={src} 
        alt="Cota Cero Logo" 
        width={dim.width} 
        height={dim.height} 
        className="object-contain"
        priority
      />
    </div>
  );
}

