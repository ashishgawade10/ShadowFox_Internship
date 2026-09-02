"use client";

import { motion } from "framer-motion";
import {
  Accessibility,
  ArrowRight,
  Baby,
  Brush,
  CircleDot,
  HeartPulse,
  Layers3,
  ScanLine,
  Sparkles,
  Stethoscope,
  Syringe,
  Smile,
  WandSparkles,
} from "lucide-react";
import Link from "next/link";

const treatments = [
  {
    icon: Brush,
    title: "Teeth Cleaning & Scaling",
    description:
      "At Sakthi Dental Clinic, we offer advanced, non-surgical gum care using modern LASER technology for precise and effective treatment. Scaling is advised for moderate cases to remove plaque and tartar buildup, while more severe periodontal issues may require deep cleaning procedures like root planing, supported by LASER treatment.",
    category: "Preventive & Gum Care",
  },
  {
    icon: CircleDot,
    title: "Tooth Filling",
    description:
      "We specialize in restoring smiles through expert tooth filling services. Whether tooth damage is caused by cavities, trauma, or wear from habits like teeth grinding or nail-biting, our team uses high-quality materials and the latest techniques to repair and protect your teeth.",
    category: "Restorative Dentistry",
  },
  {
    icon: Stethoscope,
    title: "Tooth Extraction",
    description:
      "When a tooth is beyond repair, our experienced dental team evaluates every option before recommending removal. When necessary, extractions are performed using gentle techniques to minimize discomfort while prioritizing patient comfort and recovery.",
    category: "Oral Surgery",
  },
  {
    icon: Smile,
    title: "Artificial Complete Denture",
    description:
      "We craft high-quality complete dentures to restore both function and aesthetics for patients with missing teeth. Our customized dentures are designed with durable materials to provide a natural look, comfortable fit and improved daily functionality.",
    category: "Prosthodontics",
  },
  {
    icon: CircleDot,
    title: "Dental Implants",
    description:
      "Dental implants offer a modern and reliable solution for replacing missing teeth. Biocompatible materials such as titanium are used to create a stable foundation for prosthetic teeth, restoring appearance, strength and oral function.",
    category: "Implant Dentistry",
  },
  {
    icon: WandSparkles,
    title: "Laser Dentistry",
    description:
      "Advanced laser technology is used to perform precise, minimally invasive dental treatments. From soft tissue surgeries to gum care, laser procedures can support faster healing, reduced discomfort and enhanced accuracy.",
    category: "Advanced Dentistry",
  },
  {
    icon: HeartPulse,
    title: "Root Canal Therapy",
    description:
      "When tooth infections reach deep into the pulp, root canal treatment becomes essential. The infected tissue is carefully removed, the area is cleaned and the tooth is sealed to help relieve pain, eliminate infection and preserve natural tooth structure.",
    category: "Restorative Dentistry",
  },
  {
    icon: Syringe,
    title: "Wisdom Tooth Extraction",
    description:
      "Impacted or problematic wisdom teeth can cause discomfort and oral health risks. Our clinic provides gentle and effective wisdom tooth removal using modern techniques and anesthesia options, followed by comprehensive post-operative care.",
    category: "Oral Surgery",
  },
  {
    icon: Layers3,
    title: "Fixed Partial Denture (Bridge)",
    description:
      "Fixed partial dentures provide a secure solution for replacing missing teeth by anchoring prosthetic teeth to adjacent natural teeth or implants. Custom-made bridges restore appearance while improving chewing function and oral stability.",
    category: "Prosthodontics",
  },
  {
    icon: Sparkles,
    title: "Teeth Whitening (Bleaching)",
    description:
      "Professional teeth whitening services help brighten your smile by treating external and internal stains. Safe bleaching agents can lighten teeth affected by food, beverages or age and restore a brighter appearance.",
    category: "Cosmetic Dentistry",
  },
  {
    icon: ScanLine,
    title: "Veneers",
    description:
      "Dental veneers are thin, custom-made shells designed to cover imperfections such as chips, gaps or discoloration. They enhance the appearance of teeth while providing a natural-looking smile.",
    category: "Cosmetic Dentistry",
  },
  {
    icon: Baby,
    title: "Pediatric Dentistry",
    description:
      "We provide gentle and comprehensive dental care for children. Our friendly team creates a welcoming environment for young patients while focusing on routine check-ups, preventive treatments and healthy dental habits.",
    category: "Children's Dentistry",
  },
  {
    icon: Accessibility,
    title: "Flap Surgery",
    description:
      "For advanced gum disease, flap surgery may be necessary. The procedure involves lifting gum tissue to remove deep-seated plaque and bacteria before repositioning it for healing and improved periodontal health.",
    category: "Gum Surgery",
  },
  {
    icon: Smile,
    title: "Orthodontic Braces",
    description:
      "Customized orthodontic treatments help correct misaligned teeth. We offer metal, ceramic and lingual braces to suit different preferences, with the goal of improving alignment, bite function and smile appearance.",
    category: "Orthodontics",
  },
  {
    icon: ScanLine,
    title: "Clear Aligners",
    description:
      "Clear aligners provide a discreet alternative to traditional braces. These transparent, removable trays gradually shift teeth into alignment while providing comfort and flexibility throughout the orthodontic journey.",
    category: "Orthodontics",
  },
];

export default function TreatmentsPage() {
  return (
    <main className="bg-white">

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-violet-50 via-white to-pink-50">
        <div className="absolute -left-20 top-10 h-64 w-64 rounded-full bg-violet-200/30 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-pink-200/30 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-3xl text-center"
          >
            <span className="inline-flex rounded-full bg-violet-100 px-4 py-2 text-sm font-semibold text-violet-700">
              Our Treatments
            </span>

            <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Complete Dental Care for a{" "}
              <span className="text-violet-600">Healthier Smile</span>
            </h1>

            <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
              From preventive care to advanced restorative, cosmetic and
              orthodontic treatments, explore the dental services available at
              Sakthi Dental Clinic.
            </p>

            <Link
              href="/contact"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-violet-600 px-7 py-4 text-sm font-bold text-white shadow-lg shadow-violet-200 transition hover:-translate-y-1 hover:bg-violet-700 hover:shadow-xl"
            >
              Fix an Appointment
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Treatment overview */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center"
          >
            <span className="inline-flex rounded-full bg-pink-100 px-4 py-2 text-sm font-semibold text-pink-600">
              Explore Our Services
            </span>

            <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Treatments Designed Around{" "}
              <span className="text-violet-600">Your Needs</span>
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600">
              Our treatment options cover preventive, restorative, cosmetic,
              surgical and orthodontic dental care.
            </p>
          </motion.div>

          {/* Cards */}
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {treatments.map((treatment, index) => {
              const Icon = treatment.icon;

              return (
                <motion.article
                  key={treatment.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.45,
                    delay: (index % 3) * 0.08,
                  }}
                  className="group flex h-full flex-col rounded-3xl border border-slate-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-violet-100 hover:shadow-xl hover:shadow-violet-100/50"
                >
                  {/* Icon */}
                  <div className="flex items-center justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-100 transition-colors duration-300 group-hover:bg-violet-600">
                      <Icon className="h-7 w-7 text-violet-600 transition-colors duration-300 group-hover:text-white" />
                    </div>

                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-500">
                      {treatment.category}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="mt-7 text-xl font-bold text-slate-900">
                    {treatment.title}
                  </h3>

                  <p className="mt-4 flex-1 text-sm leading-7 text-slate-600">
                    {treatment.description}
                  </p>

                  <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-violet-600">
                    <span>Learn about this treatment</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Patient care section */}
      <section className="bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">

          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex rounded-full bg-violet-100 px-4 py-2 text-sm font-semibold text-violet-700">
              Patient-Centric Care
            </span>

            <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Comfortable care from{" "}
              <span className="text-violet-600">consultation to recovery</span>
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              At Sakthi Dental Clinic, treatment is designed around patient
              comfort, safety and individual dental needs. Our team focuses on
              explaining treatment options clearly and creating a welcoming,
              stress-free experience.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-white p-5 shadow-sm">
                <Stethoscope className="h-7 w-7 text-violet-600" />
                <h3 className="mt-4 font-bold text-slate-900">
                  Experienced Team
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Professional dental care across multiple specialties.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-5 shadow-sm">
                <HeartPulse className="h-7 w-7 text-violet-600" />
                <h3 className="mt-4 font-bold text-slate-900">
                  Personalized Care
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Treatment plans focused on individual patient needs.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-5 shadow-sm">
                <Sparkles className="h-7 w-7 text-violet-600" />
                <h3 className="mt-4 font-bold text-slate-900">
                  Modern Treatments
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Advanced techniques and technology-supported care.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-5 shadow-sm">
                <ShieldCheckIcon />
                <h3 className="mt-4 font-bold text-slate-900">
                  Focus on Comfort
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  A welcoming environment throughout your dental journey.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-violet-600 to-pink-500 p-8 shadow-2xl sm:p-12">

              <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full border-[30px] border-white/10" />

              <div className="absolute -bottom-20 -left-16 h-56 w-56 rounded-full border-[35px] border-white/10" />

              <div className="relative">
                <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-white/15 backdrop-blur-sm">
                  <Smile className="h-10 w-10 text-white" />
                </div>

                <h3 className="mt-8 text-3xl font-bold text-white">
                  Your smile is our priority.
                </h3>

                <p className="mt-5 text-base leading-7 text-violet-100">
                  Whether you need preventive care, restorative treatment,
                  cosmetic improvement or orthodontic care, our team is here
                  to support your dental health.
                </p>

                <Link
                  href="/contact"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-violet-700 transition hover:-translate-y-1 hover:shadow-lg"
                >
                  Talk to Our Team
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-5xl rounded-[2rem] bg-slate-950 px-6 py-14 text-center sm:px-12"
        >
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Ready to care for your smile?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-400">
            Schedule a consultation with Sakthi Dental Clinic and discuss the
            treatment that is right for your dental needs.
          </p>

          <Link
            href="/contact"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-violet-600 px-7 py-4 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-violet-500"
          >
            Fix an Appointment
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </section>

    </main>
  );
}

/* Small reusable icon component */
function ShieldCheckIcon() {
  return (
    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-violet-100">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="h-5 w-5 text-violet-600"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 3l7 4v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V7l7-4z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12l2 2 4-4"
        />
      </svg>
    </div>
  );
}