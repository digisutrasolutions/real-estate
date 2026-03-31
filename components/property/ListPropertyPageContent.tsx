'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { CheckCircle, Zap, Users, Clock, ChevronDown } from 'lucide-react';
import ListPropertyForm from './ListPropertyForm';
import { useState } from 'react';

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

const faqItems = [
  {
    question: 'How does the selling process work?',
    answer: 'After you submit your details, our expert team will contact you within 2 hours for a consultation. We\'ll provide a free property valuation, discuss your timeline, and connect you with verified buyers.',
  },
  {
    question: 'How much does it cost to list my property?',
    answer: 'Listing your property with RealSutra is completely FREE. We don\'t charge any listing fees. You only pay commission when your property is sold.',
  },
  {
    question: 'How long does it take to sell?',
    answer: 'Most properties sell within 30-60 days. Our network of verified buyers and expert guidance helps accelerate the selling process.',
  },
  {
    question: 'Do I need any documents to list?',
    answer: 'You just need basic property details to get started. For the actual sale, we\'ll guide you through all required documents including property deed, NOC, and tax receipts.',
  },
  {
    question: 'Is my information safe?',
    answer: 'Yes, 100% secure. We use industry-standard encryption and never share your details without permission. Your privacy is our priority.',
  },
  {
    question: 'Can I modify or delete my listing?',
    answer: 'Of course! You can edit your listing anytime or remove it whenever you want. You have complete control over your property information.',
  },
];

export default function ListPropertyPageContent() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100 pt-20 pb-16">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-gradient-to-br from-[#f66b05]/10 to-[#f66b05]/5 blur-3xl"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-gradient-to-tr from-[#2c1d14]/10 to-[#7f5d43]/5 blur-3xl"
            animate={{ scale: [1.2, 1, 1.2] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 mb-4 leading-tight"
            >
              Sell Your Property Faster
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-xl sm:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto"
            >
              Get expert guidance and connect with verified buyers. FREE property valuation from RealSutra.
            </motion.p>

            {/* Trust Badges */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap justify-center gap-6 sm:gap-8"
            >
              <div className="flex items-center gap-2 text-slate-700">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="font-semibold">5000+ Properties Sold</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="font-semibold">50K+ Happy Customers</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="font-semibold">2-Hour Response Guarantee</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Form Section */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="bg-white rounded-2xl shadow-xl p-8 md:p-10"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                List Your Property
              </h2>
              <p className="text-slate-600 mb-8">
                Share your property details and get a FREE valuation. Our team will contact you within 2 hours.
              </p>
              <ListPropertyForm />
            </motion.div>

            {/* Image & Benefits Section */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="space-y-8"
            >
              {/* Image */}
              <div className="rounded-xl overflow-hidden shadow-lg h-96 relative">
                <Image
                  src="/images/consultation-form-image.png"
                  alt="Sell your property with RealSutra"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Benefits */}
              <div className="grid grid-cols-1 gap-4">
                {[
                  { icon: Zap, title: 'Quick Response', desc: 'Within 2 hours' },
                  { icon: Users, title: 'Verified Buyers', desc: 'Only genuine clients' },
                  { icon: Clock, title: 'Faster Selling', desc: '30-60 days average' },
                  { icon: CheckCircle, title: 'Free Valuation', desc: 'No hidden charges' },
                ].map((benefit, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + idx * 0.1 }}
                    className="flex gap-4 p-4 rounded-lg bg-gradient-to-r from-[#f66b05]/5 to-transparent border border-[#f66b05]/20"
                  >
                    <benefit.icon className="h-6 w-6 text-[#f66b05] flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-slate-900">{benefit.title}</p>
                      <p className="text-sm text-slate-600">{benefit.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why RealSutra Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="mx-auto max-w-6xl">
          <motion.div
            className="text-center mb-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h2
              variants={itemVariants}
              className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4"
            >
              Why Choose RealSutra?
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-lg text-slate-600 max-w-2xl mx-auto"
            >
              15+ years of real estate expertise combined with modern technology
            </motion.p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {[
              {
                title: 'Expert Guidance',
                description: 'Our experienced team provides personalized selling strategy for maximum price realization.',
              },
              {
                title: 'Large Buyer Network',
                description: 'Access to thousands of verified buyers actively looking for properties in your area.',
              },
              {
                title: 'Transparent Process',
                description: 'No hidden charges or surprise fees. Understand every step of the selling process.',
              },
              {
                title: 'End-to-End Support',
                description: 'From valuation to legal documentation, we handle everything for you.',
              },
              {
                title: 'Technology Driven',
                description: 'AI-powered property recommendations and market analysis for better pricing.',
              },
              {
                title: '24/7 Support',
                description: 'Our team is always available to answer your questions and provide assistance.',
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="bg-white p-8 rounded-xl border border-slate-200 hover:border-[#f66b05] transition hover:shadow-lg"
              >
                <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <motion.div
            className="text-center mb-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h2
              variants={itemVariants}
              className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4"
            >
              Frequently Asked Questions
            </motion.h2>
          </motion.div>

          <motion.div
            className="space-y-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            {faqItems.map((item, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="border border-slate-200 rounded-lg overflow-hidden hover:border-[#f66b05] transition"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between bg-white hover:bg-slate-50 transition"
                >
                  <span className="font-semibold text-slate-900 text-lg">{item.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 text-slate-600 transition ${
                      expandedFaq === idx ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {expandedFaq === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 py-4 bg-slate-50 border-t border-slate-200"
                  >
                    <p className="text-slate-600 text-base leading-relaxed">{item.answer}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#f66b05] to-[#e65f03]">
        <motion.div
          className="mx-auto max-w-3xl text-center text-white"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl font-bold mb-4"
          >
            Ready to Sell Your Property?
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-white/90 mb-8"
          >
            Get your property valued today and start your selling journey with RealSutra.
          </motion.p>
          <motion.button
            variants={itemVariants}
            onClick={() => (document.querySelector('input[name="fullName"]') as HTMLInputElement)?.focus()}
            className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-semibold text-[#f66b05] hover:bg-slate-50 transition shadow-lg hover:shadow-xl"
          >
            Get Free Valuation
            <span className="text-xl">→</span>
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
}
