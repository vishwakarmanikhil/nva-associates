import Image from "next/image";

const audiences = [
  {
    title: "Individuals",
    description: "Personal tax planning and compliance for salaried professionals.",
    image: "/images/work-with-individuals.jpg",
  },
  {
    title: "Startups",
    description: "Compliance, accounting, and advisory support from day one.",
    image: "/images/work-with-startups.jpg",
  },
  {
    title: "MSMEs",
    description: "Tailored accounting and compliance solutions for growing businesses.",
    image: "/images/work-with-msmes.jpg",
  },
  {
    title: "Corporates",
    description: "End-to-end compliance services for established organizations.",
    image: "/images/work-with-corporates.jpg",
  },
];

export default function WhoWeWorkWith() {
  return (
    <section className="bg-slate-50 py-28 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-4xl font-semibold text-slate-900 dark:text-slate-100">
            Who We Work With
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400">
            Trusted by individuals, startups, and businesses at every stage
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {audiences.map((item, index) => (
            <div
              key={item.title}
              className={`
                group relative overflow-hidden rounded-2xl
                shadow-sm transition
                hover:-translate-y-2 hover:shadow-xl
                ${
                  index === 1
                    ? "lg:translate-y-8"
                    : index === 3
                    ? "lg:translate-y-8"
                    : ""
                }
              `}
            >
              {/* Image */}
              <div className="relative h-[360px]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />

                {/* Overlay */}
                <div
                  className="
                    absolute inset-0
                    bg-gradient-to-t
                    from-black/70 via-black/20 to-transparent
                  "
                />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-white/80">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}