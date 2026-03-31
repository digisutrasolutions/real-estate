import { Metadata } from 'next';
import PageHero from '@/components/shared/PageHero';
import FeaturesGrid from '@/components/shared/FeaturesGrid';
import ProcessSteps from '@/components/shared/ProcessSteps';
import PropertyListings from '@/components/shared/PropertyListings';
import StatisticsSection from '@/components/shared/StatisticsSection';
import TestimonialsSection from '@/components/shared/TestimonialsSection';
import CtaSection from '@/components/shared/CtaSection';

export const metadata: Metadata = {
  title: 'Buy Property in India | Premium Homes & Luxury Real Estate | RealSutra',
  description: 'Find your dream home with RealSutra. Browse premium properties, luxury apartments, and residential spaces across India. Expert guidance for property buying with transparent processes.',
  keywords: ['buy property', 'real estate', 'luxury homes', 'apartments', 'property for sale', 'residential properties'],
  openGraph: {
    title: 'Buy Property in India | Premium Homes & Luxury Real Estate',
    description: 'Find your dream home with RealSutra. Browse premium properties, luxury apartments, and residential spaces.',
    type: 'website',
    url: 'https://realsutra.com/buy',
    images: [
      {
        url: 'https://realsutra.com/og-buy.jpg',
        width: 1200,
        height: 630,
        alt: 'Buy Property',
      },
    ],
  },
};

const buyingFeatures = [
  {
    icon: 'MapPin' as const,
    title: 'Prime Locations',
    description: 'Access to properties in the most sought-after neighborhoods and prime locations across India.',
  },
  {
    icon: 'Percent' as const,
    title: 'Best Pricing',
    description: 'Transparent pricing with no hidden costs. We ensure you get the best value for your investment.',
  },
  {
    icon: 'Shield' as const,
    title: 'Legal Protection',
    description: 'Complete legal due diligence and documentation support throughout the buying process.',
  },
  {
    icon: 'Clock' as const,
    title: 'Fast Processing',
    description: 'Streamlined verification and approval process to close deals quickly.',
  },
  {
    icon: 'Users' as const,
    title: 'Expert Team',
    description: 'Dedicated property consultants with extensive market knowledge and experience.',
  },
  {
    icon: 'CircleCheckBig' as const,
    title: 'Quality Assurance',
    description: 'Every property vetted for quality, legality, and value before listing.',
  },
];

const buyingProcess = [
  {
    number: 1,
    icon: 'CircleCheckBig' as const,
    title: 'Browse & Select',
    description: 'Explore our extensive portfolio of verified properties with detailed information and virtual tours.',
  },
  {
    number: 2,
    icon: 'MapPin' as const,
    title: 'Site Visit',
    description: 'Schedule a site visit with our expert agents who provide comprehensive property insights.',
  },
  {
    number: 3,
    icon: 'Shield' as const,
    title: 'Legal Verification',
    description: 'Complete legal verification and title clearance with full transparency and documentation.',
  },
  {
    number: 4,
    icon: 'Percent' as const,
    title: 'Negotiation & Agreement',
    description: 'Negotiate terms and finalize the purchase agreement with favorable conditions.',
  },
  {
    number: 5,
    icon: 'Clock' as const,
    title: 'Financing & Registration',
    description: 'Assist with bank loans, government registrations, and all legal formalities.',
  },
  {
    number: 6,
    icon: 'Users' as const,
    title: 'Handover & Support',
    description: 'Complete handover process with post-purchase support and guidance.',
  },
];

const featuredProperties = [
  {
    id: '1',
    title: 'Luxury Apartment in Bangalore',
    location: 'Indiranagar, Bangalore',
    price: '₹ 2.5 Cr',
    beds: 4,
    baths: 3,
    area: '3,500 sq.ft',
    image: 'https://images.unsplash.com/photo-1512917774080-9f4ee8180733?w=600&h=400&fit=crop',
    type: 'buy' as const,
    featured: true,
  },
  {
    id: '2',
    title: 'Modern Cottage in Hyderabad',
    location: 'Jacaranda, Hyderabad',
    price: '₹ 1.8 Cr',
    beds: 3,
    baths: 2,
    area: '2,800 sq.ft',
    image: 'https://images.unsplash.com/photo-1493675797308-7bdc1e25885a?w=600&h=400&fit=crop',
    type: 'buy' as const,
  },
  {
    id: '3',
    title: 'Premium Villa in Mumbai',
    location: 'Bandra, Mumbai',
    price: '₹ 4.2 Cr',
    beds: 5,
    baths: 4,
    area: '4,500 sq.ft',
    image: 'https://images.unsplash.com/photo-1453167381766-65c3b8c12abc?w=600&h=400&fit=crop',
    type: 'buy' as const,
    featured: true,
  },
  {
    id: '4',
    title: 'Executive Flat in Delhi',
    location: 'Dwarka, Delhi',
    price: '₹ 1.2 Cr',
    beds: 3,
    baths: 2,
    area: '2,200 sq.ft',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&h=400&fit=crop',
    type: 'buy' as const,
  },
];

const buyingStats = [
  { label: 'Happy Buyers', value: '5,000', suffix: '+' },
  { label: 'Properties Sold', value: '12,500', suffix: '+' },
  { label: 'Total Investment', value: '₹ 45,000', suffix: 'Cr+' },
  { label: 'Cities Covered', value: '25', suffix: '+' },
];

const testimonials = [
  {
    id: '1',
    name: 'Rajesh Kumar',
    role: 'Property Buyer',
    content: 'RealSutra made the entire buying process incredibly smooth. Their team was transparent about pricing and helped us find exactly what we needed.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
  },
  {
    id: '2',
    name: 'Priya Sharma',
    role: 'Home Buyer',
    content: 'Best experience buying a property! The legal verification was thorough and the team supported us every step of the way.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
  },
  {
    id: '3',
    name: 'Amit Patel',
    role: 'Real Estate Investor',
    content: 'RealSutra offers the best properties with transparent pricing. Highly recommended for serious buyers!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
  },
];

export default function BuyPage() {
  return (
    <>
      <PageHero
        subtitle="Find Your Perfect Home"
        title="Buy Your Dream Property"
        description="Discover premium properties in India's best locations with transparent pricing, legal protection, and expert guidance."
      />

      <FeaturesGrid
        title="Why Choose RealSutra for Buying"
        subtitle="Our Advantages"
        features={buyingFeatures}
        columns={3}
      />

      <PropertyListings
        title="Featured Properties for Sale"
        subtitle="Handpicked Selection"
        properties={featuredProperties}
        columns={3}
      />

      <ProcessSteps
        title="Our Transparent Buying Process"
        subtitle="Step by Step"
        steps={buyingProcess}
      />

      <StatisticsSection
        title="Our Track Record"
        description="Trusted by thousands of buyers across India"
        stats={buyingStats}
      />

      <TestimonialsSection
        title="What Our Buyers Say"
        subtitle="Real Stories"
        testimonials={testimonials}
      />

      <CtaSection
        title="Ready to Find Your Dream Home?"
        description="Our expert consultants are ready to help you find the perfect property that matches your requirements and budget."
        primaryLabel="Schedule a Consultation"
        primaryHref="/contact"
        secondaryLabel="Browse More Properties"
        secondaryHref="/buy"
      />
    </>
  );
}
