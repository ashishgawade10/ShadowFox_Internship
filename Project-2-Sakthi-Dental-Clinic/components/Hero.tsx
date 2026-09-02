"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  CalendarCheck,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-violet-50 via-white to-pink-50">

      {/* Background decorations */}
      <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-violet-200/30 blur-3xl" />
      <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-pink-200/30 blur-3xl" />

      <div className="relative mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-2 lg:gap-12 lg:px-8 lg:py-20">

        {/* ================================================= */}
        {/* LEFT CONTENT */}
        {/* ================================================= */}

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="order-1"
        >
          {/* Badge */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white/80 px-3 py-2 text-xs font-medium text-violet-700 shadow-sm backdrop-blur sm:px-4 sm:text-sm">
            <Sparkles className="h-4 w-4" />

            Trusted Dental Care in Hosur
          </div>

          {/* Heading */}
          <h1 className="max-w-2xl text-4xl font-bold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Specialized Dental Care for{" "}
            <span className="bg-gradient-to-r from-violet-600 to-pink-500 bg-clip-text text-transparent">
              Women, Children & Families
            </span>
          </h1>

          {/* Description */}
          <p className="mt-5 max-w-xl text-sm leading-7 text-slate-600 sm:mt-6 sm:text-lg sm:leading-8">
            Experience compassionate, expert-led dental services tailored to
            your needs, all in a modern and welcoming environment.
          </p>

          {/* Buttons */}
          <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:gap-4">

            <Link
              href="/contact"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-violet-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-violet-200 transition-all hover:-translate-y-1 hover:bg-violet-700 hover:shadow-xl sm:w-auto sm:px-7 sm:py-4"
            >
              <CalendarCheck className="h-5 w-5" />

              Fix an Appointment

              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="/contact"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 shadow-sm transition-all hover:-translate-y-1 hover:border-violet-200 hover:text-violet-600 sm:w-auto sm:px-7 sm:py-4"
            >
              <ShieldCheck className="h-5 w-5" />

              Emergency Dental Support
            </Link>

          </div>

          {/* Trust points */}
          <div className="mt-8 flex flex-col gap-3 text-sm text-slate-600 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-x-8 sm:gap-y-4">

            <div className="flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 shrink-0 text-violet-600" />
              Patient-Centric Care
            </div>

            <div className="flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 shrink-0 text-violet-600" />
              Modern Technology
            </div>

            <div className="flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 shrink-0 text-violet-600" />
              Experienced Doctors
            </div>

          </div>
        </motion.div>


        {/* ================================================= */}
        {/* RIGHT IMAGE */}
        {/* ================================================= */}

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="order-2 relative mx-auto w-full max-w-md sm:max-w-lg lg:max-w-xl"
        >
          <div className="relative">

            {/* Main Image */}
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-violet-100 shadow-2xl shadow-violet-100">

              <Image
                src="/dental-hero.png"
                alt="Sakthi Dental Clinic dental care"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 640px) 90vw, (max-width: 1024px) 60vw, 45vw"
              />

              {/* Soft overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-violet-950/10 via-transparent to-white/10" />

            </div>


            {/* ================================================= */}
            {/* FLOATING SAFE CARD */}
            {/* ================================================= */}

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-5 left-2 rounded-2xl border border-white bg-white p-3 shadow-xl sm:-left-6 sm:bottom-6 sm:p-4"
            >
              <div className="flex items-center gap-3">

                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-100 sm:h-11 sm:w-11">
                  <ShieldCheck className="h-5 w-5 text-violet-600 sm:h-6 sm:w-6" />
                </div>

                <div>
                  <p className="text-xs font-bold text-slate-800 sm:text-sm">
                    Safe & Caring
                  </p>

                  <p className="text-[11px] text-slate-500 sm:text-xs">
                    Patient-first approach
                  </p>
                </div>

              </div>
            </motion.div>


            {/* ================================================= */}
            {/* EXPERIENCE CARD */}
            {/* ================================================= */}

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute right-1 top-5 rounded-2xl border border-white bg-white p-3 shadow-xl sm:-right-6 sm:top-8 sm:p-4"
            >
              <p className="text-xl font-bold text-violet-600 sm:text-2xl">
                20+
              </p>

              <p className="text-[11px] font-medium text-slate-500 sm:text-xs">
                Years of Experience
              </p>
            </motion.div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}