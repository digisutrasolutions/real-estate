'use client';

import { motion } from 'framer-motion';
import { Calculator, TrendingDown } from 'lucide-react';
import { useState, useMemo } from 'react';

export default function EMICalculator() {
  const [propertyPrice, setPropertyPrice] = useState(5000000); // 50 Lakh
  const [downPayment, setDownPayment] = useState(1000000); // 10 Lakh
  const [tenure, setTenure] = useState(20); // 20 years
  const [interestRate, setInterestRate] = useState(7.5); // 7.5%

  const emi = useMemo(() => {
    const principal = propertyPrice - downPayment;
    const monthlyRate = interestRate / 100 / 12;
    const totalMonths = tenure * 12;

    if (monthlyRate === 0) {
      return principal / totalMonths;
    }

    return (
      (principal * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
      (Math.pow(1 + monthlyRate, totalMonths) - 1)
    );
  }, [propertyPrice, downPayment, tenure, interestRate]);

  const totalInterest = emi * tenure * 12 - (propertyPrice - downPayment);
  const totalPayment = (propertyPrice - downPayment) + totalInterest;
  const downPaymentPercentage = (downPayment / propertyPrice) * 100;

  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-slate-50 to-white border-y border-slate-200">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 flex items-center justify-center gap-2">
            <Calculator className="h-8 w-8 text-[#f66b05]" />
            EMI Calculator
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Calculate your monthly EMI and understand your loan affordability
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Input Section */}
          <motion.div
            className="md:col-span-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6 bg-white p-6 rounded-xl border border-slate-200">
              {/* Property Price */}
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-3">
                  Property Price: <span className="text-[#f66b05]">₹{(propertyPrice / 100000).toFixed(1)}L</span>
                </label>
                <input
                  type="range"
                  min="1000000"
                  max="100000000"
                  step="100000"
                  value={propertyPrice}
                  onChange={(e) => setPropertyPrice(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#f66b05]"
                />
                <div className="flex justify-between text-xs text-slate-500 mt-2">
                  <span>₹10L</span>
                  <span>₹10Cr</span>
                </div>
              </div>

              {/* Down Payment */}
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-3">
                  Down Payment: <span className="text-[#f66b05]">{downPaymentPercentage.toFixed(1)}%</span>
                </label>
                <input
                  type="range"
                  min="0"
                  max={propertyPrice}
                  step="100000"
                  value={downPayment}
                  onChange={(e) => setDownPayment(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#f66b05]"
                />
                <div className="flex justify-between text-xs text-slate-500 mt-2">
                  <span>₹0</span>
                  <span>₹{(propertyPrice / 100000).toFixed(1)}L</span>
                </div>
              </div>

              {/* Tenure */}
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-3">
                  Tenure: <span className="text-[#f66b05]">{tenure} Years</span>
                </label>
                <input
                  type="range"
                  min="5"
                  max="30"
                  step="1"
                  value={tenure}
                  onChange={(e) => setTenure(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#f66b05]"
                />
                <div className="flex justify-between text-xs text-slate-500 mt-2">
                  <span>5 Yr</span>
                  <span>30 Yr</span>
                </div>
              </div>

              {/* Interest Rate */}
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-3">
                  Interest Rate: <span className="text-[#f66b05]">{interestRate.toFixed(2)}%</span>
                </label>
                <input
                  type="range"
                  min="3"
                  max="12"
                  step="0.1"
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#f66b05]"
                />
                <div className="flex justify-between text-xs text-slate-500 mt-2">
                  <span>3%</span>
                  <span>12%</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Results Section */}
          <motion.div
            className="md:col-span-2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="grid md:grid-cols-2 gap-4">
              {/* Monthly EMI */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="col-span-full p-6 rounded-xl bg-gradient-to-br from-[#f66b05] to-[#e65f03] text-white shadow-lg"
              >
                <p className="text-sm font-semibold opacity-90 mb-2">Monthly EMI</p>
                <p className="text-4xl md:text-5xl font-bold">
                  ₹{(emi / 100000).toFixed(2)}L
                </p>
                <p className="text-sm opacity-75 mt-2">{emi.toLocaleString('en-IN', { maximumFractionDigits: 0 })} per month</p>
              </motion.div>

              {/* Principal Amount */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-6 rounded-xl bg-slate-100 border border-slate-200"
              >
                <p className="text-sm font-semibold text-slate-600 mb-2">Principal Amount</p>
                <p className="text-2xl font-bold text-slate-900">
                  ₹{((propertyPrice - downPayment) / 100000).toFixed(1)}L
                </p>
                <p className="text-xs text-slate-600 mt-2">Amount to be financed</p>
              </motion.div>

              {/* Total Interest */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-6 rounded-xl bg-slate-100 border border-slate-200"
              >
                <p className="text-sm font-semibold text-slate-600 mb-2">Total Interest</p>
                <p className="text-2xl font-bold text-slate-900">
                  ₹{(totalInterest / 100000).toFixed(1)}L
                </p>
                <p className="text-xs text-slate-600 mt-2">Over {tenure} years</p>
              </motion.div>

              {/* Total Amount Payable */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-6 rounded-xl bg-slate-100 border border-slate-200"
              >
                <p className="text-sm font-semibold text-slate-600 mb-2">Total Payable</p>
                <p className="text-2xl font-bold text-slate-900">
                  ₹{(totalPayment / 100000).toFixed(1)}L
                </p>
                <p className="text-xs text-slate-600 mt-2">Principal + Interest</p>
              </motion.div>

              {/* Interest Saved */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-6 rounded-xl bg-slate-100 border border-slate-200"
              >
                <p className="text-sm font-semibold text-slate-600 mb-2">Down Payment</p>
                <p className="text-2xl font-bold text-slate-900">
                  ₹{(downPayment / 100000).toFixed(1)}L
                </p>
                <p className="text-xs text-slate-600 mt-2">{downPaymentPercentage.toFixed(1)}% of property</p>
              </motion.div>

              {/* Loan Amount */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-6 rounded-xl bg-blue-50 border border-blue-200"
              >
                <p className="text-sm font-semibold text-blue-900 mb-2">Loan Amount</p>
                <p className="text-2xl font-bold text-blue-900">
                  ₹{((propertyPrice - downPayment) / 100000).toFixed(1)}L
                </p>
                <p className="text-xs text-blue-700 mt-2">Amount you need to borrow</p>
              </motion.div>
            </div>

            {/* CTA */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full mt-6 px-6 py-3 rounded-lg bg-gradient-to-r from-[#f66b05] to-[#e65f03] text-white font-bold flex items-center justify-center gap-2 hover:shadow-lg transition"
            >
              <TrendingDown className="h-5 w-5" />
              Get Pre-Approved for Loan
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
