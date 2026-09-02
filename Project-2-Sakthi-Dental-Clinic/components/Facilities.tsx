"use client";

import { motion } from "framer-motion";
import {
  CheckCircle2,
  HeartPulse,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const facilities = [
  {
    icon: ShieldCheck,
    title: "Safe & Hygienic Environment",
    description:
      "A clean and carefully maintained environment designed with patient comfort and safety in mind.",
  },
  {
    icon: Sparkles,
    title: "Modern Dental Technology",
    description:
      "Modern equipment and technology to support an efficient and comfortable dental experience.",
  },
  {
    icon: HeartPulse,
    title: "Comfortable Treatment Experience",
    description:
      "A welcoming approach that helps patients feel relaxed and informed throughout their visit.",
  },
];

const highlights = [
  "Patient-focused environment",
  "Clean and comfortable clinic",
  "Modern dental equipment",
  "Welcoming experience for families",
];

export default function Facilities() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24">
      {/* Background decoration */}
      <div className="absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-violet-100/40 blur-3xl" />
      <div className="absolute -right-32 top-10 h-72 w-72 rounded-full bg-pink-100/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex rounded-full bg-violet-100 px-4 py-2 text-sm font-semibold text-violet-700">
              Our Facilities
            </span>

            <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              A Comfortable Place for Your{" "}
              <span className="text-violet-600">Dental Care</span>
            </h2>

            <p className="mt-5 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
              We aim to create a welcoming clinic experience where patients
              can feel comfortable, informed and cared for during their visit.
            </p>

            {/* Highlights */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {highlights.map((highlight) => (
                <div
                  key={highlight}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-violet-600" />

                  <span className="text-sm font-medium text-slate-700">
                    {highlight}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right cards */}
          <div className="grid gap-5">
            {facilities.map((facility, index) => {
              const Icon = facility.icon;

              return (
                <motion.div
                  key={facility.title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  whileHover={{ x: 6 }}
                  className="group flex gap-5 rounded-3xl border border-slate-100 bg-slate-50 p-6 transition-all duration-300 hover:border-violet-100 hover:bg-white hover:shadow-xl hover:shadow-violet-100/40"
                >
                  {/* Icon */}
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white shadow-sm transition-colors duration-300 group-hover:bg-violet-600">
                    <Icon className="h-7 w-7 text-violet-600 transition-colors duration-300 group-hover:text-white" />
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">
                      {facility.title}
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      {facility.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom visual strip */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-14 overflow-hidden rounded-3xl bg-gradient-to-r from-violet-600 to-pink-500 p-8 text-white shadow-xl sm:p-10"
        >
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold text-white/80">
                Comfortable. Caring. Patient-focused.
              </p>

              <h3 className="mt-2 text-2xl font-bold sm:text-3xl">
                Your comfort matters at every visit.
              </h3>
            </div>

            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/15 backdrop-blur">
              <HeartPulse className="h-7 w-7" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}