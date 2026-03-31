import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { propertyService } from '@/utils/propertyService';
import PropertyDetailClient from '@/components/buy/PropertyDetailClient';

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const property = propertyService.getPropertyById(id);

  if (!property) {
    return {
      title: 'Property Not Found | RealSutra',
    };
  }

  return {
    title: `${property.title} | Buy ${property.propertyType} in ${property.city} | RealSutra`,
    description: `${property.title} - ${property.beds} BHK ${property.propertyType} in ${property.neighborhood}, ${property.city}. Price: ${propertyService.formatPrice(property.price)}. Area: ${propertyService.formatArea(property.area)}`,
    openGraph: {
      title: property.title,
      description: `${property.beds} BHK ${property.propertyType} in ${property.city} - ${propertyService.formatPrice(property.price)}`,
      images: [
        {
          url: property.image,
          width: 1200,
          height: 630,
          alt: property.title,
        },
      ],
    },
  };
}

export default async function PropertyDetailPage({ params }: Props) {
  const { id } = await params;
  const property = propertyService.getPropertyById(id);

  if (!property) {
    notFound();
  }

  const similarProperties = propertyService.getSimilarProperties(id, 3);
  const cities = propertyService.getCities();
  const neighborhoods = propertyService.getNeighborhoods(property.city);

  return (
    <PropertyDetailClient
      property={property}
      similarProperties={similarProperties}
      allCities={cities}
      neighborhoods={neighborhoods}
    />
  );
}
