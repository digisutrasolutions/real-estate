import { Building2, Home } from "lucide-react";

export default function HeroStatement() {
  return (
    <section className="py-8 sm:py-10">
      <div className="mx-auto max-w-6xl px-3 sm:px-4 lg:px-6">
        <div className="border border-[#e5ddcf] bg-[#fbf8f2] px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
          <p className="max-w-5xl text-[1.95rem] leading-[1.2] tracking-[-0.03em] text-[#1f1a16] sm:text-[2.5rem] lg:text-[3.2rem]">
            <span className="inline-flex translate-y-[-1px] items-center justify-center rounded-md border border-[#ddcfbf] bg-white px-2 py-1 text-[#7c5b40] shadow-[0_4px_12px_rgba(59,40,23,0.08)]">
              <Building2 className="h-5 w-5 sm:h-6 sm:w-6" />
            </span>{" "}
            Live beautifully today,{" "}
            invest wisely for tomorrow - discover <span className="inline-flex translate-y-[-1px] items-center justify-center rounded-md border border-[#ddcfbf] bg-white px-2 py-1 text-[#7c5b40] shadow-[0_4px_12px_rgba(59,40,23,0.08)]">
              <Home className="h-5 w-5 sm:h-6 sm:w-6" />
            </span>{" "}
            homes built around{" "}
            lifestyle, location, and long-term growth.
          </p>
        </div>
      </div>
    </section>
  );
}
