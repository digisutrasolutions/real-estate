"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { MoveRight } from "lucide-react";

type Insight = {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  imagePosition: string;
};

const insights: Insight[] = [
  {
    id: "1",
    title: "Top 5 Luxury Areas in Noida",
    excerpt:
      "Discover high-growth micro-markets offering premium lifestyle, better connectivity, and long-term value.",
    image: "/hero-home.png",
    imagePosition: "object-[center_38%]",
  },
  {
    id: "2",
    title: "India Property Buyer’s Guide",
    excerpt:
      "Your complete roadmap to buying your first property in India, from shortlist to registration and possession.",
    image: "/hero-home.png",
    imagePosition: "object-[center_64%]",
  },
  {
    id: "3",
    title: "Off-Plan Investment Tips",
    excerpt:
      "A practical framework to evaluate developer credibility, payment plans, and projected rental potential.",
    image: "/hero-home.png",
    imagePosition: "object-[center_50%]",
  },
];

export default function InsightsInspiration() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.18 },
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
              <h2 className="font-display text-[2rem] leading-[0.98] tracking-[-0.03em] text-[#1f1a16] sm:text-[2.45rem]">
                Insights & Inspiration
              </h2>
              <p className="mt-2 text-sm leading-6 text-[#6d655c]">
                Stay updated with market trends, investment strategies, and practical
                real-estate guides for confident decisions.
              </p>
            </div>
            <Link
              href="/blogs"
              className="inline-flex min-h-10 items-center justify-center border border-[#e8b98e] bg-[#fff4e8] px-4 text-sm font-semibold text-[#a05d24] transition hover:border-[#f66b05] hover:bg-[#ffecda] hover:text-[#f66b05]"
            >
              View All Blogs
            </Link>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {insights.map((post, index) => (
              <article
                key={post.id}
                className={[
                  "group border border-[#ddd3c5] bg-white shadow-[0_8px_24px_rgba(59,40,23,0.07)] transition-all duration-700 hover:-translate-y-1 hover:shadow-[0_14px_34px_rgba(59,40,23,0.13)]",
                  index === 0 ? "md:col-span-2" : "",
                  revealed ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
                ].join(" ")}
                style={{ transitionDelay: `${index * 140}ms` }}
              >
                <div className={index === 0 ? "grid gap-0 md:grid-cols-[1.05fr_1fr]" : "grid gap-0"}>
                  <div className={index === 0 ? "relative h-56 md:h-full" : "relative h-52"}>
                    <img
                      src={post.image}
                      alt={post.title}
                      className={`h-full w-full object-cover transition duration-700 group-hover:scale-[1.04] ${post.imagePosition}`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2b2016]/28 via-transparent to-transparent" />
                  </div>

                  <div className="p-5 sm:p-6">
                    <p className="font-display text-[2.1rem] leading-none tracking-[-0.03em] text-[#1f1a16]">
                      {post.id}/
                    </p>
                    <h3 className="mt-3 font-display text-[1.7rem] leading-[1.05] tracking-[-0.02em] text-[#1f1a16]">
                      {post.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-[#746b62]">{post.excerpt}</p>
                    <Link
                      href="/blogs"
                      className="mt-5 inline-flex items-center gap-1 bg-[#f66b05] px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-[#e55f03]"
                    >
                      Read More
                      <MoveRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
