"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import Link from "next/link";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Treatments", href: "/treatments" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

const informationLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Book an Appointment", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr]">

          {/* Clinic Information */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="inline-block">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-violet-600">
                  <span className="text-xl">🦷</span>
                </div>

                <div>
                  <p className="text-lg font-bold">
                    Sakthi Dental Clinic
                  </p>

                  <p className="text-xs text-slate-400">
                    Specialized Dental Care
                  </p>
                </div>
              </div>
            </Link>

            <p className="mt-6 max-w-sm text-sm leading-7 text-slate-400">
              Compassionate, patient-focused dental care for women, children
              and families in a comfortable and welcoming environment.
            </p>

            {/* Social Media */}
            <div className="mt-6 flex gap-3">

              {/* Facebook */}
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-slate-400 transition hover:bg-violet-600 hover:text-white"
              >
                <FaFacebookF className="h-4 w-4" />
              </a>

              {/* Instagram */}
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-slate-400 transition hover:bg-violet-600 hover:text-white"
              >
                <FaInstagram className="h-4 w-4" />
              </a>

            </div>
          </motion.div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Quick Links
            </h3>

            <ul className="mt-5 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-white"
                  >
                    <ArrowRight className="h-3.5 w-3.5 opacity-0 transition group-hover:translate-x-1 group-hover:opacity-100" />

                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Information */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Information
            </h3>

            <ul className="mt-5 space-y-3">
              {informationLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-white"
                  >
                    <ArrowRight className="h-3.5 w-3.5 opacity-0 transition group-hover:translate-x-1 group-hover:opacity-100" />

                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Contact Us
            </h3>

            <div className="mt-5 space-y-4">

              {/* Location */}
              <div className="flex gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-violet-400" />

                <p className="text-sm leading-6 text-slate-400">
                  Hosur, Tamil Nadu
                </p>
              </div>

              {/* Phone */}
              <div className="flex gap-3">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-violet-400" />

                <Link
                  href="/contact"
                  className="text-sm text-slate-400 transition hover:text-white"
                >
                  Contact Clinic
                </Link>
              </div>

              {/* Email */}
              <div className="flex gap-3">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-violet-400" />

                <a
                  href="mailto:info@sakthidentalclinic.in"
                  className="break-all text-sm text-slate-400 transition hover:text-white"
                >
                  info@sakthidentalclinic.in
                </a>
              </div>

            </div>

            {/* Appointment Button */}
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-violet-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-violet-700"
            >
              Book Appointment

              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-5 text-center sm:px-6 md:flex-row md:items-center md:justify-between md:text-left lg:px-8">

          <p className="text-xs text-slate-500">
            © 2026 Sakthi Dental Clinic. All rights reserved.
          </p>

          <div className="flex items-center justify-center gap-5">

            <Link
              href="/privacy"
              className="text-xs font-medium text-slate-400 transition hover:text-white"
            >
              Privacy Policy
            </Link>

            <Link
              href="/contact"
              className="text-xs font-medium text-slate-400 transition hover:text-white"
            >
              Contact
            </Link>

          </div>

        </div>
      </div>
    </footer>
  );
}