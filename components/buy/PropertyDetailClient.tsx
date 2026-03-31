'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import type { ComponentType } from 'react';
import { Bath, Bed, Calendar, MapPin, Phone, Ruler, Sparkles } from 'lucide-react';
import { Property, propertyService } from '@/utils/propertyService';

interface PropertyDetailClientProps {
  property: Property;
  similarProperties: Property[];
  allCities: string[];
  neighborhoods: string[];
}

export default function PropertyDetailClient({
  property,
  similarProperties,
  allCities,
  neighborhoods,
}: PropertyDetailClientProps) {
  const galleryImages = property.images?.length ? property.images : [property.image];

  return (
    <main className="min-h-screen bg-slate-50">
      <section className="bg-white border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-sm text-slate-500 mb-2">
            <Link href="/properties" className="hover:text-[#f66b05]">
              All Properties
            </Link>{' '}
            / {property.city} / {property.title}
          </p>

          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-8">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">{property.title}</h1>
              <p className="text-slate-600 flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                {property.location}
              </p>
            </div>
            <div className="text-left lg:text-right">
              <p className="text-3xl font-bold text-[#f66b05]">{propertyService.formatPrice(property.price)}</p>
              <p className="text-sm text-slate-500">{propertyService.formatArea(property.area)} | {property.propertyType}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {galleryImages.map((image, index) => (
              <motion.div key={`${property.id}-${index}`} whileHover={{ scale: 1.01 }} className="relative h-64 rounded-xl overflow-hidden border border-slate-200">
                <Image src={image} alt={`${property.title} image ${index + 1}`} fill className="object-cover" />
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <InfoChip label="Bedrooms" value={String(property.beds)} icon={Bed} />
            <InfoChip label="Bathrooms" value={String(property.baths)} icon={Bath} />
            <InfoChip label="Area" value={propertyService.formatArea(property.area)} icon={Ruler} />
            <InfoChip label="Possession" value={property.possession} icon={Calendar} />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white rounded-xl border border-slate-200 p-6">
            <h2 className="text-xl font-bold text-slate-900 mb-3">Property Overview</h2>
            <p className="text-slate-700 leading-7">{property.description}</p>
          </div>

          <div className="bg-white rounded-xl border border-slate-200 p-6">
            <h2 className="text-xl font-bold text-slate-900 mb-4">Amenities</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {property.amenities.map((amenity) => (
                <div key={amenity} className="flex items-center gap-2 text-slate-700">
                  <Sparkles className="h-4 w-4 text-[#f66b05]" />
                  <span>{amenity}</span>
                </div>
              ))}
            </div>
          </div>

          {similarProperties.length > 0 && (
            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <h2 className="text-xl font-bold text-slate-900 mb-4">Similar Properties</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {similarProperties.map((similar) => (
                  <Link
                    key={similar.id}
                    href={`/properties/${similar.id}`}
                    className="rounded-lg border border-slate-200 overflow-hidden hover:border-[#f66b05] transition"
                  >
                    <div className="relative h-40">
                      <Image src={similar.image} alt={similar.title} fill className="object-cover" />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-slate-900 mb-1 line-clamp-1">{similar.title}</h3>
                      <p className="text-xs text-slate-500 mb-2">{similar.location}</p>
                      <p className="font-bold text-[#f66b05]">{propertyService.formatPrice(similar.price)}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-xl border border-slate-200 p-6">
            <h2 className="text-lg font-bold text-slate-900 mb-3">Property Agent</h2>
            <div className="flex items-center gap-3 mb-4">
              <div className="relative h-12 w-12 rounded-full overflow-hidden">
                <Image src={property.agentImage} alt={property.agent} fill className="object-cover" />
              </div>
              <div>
                <p className="font-semibold text-slate-900">{property.agent}</p>
                <p className="text-sm text-slate-500">Verified Agent</p>
              </div>
            </div>
            <a
              href={`tel:${property.agentPhone.replace(/\s+/g, '')}`}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-[#f66b05] text-white font-semibold hover:bg-[#e65f03] transition"
            >
              <Phone className="h-4 w-4" />
              Call {property.agentPhone}
            </a>
          </div>

          <div className="bg-white rounded-xl border border-slate-200 p-6">
            <h2 className="text-lg font-bold text-slate-900 mb-3">Schedule a Visit</h2>
            <p className="text-sm text-slate-600 mb-4">Book an on-site visit with our team for this property.</p>
            <Link
              href="/contact"
              className="w-full inline-flex items-center justify-center px-4 py-3 rounded-lg border border-[#f66b05] text-[#f66b05] font-semibold hover:bg-[#f66b05] hover:text-white transition"
            >
              Schedule Visit
            </Link>
          </div>

          <div className="bg-white rounded-xl border border-slate-200 p-6">
            <h2 className="text-lg font-bold text-slate-900 mb-3">Area Insights</h2>
            <p className="text-sm text-slate-600 mb-2">City: {property.city}</p>
            <p className="text-sm text-slate-600 mb-3">Neighborhood: {property.neighborhood}</p>
            <p className="text-xs text-slate-500 mb-2">Other cities in our inventory:</p>
            <p className="text-xs text-slate-600 leading-5">{allCities.join(', ')}</p>
            <p className="text-xs text-slate-500 mt-4 mb-2">Neighborhoods in {property.city}:</p>
            <p className="text-xs text-slate-600 leading-5">{neighborhoods.join(', ')}</p>
          </div>
        </div>
      </section>
    </main>
  );
}

function InfoChip({
  label,
  value,
  icon: Icon,
}: {
  label: string;
  value: string;
  icon: ComponentType<{ className?: string }>;
}) {
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-4">
      <div className="flex items-center gap-2 text-slate-500 text-xs uppercase tracking-wide mb-2">
        <Icon className="h-4 w-4 text-[#f66b05]" />
        {label}
      </div>
      <p className="font-semibold text-slate-900">{value}</p>
    </div>
  );
}
