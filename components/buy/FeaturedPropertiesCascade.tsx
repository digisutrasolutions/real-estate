'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Heart, Eye, Clock, Bed, Bath, Ruler, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';
import { propertyService } from '@/utils/propertyService';

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

export default function FeaturedPropertiesCascade() {
  const featuredProperties = propertyService.getFeaturedProperties(3);
  const [selectedProperties, setSelectedProperties] = useState<string[]>([]);
  const [likedProperties, setLikedProperties] = useState<string[]>([]);

  const toggleSelect = (id: string) => {
    setSelectedProperties((prev) =>
      prev.includes(id) ? prev.filter((propertyId) => propertyId !== id) : [...prev, id]
    );
  };

  const toggleLike = (id: string) => {
    setLikedProperties((prev) =>
      prev.includes(id) ? prev.filter((propertyId) => propertyId !== id) : [...prev, id]
    );
  };

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Featured Properties
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-slate-600 max-w-2xl mx-auto">
            Handpicked listings from our live inventory with real-time engagement data
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {featuredProperties.map((property) => (
            <motion.div
              key={property.id}
              variants={itemVariants}
              className={`group rounded-xl overflow-hidden border transition ${
                selectedProperties.includes(property.id)
                  ? 'border-[#f66b05] ring-2 ring-[#f66b05]/30 shadow-xl'
                  : 'border-slate-200 hover:border-[#f66b05]'
              } ${property.featured ? 'lg:col-span-2 lg:row-span-2' : ''}`}
            >
              <div className="relative overflow-hidden">
                <Image
                  src={property.image}
                  alt={property.title}
                  width={600}
                  height={400}
                  className="w-full h-96 object-cover group-hover:scale-110 transition duration-500"
                />

                <div className="absolute top-4 left-4 right-4 flex flex-wrap gap-2 items-start justify-between">
                  {property.featured && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="px-3 py-1.5 rounded-full bg-gradient-to-r from-[#f66b05] to-[#e65f03] text-white text-xs font-bold"
                    >
                      Featured
                    </motion.div>
                  )}
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => toggleLike(property.id)}
                    className="p-2.5 rounded-full bg-white/90 hover:bg-white shadow-lg transition"
                    aria-label={`Like ${property.title}`}
                  >
                    <Heart
                      className={`h-5 w-5 ${
                        likedProperties.includes(property.id)
                          ? 'fill-red-500 text-red-500'
                          : 'text-slate-600'
                      }`}
                    />
                  </motion.button>
                </div>

                <motion.div
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="absolute bottom-4 left-4 px-3 py-2 rounded-lg bg-slate-900/80 backdrop-blur text-white text-xs space-y-1"
                >
                  <div className="flex items-center gap-2 font-semibold">
                    <Eye className="h-4 w-4 text-[#f66b05]" />
                    {property.recentViews} viewing now
                  </div>
                  <div className="flex items-center gap-2 text-slate-300">
                    <Clock className="h-3.5 w-3.5" />
                    {property.viewsTime}
                  </div>
                </motion.div>
              </div>

              <div className="p-6">
                <div className="mb-4">
                  <p className="text-sm text-slate-600 mb-2">{property.location}</p>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 line-clamp-2">{property.title}</h3>
                  <p className="text-2xl font-bold text-[#f66b05]">{propertyService.formatPrice(property.price)}</p>
                </div>

                <div className="grid grid-cols-3 gap-4 py-4 border-y border-slate-200 mb-4">
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 text-slate-900 font-semibold mb-1">
                      <Bed className="h-4 w-4" />
                      {property.beds}
                    </div>
                    <p className="text-xs text-slate-600">Bedrooms</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 text-slate-900 font-semibold mb-1">
                      <Bath className="h-4 w-4" />
                      {property.baths}
                    </div>
                    <p className="text-xs text-slate-600">Bathrooms</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 text-slate-900 font-semibold mb-1">
                      <Ruler className="h-4 w-4" />
                      {propertyService.formatArea(property.area)}
                    </div>
                    <p className="text-xs text-slate-600">Area</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <p className="text-sm text-slate-600">
                    <span className="font-semibold">Agent:</span> {property.agent}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <motion.button
                      type="button"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => toggleSelect(property.id)}
                      className={`py-3 rounded-lg font-semibold transition ${
                        selectedProperties.includes(property.id)
                          ? 'bg-[#f66b05] text-white'
                          : 'bg-slate-100 text-slate-900 hover:bg-slate-200'
                      }`}
                    >
                      {selectedProperties.includes(property.id) ? 'Selected' : 'Select'}
                    </motion.button>

                    <Link href={`/properties/${property.id}`} className="block">
                      <motion.button
                        type="button"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full py-3 rounded-lg font-semibold transition bg-[#f66b05]/10 text-[#f66b05] hover:bg-[#f66b05] hover:text-white flex items-center justify-center gap-2"
                      >
                        View Details <ArrowRight className="h-4 w-4" />
                      </motion.button>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {selectedProperties.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="sticky bottom-6 left-0 right-0 mx-auto w-fit px-6 py-4 rounded-full bg-gradient-to-r from-[#f66b05] to-[#e65f03] text-white shadow-2xl flex items-center gap-4"
          >
            <span className="font-semibold">{selectedProperties.length} properties selected</span>
            <Link href="/properties">
              <motion.span whileHover={{ scale: 1.05 }} className="inline-block px-6 py-2 rounded-full bg-white text-[#f66b05] font-bold hover:shadow-lg transition">
                Compare Properties
              </motion.span>
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
}
