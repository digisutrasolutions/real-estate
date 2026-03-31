'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, MessageCircle } from 'lucide-react';
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
        <div className="relative mx-auto flex w-full max-w-6xl items-center justify-between gap-2 px-4 py-2 text-xs sm:text-sm">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 min-w-0">
            <span className="inline-flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#f66b05] flex-shrink-0" />
              <span className="hidden xs:inline truncate">Trusted real estate advisors in India</span>
            </span>
            <span className="hidden sm:inline h-4 w-px bg-white/20" />
            <span className="md:inline">Call +91 9876543210</span>
            <span className="md:inline">hello@realsutra.com</span>
          </div>
          <a
            href="https://wa.me/919876543210?text=Hi%20RealSutra,%20I%27d%20like%20to%20know%20more%20about%20your%20services"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white/20 px-2.5 sm:px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#fff4e8] transition hover:bg-white/30 hover:text-white hover:shadow-lg border border-white/40 hover:border-white/60 flex-shrink-0"
            title="Chat with us on WhatsApp"
          >
            <MessageCircle className="h-4 w-4" />
            <span className="hidden sm:inline">Chat on WhatsApp</span>
          </a>
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
