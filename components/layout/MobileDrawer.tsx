'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  navigation: Array<{ label: string; href: string }>;
  onConsultationClick?: () => void;
}

export default function MobileDrawer({ isOpen, onClose, navigation, onConsultationClick }: MobileDrawerProps) {
  // Prevent background scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Close drawer when link is clicked
  const handleLinkClick = () => {
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-black/50"
            aria-hidden="true"
          />

          {/* Drawer */}
          <motion.div
            key="drawer"
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed left-0 top-0 z-50 h-screen w-full max-w-sm overflow-y-auto bg-white"
          >
            {/* Header with close button */}
            <div className="sticky top-0 flex items-center justify-between border-b border-slate-200 bg-white px-4 py-4">
              <span className="text-lg font-semibold text-slate-900">Menu</span>
              <button
                onClick={onClose}
                aria-label="Close menu"
                className="inline-flex rounded-full p-2 text-slate-700 hover:bg-slate-100 hover:text-slate-900 transition"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Navigation links */}
            <nav className="border-b border-slate-200 px-4 py-4">
              <motion.ul
                initial="hidden"
                animate="visible"
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.08,
                      delayChildren: 0.1,
                    },
                  },
                }}
                className="grid gap-2"
              >
                {navigation.map((item) => (
                  <motion.li
                    key={item.label}
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
                    }}
                  >
                    <Link
                      href={item.href}
                      onClick={handleLinkClick}
                      className="block rounded-lg px-4 py-3 text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition"
                    >
                      {item.label}
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>
            </nav>

            {/* Action buttons */}
            <div className="space-y-3 px-4 py-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.35 }}
              >
                <Link
                  href="/list-property"
                  onClick={handleLinkClick}
                  className="block w-full rounded-full border border-slate-300 px-4 py-3 text-center text-sm font-semibold text-slate-700 transition hover:border-slate-900 hover:text-slate-900 hover:bg-slate-50"
                >
                  List your property
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.45 }}
              >
                <button
                  onClick={onConsultationClick}
                  className="block w-full rounded-full bg-[#f66b05] px-4 py-3 text-center text-sm font-semibold text-white shadow transition hover:bg-[#e65f03]"
                >
                  Get consultation
                </button>
              </motion.div>
            </div>

            {/* Contact info */}
            <div className="border-t border-slate-200 px-4 py-4 text-xs text-slate-600">
              <p className="mb-2 font-semibold text-slate-700">Contact us</p>
              <p className="mb-1">
                <a href="tel:+919876543210" className="hover:text-slate-900 transition">
                  +91 9876543210
                </a>
              </p>
              <p>
                <a href="mailto:hello@realsutra.com" className="hover:text-slate-900 transition">
                  hello@realsutra.com
                </a>
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
