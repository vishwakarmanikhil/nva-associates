"use client";

import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Sun, Moon, Monitor } from "lucide-react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const services = [
    "Accounting & Bookkeeping",
    "GST Registration & Filing",
    "Income Tax Returns",
    "TDS & Compliance",
    "MSME / Udyam Registration",
    "PAN & DSC Services",
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition ${scrolled || mobileOpen
        ? "bg-white/80 backdrop-blur border-b border-slate-200 dark:bg-slate-950/80 dark:border-slate-800"
        : "bg-transparent"
        }`}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-16 items-center justify-between">

          {/* Logo */}
          <div className="text-lg font-semibold text-slate-900 dark:text-slate-100">
            NVA Associates
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-600 dark:text-slate-400">

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="flex items-center gap-1 hover:text-slate-900 dark:hover:text-slate-100">
                Services <ChevronDown className="h-4 w-4" />
              </button>

              {servicesOpen && (
                <div className="absolute left-0 top-full mt-2 w-64 rounded-lg border border-slate-200 bg-white p-2 shadow-lg dark:border-slate-800 dark:bg-slate-900">
                  {services.map((s) => (
                    <a
                      key={s}
                      href="#services"
                      className="block rounded-md px-3 py-2 text-sm text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
                    >
                      {s}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a href="#about" className="hover:text-slate-900 dark:hover:text-slate-100">
              About
            </a>
            {/* <a href="#resources" className="hover:text-slate-900 dark:hover:text-slate-100">
              Resources
            </a> */}
            <a href="#contact" className="hover:text-slate-900 dark:hover:text-slate-100">
              Contact
            </a>

            {/* CTA */}
            <button className="
              rounded-md bg-blue-600 px-6 py-3
              text-sm font-medium text-white
              shadow-lg shadow-blue-600/20
              hover:bg-blue-700 transition
            ">
              Free Consultation
            </button>
          </nav>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden rounded-md p-2 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            {mobileOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-slate-200 py-4 dark:border-slate-800">
            <div className="space-y-2">

              {/* Services dropdown */}
              <details className="group">
                <summary
                  className="
            flex cursor-pointer list-none items-center justify-between
            px-2 py-2 text-sm font-medium
            text-slate-700
            dark:text-slate-300
          "
                >
                  Services
                  <span className="transition-transform group-open:rotate-180">▾</span>
                </summary>

                <div className="mt-2 space-y-1 pl-4">
                  {services.map((s) => (
                    <a
                      key={s}
                      href="#services"
                      className="
                block rounded-md px-2 py-2 text-sm
                text-slate-600 hover:bg-slate-100
                dark:text-slate-400 dark:hover:bg-slate-800
              "
                    >
                      {s}
                    </a>
                  ))}
                </div>
              </details>

              {/* Other links */}
              <a
                href="#about"
                className="block px-2 py-2 text-sm text-slate-600 dark:text-slate-400"
              >
                About
              </a>

              <a
                href="#contact"
                className="block px-2 py-2 text-sm text-slate-600 dark:text-slate-400"
              >
                Contact
              </a>
            </div>
          </div>
        )}

      </div>
    </header>
  );
}