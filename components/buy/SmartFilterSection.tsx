'use client';

import { motion } from 'framer-motion';
import { X, ChevronDown, Search } from 'lucide-react';
import { useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import { propertyService, SearchFilters } from '@/utils/propertyService';

const filterGroups = [
  {
    key: 'priceRange',
    name: 'Budget',
    options: [
      { label: 'Rs 0 - Rs 50 L', value: '0-50' },
      { label: 'Rs 50 L - Rs 1.5 Cr', value: '50-150' },
      { label: 'Rs 1.5 Cr - Rs 3 Cr', value: '150-300' },
      { label: 'Rs 3 Cr+', value: '300+' },
    ],
  },
  {
    key: 'propertyType',
    name: 'Property Type',
    options: [
      { label: 'Apartment', value: 'apartment' },
      { label: 'Villa', value: 'villa' },
      { label: 'Bungalow', value: 'bungalow' },
      { label: 'Commercial', value: 'commercial' },
      { label: 'Plot', value: 'plot' },
    ],
  },
  {
    key: 'bedrooms',
    name: 'Bedrooms',
    options: [
      { label: '1 BHK', value: '1' },
      { label: '2 BHK', value: '2' },
      { label: '3 BHK', value: '3' },
      { label: '4+ BHK', value: '4' },
    ],
  },
] as const;

export default function SmartFilterSection() {
  const router = useRouter();
  const [openFilter, setOpenFilter] = useState<string | null>(null);
  const [selectedFilters, setSelectedFilters] = useState<SearchFilters>({});

  const matchCount = useMemo(() => {
    return propertyService.searchProperties(selectedFilters).length;
  }, [selectedFilters]);

  const updateFilter = (key: keyof SearchFilters, value: string) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [key]: prev[key] === value ? '' : value,
    }));
  };

  const clearAllFilters = () => {
    setSelectedFilters({});
  };

  const activeFilters = filterGroups
    .map((group) => {
      const value = selectedFilters[group.key as keyof SearchFilters];
      const option = group.options.find((opt) => opt.value === value);
      if (!option) return null;
      return {
        key: group.key,
        label: option.label,
      };
    })
    .filter(Boolean) as { key: string; label: string }[];

  const openResults = () => {
    const params = new URLSearchParams();
    Object.entries(selectedFilters).forEach(([key, value]) => {
      if (value) {
        params.set(key, value);
      }
    });
    router.push(`/properties${params.toString() ? `?${params.toString()}` : ''}`);
  };

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
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Smart Filters</h2>
              <p className="text-slate-600">
                <span className="font-bold text-[#f66b05]">{matchCount.toLocaleString()}</span> properties match your criteria
              </p>
            </div>
            {activeFilters.length > 0 && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                onClick={clearAllFilters}
                className="w-fit px-4 py-2 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-50 transition"
              >
                Clear All Filters
              </motion.button>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {filterGroups.map((group) => (
              <div key={group.name} className="relative">
                <button
                  onClick={() => setOpenFilter(openFilter === group.name ? null : group.name)}
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
                    className="absolute top-full left-0 right-0 z-20 mt-2 bg-white rounded-lg border border-slate-300 shadow-lg p-3 space-y-2"
                  >
                    {group.options.map((option) => {
                      const isSelected = selectedFilters[group.key as keyof SearchFilters] === option.value;
                      return (
                        <button
                          key={option.value}
                          type="button"
                          onClick={() => updateFilter(group.key as keyof SearchFilters, option.value)}
                          className={`w-full text-left p-2 rounded transition ${
                            isSelected
                              ? 'bg-[#f66b05]/10 border border-[#f66b05]/30 text-[#f66b05]'
                              : 'hover:bg-slate-50 text-slate-700 border border-transparent'
                          }`}
                        >
                          {option.label}
                        </button>
                      );
                    })}
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {activeFilters.length > 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-wrap gap-2 mb-6">
            {activeFilters.map((filter) => (
              <motion.div
                key={filter.key}
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#f66b05]/10 border border-[#f66b05]/30 text-[#f66b05] text-sm font-medium"
              >
                {filter.label}
                <button
                  type="button"
                  onClick={() => updateFilter(filter.key as keyof SearchFilters, selectedFilters[filter.key as keyof SearchFilters] || '')}
                  className="hover:opacity-70"
                >
                  <X className="h-4 w-4" />
                </button>
              </motion.div>
            ))}
          </motion.div>
        )}

        <motion.button
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
          type="button"
          onClick={openResults}
          className="w-full md:w-auto px-6 py-3 rounded-lg bg-gradient-to-r from-[#f66b05] to-[#e65f03] text-white font-semibold hover:shadow-lg transition flex items-center justify-center gap-2"
        >
          <Search className="h-4 w-4" />
          View {matchCount} Matching Properties
        </motion.button>
      </div>
    </section>
  );
}
