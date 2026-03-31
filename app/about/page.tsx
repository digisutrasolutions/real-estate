import { Metadata } from 'next';
import Image from 'next/image';
import PageHero from '@/components/shared/PageHero';
import FeaturesGrid from '@/components/shared/FeaturesGrid';
import StatisticsSection from '@/components/shared/StatisticsSection';
import TestimonialsSection from '@/components/shared/TestimonialsSection';
import CtaSection from '@/components/shared/CtaSection';

export const metadata: Metadata = {
  title: 'About RealSutra | India\'s Trusted Real Estate Partner | Expert Team',
  description: 'Learn about RealSutra\'s journey, mission, and vision. Trusted by thousands for transparent real estate solutions in buying, selling, renting, and development across India.',
  keywords: ['about real estate company', 'real estate advisor', 'property consultant', 'trusted agent'],
  openGraph: {
    title: 'About RealSutra | India\'s Trusted Real Estate Partner',
    description: 'Discover RealSutra\'s story, values, and commitment to transparent real estate solutions.',
    type: 'website',
    url: 'https://realsutra.com/about',
    images: [
      {
        url: 'https://realsutra.com/og-about.jpg',
        width: 1200,
        height: 630,
        alt: 'About RealSutra',
      },
    ],
  },
};

const values = [
  {
    icon: 'Heart' as const,
    title: 'Client First',
    description: 'Your satisfaction and trust are at the center of everything we do. Your success is our success.',
  },
  {
    icon: 'Target' as const,
    title: 'Transparency',
    description: 'Complete clarity on pricing, process, and outcomes. No hidden charges or surprises.',
  },
  {
    icon: 'Award' as const,
    title: 'Excellence',
    description: 'Highest standards in service delivery, property quality, and professional expertise.',
  },
  {
    icon: 'TrendingUp' as const,
    title: 'Innovation',
    description: 'Leveraging technology and modern practices for better real estate experiences.',
  },
  {
    icon: 'Globe' as const,
    title: 'Accessibility',
    description: 'Making premium real estate solutions available to all, across all regions in India.',
  },
  {
    icon: 'Users' as const,
    title: 'Community',
    description: 'Building strong relationships with clients, agents, and partners in real estate ecosystem.',
  },
];

const stats = [
  { label: 'Years in Business', value: '15', suffix: '+' },
  { label: 'Successful Transactions', value: '45,000', suffix: '+' },
  { label: 'Happy Clients', value: '38,000', suffix: '+' },
  { label: 'Expert Team Members', value: '500', suffix: '+' },
];

const teamTestimonials = [
  {
    id: '1',
    name: 'Vikram Sharma',
    role: 'Founder & CEO',
    content: 'Our mission is to transform real estate into a transparent, trustworthy ecosystem where everyone benefits.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
  },
  {
    id: '2',
    name: 'Priya Desai',
    role: 'Chief Operations Officer',
    content: 'With 20 years of experience, we bring expertise and innovation to every transaction we handle.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
  },
  {
    id: '3',
    name: 'Rajesh Patel',
    role: 'Chief Growth Officer',
    content: 'Our growth reflects our clients\' trust and satisfaction. We are committed to excellence every day.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        subtitle="Our Story & Values"
        title="About RealSutra"
        description="Transforming real estate through transparency, expertise, and customer-centric solutions across India."
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Content */}
          <div className="space-y-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-[#f66b05]">
                Our Journey
              </p>
              <h2 className="mt-2 text-3xl font-bold text-[#2f3a4a]">
                Building Trust Since 2009
              </h2>
            </div>

            <p className="text-lg leading-relaxed text-slate-600">
              RealSutra started with a simple vision: to make real estate transactions transparent,
              trustworthy, and rewarding for everyone involved. What began as a small advisory firm
              has grown into India's trusted name in real estate solutions.
            </p>

            <p className="text-slate-600">
              Over 15 years, we've successfully facilitated over 45,000 transactions, helping individuals
              and investors find their perfect properties, make informed decisions, and achieve their
              real estate goals.
            </p>

            <p className="text-slate-600">
              Our success is built on the foundation of transparency, expertise, and unwavering commitment
              to client satisfaction. Every team member at RealSutra is dedicated to ensuring you receive
              the best possible service.
            </p>

            <div className="pt-6">
              <h3 className="mb-4 text-lg font-semibold text-[#2f3a4a]">Our Expertise Covers:</h3>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#f66b05]" />
                  Residential Properties (Buy, Sell, Rent)
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#f66b05]" />
                  Commercial Real Estate Solutions
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#f66b05]" />
                  Development Projects & Investment Opportunities
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#f66b05]" />
                  Legal Due Diligence & Documentation
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#f66b05]" />
                  Market Analysis & Investment Advisory
                </li>
              </ul>
            </div>
          </div>

          {/* Image */}
          <div className="relative h-full min-h-[400px]">
            <Image
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=600&fit=crop"
              alt="About RealSutra Team"
              fill
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </section>

      <FeaturesGrid
        title="Our Core Values"
        subtitle="What We Stand For"
        features={values}
        columns={3}
      />

      <StatisticsSection
        title="Our Impact"
        description="15+ years of trust and excellence in the real estate industry"
        stats={stats}
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:py-24">
        <div className="rounded-lg border border-slate-200 bg-white p-8 sm:p-12">
          <h3 className="mb-6 text-2xl font-bold text-[#2f3a4a] sm:text-3xl">
            Our Commitment to Excellence
          </h3>

          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <h4 className="mb-4 flex items-center gap-2 text-lg font-semibold text-[#2f3a4a]">
                <span className="h-8 w-8 rounded-full bg-[#f66b05] text-white flex items-center justify-center text-sm font-bold">
                  ✓
                </span>
                Transparent Pricing
              </h4>
              <p className="text-slate-600">
                No hidden charges. Clear breakdown of all costs and fees before any commitment.
              </p>
            </div>

            <div>
              <h4 className="mb-4 flex items-center gap-2 text-lg font-semibold text-[#2f3a4a]">
                <span className="h-8 w-8 rounded-full bg-[#f66b05] text-white flex items-center justify-center text-sm font-bold">
                  ✓
                </span>
                Expert Verification
              </h4>
              <p className="text-slate-600">
                Every property undergoes thorough legal and structural verification before listing.
              </p>
            </div>

            <div>
              <h4 className="mb-4 flex items-center gap-2 text-lg font-semibold text-[#2f3a4a]">
                <span className="h-8 w-8 rounded-full bg-[#f66b05] text-white flex items-center justify-center text-sm font-bold">
                  ✓
                </span>
                24/7 Support
              </h4>
              <p className="text-slate-600">
                Dedicated support team available round the clock to address your concerns.
              </p>
            </div>

            <div>
              <h4 className="mb-4 flex items-center gap-2 text-lg font-semibold text-[#2f3a4a]">
                <span className="h-8 w-8 rounded-full bg-[#f66b05] text-white flex items-center justify-center text-sm font-bold">
                  ✓
                </span>
                Client Protection
              </h4>
              <p className="text-slate-600">
                Your interests are protected through comprehensive agreements and verification.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:py-24">
        <div className="text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-[#f66b05]">
            Leadership Team
          </p>
          <h2 className="mb-12 text-3xl font-bold text-[#2f3a4a] sm:text-4xl">
            Meet Our Founders & Leaders
          </h2>
        </div>
        <TestimonialsSection testimonials={teamTestimonials} />
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:py-24">
        <div className="rounded-lg border border-slate-200 bg-gradient-to-r from-[#2c1d14]/5 to-[#f66b05]/5 p-8 text-center">
          <h3 className="mb-4 text-2xl font-bold text-[#2f3a4a]">
            Our Presence Across India
          </h3>
          <p className="mb-6 text-slate-600">
            With offices and operations across 35+ cities, we bring local expertise with
            national standards of service and excellence.
          </p>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
            <div>
              <p className="text-3xl font-bold text-[#f66b05]">35+</p>
              <p className="text-sm text-slate-600">Cities Covered</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-[#f66b05]">500+</p>
              <p className="text-sm text-slate-600">Team Members</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-[#f66b05]">50+</p>
              <p className="text-sm text-slate-600">Office Locations</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-[#f66b05]">4.8★</p>
              <p className="text-sm text-slate-600">Customer Rating</p>
            </div>
          </div>
        </div>
      </section>

      <CtaSection
        title="Let's Work Together"
        description="Whether you're buying, selling, renting, or investing, our expert team is ready to help you achieve your real estate goals."
        primaryLabel="Contact Us Today"
        primaryHref="/contact"
        secondaryLabel="Explore Services"
        secondaryHref="/buy"
      />
    </>
  );
}
