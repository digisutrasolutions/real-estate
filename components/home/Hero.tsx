"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

type LeadFormState = {
  propertyType: string;
  bedrooms: string;
  location: string;
  budget: string;
  visitPlan: string;
  name: string;
  phone: string;
  email: string;
};

const initialLeadForm: LeadFormState = {
  propertyType: "Apartment",
  bedrooms: "2 BHK",
  location: "Noida",
  budget: "INR 1Cr - 2Cr",
  visitPlan: "This Week",
  name: "",
  phone: "",
  email: "",
};

export default function Hero() {
  const [formState, setFormState] = useState<LeadFormState>(initialLeadForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formMessage, setFormMessage] = useState<string>("");
  const [messageKind, setMessageKind] = useState<"success" | "error">("success");

  function updateField<Key extends keyof LeadFormState>(
    field: Key,
    value: LeadFormState[Key]
  ) {
    setFormState((prev) => ({ ...prev, [field]: value }));
  }

  function isIndianPhone(value: string) {
    return /^[6-9]\d{9}$/.test(value);
  }

  function saveLead(lead: LeadFormState) {
    if (typeof window === "undefined") return;
    const key = "realsutra_consultation_leads";
    const existingRaw = window.localStorage.getItem(key);
    const existingLeads = existingRaw ? (JSON.parse(existingRaw) as unknown[]) : [];
    const nextLead = {
      ...lead,
      submittedAt: new Date().toISOString(),
      source: "hero_consultation_form",
    };
    window.localStorage.setItem(key, JSON.stringify([nextLead, ...existingLeads]));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormMessage("");

    if (!formState.name.trim()) {
      setMessageKind("error");
      setFormMessage("Please enter your full name.");
      return;
    }

    if (!isIndianPhone(formState.phone.trim())) {
      setMessageKind("error");
      setFormMessage("Please enter a valid 10-digit Indian mobile number.");
      return;
    }

    if (!formState.email.trim()) {
      setMessageKind("error");
      setFormMessage("Please enter your email address.");
      return;
    }

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 700));
    saveLead(formState);
    setIsSubmitting(false);
    setMessageKind("success");
    setFormMessage("Thanks! Our RealSutra consultant will contact you shortly.");
    setFormState((prev) => ({ ...initialLeadForm, location: prev.location }));
  }

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-3 pb-6 pt-4 sm:px-4 sm:pb-10 sm:pt-8 lg:px-6 lg:pb-12 lg:pt-10">
        <div>
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
            <div className="max-w-[42rem]">
              <h1 className="font-display max-w-[12ch] text-[2.35rem] leading-[0.9] font-semibold tracking-[-0.045em] text-[#1d1d1b] sm:text-[3.2rem] lg:text-[4.35rem]">
                <span className="block">Step Into a World of</span>
                <span className="block bg-gradient-to-r from-[#2f3a4a] via-[#6c4d35] to-[#f66b05] bg-clip-text text-transparent">
                  Premium Real Estate
                </span>
              </h1>
              <p className="mt-3 max-w-xl text-[13px] leading-6 text-[#6e6b66] sm:text-[15px]">
                From luxury villas to modern apartments, explore handpicked
                properties that match your lifestyle and investment goals.
              </p>
            </div>

            <div className="flex flex-col gap-4 lg:items-end lg:pt-3">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {["/person1.png", "/person2.png", "/person3.png"].map((src, index) => (
                    <img
                      key={`${src}-${index}`}
                      src={src}
                      alt={`Trusted client ${index + 1}`}
                      className="h-9 w-9 rounded-full border-2 border-[#f8f5ef] object-cover"
                    />
                  ))}
                </div>
                <p className="text-[14px] font-semibold text-[#2f3a4a]">100+ people trust us.</p>
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
              src="/hero-home.png"
              alt="Luxury residential property"
              className="h-[210px] w-full object-cover sm:h-[420px] lg:h-[560px]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#2f3a4a]/28 via-transparent to-transparent sm:hidden" />

            <form
              onSubmit={handleSubmit}
              className="mt-3 border border-white/25 bg-[rgba(71,67,63,0.76)] p-3 text-white shadow-[0_10px_24px_rgba(0,0,0,0.18)] backdrop-blur-[6px] sm:absolute sm:bottom-4 sm:left-4 sm:right-4 sm:mt-0 sm:border-white/18 sm:bg-[rgba(89,86,82,0.78)] sm:p-3 lg:bottom-5 lg:left-5 lg:right-5"
            >
              <div className="grid gap-2 sm:grid-cols-3 lg:grid-cols-6">
                <select
                  value={formState.propertyType}
                  onChange={(event) => updateField("propertyType", event.target.value)}
                  className="h-10 border border-white/22 bg-white/8 px-2 text-xs text-white outline-none focus:border-white/60"
                >
                  <option value="Apartment" className="text-[#2f3a4a]">
                    Apartment
                  </option>
                  <option value="Villa" className="text-[#2f3a4a]">
                    Villa
                  </option>
                  <option value="Plot" className="text-[#2f3a4a]">
                    Plot
                  </option>
                </select>

                <select
                  value={formState.bedrooms}
                  onChange={(event) => updateField("bedrooms", event.target.value)}
                  className="h-10 border border-white/22 bg-white/8 px-2 text-xs text-white outline-none focus:border-white/60"
                >
                  <option value="1 BHK" className="text-[#2f3a4a]">
                    1 BHK
                  </option>
                  <option value="2 BHK" className="text-[#2f3a4a]">
                    2 BHK
                  </option>
                  <option value="3 BHK" className="text-[#2f3a4a]">
                    3 BHK
                  </option>
                  <option value="4+ BHK" className="text-[#2f3a4a]">
                    4+ BHK
                  </option>
                </select>

                <select
                  value={formState.location}
                  onChange={(event) => updateField("location", event.target.value)}
                  className="h-10 border border-white/22 bg-white/8 px-2 text-xs text-white outline-none focus:border-white/60"
                >
                  <option value="Noida" className="text-[#2f3a4a]">
                    Noida
                  </option>
                  <option value="Gurugram" className="text-[#2f3a4a]">
                    Gurugram
                  </option>
                  <option value="Bengaluru" className="text-[#2f3a4a]">
                    Bengaluru
                  </option>
                  <option value="Pune" className="text-[#2f3a4a]">
                    Pune
                  </option>
                </select>

                <select
                  value={formState.budget}
                  onChange={(event) => updateField("budget", event.target.value)}
                  className="h-10 border border-white/22 bg-white/8 px-2 text-xs text-white outline-none focus:border-white/60"
                >
                  <option value="INR 50L - 1Cr" className="text-[#2f3a4a]">
                    INR 50L - 1Cr
                  </option>
                  <option value="INR 1Cr - 2Cr" className="text-[#2f3a4a]">
                    INR 1Cr - 2Cr
                  </option>
                  <option value="INR 2Cr - 5Cr" className="text-[#2f3a4a]">
                    INR 2Cr - 5Cr
                  </option>
                  <option value="INR 5Cr+" className="text-[#2f3a4a]">
                    INR 5Cr+
                  </option>
                </select>

                <select
                  value={formState.visitPlan}
                  onChange={(event) => updateField("visitPlan", event.target.value)}
                  className="h-10 border border-white/22 bg-white/8 px-2 text-xs text-white outline-none focus:border-white/60"
                >
                  <option value="This Week" className="text-[#2f3a4a]">
                    This Week
                  </option>
                  <option value="This Month" className="text-[#2f3a4a]">
                    This Month
                  </option>
                  <option value="Next Month" className="text-[#2f3a4a]">
                    Next Month
                  </option>
                </select>

                <input
                  type="text"
                  value={formState.name}
                  onChange={(event) => updateField("name", event.target.value)}
                  placeholder="Full Name"
                  className="h-10 border border-white/22 bg-white/8 px-2 text-xs text-white placeholder:text-white/75 outline-none focus:border-white/60"
                />
              </div>

              <div className="mt-2 grid gap-2 sm:grid-cols-[1fr_1fr_auto]">
                <input
                  type="tel"
                  inputMode="numeric"
                  value={formState.phone}
                  onChange={(event) =>
                    updateField("phone", event.target.value.replace(/[^\d]/g, "").slice(0, 10))
                  }
                  placeholder="10-digit Mobile Number"
                  className="h-10 border border-white/22 bg-white/8 px-3 text-xs text-white placeholder:text-white/75 outline-none focus:border-white/60"
                />
                <input
                  type="email"
                  value={formState.email}
                  onChange={(event) => updateField("email", event.target.value)}
                  placeholder="Email Address"
                  className="h-10 border border-white/22 bg-white/8 px-3 text-xs text-white placeholder:text-white/75 outline-none focus:border-white/60"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="h-10 bg-white px-4 text-sm font-semibold text-[#5f5c56] transition hover:bg-[#f4efe8] disabled:cursor-not-allowed disabled:opacity-80"
                >
                  {isSubmitting ? "Submitting..." : "Get Consultation"}
                </button>
              </div>

              {formMessage ? (
                <p
                  className={`mt-2 text-xs ${
                    messageKind === "success" ? "text-[#d4ffde]" : "text-[#ffe2df]"
                  }`}
                >
                  {formMessage}
                </p>
              ) : null}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
