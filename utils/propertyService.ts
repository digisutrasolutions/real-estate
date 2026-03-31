import { Property, properties } from '@/data/properties';

export type { Property } from '@/data/properties';

export interface SearchFilters {
  location?: string;
  priceRange?: string;
  propertyType?: string;
  bedrooms?: string;
  city?: string;
}

export const propertyService = {
  getAllProperties: (): Property[] => {
    return properties;
  },

  getFeaturedProperties: (limit: number = 6): Property[] => {
    return properties.filter((p) => p.featured).slice(0, limit);
  },

  getPropertiesByCity: (city: string): Property[] => {
    return properties.filter((p) => p.city.toLowerCase() === city.toLowerCase());
  },

  searchProperties: (filters: SearchFilters): Property[] => {
    let results = [...properties];

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

    if (filters.city && filters.city !== 'all') {
      results = results.filter((p) => p.city.toLowerCase() === filters.city?.toLowerCase());
    }

    if (filters.priceRange && filters.priceRange !== 'all') {
      results = results.filter((p) => {
        switch (filters.priceRange) {
          case '0-50':
            return p.price <= 5000000;
          case '50-150':
            return p.price > 5000000 && p.price <= 15000000;
          case '150-300':
            return p.price > 15000000 && p.price <= 30000000;
          case '300+':
            return p.price > 30000000;
          default:
            return true;
        }
      });
    }

    if (filters.propertyType && filters.propertyType !== 'all') {
      results = results.filter((p) => p.propertyType === filters.propertyType);
    }

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

  getPropertyById: (id: string): Property | undefined => {
    return properties.find((p) => p.id === id);
  },

  getSimilarProperties: (propertyId: string, limit: number = 3): Property[] => {
    const property = properties.find((p) => p.id === propertyId);
    if (!property) return [];

    return properties
      .filter(
        (p) =>
          p.id !== propertyId &&
          p.city === property.city &&
          Math.abs(p.price - property.price) <= property.price * 0.3
      )
      .slice(0, limit);
  },

  getHotProperties: (limit: number = 6): Property[] => {
    return [...properties].sort((a, b) => b.recentViews - a.recentViews).slice(0, limit);
  },

  getRecentlyAdded: (limit: number = 6): Property[] => {
    return [...properties]
      .sort((a, b) => new Date(b.postedDate).getTime() - new Date(a.postedDate).getTime())
      .slice(0, limit);
  },

  getCities: (): string[] => {
    const cities = new Set(properties.map((p) => p.city));
    return Array.from(cities).sort();
  },

  getNeighborhoods: (city: string): string[] => {
    const neighborhoods = new Set(
      properties.filter((p) => p.city === city).map((p) => p.neighborhood)
    );
    return Array.from(neighborhoods).sort();
  },

  formatPrice: (price: number): string => {
    if (price >= 10000000) {
      return `Rs ${(price / 10000000).toFixed(1)} Cr`;
    }
    if (price >= 100000) {
      return `Rs ${(price / 100000).toFixed(1)} L`;
    }
    return `Rs ${price.toLocaleString('en-IN')}`;
  },

  formatArea: (area: number): string => {
    return `${area.toLocaleString()} sq.ft`;
  },
};
