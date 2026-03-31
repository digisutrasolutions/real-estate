'use client';

import { motion } from 'framer-motion';

export default function Loading() {
  const skeletonVariants = {
    animate: {
      opacity: [0.5, 1, 0.5],
      transition: {
        duration: 1.5,
        repeat: Infinity,
      },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
  } as const;

  return (
    <div className="min-h-screen w-full bg-white">
      {/* Top banner skeleton */}
      <motion.div
        className="border-b border-slate-200 bg-gradient-to-r from-slate-100 via-slate-50 to-slate-100"
        variants={skeletonVariants}
        animate="animate"
      >
        <div className="mx-auto max-w-6xl px-4 py-2">
          <div className="flex items-center justify-between gap-4">
            <div className="h-4 w-64 rounded-full bg-slate-200" />
            <div className="h-4 w-32 rounded-full bg-slate-200" />
          </div>
        </div>
      </motion.div>

      {/* Header skeleton */}
      <motion.header
        className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/90"
        variants={skeletonVariants}
        animate="animate"
      >
        <div className="mx-auto max-w-6xl px-4 py-4">
          <div className="flex items-center justify-between gap-6">
            <div className="h-8 w-40 rounded-lg bg-slate-200" />
            <div className="hidden gap-6 md:flex">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="h-4 w-20 rounded-full bg-slate-200" />
              ))}
            </div>
            <div className="hidden gap-3 md:flex">
              <div className="h-10 w-32 rounded-full bg-slate-200" />
              <div className="h-10 w-40 rounded-full bg-slate-200" />
            </div>
            <div className="h-10 w-10 rounded-full bg-slate-200 md:hidden" />
          </div>
        </div>
      </motion.header>

      {/* Main content skeleton */}
      <motion.div
        className="mx-auto max-w-6xl px-4 py-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Hero skeleton */}
        <motion.div
          className="mb-12 space-y-4"
          variants={itemVariants}
        >
          <motion.div
            className="h-12 w-3/4 rounded-lg bg-slate-200"
            variants={skeletonVariants}
            animate="animate"
          />
          <motion.div
            className="h-6 w-full rounded-lg bg-slate-200"
            variants={skeletonVariants}
            animate="animate"
          />
          <motion.div
            className="h-6 w-5/6 rounded-lg bg-slate-200"
            variants={skeletonVariants}
            animate="animate"
          />
        </motion.div>

        {/* Loading indicator with dots */}
        <motion.div
          className="mb-12 flex justify-center gap-2"
          variants={itemVariants}
        >
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="h-3 w-3 rounded-full bg-gradient-to-r from-[#f66b05] to-[#e65f03]"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </motion.div>

        {/* Content grid skeleton */}
        <motion.div
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
        >
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="overflow-hidden rounded-xl border border-slate-200 bg-white"
              variants={itemVariants}
            >
              <motion.div
                className="h-48 w-full bg-gradient-to-br from-slate-200 to-slate-100"
                variants={skeletonVariants}
                animate="animate"
              />
              <div className="space-y-3 p-4">
                <motion.div
                  className="h-4 w-3/4 rounded-full bg-slate-200"
                  variants={skeletonVariants}
                  animate="animate"
                />
                <motion.div
                  className="h-4 w-full rounded-full bg-slate-200"
                  variants={skeletonVariants}
                  animate="animate"
                />
                <motion.div
                  className="h-4 w-2/3 rounded-full bg-slate-200"
                  variants={skeletonVariants}
                  animate="animate"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Animated background gradient */}
      <motion.div
        className="fixed inset-0 -z-10 bg-gradient-to-br from-slate-50 via-white to-slate-100"
        animate={{
          background: [
            'linear-gradient(to bottom right, rgb(248, 250, 252), rgb(255, 255, 255), rgb(241, 245, 249))',
            'linear-gradient(to bottom right, rgb(241, 245, 249), rgb(255, 255, 255), rgb(248, 250, 252))',
            'linear-gradient(to bottom right, rgb(248, 250, 252), rgb(255, 255, 255), rgb(241, 245, 249))',
          ],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  );
}
