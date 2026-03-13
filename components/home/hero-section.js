import { Phone } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white dark:bg-slate-950" aria-labelledby="hero-heading" role="banner">
      {/* Background gradient */}
      <div className="
        absolute inset-0
        bg-gradient-to-br from-blue-50 via-white to-white
        dark:from-black dark:via-slate-900 dark:to-black
      " />

      {/* Subtle grid overlay */}
      <div
        className="
          pointer-events-none absolute inset-0
          opacity-[0.06]
          bg-[linear-gradient(to_right,rgba(0,0,0,0.15)_1px,transparent_1px),
              linear-gradient(to_bottom,rgba(0,0,0,0.15)_1px,transparent_1px)]
          dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.15)_1px,transparent_1px),
                   linear-gradient(to_bottom,rgba(255,255,255,0.15)_1px,transparent_1px)]
          bg-[size:64px_64px]
        "
      />

      <div className="relative mx-auto max-w-7xl px-6 py-28">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          
          {/* LEFT CONTENT */}
          <div>
            <h1 id="hero-heading" className="text-3xl font-semibold leading-tight text-slate-900 sm:text-5xl xl:text-6xl dark:text-slate-100">
              Accounting & Compliance Services <br />
              Built for Businesses <br className="hidden sm:block" />
              & Individuals
            </h1>

            <p className="mt-6 max-w-xl text-lg text-slate-600 dark:text-slate-400">
              Expert solutions for GST, Income Tax, Accounting & MSME services.
              We simplify compliance so you can focus on growing your business.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              {/* Primary CTA */}
              <a href="tel:9082024196" className="
                rounded-md bg-blue-600 px-6 py-3
                text-sm font-medium text-white
                shadow-lg shadow-blue-600/20
                hover:bg-blue-700 transition
              ">
                Get Free Consultation
              </a>

              {/* Secondary CTAs */}
              <a href="tel:9082024196" className="flex flex-row gap-1
                rounded-md border border-slate-300 px-6 py-3
                text-sm text-slate-700
                hover:bg-slate-100 transition
                dark:border-slate-700 dark:text-slate-300
                dark:hover:bg-slate-900
              ">
                <Phone className="h-5" /> Call Expert
              </a>

              <a href="https://wa.link/5xmyf4" target="_blank" className="flex flex-row gap-1
                rounded-md border border-slate-300 px-6 py-3
                text-sm text-slate-700
                hover:bg-slate-100 transition
                dark:border-slate-700 dark:text-slate-300
                dark:hover:bg-slate-900
              ">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28"/></svg>
                WhatsApp
              </a>
            </div>
          </div>

          {/* RIGHT IMAGE COLLAGE */}
          <div className="relative hidden lg:block">
            <div className="grid grid-cols-2 gap-6">
              
              {/* Column 1 */}
              <div className="space-y-6">
                <Image
                  src="/images/hero-1.jpg"
                  alt="Team collaboration"
                  width={320}
                  height={420}
                  sizes="(min-width: 1024px) 320px, 0px"
                  className="rounded-2xl object-cover shadow-lg"
                  priority
                />
                <Image
                  src="/images/hero-4.jpg"
                  alt="Professional working"
                  width={320}
                  height={420}
                  sizes="(min-width: 1024px) 320px, 0px"
                  className="rounded-2xl object-cover shadow-lg"
                />
              </div>

              {/* Column 2 */}
              <div className="mt-12 space-y-6">
                <Image
                  src="/images/hero-3.avif"
                  alt="Office workspace"
                  width={320}
                  height={420}
                  sizes="(min-width: 1024px) 320px, 0px"
                  className="rounded-2xl object-cover shadow-lg"
                />
                <Image
                  src="/images/hero-2.avif"
                  alt="Business discussion"
                  width={320}
                  height={420}
                  sizes="(min-width: 1024px) 320px, 0px"
                  className="rounded-2xl object-cover shadow-lg"
                />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}