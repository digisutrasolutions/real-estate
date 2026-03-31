'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Home, Users, Zap } from 'lucide-react';

const statVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5 },
  },
};

export default function QuickStatsBanner() {
  const stats = [
    { icon: TrendingUp, label: 'Recently Added', value: '42', suffix: 'Properties' },
    { icon: Users, label: 'Viewing Now', value: '127', suffix: 'Users' },
    { icon: Home, label: 'Premium Homes', value: '8,500', suffix: 'Listed' },
    { icon: Zap, label: 'Hot Properties', value: '15', suffix: 'This Week' },
  ];

  return (
    <section className="relative py-12 md:py-16 bg-gradient-to-r from-slate-50 via-white to-slate-50 border-y border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={idx}
                variants={statVariants}
                className="text-center p-4 rounded-lg hover:bg-white/50 transition"
              >
                <div className="flex justify-center mb-3">
                  <div className="p-3 rounded-full bg-[#f66b05]/10">
                    <Icon className="h-6 w-6 text-[#f66b05]" />
                  </div>
                </div>
                <p className="text-xs text-slate-600 mb-2">{stat.label}</p>
                <p className="text-2xl md:text-3xl font-bold text-slate-900">
                  {stat.value}
                  <span className="ml-2 text-lg text-[#f66b05]">+</span>
                </p>
                <p className="text-xs text-slate-500 mt-2">{stat.suffix}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
