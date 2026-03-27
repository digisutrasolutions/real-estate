import Link from "next/link";
import { Bath, BedDouble, MapPin, MoveRight, Ruler } from "lucide-react";

type Listing = {
  title: string;
  location: string;
  image: string;
  area: string;
  beds: number;
  baths: number;
  description: string;
  price: string;
  imagePosition: string;
};

const listings: Listing[] = [
  {
    title: "Golf Course Road Penthouse",
    location: "Gurugram",
    image: "/images/property-1.jpg",
    area: "4,200 sq. ft.",
    beds: 4,
    baths: 5,
    description:
      "Private terrace lounge, double-height living room, and sweeping city views.",
    price: "12.5 Cr",
    imagePosition: "object-[center_28%]",
  },
  {
    title: "Beachfront Luxury Villa",
    location: "Alibaug",
    image: "/images/property-2.jpg",
    area: "6,800 sq. ft.",
    beds: 6,
    baths: 7,
    description:
      "Private beach access, infinity pool, home theater, and handcrafted interiors.",
    price: "28 Cr",
    imagePosition: "object-[center_56%]",
  },
  {
    title: "Skyline View Apartment",
    location: "Noida",
    image: "/images/property-3.jpg",
    area: "1,850 sq. ft.",
    beds: 2,
    baths: 3,
    description:
      "Modern open-plan kitchen, smart home automation, and premium clubhouse access.",
    price: "3.95 Cr",
    imagePosition: "object-[center_42%]",
  },
];

export default function HomeListings() {
  return (
    <section className="bg-[#f7f4ee]">
      <div className="mx-auto max-w-6xl px-3 py-10 sm:px-4 sm:py-14 lg:px-6">
        <div className="max-w-xl">
          <h2 className="font-display text-[2rem] leading-[0.98] tracking-[-0.03em] text-[#1f1a16] sm:text-[2.7rem]">
            Handpicked Listings, Just for You
          </h2>
          <p className="mt-3 text-sm leading-6 text-[#6a6258] sm:text-[15px]">
            Browse our curated collection of premium homes and investment-ready properties.
          </p>
        </div>

        <div className="mt-7 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {listings.map((listing) => (
            <article
              key={listing.title}
              className="group overflow-hidden border border-[#ded5c7] bg-white shadow-[0_8px_24px_rgba(59,40,23,0.07)] transition hover:-translate-y-1 hover:shadow-[0_14px_34px_rgba(59,40,23,0.14)]"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={listing.image}
                  alt={listing.title}
                  className={`h-full w-full object-cover transition duration-700 group-hover:scale-[1.05] ${listing.imagePosition}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2f2418]/28 via-transparent to-transparent" />
                <span className="absolute right-3 top-3 inline-flex items-center gap-1 border border-white/55 bg-white/88 px-2 py-1 text-[11px] font-semibold text-[#3a3026] backdrop-blur-[2px]">
                  <MapPin className="h-3 w-3" />
                  {listing.location}
                </span>
                <Link
                  href="/properties"
                  className="absolute bottom-3 left-3 inline-flex items-center gap-1 bg-[#2f2418]/86 px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-[#1f1812]"
                >
                  View Details
                  <MoveRight className="h-3.5 w-3.5" />
                </Link>
              </div>

              <div className="space-y-4 p-4">
                <div className="flex flex-wrap items-center gap-3 text-xs text-[#74695d]">
                  <span className="inline-flex items-center gap-1.5">
                    <Ruler className="h-3.5 w-3.5" />
                    {listing.area}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <BedDouble className="h-3.5 w-3.5" />
                    {listing.beds}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Bath className="h-3.5 w-3.5" />
                    {listing.baths}
                  </span>
                </div>

                <div>
                  <h3 className="text-[1.42rem] leading-[1.1] tracking-[-0.02em] text-[#1f1a16]">
                    {listing.title}
                  </h3>
                  <p className="mt-2 text-[13px] leading-5 text-[#766d64]">{listing.description}</p>
                </div>

                <div className="flex items-center justify-between border-t border-[#ece4d8] pt-3">
                  <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[#7e7468]">
                    Starting From
                  </span>
                  <p className="text-sm font-semibold text-[#2d241b]">₹ {listing.price}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 border-t border-[#ddd3c5] pt-6">
          <Link
            href="/properties"
            className="inline-flex min-h-11 items-center justify-center border border-[#e5b994] bg-[#fff7ee] px-5 text-sm font-semibold text-[#9a5b23] transition hover:border-[#f66b05] hover:bg-[#fff0df] hover:text-[#f66b05]"
          >
            View All Listings
          </Link>
        </div>
      </div>
    </section>
  );
}
