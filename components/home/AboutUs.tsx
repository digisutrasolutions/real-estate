import Link from "next/link";
import { Plus } from "lucide-react";

export default function AboutUs() {
  return (
    <section className="py-8 sm:py-12">
      <div className="mx-auto max-w-6xl px-3 sm:px-4 lg:px-6">
        <div className="border border-[#e4dacd] bg-[#fbf8f2] p-4 sm:p-6 lg:p-7">
          <div className="grid gap-4 lg:grid-cols-[1.35fr_0.95fr]">
            <div className="border border-[#e5ddd1] bg-white p-5 sm:p-6">
              <h2 className="font-display text-[2rem] leading-none tracking-[-0.02em] text-[#1f1a16]">
                About Us
              </h2>
              <p className="mt-4 max-w-[58ch] text-[15px] leading-7 text-[#6d655c]">
                We are more than just a real estate agency, we are your trusted partner in
                finding the perfect property. With years of experience in India&apos;s premium
                markets, our team blends local expertise with global service standards to
                deliver exceptional outcomes.
              </p>
              <p className="mt-2 max-w-[58ch] text-[15px] leading-7 text-[#6d655c]">
                From luxury villas to high-rise apartments, every recommendation is tailored
                to your lifestyle and investment goals.
              </p>
              <Link
                href="/about"
                className="mt-3 inline-flex items-center border-b border-[#1f1a16] text-sm font-semibold text-[#1f1a16] transition hover:text-[#f66b05] hover:border-[#f66b05]"
              >
                More
              </Link>
            </div>

            <div className="border border-[#e5ddd1] bg-white p-5 sm:p-6">
              <div className="flex items-center">
                <div className="flex -space-x-2">
                  {["/person1.png", "/person2.png", "/person3.png"].map((src, index) => (
                    <img
                      key={src}
                      src={src}
                      alt={`Client ${index + 1}`}
                      className="h-9 w-9 rounded-full border-2 border-white object-cover"
                    />
                  ))}
                </div>
                <span className="ml-2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#2f2418] text-white">
                  <Plus className="h-4 w-4" />
                </span>
              </div>
              <p className="mt-8 text-[3rem] leading-none tracking-[-0.03em] text-[#1f1a16]">
                300+
              </p>
              <p className="mt-3 text-sm text-[#746b62]">
                Happy families moved into their dream homes
              </p>
            </div>
          </div>

          <div className="mt-4 grid gap-4 lg:grid-cols-[1.35fr_0.8fr_0.8fr]">
            <div className="border border-[#e5ddd1] bg-white p-5 sm:p-6">
              <div className="text-[#f66b05]">★★★★★</div>
              <p className="mt-3 text-[14px] leading-6 text-[#6d655c]">
                &quot;Working with this team was the best decision I made during my property
                search. They understood exactly what I wanted, guided me through every step,
                and made the entire process stress-free.&quot;
              </p>
              <div className="mt-5 flex items-center gap-3">
                <img
                  src="/person1.png"
                  alt="Frederick Ryan"
                  className="h-10 w-10 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-semibold text-[#1f1a16]">Frederick Ryan</p>
                  <p className="text-xs text-[#857d74]">Palm Jumeirah</p>
                </div>
              </div>
            </div>

            <div className="border border-[#e5ddd1] bg-white p-5 sm:p-6">
              <p className="text-[3rem] leading-none tracking-[-0.03em] text-[#1f1a16]">500+</p>
              <p className="mt-20 text-sm text-[#746b62]">Properties sold across India</p>
            </div>

            <div className="bg-[#2b2420] p-5 text-white sm:p-6">
              <p className="text-[3rem] leading-none tracking-[-0.03em]">10+ years</p>
              <p className="mt-20 text-sm text-white/80">Trusted market experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
