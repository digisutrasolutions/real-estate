import Link from "next/link";
import { ArrowRight, Handshake } from "lucide-react";

export default function HomeCtaStrip() {
  return (
    <section className="pt-8 sm:pt-12">
      <div className="mx-auto max-w-6xl px-3 sm:px-4 lg:px-6">
        <div className="border border-[#e8925f] bg-[#f78a4f] px-5 py-8 sm:px-8 sm:py-10">
          <div className="flex flex-col gap-24">
            <span
              aria-hidden="true"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/40 bg-white/12 text-[#fff6ea]"
            >
              <Handshake className="h-5 w-5" />
            </span>

            <div className="flex flex-wrap items-center gap-x-8 gap-y-4 sm:gap-x-12">
              <p className="font-display text-[2rem] leading-none tracking-[-0.03em] text-[#fff6ea] sm:text-[2.9rem]">
                Find Your Home
              </p>
              <Link
                href="/consultation"
                className="inline-flex items-center gap-3 border-b border-white/75 pb-1 text-[1.85rem] leading-none tracking-[-0.02em] text-white transition hover:border-white hover:text-[#fff3e3] sm:text-[2.55rem]"
              >
                <ArrowRight className="h-7 w-7 sm:h-9 sm:w-9" />
                <span className="font-display">Get Started</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
