"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

type FaqItem = {
  question: string;
  answer: string;
};

const faqItems: FaqItem[] = [
  {
    question: "How do I start the process of buying a property in India?",
    answer:
      "Start with a clear budget, preferred location, and property type. We help you shortlist verified options, arrange site visits, negotiate pricing, and complete legal checks before registration.",
  },
  {
    question: "Can foreigners buy property in India?",
    answer:
      "Rules depend on residency status and FEMA guidelines. In many cases, NRIs and OCI cardholders can purchase certain property types. We recommend legal review for your exact profile before proceeding.",
  },
  {
    question: "What fees should I expect when buying a property?",
    answer:
      "Typical costs include stamp duty, registration fees, legal due-diligence charges, brokerage (if applicable), and society/maintenance deposits. We provide a full cost sheet before final closure.",
  },
  {
    question: "Do you help with financing and mortgages?",
    answer:
      "Yes. We assist with loan eligibility, lender comparisons, pre-approval support, and documentation so you can choose the most suitable interest structure and tenure.",
  },
  {
    question: "What is the difference between under-construction and ready-to-move homes?",
    answer:
      "Under-construction properties may offer better pricing and phased payments, while ready-to-move homes offer immediate possession and lower delivery risk. The right choice depends on your timeline and investment goals.",
  },
];

export default function HomeFaq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-8 sm:py-12">
      <div className="mx-auto max-w-6xl px-3 sm:px-4 lg:px-6">
        <div className="border border-[#e2d9cc] bg-[#fbf8f2] p-4 sm:p-6 lg:p-7">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.35fr]">
            <div className="flex flex-col justify-between">
              <div>
                <h2 className="font-display text-[2.1rem] leading-[0.96] tracking-[-0.03em] text-[#1f1a16] sm:text-[2.9rem]">
                  Got Questions?
                  <br />
                  We&apos;ve Got Answers.
                </h2>
                <p className="mt-3 max-w-sm text-sm leading-6 text-[#6d655c]">
                  Stay updated with practical insights, buying guidance, and expert
                  answers tailored to India&apos;s real estate market.
                </p>
              </div>
              <button
                type="button"
                className="mt-6 inline-flex min-h-10 w-fit items-center justify-center border border-[#e8b98e] bg-[#fff4e8] px-4 text-sm font-semibold text-[#a05d24] transition hover:border-[#f66b05] hover:bg-[#ffecda] hover:text-[#f66b05]"
              >
                Ask More Question
              </button>
            </div>

            <div className="space-y-2">
              {faqItems.map((item, index) => {
                const isOpen = openIndex === index;
                return (
                  <article
                    key={item.question}
                    className="overflow-hidden border border-[#e4dacd] bg-white"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? -1 : index)}
                      className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left sm:px-5"
                      aria-expanded={isOpen}
                    >
                      <span className="text-[15px] font-semibold leading-6 text-[#2c2219]">
                        {item.question}
                      </span>
                      <ChevronDown
                        className={`h-4 w-4 shrink-0 text-[#7a6757] transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <div
                      className={`grid transition-all duration-300 ease-out ${
                        isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="border-t border-[#efe6da] px-4 py-3 text-sm leading-6 text-[#6e655c] sm:px-5">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
