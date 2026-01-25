import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-20">
        {/* Top grid */}
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
              NVA Associates
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              Your trusted partner for accounting and compliance services
              across India.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
              Services
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-slate-600 dark:text-slate-400">
              <li><a href="#" className="hover:text-slate-900 dark:hover:text-slate-100">Accounting & Bookkeeping</a></li>
              <li><a href="#" className="hover:text-slate-900 dark:hover:text-slate-100">GST Services</a></li>
              <li><a href="#" className="hover:text-slate-900 dark:hover:text-slate-100">Income Tax Returns</a></li>
              <li><a href="#" className="hover:text-slate-900 dark:hover:text-slate-100">MSME Registration</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
              Company
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-slate-600 dark:text-slate-400">
              <li><a href="#about" className="hover:text-slate-900 dark:hover:text-slate-100">About Us</a></li>
              <li><a href="#process" className="hover:text-slate-900 dark:hover:text-slate-100">Our Process</a></li>
              <li><a href="#testimonials" className="hover:text-slate-900 dark:hover:text-slate-100">Testimonials</a></li>
              <li><a href="#contact" className="hover:text-slate-900 dark:hover:text-slate-100">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
              Contact
            </h4>
            <ul className="mt-4 space-y-4 text-sm text-slate-600 dark:text-slate-400">
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                info@nvaassociates.com
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                +91 XXXX XXXXXX
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                Mumbai, Maharashtra, India
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-16 border-t border-slate-200 dark:border-slate-800" />

        {/* Bottom row */}
        <div className="mt-6 flex flex-col items-center justify-between gap-4 text-sm text-slate-500 sm:flex-row dark:text-slate-400">
          <p>© 2026 NVA Associates. All rights reserved.</p>

          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-900 dark:hover:text-slate-100">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-slate-900 dark:hover:text-slate-100">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}