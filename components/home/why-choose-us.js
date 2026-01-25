"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const reasons = [
  {
    title: "Experience & Expertise",
    content:
      "Certified professionals with years of experience handling accounting, taxation, and compliance across industries.",
  },
  {
    title: "On-Time Compliance",
    content:
      "Never miss a deadline. We proactively manage filings, reminders, and submissions so you stay compliant year-round.",
  },
  {
    title: "Transparent Pricing",
    content:
      "Clear, upfront pricing with no hidden charges. You always know what you’re paying for.",
  },
  {
    title: "Personal Support",
    content:
      "Dedicated assistance tailored to your business needs, with direct access to experts when you need them.",
  },
];

export default function WhyChooseUs() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-slate-50 py-28 dark:bg-slate-950" id="why-choose-us" aria-labelledby="why-choose-us-heading">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-2 items-start">

          {/* LEFT: Content */}
          <div>
            <h2 id="why-choose-us-heading" className="text-4xl font-semibold text-slate-900 dark:text-slate-100">
              Why Choose NVA Associates?
            </h2>
            <p className="mt-4 max-w-xl text-slate-600 dark:text-slate-400">
              Trusted compliance and accounting support — clarity, reliability,
              and expertise from day one.
            </p>

            {/* Accordion */}
            <div className="mt-10 space-y-4">
              {reasons.map((item, index) => {
                const isOpen = index === openIndex;

                return (
                  <button
                    key={item.title}
                    onClick={() =>
                      setOpenIndex(isOpen ? -1 : index)
                    }
                    className="
                      w-full rounded-xl border border-slate-200 bg-white p-6
                      text-left transition
                      hover:shadow-md
                      dark:border-slate-800 dark:bg-slate-900
                    "
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-medium text-slate-900 dark:text-slate-100">
                        {item.title}
                      </h3>
                      <ChevronDown
                        className={`h-5 w-5 text-slate-500 transition-transform ${isOpen ? "rotate-180" : ""
                          }`}
                      />
                    </div>

                    {isOpen && (
                      <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                        {item.content}
                      </p>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* RIGHT: Visual Panel */}
          {/* RIGHT: Video Panel */}
          <div className="relative hidden lg:block">
            <div
              className="
      relative mx-auto w-[450px] overflow-hidden rounded-3xl
      border border-slate-200 bg-white shadow-xl
      dark:border-slate-800 dark:bg-slate-900
    "
            >
              {/* Aspect ratio wrapper (9:16) */}
              <div className="relative aspect-[9/12]">
                <video
                  className="h-full w-full object-cover"
                  src="/videos/why-choose-us.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                />

                {/* Subtle overlay for readability */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>
            </div>
          </div>


        </div>
      </div>
    </section>
  );
}
