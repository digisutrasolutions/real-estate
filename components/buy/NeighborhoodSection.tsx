'use client';

import { motion } from 'framer-motion';
import { MapPin, School, Heart, Train, Utensils } from 'lucide-react';
import { useState } from 'react';

const neighborhoods = [
  {
    city: 'Bangalore',
    neighborhoods: [
      { name: 'Indiranagar', schools: 4.8, healthcare: 4.6, transport: 4.9, dining: 4.7, trend: '↑ 12%' },
      { name: 'Koramangala', schools: 4.5, healthcare: 4.4, transport: 4.8, dining: 4.9, trend: '↑ 8%' },
      { name: 'Whitefield', schools: 4.3, healthcare: 4.5, transport: 4.6, dining: 4.4, trend: '↑ 15%' },
    ],
  },
  {
    city: 'Mumbai',
    neighborhoods: [
      { name: 'Bandra', schools: 4.9, healthcare: 4.8, transport: 4.7, dining: 4.9, trend: '↑ 10%' },
      { name: 'Worli', schools: 4.7, healthcare: 4.6, transport: 4.8, dining: 4.6, trend: '↑ 7%' },
      { name: 'Juhu', schools: 4.6, healthcare: 4.5, transport: 4.5, dining: 4.8, trend: '↑ 5%' },
    ],
  },
  {
    city: 'Delhi',
    neighborhoods: [
      { name: 'Dwarka', schools: 4.4, healthcare: 4.3, transport: 4.6, dining: 4.3, trend: '↑ 14%' },
      { name: 'Gurgaon', schools: 4.6, healthcare: 4.7, transport: 4.8, dining: 4.7, trend: '↑ 18%' },
      { name: 'Noida', schools: 4.3, healthcare: 4.2, transport: 4.5, dining: 4.2, trend: '↑ 11%' },
    ],
  },
];

const StarRating = ({ value }: { value: number }) => (
  <div className="flex items-center gap-1">
    {[...Array(5)].map((_, i) => (
      <div
        key={i}
        className={`h-1.5 w-1.5 rounded-full ${i < Math.floor(value) ? 'bg-[#f66b05]' : 'bg-slate-300'}`}
      />
    ))}
    <span className="text-xs font-semibold text-slate-900">{value}</span>
  </div>
);

export default function NeighborhoodSection() {
  const [selectedCity, setSelectedCity] = useState('Bangalore');
  const currentCity = neighborhoods.find((n) => n.city === selectedCity);

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 flex items-center justify-center gap-2">
            <MapPin className="h-8 w-8 text-[#f66b05]" />
            Explore Neighborhoods
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Discover the best localities with detailed insights on schools, healthcare, transport, and dining options
          </p>
        </motion.div>

        {/* City Selector */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {neighborhoods.map((neighborhood) => (
            <motion.button
              key={neighborhood.city}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCity(neighborhood.city)}
              className={`px-6 py-3 rounded-full font-semibold transition ${
                selectedCity === neighborhood.city
                  ? 'bg-gradient-to-r from-[#f66b05] to-[#e65f03] text-white shadow-lg'
                  : 'bg-slate-100 text-slate-900 hover:bg-slate-200'
              }`}
            >
              {neighborhood.city}
            </motion.button>
          ))}
        </div>

        {/* Neighborhoods Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {currentCity?.neighborhoods.map((neighborhood, idx) => (
            <motion.div
              key={neighborhood.name}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-slate-50 to-white p-6 rounded-xl border border-slate-200 hover:border-[#f66b05] transition shadow-sm hover:shadow-lg"
            >
              <div className="mb-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2 flex items-center justify-between">
                  {neighborhood.name}
                  <span className="text-sm font-bold text-green-600 bg-green-50 px-2 py-1 rounded-full">
                    {neighborhood.trend}
                  </span>
                </h3>
                <p className="text-sm text-slate-600">In {selectedCity}</p>
              </div>

              <div className="space-y-4">
                {/* Schools */}
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-lg bg-blue-100">
                      <School className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-600">Schools</p>
                      <p className="text-xs text-slate-500">Top rated schools</p>
                    </div>
                  </div>
                  <StarRating value={neighborhood.schools} />
                </div>

                {/* Healthcare */}
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-lg bg-red-100">
                      <Heart className="h-4 w-4 text-red-600" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-600">Healthcare</p>
                      <p className="text-xs text-slate-500">Hospitals nearby</p>
                    </div>
                  </div>
                  <StarRating value={neighborhood.healthcare} />
                </div>

                {/* Transport */}
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-lg bg-purple-100">
                      <Train className="h-4 w-4 text-purple-600" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-600">Transport</p>
                      <p className="text-xs text-slate-500">Public connectivity</p>
                    </div>
                  </div>
                  <StarRating value={neighborhood.transport} />
                </div>

                {/* Dining */}
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-lg bg-amber-100">
                      <Utensils className="h-4 w-4 text-amber-600" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-600">Dining</p>
                      <p className="text-xs text-slate-500">Food options</p>
                    </div>
                  </div>
                  <StarRating value={neighborhood.dining} />
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full mt-6 py-2.5 px-4 rounded-lg bg-[#f66b05]/10 text-[#f66b05] font-semibold hover:bg-[#f66b05] hover:text-white transition"
              >
                View Properties Here
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
