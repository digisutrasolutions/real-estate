'use client';

import { motion } from 'framer-motion';
import { CheckCircle2, Clock, FileCheck, Percent, Shield, HomeIcon } from 'lucide-react';

const buyingSteps = [
  {
    number: 1,
    icon: SearchIcon,
    title: 'Search & Browse',
    description: 'Explore properties using smart filters, view 360° tours, and get insights on neighborhoods',
    timeline: '1-3 Days',
    checklist: ['Filter by budget', 'View virtual tours', 'Compare properties'],
  },
  {
    number: 2,
    icon: CalendarIcon,
    title: 'Site Visit',
    description: 'Schedule property visits with our expert agents who provide comprehensive guidance',
    timeline: '1-2 Days',
    checklist: ['Schedule visit', 'Meet agent', 'Inspect property'],
  },
  {
    number: 3,
    icon: ShieldCheckIcon,
    title: 'Legal Verification',
    description: 'Complete legal review and title clearance with full transparency and documentation',
    timeline: '5-7 Days',
    checklist: ['Title check', 'Legal review', 'NOC verification'],
  },
  {
    number: 4,
    icon: DollarSignIcon,
    title: 'Negotiation',
    description: 'Discuss pricing, finalize terms, and sign the purchase agreement',
    timeline: '2-3 Days',
    checklist: ['Price negotiation', 'Terms agreement', 'Booking amount'],
  },
  {
    number: 5,
    icon: BankIcon,
    title: 'Financing',
    description: 'Get bank loan approval and complete all financial formalities',
    timeline: '10-15 Days',
    checklist: ['Loan application', 'Bank approval', 'Disbursement'],
  },
  {
    number: 6,
    icon: CheckIcon,
    title: 'Registration',
    description: 'Complete property registration and receive legal ownership documents',
    timeline: '5-10 Days',
    checklist: ['Registration', 'Ownership transfer', 'Document delivery'],
  },
];

function SearchIcon(props: any) {
  return (
    <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  );
}

function CalendarIcon(props: any) {
  return (
    <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  );
}

function ShieldCheckIcon(props: any) {
  return (
    <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function DollarSignIcon(props: any) {
  return (
    <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function BankIcon(props: any) {
  return (
    <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2v4m6-6v4m0 0v4m3-10h2.25a2.25 2.25 0 012.25 2.25v12.75A2.25 2.25 0 0121.75 21H2.25A2.25 2.25 0 010 18.75V4.5A2.25 2.25 0 012.25 2.25H12" />
    </svg>
  );
}

function CheckIcon(props: any) {
  return (
    <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

export default function BuyingJourneyEnhanced() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-slate-50 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Your Buying Journey
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A streamlined 6-step process to make your home buying experience smooth and transparent
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#f66b05] via-[#f66b05] to-transparent mt-16" />

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-4">
            {buyingSteps.map((step, idx) => {
              const StepIcon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {/* Step card */}
                  <div className="bg-white rounded-xl border border-slate-200 p-5 pb-6 hover:border-[#f66b05] hover:shadow-lg transition h-full">
                    {/* Icon circle */}
                    <div className="flex justify-center -mt-10 mb-4">
                      <div className="p-3 rounded-full bg-gradient-to-br from-[#f66b05] to-[#e65f03] text-white shadow-lg">
                        <StepIcon className="h-6 w-6" />
                      </div>
                    </div>

                    {/* Step number badge */}
                    <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#f66b05]/10 flex items-center justify-center">
                      <span className="text-sm font-bold text-[#f66b05]">{step.number}</span>
                    </div>

                    {/* Content */}
                    <h3 className="text-base font-bold text-slate-900 mb-2 text-center">
                      {step.title}
                    </h3>
                    <p className="text-xs text-slate-600 text-center mb-3 line-clamp-3">
                      {step.description}
                    </p>

                    {/* Timeline badge */}
                    <div className="flex items-center justify-center gap-1.5 px-2.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 mb-3">
                      <Clock className="h-3.5 w-3.5 text-blue-600" />
                      <span className="text-xs font-semibold text-blue-900">{step.timeline}</span>
                    </div>

                    {/* Checklist */}
                    <div className="space-y-1.5 pt-3 border-t border-slate-200">
                      {step.checklist.slice(0, 2).map((item, i) => (
                        <div key={i} className="flex items-start gap-1.5 text-xs text-slate-600">
                          <CheckCircle2 className="h-3.5 w-3.5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Total Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 p-6 rounded-xl bg-gradient-to-r from-[#f66b05]/10 to-[#e65f03]/10 border border-[#f66b05]/30"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">End-to-End Timeline</h3>
              <p className="text-slate-600">Complete your buying journey in 25-35 days with dedicated support</p>
            </div>
            <div className="text-right">
              <p className="text-4xl font-bold text-[#f66b05]">25-35 Days</p>
              <p className="text-sm text-slate-600">Average completion time</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
