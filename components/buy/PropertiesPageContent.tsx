'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useMemo, useState } from 'react';
import { Heart, Bed, Bath, Ruler, MapPin, Filter, Grid3x3, List } from 'lucide-react';
import { propertyService, SearchFilters, Property } from '@/utils/propertyService';

export default function PropertiesPageContent({
  initialFilters,
}: {
  initialFilters: SearchFilters;
}) {
  const router = useRouter();
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [filters, setFilters] = useState<SearchFilters>(initialFilters);
  const [likedProperties, setLikedProperties] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);

  const results = useMemo(() => propertyService.searchProperties(filters), [filters]);

  const handleFilterChange = (key: keyof SearchFilters, value: string) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);

    const params = new URLSearchParams();
    Object.entries(newFilters).forEach(([filterKey, filterValue]) => {
      if (filterValue) params.append(filterKey, filterValue);
    });
    router.push(`/properties${params.toString() ? `?${params.toString()}` : ''}`);
  };

  const toggleLike = (id: string) => {
    setLikedProperties((prev) =>
      prev.includes(id) ? prev.filter((propertyId) => propertyId !== id) : [...prev, id]
    );
  };

  const clearFilters = () => {
    setFilters({});
    router.push('/properties');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-8 sticky top-0 z-40"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">All Properties</h1>
          <p className="text-xl text-slate-300">
            <span className="font-bold text-[#f66b05]">{results.length}</span> properties match your criteria
          </p>
        </div>
      </motion.div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className={`lg:col-span-1 ${showFilters ? 'block' : 'hidden lg:block'}`}
          >
            <div className="bg-white rounded-xl border border-slate-200 p-6 sticky top-32">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <Filter className="h-5 w-5" />
                  Filters
                </h2>
                {Object.values(filters).some((value) => value) && (
                  <button
                    onClick={clearFilters}
                    className="text-xs font-semibold text-[#f66b05] hover:text-[#e65f03]"
                  >
                    Clear
                  </button>
                )}
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">Location/City</label>
                  <input
                    type="text"
                    placeholder="Search location..."
                    value={filters.location || ''}
                    onChange={(e) => handleFilterChange('location', e.target.value)}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:border-[#f66b05] focus:ring-2 focus:ring-[#f66b05]/20 outline-none transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">Budget</label>
                  <select
                    value={filters.priceRange || ''}
                    onChange={(e) => handleFilterChange('priceRange', e.target.value)}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:border-[#f66b05] focus:ring-2 focus:ring-[#f66b05]/20 outline-none transition"
                  >
                    <option value="">All Prices</option>
                    <option value="0-50">Rs 0 - Rs 50 L</option>
                    <option value="50-150">Rs 50 L - Rs 1.5 Cr</option>
                    <option value="150-300">Rs 1.5 Cr - Rs 3 Cr</option>
                    <option value="300+">Rs 3 Cr+</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">Property Type</label>
                  <select
                    value={filters.propertyType || ''}
                    onChange={(e) => handleFilterChange('propertyType', e.target.value)}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:border-[#f66b05] focus:ring-2 focus:ring-[#f66b05]/20 outline-none transition"
                  >
                    <option value="">All Types</option>
                    <option value="apartment">Apartment</option>
                    <option value="villa">Villa</option>
                    <option value="bungalow">Bungalow</option>
                    <option value="commercial">Commercial</option>
                    <option value="plot">Plot</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">Bedrooms</label>
                  <select
                    value={filters.bedrooms || ''}
                    onChange={(e) => handleFilterChange('bedrooms', e.target.value)}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:border-[#f66b05] focus:ring-2 focus:ring-[#f66b05]/20 outline-none transition"
                  >
                    <option value="">All BHK</option>
                    <option value="1">1 BHK</option>
                    <option value="2">2 BHK</option>
                    <option value="3">3 BHK</option>
                    <option value="4">4+ BHK</option>
                  </select>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div className="lg:col-span-3">
            <div className="flex items-center justify-between mb-6">
              <motion.div className="flex gap-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition ${
                    viewMode === 'grid'
                      ? 'bg-[#f66b05] text-white'
                      : 'bg-white border border-slate-300 text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  <Grid3x3 className="h-5 w-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition ${
                    viewMode === 'list'
                      ? 'bg-[#f66b05] text-white'
                      : 'bg-white border border-slate-300 text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  <List className="h-5 w-5" />
                </button>
              </motion.div>

              <button
                onClick={() => setShowFilters(!showFilters)}
                className="lg:hidden px-4 py-2 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 flex items-center gap-2"
              >
                <Filter className="h-4 w-4" />
                Filters
              </button>
            </div>

            {results.length === 0 ? (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center py-16">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">No properties found</h3>
                <p className="text-slate-600 mb-6">Try adjusting your search filters</p>
                <button
                  onClick={clearFilters}
                  className="px-6 py-3 rounded-lg bg-gradient-to-r from-[#f66b05] to-[#e65f03] text-white font-semibold hover:shadow-lg transition"
                >
                  Clear All Filters
                </button>
              </motion.div>
            ) : (
              <>
                {viewMode === 'grid' && (
                  <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    {results.map((property) => (
                      <PropertyCard
                        key={property.id}
                        property={property}
                        isLiked={likedProperties.includes(property.id)}
                        onLike={() => toggleLike(property.id)}
                      />
                    ))}
                  </motion.div>
                )}

                {viewMode === 'list' && (
                  <motion.div className="space-y-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    {results.map((property) => (
                      <PropertyListItem
                        key={property.id}
                        property={property}
                        isLiked={likedProperties.includes(property.id)}
                        onLike={() => toggleLike(property.id)}
                      />
                    ))}
                  </motion.div>
                )}
              </>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function PropertyCard({
  property,
  isLiked,
  onLike,
}: {
  property: Property;
  isLiked: boolean;
  onLike: () => void;
}) {
  return (
    <motion.div whileHover={{ y: -5 }} className="bg-white rounded-xl overflow-hidden border border-slate-200 hover:border-[#f66b05] hover:shadow-lg transition">
      <div className="relative h-64 overflow-hidden group">
        <Image src={property.image} alt={property.title} fill className="object-cover group-hover:scale-110 transition duration-500" />
        {property.featured && (
          <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-gradient-to-r from-[#f66b05] to-[#e65f03] text-white text-xs font-bold">
            Featured
          </div>
        )}
        <button onClick={onLike} className="absolute top-4 right-4 p-2 rounded-full bg-white/90 hover:bg-white shadow-lg transition" aria-label={`Like ${property.title}`}>
          <Heart className={`h-5 w-5 ${isLiked ? 'fill-red-500 text-red-500' : 'text-slate-600'}`} />
        </button>
      </div>

      <div className="p-6">
        <h3 className="text-lg font-bold text-slate-900 mb-2">{property.title}</h3>
        <p className="text-sm text-slate-600 mb-4 flex items-center gap-1">
          <MapPin className="h-4 w-4" />
          {property.location}
        </p>

        <p className="text-2xl font-bold text-[#f66b05] mb-4">{propertyService.formatPrice(property.price)}</p>

        <div className="grid grid-cols-3 gap-3 py-4 border-y border-slate-200 mb-4">
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 text-slate-900 font-semibold mb-1">
              <Bed className="h-4 w-4" />
              {property.beds}
            </div>
            <p className="text-xs text-slate-600">Beds</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 text-slate-900 font-semibold mb-1">
              <Bath className="h-4 w-4" />
              {property.baths}
            </div>
            <p className="text-xs text-slate-600">Baths</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 text-slate-900 font-semibold mb-1">
              <Ruler className="h-4 w-4" />
              {propertyService.formatArea(property.area)}
            </div>
            <p className="text-xs text-slate-600">Area</p>
          </div>
        </div>

        <Link href={`/properties/${property.id}`}>
          <button className="w-full py-2 rounded-lg bg-[#f66b05]/10 text-[#f66b05] font-semibold hover:bg-[#f66b05] hover:text-white transition">
            View Details
          </button>
        </Link>
      </div>
    </motion.div>
  );
}

function PropertyListItem({
  property,
  isLiked,
  onLike,
}: {
  property: Property;
  isLiked: boolean;
  onLike: () => void;
}) {
  return (
    <motion.div whileHover={{ x: 5 }} className="bg-white rounded-xl overflow-hidden border border-slate-200 hover:border-[#f66b05] hover:shadow-lg transition flex gap-6 p-6">
      <div className="relative h-48 w-48 flex-shrink-0 rounded-lg overflow-hidden group">
        <Image src={property.image} alt={property.title} fill className="object-cover group-hover:scale-110 transition duration-500" />
      </div>

      <div className="flex-1">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="text-xl font-bold text-slate-900">{property.title}</h3>
            <p className="text-sm text-slate-600 flex items-center gap-1 mt-1">
              <MapPin className="h-4 w-4" />
              {property.location}
            </p>
          </div>
          <button onClick={onLike} className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 transition" aria-label={`Like ${property.title}`}>
            <Heart className={`h-5 w-5 ${isLiked ? 'fill-red-500 text-red-500' : 'text-slate-600'}`} />
          </button>
        </div>

        <p className="text-2xl font-bold text-[#f66b05] mb-4">{propertyService.formatPrice(property.price)}</p>

        <div className="flex flex-wrap gap-6 py-4 border-y border-slate-200 mb-4">
          <div className="flex items-center gap-2 text-slate-700">
            <Bed className="h-4 w-4 text-[#f66b05]" />
            <span>{property.beds} Beds</span>
          </div>
          <div className="flex items-center gap-2 text-slate-700">
            <Bath className="h-4 w-4 text-[#f66b05]" />
            <span>{property.baths} Baths</span>
          </div>
          <div className="flex items-center gap-2 text-slate-700">
            <Ruler className="h-4 w-4 text-[#f66b05]" />
            <span>{propertyService.formatArea(property.area)}</span>
          </div>
        </div>

        <Link href={`/properties/${property.id}`}>
          <button className="px-6 py-2 rounded-lg bg-gradient-to-r from-[#f66b05] to-[#e65f03] text-white font-semibold hover:shadow-lg transition">
            View Details
          </button>
        </Link>
      </div>
    </motion.div>
  );
}
