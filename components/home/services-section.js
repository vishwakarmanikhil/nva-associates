import {
  Calculator,
  FileText,
  IndianRupee,
  ShieldCheck,
  Building2,
  CreditCard,
} from "lucide-react";

const services = [
  {
    title: "Accounting & Bookkeeping",
    description:
      "Accurate financial records and expert bookkeeping services.",
    icon: Calculator,
  },
  {
    title: "GST Registration & Filing",
    description:
      "Complete GST compliance and timely return filing.",
    icon: FileText,
  },
  {
    title: "Income Tax Returns",
    description:
      "ITR filing for individuals and businesses with maximum refunds.",
    icon: IndianRupee,
  },
  {
    title: "TDS & Compliance",
    description:
      "TDS computation, returns, and compliance management.",
    icon: ShieldCheck,
  },
  {
    title: "MSME / Udyam Registration",
    description:
      "Quick MSME registration and certificate assistance.",
    icon: Building2,
  },
  {
    title: "PAN & DSC Services",
    description:
      "PAN card and Digital Signature Certificate services.",
    icon: CreditCard,
  },
];

export default function ServicesSection() {
  return (
    <section className="relative py-28 bg-slate-50 dark:bg-slate-950" id="services" aria-labelledby="services-heading">
      {/* Section background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="text-center">
          <h2 id="services-heading" className="text-4xl font-semibold text-slate-900 dark:text-slate-100">
            Our Services
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
            End-to-end compliance and accounting solutions under one roof
          </p>
        </div>

        {/* Cards */}
        <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="
                  group rounded-2xl border border-slate-200
                  bg-white p-8 transition
                  hover:-translate-y-1 hover:shadow-xl
                  dark:border-slate-800 dark:bg-slate-900
                "
              >
                {/* Icon */}
                <div
                  className="
                    flex h-12 w-12 items-center justify-center
                    rounded-lg
                    bg-blue-100 text-blue-600
                    dark:bg-blue-900/30 dark:text-blue-400
                  "
                >
                  <Icon className="h-6 w-6" />
                </div>

                {/* Title */}
                <h3 className="mt-6 text-xl font-semibold text-slate-900 dark:text-slate-100">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {service.description}
                </p>

                {/* Link */}
                <a
                  href="#"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:underline dark:text-blue-400"
                >
                  Learn more →
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}