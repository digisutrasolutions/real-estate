'use client';

import { motion } from 'framer-motion';
import { X, ChevronDown } from 'lucide-react';
import { useState } from 'react';

const filterGroups = [
  {
    name: 'Budget',
    options: [
      { label: '₹50L - ₹1Cr', value: '50-100' },
      { label: '₹1Cr - ₹2Cr', value: '100-200' },
      { label: '₹2Cr+', value: '200+' },
    ],
  },
  {
    name: 'Property Type',
    options: [
      { label: 'Apartment', value: 'apartment' },
      { label: 'Villa', value: 'villa' },
      { label: 'Bungalow', value: 'bungalow' },
    ],
  },
  {
    name: 'Bedrooms',
    options: [
      { label: '2 BHK', value: '2' },
      { label: '3 BHK', value: '3' },
      { label: '4+ BHK', value: '4' },
    ],
  },
  {
    name: 'Amenities',
    options: [
      { label: 'Pool', value: 'pool' },
      { label: 'Gym', value: 'gym' },
      { label: 'Garden', value: 'garden' },
    ],
  },
];

export default function SmartFilterSection() {
  const [openFilter, setOpenFilter] = useState<string | null>(null);
  const [selectedFilters, setSelectedFilters] = useState<Record<string, string[]>>({});
  const [matchCount, setMatchCount] = useState(8500);

  const toggleFilter = (group: string, value: string) => {
    setSelectedFilters((prev) => {
      const current = prev[group] || [];
      const updated = current.includes(value)
        ? current.filter((v) => v !== value)
        : [...current, value];
      
      const newFilters: Record<string, string[]> = { ...prev };
      if (updated.length === 0) {
        delete newFilters[group];
      } else {
        newFilters[group] = updated;
      }
      return newFilters;
    });
    // Simulate count change
    setMatchCount(Math.floor(Math.random() * 500) + 4500);
  };

  const clearAllFilters = () => {
    setSelectedFilters({});
    setMatchCount(8500);
  };

  const totalSelectedFilters = Object.values(selectedFilters).reduce(
    (sum, filters) => sum + (filters?.length || 0),
    0
  );

  return (
    <section className="py-12 md:py-16 border-b border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                Smart Filters
              </h2>
              <p className="text-slate-600">
                <span className="font-bold text-[#f66b05]">{matchCount.toLocaleString()}</span> properties match your criteria
              </p>
            </div>
            {totalSelectedFilters > 0 && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                onClick={clearAllFilters}
                className="w-fit px-4 py-2 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-50 transition"
              >
                Clear All Filters
              </motion.button>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
            {filterGroups.map((group) => (
              <div key={group.name} className="relative">
                <button
                  onClick={() =>
                    setOpenFilter(openFilter === group.name ? null : group.name)
                  }
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white flex items-center justify-between hover:border-[#f66b05] transition"
                >
                  <span className="font-semibold text-slate-900">{group.name}</span>
                  <ChevronDown
                    className={`h-5 w-5 text-slate-600 transition ${
                      openFilter === group.name ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {openFilter === group.name && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full left-0 right-0 z-20 mt-2 bg-white rounded-lg border border-slate-300 shadow-lg p-3 space-y-2"
                  >
                    {group.options.map((option) => (
                      <label
                        key={option.value}
                        className="flex items-center gap-3 p-2 rounded hover:bg-slate-50 cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          checked={
                            selectedFilters[group.name]?.includes(option.value) || false
                          }
                          onChange={() => toggleFilter(group.name, option.value)}
                          className="w-4 h-4 rounded border-slate-300 text-[#f66b05] cursor-pointer"
                        />
                        <span className="text-slate-700">{option.label}</span>
                      </label>
                    ))}
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Active Filters Display */}
        {totalSelectedFilters > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-wrap gap-2"
          >
            {Object.entries(selectedFilters).map(([group, values]) =>
              values?.map((value) => {
                const option = filterGroups
                  .find((g) => g.name === group)
                  ?.options.find((o) => o.value === value);
                return (
                  <motion.div
                    key={`${group}-${value}`}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#f66b05]/10 border border-[#f66b05]/30 text-[#f66b05] text-sm font-medium"
                  >
                    {option?.label}
                    <button
                      onClick={() => toggleFilter(group, value)}
                      className="hover:opacity-70"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </motion.div>
                );
              })
            )}
          </motion.div>
        )}
      </div>
    </section>
  );
}
