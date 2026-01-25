import Image from "next/image";

const testimonials = [
  {
    quote:
      "NVA Associates helped us navigate complex GST regulations seamlessly. Their expertise saved us time and money.",
    name: "Rajesh Kumar",
    role: "Startup Founder",
    avatar: "/images/avatar-1.jfif",
  },
  {
    quote:
      "Professional service with transparent pricing. The team is proactive and extremely reliable.",
    name: "Priya Sharma",
    role: "Small Business Owner",
    avatar: "/images/avatar-2.jfif",
  },
  {
    quote:
      "Highly recommend NVA Associates for compliance support. They handle everything with precision.",
    name: "Amit Patel",
    role: "Freelance Consultant",
    avatar: "/images/avatar-3.jfif",
  },
  {
    quote:
      "Their structured process and timely reminders make compliance stress-free for our company.",
    name: "Neha Verma",
    role: "Operations Manager",
    avatar: "/images/avatar-4.jfif",
  },
  {
    quote:
      "Clear communication, expert advice, and dependable support. A great partner for growing businesses.",
    name: "Sandeep Mehta",
    role: "Director",
    avatar: "/images/avatar-5.jfif",
  },
  {
    quote:
      "From GST to income tax filing, everything is handled efficiently and professionally.",
    name: "Kavita Iyer",
    role: "Entrepreneur",
    avatar: "/images/avatar-6.jfif",
  },
];

function TestimonialCard({ t }) {
  return (
    <div className="
      w-[320px] shrink-0 rounded-xl border border-slate-200 bg-white p-6
      shadow-sm
      dark:border-slate-800 dark:bg-slate-900
    ">
      <div className="text-blue-600 dark:text-blue-400">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="M8.4 6.2a1 1 0 0 1 1.2 1.6c-1.564 1.173-2.46 2.314-2.973 3.31A3.5 3.5 0 1 1 4 14.558a7.6 7.6 0 0 1 .508-3.614C5.105 9.438 6.272 7.796 8.4 6.2m9 0a1 1 0 0 1 1.2 1.6c-1.564 1.173-2.46 2.314-2.973 3.31A3.5 3.5 0 1 1 13 14.558a7.6 7.6 0 0 1 .508-3.614c.598-1.506 1.764-3.148 3.892-4.744"/></g></svg>
      </div>

      <p className="mt-3 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
        {t.quote}
      </p>

      <div className="mt-6 flex items-center gap-3">
        <Image
          src={t.avatar}
          alt={t.name}
          width={40}
          height={40}
          className="rounded-full object-cover"
        />
        <div>
          <p className="text-sm font-medium text-slate-900 dark:text-slate-100">
            {t.name}
          </p>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            {t.role}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="overflow-hidden bg-slate-50 py-28 dark:bg-slate-950" id="testimonial" aria-labelledby="testimonial-heading">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center">
          <h2 id="testimonial-heading" className="text-4xl font-semibold text-slate-900 dark:text-slate-100">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            Trusted by businesses across India
          </p>
        </div>
      </div>

      {/* Marquee rows */}
      <div className="mt-16 space-y-8">
        {/* Top row (left) */}
        <div className="group flex gap-6 overflow-hidden">
          <div className="
            flex gap-6 animate-marquee-left
            motion-reduce:animate-none
            group-hover:[animation-play-state:paused]
          ">
            {[...testimonials, ...testimonials].map((t, i) => (
              <TestimonialCard key={`top-${i}`} t={t} />
            ))}
          </div>
        </div>

        {/* Bottom row (right) */}
        <div className="group flex gap-6 overflow-hidden">
          <div className="
            flex gap-6 animate-marquee-right
            motion-reduce:animate-none
            group-hover:[animation-play-state:paused]
          ">
            {[...testimonials, ...testimonials].map((t, i) => (
              <TestimonialCard key={`bottom-${i}`} t={t} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}