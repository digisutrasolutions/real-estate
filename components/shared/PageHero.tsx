'use client';

import { motion } from 'framer-motion';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  backgroundGradient?: string;
  children?: React.ReactNode;
}

export default function PageHero({
  title,
  subtitle,
  description,
  backgroundGradient = 'from-[#2c1d14] via-[#7f5d43] to-[#b58c68]',
  children,
}: PageHeroProps) {
  return (
    <div className={`relative isolate overflow-hidden bg-gradient-to-r ${backgroundGradient} text-white`}>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_35%,rgba(248,213,176,0.3),transparent_42%),radial-gradient(circle_at_88%_50%,rgba(57,34,20,0.3),transparent_45%)]"
      />

      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:py-24 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {subtitle && (
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-[#f66b05]">
              {subtitle}
            </p>
          )}
          <h1 className="mb-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {description && (
            <p className="mx-auto max-w-2xl text-lg text-white/90 sm:text-xl">
              {description}
            </p>
          )}
        </motion.div>

        {children && <div className="mt-12">{children}</div>}
      </div>
    </div>
  );
}
