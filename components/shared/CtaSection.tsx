'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface CtaSectionProps {
  title: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  variant?: 'dark' | 'light';
}

export default function CtaSection({
  title,
  description,
  primaryLabel = 'Get Started',
  primaryHref = '/contact',
  secondaryLabel = 'Learn More',
  secondaryHref = '/about',
  variant = 'dark',
}: CtaSectionProps) {
  const isDark = variant === 'dark';

  return (
    <section
      className={`relative overflow-hidden py-16 sm:py-24 ${
        isDark
          ? 'bg-gradient-to-r from-[#2c1d14] via-[#7f5d43] to-[#b58c68] text-white'
          : 'bg-white'
      }`}
    >
      <div
        aria-hidden
        className={`pointer-events-none absolute inset-0 ${
          isDark
            ? 'bg-[radial-gradient(circle_at_12%_35%,rgba(248,213,176,0.2),transparent_42%)]'
            : 'bg-[radial-gradient(circle_at_88%_50%,rgba(255,107,53,0.1),transparent_45%)]'
        }`}
      />

      <div className="relative mx-auto max-w-4xl px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-4 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            {title}
          </h2>
          {description && (
            <p
              className={`mb-8 text-lg ${
                isDark ? 'text-white/90' : 'text-slate-600'
              }`}
            >
              {description}
            </p>
          )}

          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link
              href={primaryHref}
              className="group inline-flex items-center justify-center rounded-lg bg-[#f66b05] px-8 py-3 font-semibold text-white transition duration-300 hover:bg-[#e55a00]"
            >
              {primaryLabel}
              <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" />
            </Link>
            <Link
              href={secondaryHref}
              className={`inline-flex items-center justify-center rounded-lg border-2 px-8 py-3 font-semibold transition duration-300 ${
                isDark
                  ? 'border-white/30 text-white hover:border-[#f66b05] hover:text-[#f66b05]'
                  : 'border-[#f66b05] text-[#f66b05] hover:bg-[#f66b05] hover:text-white'
              }`}
            >
              {secondaryLabel}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
