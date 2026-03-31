import { Metadata } from 'next';
import PageHero from '@/components/shared/PageHero';
import FeaturesGrid from '@/components/shared/FeaturesGrid';
import ProcessSteps from '@/components/shared/ProcessSteps';
import PropertyListings from '@/components/shared/PropertyListings';
import StatisticsSection from '@/components/shared/StatisticsSection';
import TestimonialsSection from '@/components/shared/TestimonialsSection';
import CtaSection from '@/components/shared/CtaSection';

export const metadata: Metadata = {
  title: 'Rent Properties in India | Apartments & Homes for Rent | RealSutra',
  description: 'Find your ideal rental property with RealSutra. Browse verified apartments, villas, and homes across India. Transparent agreements, flexible terms, and trusted landlords.',
  keywords: ['rent property', 'apartments for rent', 'rental homes', 'flat rental', 'property lease'],
  openGraph: {
    title: 'Rent Properties in India | Apartments & Homes for Rent',
    description: 'Find your ideal rental property with RealSutra. Browse verified apartments and homes with transparent terms.',
    type: 'website',
    url: 'https://realsutra.com/rent',
    images: [
      {
        url: 'https://realsutra.com/og-rent.jpg',
        width: 1200,
        height: 630,
        alt: 'Rent Property',
      },
    ],
  },
};

const rentalFeatures = [
  {
    icon: 'Wallet' as const,
    title: 'Flexible Payment Terms',
    description: 'Choose payment plans that work for your budget. Negotiate rent cycles from monthly to quarterly.',
  },
  {
    icon: 'FileCheck' as const,
    title: 'Transparent Agreements',
    description: 'Clear rental agreements with no hidden clauses. All terms defined upfront for your protection.',
  },
  {
    icon: 'Zap' as const,
    title: 'Quick Availability',
    description: 'Move into your new home as early as the next month. Minimal paperwork and quick approval.',
  },
  {
    icon: 'Award' as const,
    title: 'Verified Properties',
    description: 'All rental properties verified for authenticity, maintenance, and tenant rights protection.',
  },
  {
    icon: 'Home' as const,
    title: 'Complete Support',
    description: 'Help with documentation, tenant coordination, and property-related issues anytime.',
  },
  {
    icon: 'Handshake' as const,
    title: 'Fair Negotiations',
    description: 'Our team ensures fair rent pricing and beneficial terms for both tenants and landlords.',
  },
];

const rentalProcess = [
  {
    number: 1,
    icon: 'Home' as const,
    title: 'Search Properties',
    description: 'Browse our verified rental properties with detailed descriptions, photos, and virtual tours.',
  },
  {
    number: 2,
    icon: 'FileCheck' as const,
    title: 'Schedule Visit',
    description: 'Book a convenient time to visit the property with our agents who provide guidance.',
  },
  {
    number: 3,
    icon: 'Handshake' as const,
    title: 'Negotiate Terms',
    description: 'Discuss rent, duration, and special conditions. We help negotiate favorable terms.',
  },
  {
    number: 4,
    icon: 'Award' as const,
    title: 'Prepare Documents',
    description: 'Complete all rental documentation with transparent clauses and clear tenant responsibilities.',
  },
  {
    number: 5,
    icon: 'Wallet' as const,
    title: 'Payment Setup',
    description: 'Arrange deposit, first month rent, and establish payment methods with landlord.',
  },
  {
    number: 6,
    icon: 'Zap' as const,
    title: 'Move In',
    description: 'Take possession with all amenities ready. We ensure smooth handover and induction.',
  },
];

const featuredRentals = [
  {
    id: '1',
    title: 'Luxury 3BHK Apartment',
    location: 'Whitefield, Bangalore',
    price: '₹ 55,000/mo',
    beds: 3,
    baths: 2,
    area: '1,600 sq.ft',
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&h=400&fit=crop',
    type: 'rent' as const,
    featured: true,
  },
  {
    id: '2',
    title: 'Modern 2BHK Flat',
    location: 'Gurgaon, Delhi NCR',
    price: '₹ 45,000/mo',
    beds: 2,
    baths: 2,
    area: '1,200 sq.ft',
    image: 'https://images.unsplash.com/photo-1496307653316-44b4803d89bb?w=600&h=400&fit=crop',
    type: 'rent' as const,
  },
  {
    id: '3',
    title: 'Premium Penthouse',
    location: 'Bandra, Mumbai',
    price: '₹ 150,000/mo',
    beds: 4,
    baths: 3,
    area: '3,000 sq.ft',
    image: 'https://images.unsplash.com/photo-1512917774080-9f4ee8180733?w=600&h=400&fit=crop',
    type: 'rent' as const,
    featured: true,
  },
  {
    id: '4',
    title: 'Cozy Studio Apartment',
    location: 'Koramangala, Bangalore',
    price: '₹ 22,000/mo',
    beds: 1,
    baths: 1,
    area: '600 sq.ft',
    image: 'https://images.unsplash.com/photo-1493675797308-7bdc1e25885a?w=600&h=400&fit=crop',
    type: 'rent' as const,
  },
];

const rentalStats = [
  { label: 'Active Rentals', value: '8,500', suffix: '+' },
  { label: 'Tenants Placed', value: '18,000', suffix: '+' },
  { label: 'Avg. Deal Value', value: '₹ 45', suffix: 'L/yr' },
  { label: 'Coverage Cities', value: '35', suffix: '+' },
];

const rentalTestimonials = [
  {
    id: '1',
    name: 'Isha Singh',
    role: 'Tenant',
    content: 'Found the perfect apartment through RealSutra. The process was quick and straightforward. Highly satisfied!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
  },
  {
    id: '2',
    name: 'Vikram Desai',
    role: 'Property Owner',
    content: 'RealSutra helped me find reliable tenants quickly. Their verification process gave me confidence.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
  },
  {
    id: '3',
    name: 'Neha Gupta',
    role: 'Relocation Professional',
    content: 'For corporate relocations, RealSutra is our go-to partner. Reliable and professional every time!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
  },
];

export default function RentPage() {
  return (
    <>
      <PageHero
        subtitle="Find Your Next Home"
        title="Rent Properties in India"
        description="Discover verified rental properties with transparent terms, flexible payments, and complete support throughout your rental journey."
      />

      <FeaturesGrid
        title="Why Renters Choose RealSutra"
        subtitle="Rental Advantages"
        features={rentalFeatures}
        columns={3}
      />

      <PropertyListings
        title="Featured Rental Properties"
        subtitle="Available Now"
        properties={featuredRentals}
        columns={3}
      />

      <ProcessSteps
        title="How Our Rental Process Works"
        subtitle="Simple & Transparent"
        steps={rentalProcess}
      />

      <StatisticsSection
        title="Trusted Rental Marketplace"
        description="Connecting thousands of tenants with ideal properties"
        stats={rentalStats}
      />

      <TestimonialsSection
        title="What Tenants & Landlords Say"
        subtitle="Real Experiences"
        testimonials={rentalTestimonials}
      />

      <CtaSection
        title="Ready to Find Your Perfect Rental?"
        description="Browse our extensive collection of verified rental properties or list your property with us today."
        primaryLabel="Browse Rentals"
        primaryHref="/rent"
        secondaryLabel="Contact Our Team"
        secondaryHref="/contact"
      />
    </>
  );
}
