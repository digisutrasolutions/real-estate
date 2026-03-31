'use client';

import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Home, Users, Zap } from 'lucide-react';
import { propertyService } from '@/utils/propertyService';

const statVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5 },
  },
};

export default function QuickStatsBanner() {
  const stats = useMemo(() => {
    const all = propertyService.getAllProperties();
    const recentlyAdded = propertyService.getRecentlyAdded(all.length);
    const hotProperties = propertyService.getHotProperties(all.length).filter((property) => property.recentViews >= 10);
    const viewingNow = all.reduce((total, property) => total + property.recentViews, 0);

    return [
      {
        icon: TrendingUp,
        label: 'Recently Added',
        value: recentlyAdded.length.toLocaleString('en-IN'),
        suffix: 'Properties',
      },
      {
        icon: Users,
        label: 'Viewing Activity',
        value: viewingNow.toLocaleString('en-IN'),
        suffix: 'Current Views',
      },
      {
        icon: Home,
        label: 'Total Inventory',
        value: all.length.toLocaleString('en-IN'),
        suffix: 'Listed',
      },
      {
        icon: Zap,
        label: 'Hot Properties',
        value: hotProperties.length.toLocaleString('en-IN'),
        suffix: 'Trending Now',
      },
    ];
  }, []);

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
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                variants={statVariants}
                className="text-center p-4 rounded-lg hover:bg-white/50 transition"
              >
                <div className="flex justify-center mb-3">
                  <div className="p-3 rounded-full bg-[#f66b05]/10">
                    <Icon className="h-6 w-6 text-[#f66b05]" />
                  </div>
                </div>
                <p className="text-xs text-slate-600 mb-2">{stat.label}</p>
                <p className="text-2xl md:text-3xl font-bold text-slate-900">{stat.value}</p>
                <p className="text-xs text-slate-500 mt-2">{stat.suffix}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
