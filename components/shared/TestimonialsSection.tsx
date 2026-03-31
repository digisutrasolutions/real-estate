'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import Image from 'next/image';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  image: string;
}

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
  title?: string;
  subtitle?: string;
}

export default function TestimonialsSection({
  testimonials,
  title,
  subtitle,
}: TestimonialsSectionProps) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:py-24">
      {(title || subtitle) && (
        <div className="mb-12 text-center">
          {subtitle && (
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-[#f66b05]">
              {subtitle}
            </p>
          )}
          {title && (
            <h2 className="text-3xl font-bold text-[#2f3a4a] sm:text-4xl">
              {title}
            </h2>
          )}
        </div>
      )}

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:shadow-lg"
          >
            {/* Stars */}
            <div className="mb-4 flex gap-1">
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <Star
                  key={i}
                  className="h-4 w-4 fill-[#f66b05] text-[#f66b05]"
                />
              ))}
            </div>

            {/* Quote */}
            <p className="mb-6 text-slate-600">{testimonial.content}</p>

            {/* Author */}
            <div className="flex items-center gap-4 border-t border-slate-200 pt-4">
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                width={48}
                height={48}
                className="h-12 w-12 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold text-[#2f3a4a]">{testimonial.name}</p>
                <p className="text-sm text-slate-500">{testimonial.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
