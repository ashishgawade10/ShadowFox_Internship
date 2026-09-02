"use client";

import { motion } from "framer-motion";
import {
  HeartHandshake,
  ShieldCheck,
  Users,
  Stethoscope,
} from "lucide-react";

export default function About() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24">
      {/* Background decoration */}
      <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-violet-100/50 blur-3xl" />
      <div className="absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-pink-100/50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-wider text-violet-600">
            About Sakthi Dental Clinic
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Caring for Your Smile with
            <span className="bg-gradient-to-r from-violet-600 to-pink-500 bg-clip-text text-transparent">
              {" "}Expertise & Compassion
            </span>
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
            We believe that dental care should be comfortable, personalized,
            and stress-free. Our team is committed to providing quality dental
            care for women, children, and families in a warm and welcoming
            environment.
          </p>
        </motion.div>

        {/* Feature cards */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group rounded-3xl border border-violet-100 bg-violet-50/50 p-6 transition-all duration-300 hover:-translate-y-2 hover:bg-white hover:shadow-xl"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-100">
              <HeartHandshake className="h-7 w-7 text-violet-600" />
            </div>

            <h3 className="mt-5 text-lg font-bold text-slate-900">
              Compassionate Care
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              We make every patient feel comfortable, respected, and cared for
              throughout their dental journey.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="group rounded-3xl border border-pink-100 bg-pink-50/50 p-6 transition-all duration-300 hover:-translate-y-2 hover:bg-white hover:shadow-xl"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-pink-100">
              <ShieldCheck className="h-7 w-7 text-pink-600" />
            </div>

            <h3 className="mt-5 text-lg font-bold text-slate-900">
              Safe & Hygienic
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              We follow careful hygiene and safety practices to provide a
              clean and comfortable environment.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="group rounded-3xl border border-blue-100 bg-blue-50/50 p-6 transition-all duration-300 hover:-translate-y-2 hover:bg-white hover:shadow-xl"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100">
              <Users className="h-7 w-7 text-blue-600" />
            </div>

            <h3 className="mt-5 text-lg font-bold text-slate-900">
              Family Friendly
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Our dental services are designed to support children, women,
              adults, and families.
            </p>
          </motion.div>

          {/* Card 4 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="group rounded-3xl border border-emerald-100 bg-emerald-50/50 p-6 transition-all duration-300 hover:-translate-y-2 hover:bg-white hover:shadow-xl"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100">
              <Stethoscope className="h-7 w-7 text-emerald-600" />
            </div>

            <h3 className="mt-5 text-lg font-bold text-slate-900">
              Modern Dentistry
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              We combine modern dental technology with experienced,
              patient-focused treatment.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}