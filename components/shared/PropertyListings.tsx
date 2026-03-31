'use client';

import { motion } from 'framer-motion';
import { MapPin, BedDouble, Bath, Ruler } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface PropertyCard {
  id: string;
  title: string;
  location: string;
  price: string;
  beds: number;
  baths: number;
  area: string;
  image: string;
  type: 'buy' | 'rent' | 'development' | 'project';
  featured?: boolean;
}

interface PropertyListingsProps {
  properties: PropertyCard[];
  title?: string;
  subtitle?: string;
  columns?: 2 | 3 | 4;
}

export default function PropertyListings({
  properties,
  title,
  subtitle,
  columns = 3,
}: PropertyListingsProps) {
  const columnClass = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-3',
    4: 'md:grid-cols-4',
  };

  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:py-24">
      {(title || subtitle) && (
        <div className="mb-12 text-center">
          {subtitle && (
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-[#f66b05]">
              {subtitle}
            </p>
          )}
          {title && (
            <h2 className="text-3xl font-bold text-[#2f3a4a] sm:text-4xl">
              {title}
            </h2>
          )}
        </div>
      )}

      <div className={`grid gap-6 sm:grid-cols-2 ${columnClass[columns]}`}>
        {properties.map((property, index) => (
          <motion.div
            key={property.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group cursor-pointer overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:shadow-xl"
          >
            {/* Image */}
            <div className="relative h-48 overflow-hidden sm:h-56 lg:h-64">
              <Image
                src={property.image}
                alt={property.title}
                fill
                className="h-full w-full object-cover transition duration-300 group-hover:scale-110"
              />
              {property.featured && (
                <div className="absolute left-4 top-4 inline-block rounded-lg bg-[#f66b05] px-3 py-1 text-xs font-semibold text-white">
                  Featured
                </div>
              )}
              <div className="absolute right-4 top-4 rounded-lg bg-black/50 px-3 py-1 text-sm font-semibold text-white">
                {property.type.charAt(0).toUpperCase() + property.type.slice(1)}
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <p className="mb-2 flex items-center gap-1 text-sm text-slate-500">
                <MapPin className="h-4 w-4" />
                {property.location}
              </p>
              <h3 className="mb-4 text-lg font-semibold text-[#2f3a4a] group-hover:text-[#f66b05]">
                {property.title}
              </h3>

              <div className="mb-4 flex gap-4 border-b border-t border-slate-200 py-4 text-sm text-slate-600">
                <div className="flex items-center gap-1">
                  <BedDouble className="h-4 w-4" />
                  {property.beds} beds
                </div>
                <div className="flex items-center gap-1">
                  <Bath className="h-4 w-4" />
                  {property.baths} baths
                </div>
                <div className="flex items-center gap-1">
                  <Ruler className="h-4 w-4" />
                  {property.area}
                </div>
              </div>

              <div className="flex items-center justify-between">
                <p className="text-2xl font-bold text-[#f66b05]">{property.price}</p>
                <Link
                  href={`/${property.type}/${property.id}`}
                  className="rounded-lg bg-[#2f3a4a] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#f66b05]"
                >
                  View
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
