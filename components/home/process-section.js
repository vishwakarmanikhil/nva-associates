import { ArrowRight } from "lucide-react";

const steps = [
  {
    step: "01",
    title: "Free Consultation",
    description:
      "We understand your requirements and provide expert guidance tailored to your needs.",
  },
  {
    step: "02",
    title: "Documentation",
    description:
      "We collect, verify, and organize all required documents with complete accuracy.",
  },
  {
    step: "03",
    title: "Filing & Compliance",
    description:
      "All filings are completed on time, ensuring full compliance with regulations.",
  },
  {
    step: "04",
    title: "Confirmation & Support",
    description:
      "You receive confirmations and continued support for ongoing compliance needs.",
  },
];

export default function ProcessSection() {
  return (
    <section className="relative overflow-hidden py-28 bg-slate-50 dark:bg-slate-950">
      {/* Background gradient */}
      {/* <div
        className="
          absolute inset-0
          bg-gradient-to-b from-blue-50 via-white to-white
          dark:from-blue-950 dark:via-slate-950 dark:to-black
        "
      /> */}

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="max-w-2xl">
          <span className="text-sm font-medium uppercase tracking-wide text-blue-600 dark:text-blue-400">
            Simple Process
          </span>

          <h2 className="mt-3 text-4xl font-semibold leading-tight text-slate-900 dark:text-slate-100">
            Effortless Process,
            <br /> Continuous Compliance
          </h2>
        </div>

        {/* Steps */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((item) => (
            <div
              key={item.step}
              className="
                rounded-2xl border border-slate-200 bg-white p-6
                transition
                hover:-translate-y-1 hover:shadow-lg
                dark:border-slate-800 dark:bg-slate-900
              "
            >
              <div className="text-sm font-medium text-blue-600 dark:text-blue-400">
                {item.step}.
              </div>

              <h3 className="mt-3 text-lg font-medium text-slate-900 dark:text-slate-100">
                {item.title}
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA row */}
        {/* <div className="mt-16 flex flex-col items-start justify-between gap-6 border-t border-slate-200 pt-8 sm:flex-row sm:items-center dark:border-slate-800">
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Trusted by businesses across India for reliable compliance services
          </p>

          <a
            href="#contact"
            className="
              inline-flex items-center gap-2 rounded-full
              bg-blue-600 px-6 py-3 text-sm font-medium text-white
              hover:bg-blue-700 transition
            "
          >
            Get Started
            <ArrowRight className="h-4 w-4" />
          </a>
        </div> */}
      </div>
    </section>
  );
}