'use client';

import { motion } from 'framer-motion';

interface Stat {
  label: string;
  value: string;
  suffix?: string;
}

interface StatisticsSectionProps {
  stats: Stat[];
  title?: string;
  description?: string;
}

export default function StatisticsSection({
  stats,
  title,
  description,
}: StatisticsSectionProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#2c1d14] via-[#7f5d43] to-[#b58c68] text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_35%,rgba(248,213,176,0.2),transparent_42%)]"
      />

      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:py-24">
        {(title || description) && (
          <div className="mb-12 text-center">
            {title && <h2 className="mb-4 text-3xl font-bold sm:text-4xl">{title}</h2>}
            {description && <p className="text-lg text-white/90">{description}</p>}
          </div>
        )}

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl font-bold sm:text-5xl">
                {stat.value}
                {stat.suffix}
              </div>
              <p className="mt-2 text-white/80">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
