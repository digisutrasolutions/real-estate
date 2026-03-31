import { Property, properties } from '@/data/properties';

export interface SearchFilters {
  location?: string;
  priceRange?: string;
  propertyType?: string;
  bedrooms?: string;
  city?: string;
}

export const propertyService = {
  // Get all properties
  getAllProperties: (): Property[] => {
    return properties;
  },

  // Get featured properties (limit 3-6)
  getFeaturedProperties: (limit: number = 6): Property[] => {
    return properties.filter((p) => p.featured).slice(0, limit);
  },

  // Get properties by city
  getPropertiesByCity: (city: string): Property[] => {
    return properties.filter((p) => p.city.toLowerCase() === city.toLowerCase());
  },

  // Search properties with filters
  searchProperties: (filters: SearchFilters): Property[] => {
    let results = [...properties];

    // Filter by search term (location/title)
    if (filters.location && filters.location.trim()) {
      const searchTerm = filters.location.toLowerCase();
      results = results.filter(
        (p) =>
          p.title.toLowerCase().includes(searchTerm) ||
          p.location.toLowerCase().includes(searchTerm) ||
          p.neighborhood.toLowerCase().includes(searchTerm) ||
          p.city.toLowerCase().includes(searchTerm)
      );
    }

    // Filter by city
    if (filters.city && filters.city !== 'all') {
      results = results.filter((p) => p.city.toLowerCase() === filters.city?.toLowerCase());
    }

    // Filter by price range
    if (filters.priceRange && filters.priceRange !== 'all') {
      results = results.filter((p) => {
        switch (filters.priceRange) {
          case '0-50':
            return p.price <= 5000000; // <= 50L
          case '50-150':
            return p.price > 5000000 && p.price <= 15000000; // 50L - 1.5Cr
          case '150-300':
            return p.price > 15000000 && p.price <= 30000000; // 1.5Cr - 3Cr
          case '300+':
            return p.price > 30000000; // 3Cr+
          default:
            return true;
        }
      });
    }

    // Filter by property type
    if (filters.propertyType && filters.propertyType !== 'all') {
      results = results.filter((p) => p.propertyType === filters.propertyType);
    }

    // Filter by bedrooms
    if (filters.bedrooms && filters.bedrooms !== 'all') {
      results = results.filter((p) => {
        switch (filters.bedrooms) {
          case '1':
            return p.beds === 1;
          case '2':
            return p.beds === 2;
          case '3':
            return p.beds === 3;
          case '4':
            return p.beds >= 4;
          default:
            return true;
        }
      });
    }

    return results;
  },

  // Get property by ID
  getPropertyById: (id: string): Property | undefined => {
    return properties.find((p) => p.id === id);
  },

  // Get similar properties (same city, similar price)
  getSimilarProperties: (propertyId: string, limit: number = 3): Property[] => {
    const property = properties.find((p) => p.id === propertyId);
    if (!property) return [];

    return properties
      .filter(
        (p) =>
          p.id !== propertyId &&
          p.city === property.city &&
          Math.abs(p.price - property.price) <= property.price * 0.3 // Within 30% price range
      )
      .slice(0, limit);
  },

  // Get hot properties (Most viewed)
  getHotProperties: (limit: number = 6): Property[] => {
    return [...properties].sort((a, b) => b.recentViews - a.recentViews).slice(0, limit);
  },

  // Get recently added
  getRecentlyAdded: (limit: number = 6): Property[] => {
    return [...properties]
      .sort((a, b) => new Date(b.postedDate).getTime() - new Date(a.postedDate).getTime())
      .slice(0, limit);
  },

  // Get cities list
  getCities: (): string[] => {
    const cities = new Set(properties.map((p) => p.city));
    return Array.from(cities).sort();
  },

  // Get neighborhoods for a city
  getNeighborhoods: (city: string): string[] => {
    const neighborhoods = new Set(
      properties.filter((p) => p.city === city).map((p) => p.neighborhood)
    );
    return Array.from(neighborhoods).sort();
  },

  // Format price for display
  formatPrice: (price: number): string => {
    if (price >= 10000000) {
      return `₹${(price / 10000000).toFixed(1)}Cr`;
    } else if (price >= 100000) {
      return `₹${(price / 100000).toFixed(1)}L`;
    }
    return `₹${price}`;
  },

  // Format area
  formatArea: (area: number): string => {
    return `${area.toLocaleString()} sq.ft`;
  },
};
