'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Home, Search } from 'lucide-react';

export default function NotFound() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
      },
    },
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-gradient-to-br from-[#f66b05]/10 to-[#f66b05]/5 blur-3xl"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 180] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-gradient-to-tr from-[#2c1d14]/10 to-[#7f5d43]/5 blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], rotate: [180, 90, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 py-20 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* 404 Number with animation */}
          <motion.div
            variants={itemVariants}
            className="mb-8"
          >
            <div className="relative inline-block">
              <motion.div
                className="text-8xl sm:text-9xl font-black bg-gradient-to-r from-[#f66b05] via-[#e65f03] to-[#f66b05] bg-clip-text text-transparent"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                404
              </motion.div>
              <motion.div
                className="absolute -top-2 -right-4 h-6 w-6 rounded-full bg-[#f66b05]"
                variants={floatingVariants}
                animate="animate"
              />
              <motion.div
                className="absolute -bottom-4 -left-8 h-4 w-4 rounded-full bg-[#7f5d43]"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
              />
            </div>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4"
          >
            Page Not Found
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-slate-600 mb-8 max-w-md mx-auto text-center"
          >
            The property you're looking for seems to have listed elsewhere. Let's get you back on track.
          </motion.p>

          {/* Quick actions */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <Link
              href="/"
              className="group relative inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#f66b05] to-[#e65f03] px-8 py-4 text-white font-semibold shadow-lg hover:shadow-xl transition overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Home className="h-5 w-5" />
                Go Home
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#e65f03] to-[#f66b05]"
                initial={{ x: '100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </Link>

            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full border-2 border-slate-300 px-8 py-4 text-slate-700 font-semibold hover:border-[#f66b05] hover:text-[#f66b05] transition bg-white/50 backdrop-blur"
            >
              <Search className="h-5 w-5" />
              Get Help
              <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition" />
            </Link>
          </motion.div>

          {/* Suggestions */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto"
          >
            {[
              { label: 'Browse Properties', href: '/buy' },
              { label: 'For Rent', href: '/rent' },
              { label: 'Developments', href: '/developments' },
            ].map((item, idx) => (
              <motion.div
                key={item.href}
                whileHover={{ y: -4 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 + idx * 0.1 }}
              >
                <Link
                  href={item.href}
                  className="block rounded-lg border border-slate-200 bg-white/50 backdrop-blur p-4 text-slate-700 font-medium hover:border-[#f66b05] hover:bg-[#f66b05]/5 transition"
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Floating dots background pattern */}
      <div className="absolute inset-0 z-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-1 w-1 rounded-full bg-[#f66b05]/20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 0.5,
            }}
          />
        ))}
      </div>
    </div>
  );
}
