import { Metadata } from 'next';
import PropertiesPageContent from '@/components/buy/PropertiesPageContent';

export const metadata: Metadata = {
  title: 'All Properties for Sale | Buy Your Dream Home | RealSutra',
  description: 'Browse all available properties across India. Find your perfect home with advanced search filters, EMI calculator, and expert guidance.',
  keywords: ['properties for sale', 'buy property', 'real estate listings', 'homes for sale'],
};

type SearchParams = Promise<{
  location?: string;
  priceRange?: string;
  propertyType?: string;
  bedrooms?: string;
}>;

export default async function PropertiesPage(props: {
  searchParams: SearchParams;
}) {
  const searchParams = await props.searchParams;

  return (
    <>
      <PropertiesPageContent initialFilters={searchParams} />
    </>
  );
}
