"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { MoveRight } from "lucide-react";

type Project = {
  title: string;
  subtitle: string;
  image: string;
  imagePosition: string;
  featured?: boolean;
};

const projects: Project[] = [
  {
    title: "Morjim Coastline Villas",
    subtitle: "Sea-facing luxury villas in North Goa with private decks and sunset views.",
    image: "/images/signature-3.jpg",
    imagePosition: "object-[center_36%]",
  },
  {
    title: "Noida Crown Residences",
    subtitle: "Ultra-premium residences near the expressway with skyline balconies and concierge services.",
    image: "/images/signature-2.jpg",
    imagePosition: "object-[center_52%]",
    featured: true,
  },
  {
    title: "Golf Course Skyline Towers",
    subtitle: "High-rise sky homes in Gurugram designed for modern luxury and investment growth.",
    image: "/images/signature-1.jpg",
    imagePosition: "object-[center_44%]",
  },
];

export default function SignatureProjects() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#f7f4ee] py-8 sm:py-12">
      <div className="mx-auto max-w-6xl px-3 sm:px-4 lg:px-6">
        <div className="border border-[#e2d9cc] bg-[#fbf8f2] p-4 sm:p-6 lg:p-7">
          <div className="flex flex-col gap-4 border-b border-[#e3d9cc] pb-5 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-xl">
              <h2 className="font-display text-[2rem] leading-[0.98] tracking-[-0.03em] text-[#1f1a16] sm:text-[2.5rem]">
                Our Signature Projects
              </h2>
              <p className="mt-2 text-sm leading-6 text-[#6d655c]">
                Explore our exclusive developments, each crafted with world-class design,
                premium locations, and unmatched build quality.
              </p>
            </div>
            <Link
              href="/developments"
              className="inline-flex min-h-10 items-center justify-center border border-[#e8b98e] bg-[#fff4e8] px-4 text-sm font-semibold text-[#a05d24] transition hover:border-[#f66b05] hover:bg-[#ffecda] hover:text-[#f66b05]"
            >
              View All Projects
            </Link>
          </div>

          <div className="mt-6 grid gap-4 lg:grid-cols-12">
            {projects.map((project, index) => {
              const featured = project.featured;
              return (
                <article
                  key={project.title}
                  className={[
                    "group overflow-hidden border border-[#ddd3c5] bg-white shadow-[0_8px_24px_rgba(59,40,23,0.08)] transition-all duration-700",
                    featured ? "lg:col-span-6" : "lg:col-span-3",
                    isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
                  ].join(" ")}
                  style={{ transitionDelay: `${index * 140}ms` }}
                >
                  <div className={featured ? "relative h-[300px] sm:h-[380px]" : "relative h-[210px] sm:h-[250px]"}>
                    <img
                      src={project.image}
                      alt={project.title}
                      className={`h-full w-full object-cover transition duration-700 group-hover:scale-[1.05] ${project.imagePosition}`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2c2016]/35 via-transparent to-transparent" />
                    <Link
                      href="/developments"
                      className="absolute bottom-3 left-3 inline-flex items-center gap-1 bg-[#2f2418]/84 px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-[#1f1812]"
                    >
                      View Details
                      <MoveRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>

                  <div className="space-y-1 p-4">
                    <h3
                      className={
                        featured
                          ? "font-display text-[2rem] leading-[1.02] tracking-[-0.02em] text-[#1f1a16]"
                          : "font-display text-[1.45rem] leading-[1.06] tracking-[-0.02em] text-[#1f1a16]"
                      }
                    >
                      {project.title}
                    </h3>
                    <p className="text-sm text-[#746b62]">{project.subtitle}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
