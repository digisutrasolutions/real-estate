import Link from "next/link";

const filters = [
  { label: "Type", value: "Apartment" },
  { label: "Bedrooms", value: "02" },
  { label: "Location", value: "Dubai, UAE" },
  { label: "Price Range", value: "AED 1,000,000" },
  { label: "Book Type", value: "Weekly" },
];

export default function Hero() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-3 pb-6 pt-4 sm:px-4 sm:pb-10 sm:pt-8 lg:px-6 lg:pb-12 lg:pt-10">
        <div>
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
            <div className="max-w-[42rem]">
              <h1 className="font-display max-w-[11ch] text-[2.35rem] leading-[0.92] font-semibold tracking-[-0.04em] text-[#1d1d1b] sm:text-[3.2rem] lg:text-[4.35rem]">
                Step Into a World of Premium Real Estate
              </h1>
              <p className="mt-3 max-w-xl text-[13px] leading-6 text-[#6e6b66] sm:text-[15px]">
                From luxury villas to modern apartments, explore handpicked
                properties that match your lifestyle and investment goals.
              </p>
            </div>

            <div className="flex flex-col gap-4 lg:items-end lg:pt-3">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {["#f1c8ac", "#b98f74", "#d7b8a0"].map((color, index) => (
                    <span
                      key={`${color}-${index}`}
                      className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border-2 border-[#f8f5ef] text-[10px] font-semibold text-[#2f3a4a]"
                      style={{ backgroundColor: color }}
                    >
                      {index + 1}
                    </span>
                  ))}
                </div>
                <p className="text-[14px] font-semibold text-[#2f3a4a]">120k+ people</p>
              </div>

              <div className="grid gap-2 sm:grid-cols-2 lg:min-w-[320px]">
                <Link
                  href="/properties"
                  className="flex min-h-12 items-center justify-center border border-[#f66b05] bg-[#f66b05] px-5 text-sm font-semibold text-white transition hover:bg-[#e65f03] hover:border-[#e65f03]"
                >
                  Explore Properties
                </Link>
                <Link
                  href="/consultation"
                  className="flex min-h-12 items-center justify-center border border-[#d8d0c4] bg-white px-5 text-sm font-semibold text-[#6a675f] transition hover:border-[#c9c0b2] hover:text-[#2f3a4a]"
                >
                  Get Consult
                </Link>
              </div>
            </div>
          </div>

          <div className="relative mt-6 overflow-hidden rounded-[6px] border border-[#d9d4cb] bg-[#d8d2c8] sm:mt-8 sm:rounded-[4px]">
            <img
              src="/hero-home.svg"
              alt="Luxury residential property"
              className="h-[210px] w-full object-cover sm:h-[420px] lg:h-[560px]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#2f3a4a]/28 via-transparent to-transparent sm:hidden" />

            <div className="absolute bottom-3 left-3 right-3 rounded-[2px] border border-white/30 bg-[rgba(71,67,63,0.68)] p-3 shadow-[0_10px_24px_rgba(0,0,0,0.18)] backdrop-blur-[6px] sm:hidden">
              <div className="grid gap-3">
                {filters.map((filter) => (
                  <div
                    key={filter.label}
                    className="border-b border-white/12 pb-2 last:border-b-0 last:pb-0"
                  >
                    <p className="text-[10px] font-medium text-white/75">{filter.label}</p>
                    <div className="mt-1 flex items-center justify-between gap-3">
                      <p className="text-[13px] font-medium text-white">{filter.value}</p>
                      <span className="text-[10px] text-white">v</span>
                    </div>
                  </div>
                ))}

                <button
                  type="button"
                  className="mt-1 flex h-11 items-center justify-center bg-white text-sm font-semibold text-[#5f5c56]"
                >
                  Search
                </button>
              </div>
            </div>

            <div className="absolute bottom-4 left-4 right-4 hidden border border-white/18 bg-[rgba(89,86,82,0.72)] p-3 text-white shadow-[0_16px_35px_rgba(0,0,0,0.16)] backdrop-blur-[8px] sm:block lg:bottom-5 lg:left-5 lg:right-5">
              <div className="grid grid-cols-[repeat(5,minmax(0,1fr))_170px] items-stretch">
                {filters.map((filter, index) => (
                  <div
                    key={filter.label}
                    className={`px-4 py-3 ${
                      index < filters.length - 1 ? "border-r border-white/12" : ""
                    }`}
                  >
                    <p className="text-[10px] font-medium text-white/70">{filter.label}</p>
                    <div className="mt-2 flex items-center gap-2">
                      <span className="text-[13px] font-medium text-white">{filter.value}</span>
                      <span className="text-[10px] text-white/80">v</span>
                    </div>
                  </div>
                ))}

                <button
                  type="button"
                  className="m-2 flex items-center justify-center bg-white px-5 text-sm font-semibold text-[#5f5c56]"
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
