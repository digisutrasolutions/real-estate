import { Metadata } from 'next';
import PageHero from '@/components/shared/PageHero';
import FeaturesGrid from '@/components/shared/FeaturesGrid';
import ProcessSteps from '@/components/shared/ProcessSteps';
import PropertyListings from '@/components/shared/PropertyListings';
import StatisticsSection from '@/components/shared/StatisticsSection';
import TestimonialsSection from '@/components/shared/TestimonialsSection';
import CtaSection from '@/components/shared/CtaSection';

export const metadata: Metadata = {
  title: 'Real Estate Development Projects | Upcoming Properties | RealSutra',
  description: 'Invest in premium real estate developments across major Indian cities. Pre-launch access, best pricing, and flexible payment plans for upcoming residential and commercial projects.',
  keywords: ['real estate developments', 'new construction', 'upcoming projects', 'pre-launch properties', 'commercial real estate'],
  openGraph: {
    title: 'Real Estate Development Projects | Upcoming Properties',
    description: 'Explore premium development projects with pre-launch access and flexible investment options.',
    type: 'website',
    url: 'https://realsutra.com/developments',
    images: [
      {
        url: 'https://realsutra.com/og-developments.jpg',
        width: 1200,
        height: 630,
        alt: 'Real Estate Developments',
      },
    ],
  },
};

const developmentFeatures = [
  {
    icon: 'Lightbulb' as const,
    title: 'Pre-Launch Advantage',
    description: 'Get first access to upcoming projects at pre-launch pricing with exclusive early-bird benefits.',
  },
  {
    icon: 'Building2' as const,
    title: 'Premium Locations',
    description: 'Projects in India\'s fastest-growing areas with high appreciation potential and excellent connectivity.',
  },
  {
    icon: 'Zap' as const,
    title: 'Flexible Payment Plans',
    description: 'Attractive payment schedules with post-possession options for better financial planning.',
  },
  {
    icon: 'Award' as const,
    title: 'Quality Assurance',
    description: 'Curated selection of projects from trusted developers with proven track records.',
  },
  {
    icon: 'MapPin' as const,
    title: 'Smart Location Analysis',
    description: 'Properties chosen for growth potential, infrastructure, and future value appreciation.',
  },
  {
    icon: 'Briefcase' as const,
    title: 'Investment Support',
    description: 'Expert guidance on market trends, ROI potential, and investment legalities.',
  },
];

const investmentProcess = [
  {
    number: 1,
    icon: 'MapPin' as const,
    title: 'Project Selection',
    description: 'Browse curated list of upcoming projects from verified developers in prime locations.',
  },
  {
    number: 2,
    icon: 'Award' as const,
    title: 'Due Diligence',
    description: 'We conduct thorough verification of developer, project approvals, and legal clearances.',
  },
  {
    number: 3,
    icon: 'Lightbulb' as const,
    title: 'Investment Analysis',
    description: 'Get detailed project details, specifications, expected returns, and appreciation potential.',
  },
  {
    number: 4,
    icon: 'Briefcase' as const,
    title: 'Booking Process',
    description: 'Streamlined booking with assistance in documentation and agreement preparation.',
  },
  {
    number: 5,
    icon: 'Zap' as const,
    title: 'Payment Management',
    description: 'Flexible payment plans with clear milestone-based payment schedules and options.',
  },
  {
    number: 6,
    icon: 'Building2' as const,
    title: 'Handover & Support',
    description: 'Receive possession updates, manage contractor interactions, and ensure quality deliverables.',
  },
];

const featuredDevelopments = [
  {
    id: '1',
    title: 'Premium Luxury Towers',
    location: 'Whitefield, Bangalore',
    price: 'Starting ₹ 1.2 Cr',
    beds: 3,
    baths: 2,
    area: '1,850 sq.ft',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&h=400&fit=crop',
    type: 'development' as const,
    featured: true,
  },
  {
    id: '2',
    title: 'Smart City Residences',
    location: 'GIFT City, Ahmedabad',
    price: 'Starting ₹ 75 L',
    beds: 2,
    baths: 2,
    area: '1,200 sq.ft',
    image: 'https://images.unsplash.com/photo-1498257220925-7f126c88a3ba?w=600&h=400&fit=crop',
    type: 'development' as const,
  },
  {
    id: '3',
    title: 'Waterfront Towers',
    location: 'Gurgaon, Delhi NCR',
    price: 'Starting ₹ 2 Cr',
    beds: 4,
    baths: 3,
    area: '2,500 sq.ft',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop',
    type: 'development' as const,
    featured: true,
  },
  {
    id: '4',
    title: 'Tech Park Residences',
    location: 'Hyderabad',
    price: 'Starting ₹ 60 L',
    beds: 2,
    baths: 2,
    area: '1,100 sq.ft',
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&h=400&fit=crop',
    type: 'development' as const,
  },
];

const developmentStats = [
  { label: 'Active Projects', value: '45', suffix: '+' },
  { label: 'Upcoming Units', value: '12,000', suffix: '+' },
  { label: 'Investors', value: '8,500', suffix: '+' },
  { label: 'Total Investment', value: '₹ 28,000', suffix: 'Cr+' },
];

const developmentTestimonials = [
  {
    id: '1',
    name: 'Arun Kumar',
    role: 'Property Investor',
    content: 'Invested in a RealSutra-curated development project. Excellent appreciation in just 2 years. Great guidance!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
  },
  {
    id: '2',
    name: 'Divya Shah',
    role: 'Real Estate Investor',
    content: 'Pre-launch advantage saved me significant money. Process was transparent and easy to understand.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
  },
  {
    id: '3',
    name: 'Sanjay Mishra',
    role: 'Portfolio Manager',
    content: 'RealSutra\'s due diligence is thorough. We trust their project selections for our investment portfolio.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
  },
];

export default function DevelopmentsPage() {
  return (
    <>
      <PageHero
        subtitle="Smart Investment Opportunities"
        title="Explore Premium Development Projects"
        description="Invest in upcoming real estate projects with pre-launch advantages, flexible payment plans, and expert guidance for optimal returns."
      />

      <FeaturesGrid
        title="Why Invest Through RealSutra"
        subtitle="Development Advantages"
        features={developmentFeatures}
        columns={3}
      />

      <PropertyListings
        title="Featured Development Projects"
        subtitle="Pre-Launch Opportunities"
        properties={featuredDevelopments}
        columns={3}
      />

      <ProcessSteps
        title="Our Investment Process"
        subtitle="From Selection to Handing"
        steps={investmentProcess}
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:py-24">
        <div className="rounded-lg border border-slate-200 bg-white p-8 sm:p-12">
          <h3 className="mb-6 text-2xl font-bold text-[#2f3a4a] sm:text-3xl">
            Investment Benefits
          </h3>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="space-y-2">
              <h4 className="font-semibold text-[#2f3a4a]">Pre-Launch Pricing</h4>
              <p className="text-slate-600">Get 10-20% better pricing compared to launch pricing</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold text-[#2f3a4a]">Flexible Payment</h4>
              <p className="text-slate-600">Easy EMI and post-possession payment options available</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold text-[#2f3a4a]">Tax Benefits</h4>
              <p className="text-slate-600">Maximize benefits under Home Loan and other incentives</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold text-[#2f3a4a]">Appreciation Potential</h4>
              <p className="text-slate-600">Properties in high-growth areas with strong appreciation history</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold text-[#2f3a4a]">Quality Assurance</h4>
              <p className="text-slate-600">Only verified developers with excellent project delivery records</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold text-[#2f3a4a]">Complete Support</h4>
              <p className="text-slate-600">Ongoing guidance through construction and possession phases</p>
            </div>
          </div>
        </div>
      </section>

      <StatisticsSection
        title="Strong Investment Track Record"
        description="Investors trust us for smart real estate development opportunities"
        stats={developmentStats}
      />

      <TestimonialsSection
        title="What Investors Say"
        subtitle="Investment Success Stories"
        testimonials={developmentTestimonials}
      />

      <CtaSection
        title="Ready to Explore Investment Opportunities?"
        description="Schedule a consultation with our investment experts to find the right development project for your portfolio."
        primaryLabel="Schedule Consultation"
        primaryHref="/contact"
        secondaryLabel="View All Projects"
        secondaryHref="/developments"
      />
    </>
  );
}
