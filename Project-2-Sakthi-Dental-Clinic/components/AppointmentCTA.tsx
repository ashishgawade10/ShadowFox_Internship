"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  CalendarCheck,
  Clock3,
  MapPin,
  Phone,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";

export default function AppointmentCTA() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-20 sm:py-24">
      {/* Background decorations */}
      <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-violet-600/20 blur-3xl" />
      <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-pink-500/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl sm:p-10 lg:p-12"
        >
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto]">
            {/* Main content */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-violet-500/10 px-4 py-2 text-sm font-semibold text-violet-300">
                <CalendarCheck className="h-4 w-4" />
                Book Your Visit
              </div>

              <h2 className="mt-5 max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Ready to Take the Next Step Towards a{" "}
                <span className="text-violet-400">
                  Healthier Smile?
                </span>
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                Get in touch with Sakthi Dental Clinic to discuss your dental
                needs and find a convenient time for your visit.
              </p>

              {/* Quick information */}
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                    <Phone className="h-5 w-5 text-violet-300" />
                  </div>

                  <div>
                    <p className="text-xs text-slate-400">
                      Contact
                    </p>

                    <p className="text-sm font-semibold text-white">
                      Clinic Enquiry
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                    <Clock3 className="h-5 w-5 text-violet-300" />
                  </div>

                  <div>
                    <p className="text-xs text-slate-400">
                      Availability
                    </p>

                    <p className="text-sm font-semibold text-white">
                      Contact for Timing
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                    <MapPin className="h-5 w-5 text-violet-300" />
                  </div>

                  <div>
                    <p className="text-xs text-slate-400">
                      Location
                    </p>

                    <p className="text-sm font-semibold text-white">
                      Hosur
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA card */}
            <motion.div
              whileHover={{ y: -5 }}
              className="w-full rounded-3xl border border-white/10 bg-white p-6 shadow-2xl lg:w-80"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-100">
                <ShieldCheck className="h-6 w-6 text-violet-600" />
              </div>

              <h3 className="mt-5 text-xl font-bold text-slate-900">
                Let's Talk About Your Dental Care
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                Contact our clinic and take the first step towards personalised
                dental care.
              </p>

              <Link
                href="/contact"
                className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-violet-600 px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-violet-200 transition-all hover:-translate-y-1 hover:bg-violet-700 hover:shadow-xl"
              >
                <CalendarCheck className="h-5 w-5" />
                Fix an Appointment

                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}