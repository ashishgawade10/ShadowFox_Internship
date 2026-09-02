"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  Clock3,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Send,
} from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="bg-white">

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-violet-50 via-white to-pink-50">
        <div className="absolute -left-20 top-10 h-64 w-64 rounded-full bg-violet-200/30 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-pink-200/30 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 lg:px-8 lg:py-28">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex rounded-full bg-violet-100 px-4 py-2 text-sm font-semibold text-violet-700">
              Get in Touch
            </span>

            <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Let&apos;s Take Care of{" "}
              <span className="text-violet-600">Your Smile</span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              Have a question or want to book an appointment? Get in touch
              with the Sakthi Dental Clinic team.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact section */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_1.15fr] lg:px-8">

          {/* Contact information */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex rounded-full bg-pink-100 px-4 py-2 text-sm font-semibold text-pink-600">
              Clinic Information
            </span>

            <h2 className="mt-5 text-3xl font-bold text-slate-900 sm:text-4xl">
              We&apos;re here to{" "}
              <span className="text-violet-600">help</span>
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-600">
              Visit us at our clinic in Hosur or contact our team directly for
              appointments and dental enquiries.
            </p>

            <div className="mt-8 space-y-5">

              {/* Address */}
              <div className="rounded-2xl border border-slate-100 bg-slate-50 p-5">
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-violet-100">
                    <MapPin className="h-6 w-6 text-violet-600" />
                  </div>

                  <div>
                    <h3 className="font-bold text-slate-900">
                      Clinic Address
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      B2/8, SBM Layout,
                      <br />
                      Anthivadi, Hosur,
                      <br />
                      Tamil Nadu 635109, India
                    </p>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="rounded-2xl border border-slate-100 bg-slate-50 p-5">
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-pink-100">
                    <Mail className="h-6 w-6 text-pink-600" />
                  </div>

                  <div>
                    <h3 className="font-bold text-slate-900">
                      Email
                    </h3>

                    <a
                      href="mailto:info@sakthidentalclinic.in"
                      className="mt-2 block text-sm text-slate-600 transition hover:text-violet-600"
                    >
                      info@sakthidentalclinic.in
                    </a>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="rounded-2xl border border-slate-100 bg-slate-50 p-5">
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-violet-100">
                    <Phone className="h-6 w-6 text-violet-600" />
                  </div>

                  <div>
                    <h3 className="font-bold text-slate-900">
                      Phone
                    </h3>

                    <div className="mt-2 space-y-1 text-sm">
                      <a
                        href="tel:+919862890897"
                        className="block text-slate-600 transition hover:text-violet-600"
                      >
                        +91 9862890897
                      </a>

                      <a
                        href="tel:+919363298118"
                        className="block text-slate-600 transition hover:text-violet-600"
                      >
                        +91 9363298118
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="rounded-2xl border border-slate-100 bg-slate-50 p-5">
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-pink-100">
                    <Clock3 className="h-6 w-6 text-pink-600" />
                  </div>

                  <div>
                    <h3 className="font-bold text-slate-900">
                      Clinic Hours
                    </h3>

                    <p className="mt-2 text-sm text-slate-600">
                      Sunday – Saturday
                    </p>

                    <p className="mt-1 text-sm font-semibold text-violet-600">
                      9:00 AM – 7:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-slate-100 bg-white p-6 shadow-xl shadow-slate-100 sm:p-8"
          >
            {!submitted ? (
              <>
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-100">
                  <MessageSquare className="h-7 w-7 text-violet-600" />
                </div>

                <h2 className="mt-6 text-2xl font-bold text-slate-900">
                  Send Us a Message
                </h2>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Fill in your details and our team will get back to you.
                </p>

                <form
                  onSubmit={handleSubmit}
                  className="mt-8 space-y-5"
                >
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-semibold text-slate-700"
                    >
                      Full Name
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Enter your name"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-violet-500 focus:bg-white focus:ring-4 focus:ring-violet-100"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-semibold text-slate-700"
                    >
                      Email Address
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="you@example.com"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-violet-500 focus:bg-white focus:ring-4 focus:ring-violet-100"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-sm font-semibold text-slate-700"
                    >
                      Phone Number
                    </label>

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      placeholder="+91 XXXXX XXXXX"
                      pattern="[0-9+() -]{10,}"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-violet-500 focus:bg-white focus:ring-4 focus:ring-violet-100"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-semibold text-slate-700"
                    >
                      Message{" "}
                      <span className="font-normal text-slate-400">
                        (Optional)
                      </span>
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="Tell us how we can help..."
                      className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-violet-500 focus:bg-white focus:ring-4 focus:ring-violet-100"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="group flex w-full items-center justify-center gap-2 rounded-xl bg-violet-600 px-6 py-4 text-sm font-bold text-white shadow-lg shadow-violet-200 transition hover:-translate-y-0.5 hover:bg-violet-700 hover:shadow-xl"
                  >
                    Send Message
                    <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </button>

                  <p className="text-center text-xs leading-5 text-slate-400">
                    By submitting this form, you agree to be contacted by
                    Sakthi Dental Clinic regarding your enquiry.
                  </p>
                </form>
              </>
            ) : (
              /* Success state */
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex min-h-[560px] flex-col items-center justify-center text-center"
              >
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
                  <CheckCircle2 className="h-10 w-10 text-green-600" />
                </div>

                <h2 className="mt-7 text-3xl font-bold text-slate-900">
                  Message Received!
                </h2>

                <p className="mt-4 max-w-md text-sm leading-7 text-slate-600">
                  Thank you for contacting Sakthi Dental Clinic. Your enquiry
                  has been received successfully.
                </p>

                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-7 rounded-full bg-violet-100 px-6 py-3 text-sm font-bold text-violet-700 transition hover:bg-violet-200"
                >
                  Send Another Message
                </button>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Appointment CTA */}
      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-slate-950 px-6 py-12 text-center sm:px-12">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Ready to book your visit?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-400">
            Contact our clinic to discuss your dental needs and find the right
            treatment for you.
          </p>

          <a
            href="tel:+919862890897"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-violet-600 px-7 py-4 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-violet-500"
          >
            <Phone className="h-4 w-4" />
            Call the Clinic
          </a>
        </div>
      </section>

    </main>
  );
}