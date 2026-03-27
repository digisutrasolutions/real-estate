"use client";

import { useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

type Testimonial = {
  quote: string;
  name: string;
  location: string;
  image: string;
  rating: number;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "From the first call to the final handover, the process was smooth and stress-free. The team understood our needs clearly and helped us close the right home in Noida.",
    name: "Khalid A.",
    location: "Noida",
    image: "/person1.png",
    rating: 4.8,
  },
  {
    quote:
      "Their market insight and negotiation support saved us both time and money. Every visit was curated, and we felt confident at every step of the buying journey.",
    name: "Ritika Sharma",
    location: "Gurugram",
    image: "/person2.png",
    rating: 4.9,
  },
  {
    quote:
      "Professional, transparent, and genuinely helpful. They found us an investment-ready apartment with strong rental potential and handled documentation without friction.",
    name: "Arjun Mehta",
    location: "Bengaluru",
    image: "/person3.png",
    rating: 4.7,
  },
];

export default function ClientTestimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const current = testimonials[activeIndex];
  const avgRating = useMemo(
    () => testimonials.reduce((sum, item) => sum + item.rating, 0) / testimonials.length,
    [],
  );

  function next() {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  }

  function prev() {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }

  return (
    <section className="py-8 sm:py-12">
      <div className="mx-auto max-w-6xl px-3 sm:px-4 lg:px-6">
        <div className="border border-[#e2d9cc] bg-[#fbf8f2] p-4 sm:p-6 lg:p-7">
          <div className="border-b border-[#e3d9cc] pb-5 text-center">
            <h2 className="font-display text-[2rem] leading-none tracking-[-0.03em] text-[#1f1a16] sm:text-[2.4rem]">
              What Our Clients Say
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-[#6d655c]">
              Real stories from happy homeowners and investors who found their perfect
              property with us.
            </p>
          </div>

          <div className="grid gap-8 pt-6 lg:grid-cols-[220px_1fr] lg:items-start">
            <div className="flex flex-col gap-6">
              <div className="inline-flex items-center gap-1.5 text-[#f66b05]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
                <span className="ml-2 text-sm font-semibold text-[#4a3a2c]">
                  {avgRating.toFixed(1)}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={prev}
                  aria-label="Previous testimonial"
                  className="inline-flex h-10 w-10 items-center justify-center border border-[#ddd2c4] bg-white text-[#86644a] transition hover:border-[#f2b280] hover:text-[#f66b05]"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={next}
                  aria-label="Next testimonial"
                  className="inline-flex h-10 w-10 items-center justify-center bg-[#f66b05] text-white transition hover:bg-[#e65f03]"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            <article className="border border-[#e6ddd0] bg-white p-5 shadow-[0_10px_24px_rgba(59,40,23,0.08)] sm:p-7">
              <div key={current.name} className="animate-[fadeIn_450ms_ease]">
                <Quote className="h-10 w-10 text-[#f66b05]" strokeWidth={1.8} />
                <p className="mt-4 max-w-3xl text-[1.15rem] leading-8 text-[#3d3126] sm:text-[1.6rem] sm:leading-[1.45]">
                  “{current.quote}”
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <img
                    src={current.image}
                    alt={current.name}
                    className="h-11 w-11 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-sm font-semibold text-[#1f1a16]">{current.name}</p>
                    <p className="text-xs text-[#857d74]">{current.location}</p>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
