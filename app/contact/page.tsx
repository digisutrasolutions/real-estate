import { Metadata } from 'next';
import { MapPin, Phone } from 'lucide-react';
import ContactForm from '@/components/contact/ContactForm';
import PageHero from '@/components/shared/PageHero';
import CtaSection from '@/components/shared/CtaSection';

export const metadata: Metadata = {
  title: 'Contact RealSutra | Real Estate Consultants | Get Expert Advice',
  description: 'Get in touch with RealSutra\'s expert team. Call, email, or visit our offices across India. Quick response to all inquiries about buying, selling, or renting property.',
  keywords: ['contact real estate', 'property consultant', 'real estate advisor', 'contact us'],
  openGraph: {
    title: 'Contact RealSutra | Real Estate Consultants',
    description: 'Connect with our expert team for all your real estate needs. Multiple ways to reach us.',
    type: 'website',
    url: 'https://realsutra.com/contact',
  },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        subtitle="Get in Touch"
        title="Contact Our Expert Team"
        description="Have questions? Our real estate consultants are ready to help you find the perfect property or solution."
      />

      <ContactForm />

      {/* Map Section */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:py-24">
        <div className="text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-[#f66b05]">
            Our Locations
          </p>
          <h2 className="mb-12 text-3xl font-bold text-[#2f3a4a] sm:text-4xl">
            Visit Us Across India
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              city: 'Bangalore',
              address: 'MG Road, Bangalore',
              phone: '+91 80 1234 5678',
            },
            {
              city: 'Mumbai',
              address: 'Bandra, Mumbai',
              phone: '+91 22 1234 5678',
            },
            {
              city: 'Delhi',
              address: 'Connaught Place, Delhi',
              phone: '+91 11 1234 5678',
            },
            {
              city: 'Hyderabad',
              address: 'Hitech City, Hyderabad',
              phone: '+91 40 1234 5678',
            },
            {
              city: 'Chennai',
              address: 'Anna Nagar, Chennai',
              phone: '+91 44 1234 5678',
            },
            {
              city: 'Pune',
              address: 'Koregaon Park, Pune',
              phone: '+91 20 1234 5678',
            },
          ].map((location, index) => (
            <div
              key={index}
              className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:shadow-lg"
            >
              <h4 className="mb-3 text-lg font-semibold text-[#2f3a4a]">
                {location.city}
              </h4>
              <p className="mb-2 flex items-start gap-2 text-slate-600">
                <MapPin className="mt-1 h-4 w-4 flex-shrink-0 text-[#f66b05]" />
                {location.address}
              </p>
              <p className="flex items-center gap-2 text-slate-600">
                <Phone className="h-4 w-4 text-[#f66b05]" />
                {location.phone}
              </p>
            </div>
          ))}
        </div>
      </section>

      <CtaSection
        title="Let's Connect"
        description="Reach out to us through any channel that's convenient for you. Our team is ready to assist."
        primaryLabel="Schedule Consultation"
        primaryHref="/contact"
        secondaryLabel="Explore Services"
        secondaryHref="/buy"
        variant="light"
      />
    </>
  );
}
