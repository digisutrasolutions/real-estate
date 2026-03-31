import ListPropertyPageContent from '@/components/property/ListPropertyPageContent';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'List Your Property for Sale | Free Valuation | RealSutra',
  description: 'Get a free property valuation from RealSutra. Our expert team will help you sell your property faster with verified buyers. Quick response guaranteed.',
  keywords: 'sell property, property listing, free valuation, property sale, real estate',
  openGraph: {
    title: 'List Your Property for Sale | Free Valuation | RealSutra',
    description: 'Get expert guidance and connect with genuine buyers. Free property valuation and end-to-end selling support.',
    type: 'website',
    url: 'https://realsutra.com/list-property',
    images: [
      {
        url: 'https://realsutra.com/images/consultation-form-image.webp',
        width: 1200,
        height: 630,
        alt: 'Sell Your Property with RealSutra',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'List Your Property for Sale | RealSutra',
    description: 'Free property valuation and expert selling guidance',
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
  },
};

export default function ListPropertyPage() {
  return (
    <>
      {/* Structured Data (JSON-LD) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Property Listing Service',
            description: 'Free property valuation and selling assistance for property owners',
            provider: {
              '@type': 'LocalBusiness',
              name: 'RealSutra',
              url: 'https://realsutra.com',
              image: 'https://realsutra.com/logo.png',
            },
            areaServed: 'India',
            priceRange: 'Free',
            serviceType: 'Property Valuation & Listing',
            offers: {
              '@type': 'Offer',
              priceCurrency: 'INR',
              price: '0',
              description: 'Free property valuation',
            },
          }),
        }}
      />

      <ListPropertyPageContent />
    </>
  );
}
