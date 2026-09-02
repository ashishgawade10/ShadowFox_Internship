"use client";

import { motion } from "framer-motion";
import {
  ArrowLeft,
  LockKeyhole,
  Mail,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";

const sections = [
  {
    title: "Information We Collect",
    content:
      "When you contact Sakthi Dental Clinic through this website, you may provide information such as your name, email address, phone number and message. This information is used to understand and respond to your enquiry.",
  },
  {
    title: "How We Use Your Information",
    content:
      "Information submitted through the website may be used to respond to enquiries, assist with appointment-related communication and provide information requested by visitors.",
  },
  {
    title: "Information Security",
    content:
      "We take reasonable steps to protect information submitted through the website and aim to handle it responsibly.",
  },
  {
    title: "Third-Party Services",
    content:
      "The website may use third-party services or technologies to support website functionality. Such services may have their own privacy policies and terms.",
  },
  {
    title: "Cookies",
    content:
      "The website may use cookies or similar technologies where required for functionality, preferences or website performance.",
  },
  {
    title: "Your Choices",
    content:
      "If you have questions about information you have submitted through the website, you can contact Sakthi Dental Clinic using the contact details provided on the Contact page.",
  },
  {
    title: "Changes to This Privacy Policy",
    content:
      "This privacy policy may be updated when necessary. Any updated version will be reflected on this page.",
  },
];

export default function PrivacyPage() {
  return (
    <main className="bg-white">

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-violet-50 via-white to-pink-50">
        <div className="absolute -left-20 top-10 h-64 w-64 rounded-full bg-violet-200/30 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-pink-200/30 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-3xl text-center"
          >
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-violet-100">
              <LockKeyhole className="h-8 w-8 text-violet-600" />
            </div>

            <span className="mt-6 inline-flex rounded-full bg-violet-100 px-4 py-2 text-sm font-semibold text-violet-700">
              Privacy & Security
            </span>

            <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Privacy <span className="text-violet-600">Policy</span>
            </h1>

            <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
              This page explains how information provided through the Sakthi
              Dental Clinic website may be handled.
            </p>

            <p className="mt-4 text-sm text-slate-400">
              Last updated: August 2026
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[240px_1fr] lg:px-8">

          {/* Side card */}
          <motion.aside
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="h-fit rounded-3xl bg-slate-50 p-6 lg:sticky lg:top-24"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-100">
              <ShieldCheck className="h-6 w-6 text-violet-600" />
            </div>

            <h2 className="mt-5 font-bold text-slate-900">
              Your Privacy Matters
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-500">
              We aim to handle information shared through the website
              responsibly and transparently.
            </p>

            <Link
              href="/contact"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-violet-600 transition hover:text-violet-700"
            >
              Contact Us
            </Link>
          </motion.aside>

          {/* Policy */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm sm:p-10"
          >
            <div className="border-b border-slate-100 pb-8">
              <p className="text-base leading-8 text-slate-600">
                Sakthi Dental Clinic respects your privacy. This Privacy Policy
                describes the general approach to information submitted through
                this website and how such information may be used.
              </p>
            </div>

            <div className="divide-y divide-slate-100">
              {sections.map((section, index) => (
                <motion.section
                  key={section.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: index * 0.04 }}
                  className="py-8"
                >
                  <div className="flex gap-4">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-violet-100 text-sm font-bold text-violet-600">
                      {index + 1}
                    </div>

                    <div>
                      <h2 className="text-xl font-bold text-slate-900">
                        {section.title}
                      </h2>

                      <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
                        {section.content}
                      </p>
                    </div>
                  </div>
                </motion.section>
              ))}
            </div>

            {/* Contact privacy section */}
            <div className="mt-4 rounded-2xl bg-violet-50 p-6">
              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white">
                  <Mail className="h-5 w-5 text-violet-600" />
                </div>

                <div>
                  <h2 className="font-bold text-slate-900">
                    Privacy Questions
                  </h2>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    For questions regarding information submitted through the
                    website, please contact us at:
                  </p>

                  <a
                    href="mailto:info@sakthidentalclinic.in"
                    className="mt-2 inline-block text-sm font-semibold text-violet-600 hover:text-violet-700"
                  >
                    info@sakthidentalclinic.in
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-violet-100 hover:text-violet-700"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Link>
            </div>
          </motion.article>
        </div>
      </section>

    </main>
  );
}