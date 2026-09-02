"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Baby,
  HeartPulse,
  Sparkles,
  Stethoscope,
} from "lucide-react";
import Link from "next/link";

const treatments = [
  {
    icon: Sparkles,
    title: "General Dentistry",
    description:
      "Complete dental care including check-ups, cleaning and preventive treatments.",
  },
  {
    icon: HeartPulse,
    title: "Cosmetic Dentistry",
    description:
      "Improve the appearance of your smile with carefully planned cosmetic dental treatments.",
  },
  {
    icon: Baby,
    title: "Children's Dentistry",
    description:
      "Gentle and friendly dental care designed to make children's visits comfortable.",
  },
  {
    icon: Stethoscope,
    title: "Specialized Care",
    description:
      "Professional dental solutions tailored to individual patient needs.",
  },
];

export default function TreatmentsPreview() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
      {/* Background decoration */}
      <div className="pointer-events-none absolute -right-20 top-0 h-72 w-72 rounded-full bg-violet-100/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
        >
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full bg-violet-100 px-3 py-1.5 text-xs font-semibold text-violet-700 sm:px-4 sm:py-2 sm:text-sm">
              Our Treatments
            </span>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:mt-5 sm:text-4xl lg:text-5xl">
              Complete Dental Care for{" "}
              <span className="text-violet-600">
                Every Smile
              </span>
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:mt-5 sm:text-lg sm:leading-8">
              From preventive care to specialized treatments, we provide
              thoughtful dental solutions for women, children and families.
            </p>
          </div>

          {/* View all button */}
          <Link
            href="/treatments"
            className="group inline-flex w-fit items-center gap-2 rounded-full border border-violet-200 bg-white px-5 py-3 text-sm font-semibold text-violet-700 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-violet-600 hover:text-white hover:shadow-lg sm:px-6"
          >
            View All Treatments

            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>

        {/* Treatment Cards */}
        <div className="mt-10 grid gap-5 sm:mt-12 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4 lg:gap-6">
          {treatments.map((treatment, index) => {
            const Icon = treatment.icon;

            return (
              <motion.div
                key={treatment.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-3xl border border-slate-100 bg-white p-6 shadow-sm transition-all duration-300 hover:border-violet-100 hover:shadow-xl hover:shadow-violet-100/40 sm:p-7"
              >
                {/* Decorative background */}
                <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-violet-50 transition-transform duration-500 group-hover:scale-150" />

                {/* Icon */}
                <div className="relative flex h-13 w-13 items-center justify-center rounded-2xl bg-violet-50 transition-all duration-300 group-hover:bg-violet-600 sm:h-14 sm:w-14">
                  <Icon className="h-6 w-6 text-violet-600 transition-colors duration-300 group-hover:text-white sm:h-7 sm:w-7" />
                </div>

                {/* Content */}
                <div className="relative">
                  <h3 className="mt-5 text-lg font-bold text-slate-900 sm:mt-6">
                    {treatment.title}
                  </h3>

                  <p className="mt-2.5 text-sm leading-6 text-slate-600 sm:mt-3 sm:leading-7">
                    {treatment.description}
                  </p>

                  {/* Learn more */}
                  <Link
                    href="/treatments"
                    className="group/link mt-5 inline-flex items-center gap-2 text-sm font-semibold text-violet-600 transition-colors hover:text-violet-800 sm:mt-6"
                  >
                    Learn More

                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}