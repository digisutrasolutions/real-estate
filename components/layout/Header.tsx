'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import MobileDrawer from './MobileDrawer';
import ConsultationModal from '../contact/ConsultationModal';

const navigation = [
  { label: 'Buy', href: '/buy' },
  { label: 'Rent', href: '/rent' },
  { label: 'Sell', href: '/sell' },
  { label: 'Developments', href: '/developments' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [consultationModalOpen, setConsultationModalOpen] = useState(false);

  return (
    <>
      <div className="relative isolate w-full overflow-hidden bg-gradient-to-r from-[#2c1d14] via-[#7f5d43] to-[#b58c68] text-[#f9eee2]">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_35%,rgba(248,213,176,0.2),transparent_42%),radial-gradient(circle_at_88%_50%,rgba(57,34,20,0.24),transparent_45%)]"
        />
        <div className="relative mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-2 text-xs sm:text-sm">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#f66b05]" />
              Trusted real estate advisors in India
            </span>
            <span className="hidden h-4 w-px bg-white/20 sm:inline-block" />
            <span className="hidden sm:inline">Call +91 9876543210</span>
            <span className="hidden sm:inline">hello@realsutra.com</span>
          </div>
          <button
            onClick={() => setConsultationModalOpen(true)}
            className="rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#fff4e8] transition hover:border-[#f66b05] hover:text-[#ffd6b5]"
          >
            Schedule a tour
          </button>
        </div>
      </div>

      <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-6 px-4 py-4">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex flex-col">
              <span className="font-display text-[2rem] font-semibold leading-none tracking-[-0.03em] text-[#2f3a4a]">
                RealSutra
                <span className="ml-0.5 align-baseline text-4xl leading-none text-[#f66b05]">
                  .
                </span>
              </span>
            </div>
          </Link>

          <nav className="hidden items-center gap-6 text-sm font-medium text-slate-700 md:flex">
            {navigation.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="transition hover:text-slate-950"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <Link
              href="/list-property"
              className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-900 hover:text-slate-900"
            >
              List your property
            </Link>
            <button
              onClick={() => setConsultationModalOpen(true)}
              className="rounded-full bg-[#f66b05] px-4 py-2 text-sm font-semibold text-white shadow transition hover:bg-[#e65f03]"
            >
              Get consultation
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
            className="md:hidden inline-flex items-center justify-center rounded-full p-2 text-slate-700 hover:bg-slate-100 transition"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileDrawer
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navigation={navigation}
        onConsultationClick={() => {
          setMobileMenuOpen(false);
          setConsultationModalOpen(true);
        }}
      />

      {/* Consultation Modal */}
      <ConsultationModal
        isOpen={consultationModalOpen}
        onClose={() => setConsultationModalOpen(false)}
      />
    </>
  );
}
