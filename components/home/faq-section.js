const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "We provide accounting, GST, income tax, TDS, MSME registration, and PAN/DSC related services for individuals and businesses.",
  },
  {
    question: "Do you support startups and small businesses?",
    answer:
      "Yes, we work extensively with startups, MSMEs, and growing businesses, offering end-to-end compliance and accounting support.",
  },
  {
    question: "How do you ensure on-time compliance?",
    answer:
      "Our team follows a structured compliance calendar with proactive reminders and dedicated experts assigned to each client.",
  },
  {
    question: "Is my financial data secure with you?",
    answer:
      "Yes. We follow strict data confidentiality practices and handle all client information with the highest level of security.",
  },
];

export default function FAQSection() {
  return (
    <section className="relative bg-slate-50 py-28 dark:bg-slate-950" id="faq" aria-labelledby="faq-heading">
      {/* <div
        className="
          absolute inset-0
          bg-gradient-to-b from-blue-50 via-white to-white
          dark:from-blue-950 dark:via-slate-950 dark:to-black
        "
      /> */}
      <div className="relative mx-auto max-w-4xl px-6">
        {/* Heading */}
        <div className="text-center">
          <h2 id="faq-heading" className="text-4xl font-semibold text-slate-900 dark:text-slate-100">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400">
            Clear answers to common questions about our services
          </p>
        </div>

        {/* FAQ Items */}
        <div className="mt-16 space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="
                group rounded-xl border border-slate-200 bg-white p-6
                transition
                hover:shadow-md
                dark:border-slate-800 dark:bg-slate-900
              "
            >
              <summary className="
                flex cursor-pointer list-none items-center justify-between
                text-sm font-medium text-slate-900
                dark:text-slate-100
              ">
                {faq.question}

                <span className="
                  ml-4 inline-flex h-6 w-6 items-center justify-center
                  rounded-full border border-slate-300 text-slate-500
                  transition-transform
                  group-open:rotate-45
                  dark:border-slate-700 dark:text-slate-400
                ">
                  +
                </span>
              </summary>

              <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    }),
  }}
/>
