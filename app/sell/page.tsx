import { Metadata } from 'next';
import PageHero from '@/components/shared/PageHero';
import FeaturesGrid from '@/components/shared/FeaturesGrid';
import ProcessSteps from '@/components/shared/ProcessSteps';
import StatisticsSection from '@/components/shared/StatisticsSection';
import TestimonialsSection from '@/components/shared/TestimonialsSection';
import CtaSection from '@/components/shared/CtaSection';

export const metadata: Metadata = {
  title: 'Sell Your Property Fast | Best Price Guaranteed | RealSutra',
  description: 'Sell your property quickly with RealSutra. Get expert valuation, maximum exposure, and qualified buyers. No commission surprises - transparent pricing.',
  keywords: ['sell property', 'property sales', 'quick sale', 'real estate selling', 'property valuation'],
  openGraph: {
    title: 'Sell Your Property Fast | Best Price Guaranteed',
    description: 'Sell your property with expert support and maximum exposure to qualified buyers.',
    type: 'website',
    url: 'https://realsutra.com/sell',
    images: [
      {
        url: 'https://realsutra.com/og-sell.jpg',
        width: 1200,
        height: 630,
        alt: 'Sell Property',
      },
    ],
  },
};

const sellingFeatures = [
  {
    icon: 'TrendingUp' as const,
    title: 'Maximum Exposure',
    description: 'Your property gets featured across multiple platforms and reaches thousands of potential buyers.',
  },
  {
    icon: 'DollarSign' as const,
    title: 'Best Market Price',
    description: 'Expert valuation and strategic marketing ensure you get the best possible price for your property.',
  },
  {
    icon: 'Eye' as const,
    title: 'Professional Marketing',
    description: 'High-quality photos, virtual tours, and compelling descriptions attract serious buyers.',
  },
  {
    icon: 'Users' as const,
    title: 'Qualified Buyers',
    description: 'We pre-screen buyers to ensure genuine interest, serious intent, and financial readiness.',
  },
  {
    icon: 'Gauge' as const,
    title: 'Fast Closure',
    description: 'Streamlined process reduces selling time from months to weeks with proper coordination.',
  },
  {
    icon: 'CircleCheckBig' as const,
    title: 'Full Support',
    description: 'Complete assistance with documentation, negotiation, registration, and legal compliance.',
  },
];

const sellingProcess = [
  {
    number: 1,
    icon: 'Eye' as const,
    title: 'Schedule Evaluation',
    description: 'Our experts visit your property to assess its condition, location, and market value.',
  },
  {
    number: 2,
    icon: 'TrendingUp' as const,
    title: 'Valuation & Strategy',
    description: 'Receive detailed valuation report and strategic pricing recommendations for maximum returns.',
  },
  {
    number: 3,
    icon: 'Users' as const,
    title: 'Marketing & Showcase',
    description: 'Professional photography, virtual tours, and targeted marketing to reach qualified buyers.',
  },
  {
    number: 4,
    icon: 'Gauge' as const,
    title: 'Buyer Coordination',
    description: 'We manage buyer inquiries, schedule visits, and pre-qualify serious prospects.',
  },
  {
    number: 5,
    icon: 'DollarSign' as const,
    title: 'Negotiation & Agreement',
    description: 'Negotiate best terms on your behalf and finalize the sale agreement with clear conditions.',
  },
  {
    number: 6,
    icon: 'CircleCheckBig' as const,
    title: 'Legal Closure',
    description: 'Complete all legal formalities, registrations, and ensure smooth property handover.',
  },
];

const sellingStats = [
  { label: 'Properties Sold', value: '9,800', suffix: '+' },
  { label: 'Avg. Success Rate', value: '94', suffix: '%' },
  { label: 'Days to Sell', value: '35', suffix: 'avg' },
  { label: 'Sellers Satisfied', value: '6,500', suffix: '+' },
];

const sellingTestimonials = [
  {
    id: '1',
    name: 'Rohit Verma',
    role: 'Property Seller',
    content: 'Sold my property faster than expected at a great price. RealSutra\'s team was professional and transparent throughout.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
  },
  {
    id: '2',
    name: 'Anjali Nair',
    role: 'Property Owner',
    content: 'The marketing support was excellent. Found the right buyer within two months. Highly recommended!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
  },
  {
    id: '3',
    name: 'Suresh Reddy',
    role: 'Real Estate Investor',
    content: 'Best service for selling properties. Their expertise in valuation and negotiation got me excellent returns.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
  },
];

export default function SellPage() {
  return (
    <>
      <PageHero
        subtitle="Maximize Your Returns"
        title="Sell Your Property with Confidence"
        description="Get expert valuation, maximum buyer exposure, and complete support to sell your property quickly at the best price possible."
      />

      <FeaturesGrid
        title="Why Sellers Trust RealSutra"
        subtitle="Selling Advantages"
        features={sellingFeatures}
        columns={3}
      />

      <ProcessSteps
        title="Our Efficient Selling Process"
        subtitle="Step by Step to Success"
        steps={sellingProcess}
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:py-24">
        <div className="rounded-lg border border-slate-200 bg-gradient-to-r from-[#2c1d14]/5 to-[#f66b05]/5 p-8 text-center">
          <h3 className="mb-4 text-2xl font-bold text-[#2f3a4a]">
            Get Your Free Property Valuation
          </h3>
          <p className="mb-6 text-slate-600">
            Understand your property's market value with our expert analysis. No obligation, quick assessment.
          </p>
          <button className="inline-flex items-center rounded-lg bg-[#f66b05] px-8 py-3 font-semibold text-white transition duration-300 hover:bg-[#e55a00]">
            Get Free Valuation
          </button>
        </div>
      </section>

      <StatisticsSection
        title="Proven Success Record"
        description="Trusted by thousands of property sellers across India"
        stats={sellingStats}
      />

      <TestimonialsSection
        title="What Our Sellers Say"
        subtitle="Success Stories"
        testimonials={sellingTestimonials}
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:py-24">
        <div className="rounded-lg border border-slate-200 bg-white p-8 sm:p-12">
          <h3 className="mb-6 text-2xl font-bold text-[#2f3a4a] sm:text-3xl">
            Pricing That Works for You
          </h3>
          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <h4 className="mb-4 text-lg font-semibold text-[#2f3a4a]">
                Standard Commission Model
              </h4>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-5 w-5 flex-shrink-0 rounded-full bg-[#f66b05] text-center text-xs font-bold text-white leading-5">✓</span>
                  <span>Transparent 1-2% commission based on final sale price</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-5 w-5 flex-shrink-0 rounded-full bg-[#f66b05] text-center text-xs font-bold text-white leading-5">✓</span>
                  <span>No hidden charges or surprise fees</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-5 w-5 flex-shrink-0 rounded-full bg-[#f66b05] text-center text-xs font-bold text-white leading-5">✓</span>
                  <span>Payment only after successful sale closure</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 text-lg font-semibold text-[#2f3a4a]">
                What's Included
              </h4>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-5 w-5 flex-shrink-0 rounded-full bg-[#f66b05] text-center text-xs font-bold text-white leading-5">✓</span>
                  <span>Professional property evaluation and valuation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-5 w-5 flex-shrink-0 rounded-full bg-[#f66b05] text-center text-xs font-bold text-white leading-5">✓</span>
                  <span>Expert marketing and buyer sourcing</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-5 w-5 flex-shrink-0 rounded-full bg-[#f66b05] text-center text-xs font-bold text-white leading-5">✓</span>
                  <span>Complete legal and documentation support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CtaSection
        title="Ready to Sell Your Property?"
        description="Contact our expert team today for a free valuation and personalized selling strategy."
        primaryLabel="Get Free Valuation"
        primaryHref="/contact"
        secondaryLabel="Explore Options"
        secondaryHref="/sell"
      />
    </>
  );
}
