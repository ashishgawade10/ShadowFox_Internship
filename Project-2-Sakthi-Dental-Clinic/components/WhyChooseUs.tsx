"use client";

import { motion } from "framer-motion";
import {
  HeartHandshake,
  ShieldCheck,
  Sparkles,
  UserRoundCheck,
} from "lucide-react";

const features = [
  {
    icon: HeartHandshake,
    title: "Compassionate Care",
    description:
      "We create a comfortable and welcoming experience so every patient feels cared for throughout their dental journey.",
  },
  {
    icon: ShieldCheck,
    title: "Safe & Hygienic",
    description:
      "Patient safety and hygiene are important parts of our approach to providing reliable dental care.",
  },
  {
    icon: Sparkles,
    title: "Modern Approach",
    description:
      "We combine modern dental technology with thoughtful treatment planning for a better patient experience.",
  },
  {
    icon: UserRoundCheck,
    title: "Patient-Centred",
    description:
      "Every treatment plan is designed around the patient's needs, comfort and long-term oral health.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-16 sm:py-20 lg:py-24">

      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-violet-200/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-pink-200/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex rounded-full bg-violet-100 px-3 py-1.5 text-xs font-semibold text-violet-700 sm:px-4 sm:py-2 sm:text-sm">
            Why Choose Sakthi Dental
          </span>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:mt-5 sm:text-4xl lg:text-5xl">
            Dental Care Designed Around{" "}
            <span className="text-violet-600">You</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:mt-5 sm:text-lg sm:leading-8">
            From your first visit to ongoing care, our focus is on making
            dental treatment comfortable, clear and patient-friendly.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="mt-10 grid gap-5 sm:mt-12 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4 lg:gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                whileHover={{ y: -6 }}
                className="group rounded-3xl border border-slate-100 bg-white p-6 shadow-sm transition-all duration-300 hover:border-violet-100 hover:shadow-xl hover:shadow-violet-100/40 sm:p-7"
              >
                {/* Icon */}
                <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-violet-50 transition-all duration-300 group-hover:bg-violet-600 sm:h-14 sm:w-14">
                  <Icon className="h-6 w-6 text-violet-600 transition-colors duration-300 group-hover:text-white sm:h-7 sm:w-7" />
                </div>

                {/* Title */}
                <h3 className="mt-5 text-lg font-bold text-slate-900 sm:mt-6">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="mt-2.5 text-sm leading-6 text-slate-600 sm:mt-3 sm:leading-7">
                  {feature.description}
                </p>

                {/* Bottom accent */}
                <div className="mt-5 h-1 w-10 rounded-full bg-violet-200 transition-all duration-300 group-hover:w-16 group-hover:bg-violet-600 sm:mt-6" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}