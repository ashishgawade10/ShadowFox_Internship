"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Happy Patient",
    treatment: "Dental Care",
    review:
      "The clinic provides a comfortable and welcoming environment. The staff are friendly and make the entire dental visit feel much easier.",
  },
  {
    name: "Satisfied Patient",
    treatment: "Family Dental Care",
    review:
      "A very caring approach from the team. Everything was explained clearly and the experience was smooth and comfortable.",
  },
  {
    name: "Happy Family",
    treatment: "Children's Dental Care",
    review:
      "The friendly environment made the dental visit much more comfortable for our family. We really appreciated the patient-first approach.",
  },
];

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-16 sm:py-20 lg:py-24">
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-violet-200/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-pink-200/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-violet-100 px-3 py-1.5 text-xs font-semibold text-violet-700 sm:px-4 sm:py-2 sm:text-sm">
            <Star className="h-4 w-4 fill-current" />
            Patient Experiences
          </span>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:mt-5 sm:text-4xl lg:text-5xl">
            Care That Makes a{" "}
            <span className="text-violet-600">Difference</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:mt-5 sm:text-lg sm:leading-8">
            A comfortable experience and compassionate care are at the heart
            of every patient visit.
          </p>
        </motion.div>

        {/* Testimonials */}
        <div className="mt-10 grid gap-5 sm:mt-12 lg:mt-14 lg:grid-cols-3 lg:gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{ y: -6 }}
              className="group relative rounded-3xl border border-slate-100 bg-white p-6 shadow-sm transition-all duration-300 hover:border-violet-100 hover:shadow-xl hover:shadow-violet-100/40 sm:p-7"
            >
              {/* Quote icon */}
              <div className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-xl bg-violet-50 sm:right-7 sm:top-7 sm:h-11 sm:w-11">
                <Quote className="h-5 w-5 text-violet-500" />
              </div>

              {/* Stars */}
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="h-4 w-4 fill-violet-500 text-violet-500"
                  />
                ))}
              </div>

              {/* Review */}
              <p className="mt-5 pr-8 text-sm leading-7 text-slate-600 sm:mt-6 sm:text-base">
                “{testimonial.review}”
              </p>

              {/* Patient */}
              <div className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-5 sm:mt-7">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-violet-100 text-sm font-bold text-violet-700 sm:h-11 sm:w-11">
                  {testimonial.name.charAt(0)}
                </div>

                <div className="min-w-0">
                  <h3 className="truncate text-sm font-bold text-slate-900">
                    {testimonial.name}
                  </h3>

                  <p className="mt-1 text-xs text-slate-500">
                    {testimonial.treatment}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Bottom trust message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mt-8 max-w-2xl rounded-2xl border border-violet-100 bg-white p-4 text-center shadow-sm sm:mt-10 sm:p-5"
        >
          <p className="text-sm font-medium leading-6 text-slate-600">
            Your comfort, trust and satisfaction remain at the centre of our
            approach to dental care.
          </p>
        </motion.div>
      </div>
    </section>
  );
}