import Link from "next/link";

const navigation = [
  { label: "Home", href: "/" },
  { label: "Buy", href: "/buy" },
  { label: "Rent", href: "/rent" },
  { label: "Sell", href: "/sell" },
  { label: "Developments", href: "/developments" },
  { label: "Contact", href: "/contact" },
];

const resources = [
  "Market Report",
  "Mortgage Guide",
  "Buyer Checklist",
  "Seller Toolkit",
  "Neighborhoods",
];

export default function Footer() {
  return (
    <footer className="mt-16 bg-slate-950 text-slate-200">
      <div className="mx-auto w-full max-w-6xl px-4 pb-12 pt-14">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <div>
                <p className="font-display text-[2rem] font-semibold leading-none tracking-[-0.03em] text-white">
                  RealSutra
                  <span className="ml-0.5 align-baseline text-4xl leading-none text-[#f66b05]">
                    .
                  </span>
                </p>
              </div>
            </div>
            <p className="text-sm text-slate-400">
              Helping you discover homes and investment properties with tailored
              guidance, verified listings, and negotiation support across top
              neighborhoods.
            </p>
            <div className="space-y-2 text-sm text-slate-300">
              <p>Uttarpradesh, Noida, India</p>
              <p>Call +91 9876543210</p>
              <p>hello@realsutra.com</p>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-white">Navigation</p>
            <div className="mt-4 grid gap-2 text-sm text-slate-400">
              {navigation.map((item) => (
                <Link key={item.label} href={item.href} className="hover:text-white">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-white">Resources</p>
            <div className="mt-4 grid gap-2 text-sm text-slate-400">
              {resources.map((item) => (
                <Link
                  key={item}
                  href={`/resources/${item.toLowerCase().replace(/\s+/g, "-")}`}
                  className="hover:text-white"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-white">Subscribe</p>
            <p className="mt-4 text-sm text-slate-400">
              Weekly market insights, new listings, and open-house invites.
            </p>
            <form className="mt-4 flex flex-col gap-3">
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white placeholder:text-slate-500 focus:border-[#f66b05] focus:outline-none"
              />
              <button
                type="submit"
                className="rounded-full bg-[#f66b05] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#e65f03]"
              >
                Subscribe
              </button>
            </form>
            <div className="mt-6 flex items-center gap-3 text-slate-400">
              <span className="text-xs uppercase tracking-[0.2em]">Follow</span>
              <div className="flex items-center gap-3">
                <Link href="https://www.facebook.com" className="hover:text-white" aria-label="Facebook">
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                    <path d="M13.5 8.5V7a1 1 0 011-1h1.5V3.5h-2a3.5 3.5 0 00-3.5 3.5v1.5H8v2.5h2.5V21h2.5v-10h2.5l.5-2.5h-3z" />
                  </svg>
                </Link>
                <Link href="https://www.instagram.com" className="hover:text-white" aria-label="Instagram">
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                    <path d="M7 3h10a4 4 0 014 4v10a4 4 0 01-4 4H7a4 4 0 01-4-4V7a4 4 0 014-4zm5 5a5 5 0 100 10 5 5 0 000-10zm6.5-.8a1.2 1.2 0 11-2.4 0 1.2 1.2 0 012.4 0z" />
                  </svg>
                </Link>
                <Link href="https://www.linkedin.com" className="hover:text-white" aria-label="LinkedIn">
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                    <path d="M4.98 3.5a2.48 2.48 0 11.02 4.96 2.48 2.48 0 01-.02-4.96zM3.5 9h3v11h-3V9zm7 0h2.9v1.5h.04a3.2 3.2 0 012.9-1.6c3.1 0 3.7 2 3.7 4.6V20h-3v-5.3c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9V20h-3V9z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 text-xs text-slate-500 md:flex-row md:items-center">
          <p>© 2026 RealSutra. All rights reserved.</p>
          <div className="flex flex-wrap gap-4">
            <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white">Terms of Service</Link>
            <Link href="/careers" className="hover:text-white">Careers</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
