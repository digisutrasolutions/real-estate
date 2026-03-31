'use client';

import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';

interface Feature {
  icon: keyof typeof Icons;
  title: string;
  description: string;
}

interface FeaturesGridProps {
  features: Feature[];
  columns?: 2 | 3 | 4;
  title?: string;
  subtitle?: string;
}

export default function FeaturesGrid({
  features,
  columns = 3,
  title,
  subtitle,
}: FeaturesGridProps) {
  const columnClass = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-3',
    4: 'md:grid-cols-4',
  };

  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:py-24">
      {(title || subtitle) && (
        <div className="mb-12 text-center">
          {subtitle && (
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-[#f66b05]">
              {subtitle}
            </p>
          )}
          {title && (
            <h2 className="text-3xl font-bold text-[#2f3a4a] sm:text-4xl">
              {title}
            </h2>
          )}
        </div>
      )}

      <div className={`grid gap-8 sm:grid-cols-2 ${columnClass[columns]}`}>
        {features.map((feature, index) => {
          const Icon = Icons[feature.icon] as React.ComponentType<{ className?: string }>;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group rounded-lg border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:border-[#f66b05] hover:shadow-lg"
            >
              <div className="mb-4 inline-block rounded-lg bg-gradient-to-br from-[#2c1d14] to-[#7f5d43] p-3">
                <Icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-[#2f3a4a]">
                {feature.title}
              </h3>
              <p className="text-slate-600">{feature.description}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
