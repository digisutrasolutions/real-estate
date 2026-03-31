'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, RotateCcw, Home, Mail } from 'lucide-react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error to monitoring service
    console.error('Application Error:', error);
  }, [error]);

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

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-slate-50 via-white to-red-50">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-gradient-to-br from-red-200/10 to-red-200/5 blur-3xl"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-gradient-to-tr from-slate-200/10 to-slate-200/5 blur-3xl"
          animate={{ scale: [1.2, 1, 1.2] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 py-20 sm:px-6 lg:px-8">
        <motion.div
          className="text-center max-w-2xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Error icon */}
          <motion.div
            variants={itemVariants}
            className="mb-8 inline-flex"
          >
            <motion.div
              className="rounded-full bg-red-100/50 backdrop-blur p-4 sm:p-6"
              animate={{
                x: [0, -10, 10, -10, 0],
              }}
              transition={{
                duration: 0.5,
                repeat: Infinity,
                repeatDelay: 2,
              }}
            >
              <AlertTriangle className="h-12 w-12 sm:h-16 sm:w-16 text-red-500" />
            </motion.div>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4"
          >
            Something Went Wrong
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-slate-600 mb-2"
          >
            We encountered an unexpected error. Our team is notified and working on it.
          </motion.p>

          {/* Error details (in development) */}
          {process.env.NODE_ENV === 'development' && (
            <motion.div
              variants={itemVariants}
              className="mt-6 rounded-lg bg-red-50 border border-red-200 p-4 text-left"
            >
              <p className="text-sm font-semibold text-red-900 mb-2">Error Details (dev only):</p>
              <p className="text-sm text-red-800 font-mono break-words">{error.message}</p>
              {error.digest && (
                <p className="text-xs text-red-700 mt-2">Error ID: {error.digest}</p>
              )}
            </motion.div>
          )}

          {/* Action buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8"
          >
            <button
              onClick={reset}
              className="group relative inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-red-500 to-red-600 px-8 py-4 text-white font-semibold shadow-lg hover:shadow-xl transition overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                <RotateCcw className="h-5 w-5" />
                Try Again
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700"
                initial={{ x: '100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </button>

            <Link
              href="/"
              className="group inline-flex items-center gap-2 rounded-full border-2 border-slate-300 px-8 py-4 text-slate-700 font-semibold hover:border-blue-500 hover:text-blue-600 transition bg-white/50 backdrop-blur"
            >
              <Home className="h-5 w-5" />
              Go Home
            </Link>
          </motion.div>

          {/* Support */}
          <motion.div
            variants={itemVariants}
            className="mt-12 pt-8 border-t border-slate-200"
          >
            <p className="text-slate-600 mb-4">Need help? We're here for you.</p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-red-500 hover:text-red-600 font-semibold transition"
            >
              <Mail className="h-5 w-5" />
              Contact Support
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating error indicators */}
      <div className="absolute inset-0 z-0">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-2 w-2 rounded-full bg-red-400/20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 2 + Math.random() * 1,
              repeat: Infinity,
              delay: Math.random() * 0.5,
            }}
          />
        ))}
      </div>
    </div>
  );
}
