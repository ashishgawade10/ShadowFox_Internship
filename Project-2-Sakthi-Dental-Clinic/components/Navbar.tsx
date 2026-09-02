"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, CalendarCheck } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Treatments", href: "/treatments" },
  { name: "FAQs", href: "/faq" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 shadow-sm backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <Link
          href="/"
          onClick={closeMenu}
          className="group flex items-center gap-3"
          aria-label="Sakthi Dental Clinic Home"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-pink-500 text-white shadow-md transition-transform duration-300 group-hover:scale-105">
            <span className="text-xl font-bold">S</span>
          </div>

          <div>
            <h1 className="text-lg font-bold leading-tight text-slate-800">
              Sakthi Dental
            </h1>

            <p className="text-xs font-medium text-violet-600">
              Clinic
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="hidden items-center gap-7 lg:flex"
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative py-2 text-sm font-medium text-slate-600 transition-colors duration-200 hover:text-violet-600"
            >
              {link.name}

              {/* Hover underline */}
              <span className="absolute bottom-0 left-0 h-0.5 w-0 rounded-full bg-violet-600 transition-all duration-300 hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-violet-600 px-5 py-3 text-sm font-semibold text-white shadow-md shadow-violet-200 transition-all duration-300 hover:-translate-y-0.5 hover:bg-violet-700 hover:shadow-lg"
          >
            <CalendarCheck className="h-4 w-4" />

            Fix an Appointment

            <span className="transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen((previous) => !previous)}
          className="flex h-11 w-11 items-center justify-center rounded-xl text-slate-700 transition-colors hover:bg-violet-50 hover:text-violet-600 lg:hidden"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
        >
          {isOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-slate-200 bg-white shadow-lg lg:hidden"
          >
            <motion.nav
              initial={{ y: -10 }}
              animate={{ y: 0 }}
              exit={{ y: -10 }}
              transition={{ duration: 0.2 }}
              className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-5 sm:px-6"
              aria-label="Mobile navigation"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={closeMenu}
                  className="rounded-xl px-4 py-3 text-sm font-medium text-slate-700 transition-all duration-200 hover:bg-violet-50 hover:pl-6 hover:text-violet-600"
                >
                  {link.name}
                </Link>
              ))}

              {/* Mobile CTA */}
              <Link
                href="/contact"
                onClick={closeMenu}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-violet-600 px-5 py-3.5 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:bg-violet-700"
              >
                <CalendarCheck className="h-4 w-4" />

                Fix an Appointment
              </Link>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}