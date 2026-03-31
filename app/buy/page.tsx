import { Metadata } from 'next';
import HeroSearchSection from '@/components/buy/HeroSearchSection';
import QuickStatsBanner from '@/components/buy/QuickStatsBanner';
import SmartFilterSection from '@/components/buy/SmartFilterSection';
import FeaturedPropertiesCascade from '@/components/buy/FeaturedPropertiesCascade';
import EMICalculator from '@/components/buy/EMICalculator';
import NeighborhoodSection from '@/components/buy/NeighborhoodSection';
import BuyingJourneyEnhanced from '@/components/buy/BuyingJourneyEnhanced';
import FAQSection from '@/components/buy/FAQSection';
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
      {/* Hero with Search */}
      <HeroSearchSection />

      {/* Quick Stats Banner */}
      <QuickStatsBanner />

      {/* Smart Filters */}
      <SmartFilterSection />

      {/* Featured Properties */}
      <FeaturedPropertiesCascade />

      {/* EMI Calculator */}
      <EMICalculator />

      {/* Neighborhood Insights */}
      <NeighborhoodSection />

      {/* Buying Journey */}
      <BuyingJourneyEnhanced />

      {/* FAQ Section */}
      <FAQSection />

      {/* Testimonials */}
      <TestimonialsSection
        title="What Our Buyers Say"
        subtitle="Real Stories from Happy Customers"
        testimonials={testimonials}
      />

      {/* Final CTA */}
      <CtaSection
        title="Ready to Find Your Dream Home?"
        description="Get expert guidance from our team of real estate specialists. We'll help you navigate every step of your buying journey."
        primaryLabel="Get Started Today"
        primaryHref="/contact"
        secondaryLabel="Chat on WhatsApp"
        secondaryHref="https://wa.me/919876543210"
      />
    </>
  );
}
