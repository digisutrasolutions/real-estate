'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: 'Can I get a home loan without pre-approval?',
    answer: 'We strongly recommend getting pre-approval before house hunting. Pre-approval shows sellers you\'re a serious buyer and helps you know your exact budget. Our team can guide you through the loan process with our partner banks.',
  },
  {
    question: 'What documents do I need for buying a property?',
    answer: 'Essential documents include PAN card, Aadhar card, bank statements (last 6 months), income proof, employment letter, and identity proof. For NRIs, additional documents like passport and visa are required. Our legal team will provide a complete checklist.',
  },
  {
    question: 'What is the booking amount and when do I pay it?',
    answer: 'The booking amount is typically 5-10% of the property price, paid after agreement. It\'s held in escrow and adjusted against your final payment. Once signed, you get a legal receipt and 30 days to arrange finance.',
  },
  {
    question: 'How much EMI can I afford?',
    answer: 'Use our EMI calculator to determine affordability. Generally, banks lend up to 75-80% of the property value. Your EMI should not exceed 40-50% of your monthly income. Our loan specialists can help you understand your borrowing capacity.',
  },
  {
    question: 'What if there are legal issues with the property?',
    answer: 'Every property undergoes rigorous legal verification including title clearance, NOC checks, and encumbrance certification. We guarantee 100% legal authenticity. If any issues arise, we handle resolution and provide complete indemnity.',
  },
  {
    question: 'Can I negotiate the property price?',
    answer: 'Yes, property prices are negotiable. Our expert agents help you understand market rates, property condition, and fair pricing. We negotiate on your behalf to get the best deal while maintaining transparent communication.',
  },
  {
    question: 'What happens after registration?',
    answer: 'Post-registration, you receive the original sale deed, property documents, and legal ownership. We provide post-purchase support including property insurance guidance, maintenance support, and future transaction assistance.',
  },
  {
    question: 'How are taxes and charges calculated?',
    answer: 'Costs include registration fee (4-6%), stamp duty (3-5%), and land transfer tax. We provide a detailed cost breakdown before you decide. Our team ensures all taxes are paid correctly and you get proper receipts.',
  },
];

export default function FAQSection() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);

  return (
    <section className="py-16 md:py-20 bg-white border-t border-b border-slate-200">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 flex items-center justify-center gap-2">
            <HelpCircle className="h-8 w-8 text-[#f66b05]" />
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Get answers to common questions about buying properties with RealSutra
          </p>
        </motion.div>

        <motion.div
          className="space-y-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.05,
              },
            },
          }}
        >
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="border border-slate-200 rounded-lg overflow-hidden hover:border-[#f66b05] transition"
            >
              <button
                onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                className="w-full px-6 py-4 text-left flex items-center justify-between bg-white hover:bg-slate-50/50 transition"
              >
                <span className="font-semibold text-slate-900 text-lg pr-4">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: expandedFaq === idx ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className="h-5 w-5 text-slate-600" />
                </motion.div>
              </button>

              <AnimatePresence>
                {expandedFaq === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 py-4 bg-slate-50 border-t border-slate-200"
                  >
                    <p className="text-slate-700 leading-relaxed text-base">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 p-6 rounded-xl bg-gradient-to-r from-[#f66b05]/10 to-[#e65f03]/10 border border-[#f66b05]/30 text-center"
        >
          <p className="text-slate-900 font-semibold mb-3">Didn't find your answer?</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-lg bg-gradient-to-r from-[#f66b05] to-[#e65f03] text-white font-semibold hover:shadow-lg transition"
          >
            Chat with Our Experts
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
