"use client";

import { useState } from "react";
import { MessageCircle, Send } from "lucide-react";

export default function FinalCtaSection() {
  const [activeChannel, setActiveChannel] = useState<"whatsapp" | "telegram">("whatsapp");

  return (
    <section className="bg-[#f7f4ee] py-8 sm:py-12">
      <div className="mx-auto max-w-6xl px-3 sm:px-4 lg:px-6">
        <div className="border border-[#e2d9cc] bg-[#fbf8f2] p-4 sm:p-6 lg:p-7">
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="flex h-full flex-col justify-between">
              <div>
                <h2 className="font-display max-w-[9ch] text-[2.1rem] leading-[0.96] tracking-[-0.03em] text-[#1f1a16] sm:text-[3rem]">
                  Your Next Move Starts Here
                </h2>
                <p className="mt-4 max-w-sm text-sm leading-6 text-[#6d655c]">
                  Have questions or ready to take the next step? Our team is here to guide
                  you through every stage of your real-estate journey.
                </p>
              </div>
            </div>

            <div className="relative overflow-hidden border border-[#dccfbe] bg-white">
              <img
                src="/hero-home.png"
                alt="Luxury property consultation"
                className="h-[330px] w-full object-cover sm:h-[380px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2f2418]/26 via-transparent to-transparent" />

              <div className="absolute left-3 right-3 top-3 border border-[#eadfce] bg-white/94 p-3 shadow-[0_12px_30px_rgba(46,33,22,0.2)] backdrop-blur-[2px] sm:left-6 sm:right-auto sm:top-6 sm:w-[330px] sm:p-4">
                <div className="flex gap-2 border-b border-[#eee4d7] pb-3">
                  <button
                    type="button"
                    onClick={() => setActiveChannel("whatsapp")}
                    className={`inline-flex items-center gap-1.5 border px-3 py-1.5 text-xs font-semibold transition ${
                      activeChannel === "whatsapp"
                        ? "border-[#f2b280] bg-[#fff1e3] text-[#a05d24]"
                        : "border-[#e7dccd] bg-white text-[#766a5f] hover:border-[#f2b280]"
                    }`}
                  >
                    <MessageCircle className="h-3.5 w-3.5" />
                    WhatsApp
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveChannel("telegram")}
                    className={`inline-flex items-center gap-1.5 border px-3 py-1.5 text-xs font-semibold transition ${
                      activeChannel === "telegram"
                        ? "border-[#f2b280] bg-[#fff1e3] text-[#a05d24]"
                        : "border-[#e7dccd] bg-white text-[#766a5f] hover:border-[#f2b280]"
                    }`}
                  >
                    <Send className="h-3.5 w-3.5" />
                    Telegram
                  </button>
                </div>

                <h3 className="mt-3 text-[1.05rem] font-semibold text-[#2a2119]">
                  Fill your information
                </h3>

                <form className="mt-3 space-y-2.5">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="h-9 w-full border border-[#e6dccf] bg-white px-3 text-sm text-[#2f2418] placeholder:text-[#8a7f73] outline-none transition focus:border-[#f2b280]"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="h-9 w-full border border-[#e6dccf] bg-white px-3 text-sm text-[#2f2418] placeholder:text-[#8a7f73] outline-none transition focus:border-[#f2b280]"
                  />
                  <button
                    type="button"
                    className="mt-1 inline-flex h-9 items-center justify-center bg-[#f66b05] px-4 text-xs font-semibold text-white transition hover:bg-[#e45f03]"
                  >
                    Get consultation
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
