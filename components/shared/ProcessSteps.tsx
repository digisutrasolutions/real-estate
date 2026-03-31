'use client';

import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';

interface Step {
  number: number;
  icon: keyof typeof Icons;
  title: string;
  description: string;
}

interface ProcessStepsProps {
  steps: Step[];
  title?: string;
  subtitle?: string;
}

export default function ProcessSteps({
  steps,
  title,
  subtitle,
}: ProcessStepsProps) {
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

      <div className="space-y-8">
        {steps.map((step, index) => {
          const Icon = Icons[step.icon] as React.ComponentType<{ className?: string }>;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative flex gap-6"
            >
              {/* Connecting line */}
              {index !== steps.length - 1 && (
                <div className="absolute left-10 top-24 w-1 bg-gradient-to-b from-[#f66b05] to-transparent" />
              )}

              {/* Step number circle */}
              <div className="relative z-10 flex-shrink-0">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-[#2c1d14] to-[#7f5d43] text-white shadow-lg">
                  <span className="text-2xl font-bold">{step.number}</span>
                </div>
              </div>

              {/* Step content */}
              <div className="flex-1 pt-2">
                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-white p-3 shadow-md">
                    <Icon className="h-6 w-6 text-[#f66b05]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-[#2f3a4a]">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-slate-600">{step.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
