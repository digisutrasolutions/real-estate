'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import Image from 'next/image';
import ConsultationForm from './ConsultationForm';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ConsultationModal({ isOpen, onClose }: ConsultationModalProps) {
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
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="fixed left-1/2 top-1/2 z-50 w-full max-w-4xl -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
          >
            {/* Close Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              onClick={onClose}
              className="absolute right-4 top-4 z-10 rounded-full p-2 bg-slate-100 hover:bg-slate-200 transition text-slate-700"
            >
              <X className="h-5 w-5" />
            </motion.button>

            <div className="grid md:grid-cols-2 gap-0">
              {/* Left side - Image */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.4 }}
                className="relative hidden md:block bg-gradient-to-br from-[#2c1d14] via-[#7f5d43] to-[#b58c68] h-full min-h-[600px]"
              >
                {/* Overlay Image */}
                <Image
                  src="/images/consultation-form-image.webp"
                  alt="Luxury Real Estate Consultation"
                  fill
                  className="object-cover opacity-70"
                  priority
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#2c1d14]/90 via-transparent to-transparent" />

                {/* Content overlay */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.4 }}
                  className="absolute inset-0 flex flex-col justify-end p-8"
                >
                  <h2 className="text-3xl font-bold text-white mb-3">
                    Find Your Dream Property
                  </h2>
                  <p className="text-lg text-[#ffd6b5] mb-6">
                    Our expert advisors are ready to help you discover the perfect property tailored to your needs.
                  </p>

                  {/* Benefits */}
                  <div className="space-y-3">
                    {[
                      '✓ Personalized property recommendations',
                      '✓ Expert legal & financial guidance',
                      '✓ Transparent pricing & documentation',
                      '✓ End-to-end support',
                    ].map((benefit, idx) => (
                      <motion.p
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + idx * 0.1 }}
                        className="text-sm text-white/90 flex items-center gap-2"
                      >
                        {benefit}
                      </motion.p>
                    ))}
                  </div>
                </motion.div>
              </motion.div>

              {/* Right side - Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.4 }}
                className="p-8 md:p-10"
              >
                {/* Mobile Image (visible only on small screens) */}
                <div className="md:hidden mb-6 rounded-lg overflow-hidden h-48 relative">
                  <Image
                    src="/images/consultation-form-image.png"
                    alt="Luxury Real Estate Consultation"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Form header */}
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="mb-6"
                >
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    Get Your Free Consultation
                  </h3>
                  <p className="text-slate-600 text-sm">
                    Fill in your details and our team will contact you within 2 hours.
                  </p>
                </motion.div>

                {/* Form */}
                <ConsultationForm onSuccess={onClose} />

                {/* Footer note */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="text-xs text-slate-500 text-center mt-4"
                >
                  We respect your privacy. Your information is safe with us.
                </motion.p>
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
