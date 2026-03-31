'use client';

import { motion } from 'framer-motion';
import { Search, MapPin, DollarSign, Home, Users } from 'lucide-react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

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

export default function HeroSearchSection() {
  const router = useRouter();
  const [searchParams, setSearchParams] = useState({
    location: '',
    priceRange: '',
    propertyType: '',
    bedrooms: '',
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();

    const params = new URLSearchParams();
    if (searchParams.location) params.append('location', searchParams.location);
    if (searchParams.priceRange) params.append('priceRange', searchParams.priceRange);
    if (searchParams.propertyType) params.append('propertyType', searchParams.propertyType);
    if (searchParams.bedrooms) params.append('bedrooms', searchParams.bedrooms);

    router.push(`/properties?${params.toString()}`);
  };

  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-24 md:pb-32">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(246,107,5,0.15),transparent_50%),radial-gradient(circle_at_80%_80%,rgba(44,29,20,0.2),transparent_50%)]" />

        <motion.div
          className="absolute -top-40 -left-40 h-80 w-80 rounded-full bg-[#f66b05]/20 blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-32 -right-40 h-96 w-96 rounded-full bg-[#f66b05]/10 blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight"
          >
            Find Your <span className="text-[#f66b05]">Dream Home</span>
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto"
          >
            Discover premium properties across India with transparent pricing and expert guidance
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 mb-12"
        >
          <form onSubmit={handleSearch}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <div className="relative">
                <label className="block text-sm font-semibold text-slate-700 mb-2">Location</label>
                <div className="flex items-center gap-2 px-4 py-3 border border-slate-300 rounded-lg focus-within:border-[#f66b05] focus-within:ring-2 focus-within:ring-[#f66b05]/20 transition">
                  <MapPin className="h-5 w-5 text-slate-400" />
                  <input
                    type="text"
                    placeholder="City or neighborhood"
                    value={searchParams.location}
                    onChange={(e) => setSearchParams({ ...searchParams, location: e.target.value })}
                    className="w-full outline-none bg-transparent text-slate-900 placeholder-slate-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Budget</label>
                <div className="flex items-center gap-2 px-4 py-3 border border-slate-300 rounded-lg focus-within:border-[#f66b05] focus-within:ring-2 focus-within:ring-[#f66b05]/20 transition">
                  <DollarSign className="h-5 w-5 text-slate-400" />
                  <select
                    value={searchParams.priceRange}
                    onChange={(e) => setSearchParams({ ...searchParams, priceRange: e.target.value })}
                    className="w-full outline-none bg-transparent text-slate-900"
                  >
                    <option value="">Any Price</option>
                    <option value="0-50">Rs 0 - Rs 50 L</option>
                    <option value="50-150">Rs 50 L - Rs 1.5 Cr</option>
                    <option value="150-300">Rs 1.5 Cr - Rs 3 Cr</option>
                    <option value="300+">Rs 3 Cr+</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Property Type</label>
                <div className="flex items-center gap-2 px-4 py-3 border border-slate-300 rounded-lg focus-within:border-[#f66b05] focus-within:ring-2 focus-within:ring-[#f66b05]/20 transition">
                  <Home className="h-5 w-5 text-slate-400" />
                  <select
                    value={searchParams.propertyType}
                    onChange={(e) => setSearchParams({ ...searchParams, propertyType: e.target.value })}
                    className="w-full outline-none bg-transparent text-slate-900"
                  >
                    <option value="">Any Type</option>
                    <option value="apartment">Apartment</option>
                    <option value="villa">Villa</option>
                    <option value="bungalow">Bungalow</option>
                    <option value="commercial">Commercial</option>
                    <option value="plot">Plot</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Bedrooms</label>
                <div className="flex items-center gap-2 px-4 py-3 border border-slate-300 rounded-lg focus-within:border-[#f66b05] focus-within:ring-2 focus-within:ring-[#f66b05]/20 transition">
                  <Users className="h-5 w-5 text-slate-400" />
                  <select
                    value={searchParams.bedrooms}
                    onChange={(e) => setSearchParams({ ...searchParams, bedrooms: e.target.value })}
                    className="w-full outline-none bg-transparent text-slate-900"
                  >
                    <option value="">Any BHK</option>
                    <option value="1">1 BHK</option>
                    <option value="2">2 BHK</option>
                    <option value="3">3 BHK</option>
                    <option value="4">4+ BHK</option>
                  </select>
                </div>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-[#f66b05] to-[#e65f03] text-white font-bold rounded-lg flex items-center justify-center gap-2 hover:shadow-lg transition"
            >
              <Search className="h-5 w-5" />
              Search Properties
            </motion.button>
          </form>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap gap-3 justify-center"
        >
          <span className="text-slate-400 text-sm">Popular searches:</span>
          {['Apartments in Bangalore', 'Villas in Mumbai', 'Luxury in Delhi', '3BHK Near Metro'].map((suggestion) => (
            <button
              key={suggestion}
              type="button"
              onClick={() => setSearchParams((prev) => ({ ...prev, location: suggestion }))}
              className="px-4 py-2 rounded-full bg-white/10 text-slate-300 hover:bg-white/20 transition text-sm border border-white/20"
            >
              {suggestion}
            </button>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
