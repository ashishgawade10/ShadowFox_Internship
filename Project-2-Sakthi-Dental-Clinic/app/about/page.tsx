"use client";

import { motion } from "framer-motion";
import {
  Award,
  HeartHandshake,
  Lightbulb,
  ShieldCheck,
  Stethoscope,
  Target,
} from "lucide-react";
import Link from "next/link";

const doctors = [
  {
    name: "Dr. Anupriya",
    specialty: "Founder",
  },
  {
    name: "Dr. Ananya Iyer",
    specialty: "Prosthodontist",
  },
  {
    name: "Dr. Meera Subramanian",
    specialty: "Endodontist",
  },
  {
    name: "Dr. Arvind Kumar",
    specialty: "Dental Surgeon",
  },
  {
    name: "Dr. Sneha N",
    specialty: "Orthodontist",
  },
  {
    name: "Dr. Srinivas Rohit Ramanujam",
    specialty: "Implantologist",
  },
  {
    name: "Dr. Balu",
    specialty: "Laser Surgeon",
  },
  {
    name: "Dr. Vikram Raj Kishore",
    specialty: "Aligners Partner",
  },
  {
    name: "Dr. Ajay Jumar",
    specialty: "Oral & Maxillofacial Surgeon",
  },
];

export default function AboutPage() {
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
              About Sakthi Dental Clinic
            </span>

            <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Your Trusted Partner in{" "}
              <span className="text-violet-600">Dental Care</span>
            </h1>

            <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
              Get to know the people, values and vision behind Sakthi Dental
              Clinic.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Dr. Anupriya */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">

          {/* Image placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative mx-auto w-full max-w-lg"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-gradient-to-br from-violet-100 via-white to-pink-100 shadow-xl">

              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                <div className="flex h-28 w-28 items-center justify-center rounded-full bg-white shadow-lg">
                  <Stethoscope className="h-14 w-14 text-violet-600" />
                </div>

                <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-violet-600">
                  Founder
                </p>

                <h2 className="mt-2 text-2xl font-bold text-slate-900">
                  Dr. Anupriya
                </h2>

                <p className="mt-2 text-sm text-slate-500">
                  Sakthi Dental Clinic
                </p>
              </div>

              <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full border-[20px] border-white/60" />
              <div className="absolute -bottom-14 -left-14 h-44 w-44 rounded-full border-[25px] border-white/50" />
            </div>

            {/* Experience card */}
            <div className="absolute -bottom-5 -right-3 rounded-2xl border border-white bg-white p-5 shadow-xl sm:-right-8">
              <p className="text-3xl font-bold text-violet-600">20+</p>
              <p className="text-sm font-medium text-slate-500">
                Years of Expertise
              </p>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex rounded-full bg-pink-100 px-4 py-2 text-sm font-semibold text-pink-600">
              Get to Know Dr. Anupriya
            </span>

            <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              A journey built on{" "}
              <span className="text-violet-600">care & experience</span>
            </h2>

            <div className="mt-6 space-y-5 text-base leading-8 text-slate-600">
              <p>
                Bringing over 20 years of expertise, Dr. Anupriya stands as a
                leading figure in modern dentistry at Hosur. She began her
                professional journey after graduating in 2000. Her passion for
                delivering exceptional dental care was further nurtured during
                six impactful years at Mathura Clinic, where she refined her
                clinical skills and deepened her commitment to patient
                wellbeing.
              </p>

              <p>
                In 2004, Dr. Anupriya established Sakthi Dental Clinic in Hosur
                with a clear vision to make high-quality dental care accessible
                to all. Her dedication extends beyond private practice,
                reflected in her long-standing service with the Primary Health
                Center at Chandara Hospital, where she has been a trusted dental
                consultant for over a decade.
              </p>

              <p>
                At Sakthi Dental Clinic, we believe that a healthy smile is a
                gateway to confidence and wellbeing. Our clinic blends advanced
                dental technology with a warm, patient-friendly environment to
                ensure every visit is comfortable and stress-free.
              </p>

              <p>
                Whether you're looking for preventive care, cosmetic
                enhancements, or restorative solutions, Dr. Anupriya and her
                team are committed to delivering excellence at every step.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center"
          >
            <span className="inline-flex rounded-full bg-violet-100 px-4 py-2 text-sm font-semibold text-violet-700">
              Our Vision & Mission
            </span>

            <h2 className="mt-5 text-3xl font-bold text-slate-900 sm:text-4xl">
              What drives{" "}
              <span className="text-violet-600">our work</span>
            </h2>
          </motion.div>

          <div className="mt-14 grid gap-7 lg:grid-cols-2">

            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-3xl border border-slate-100 bg-white p-8 shadow-sm sm:p-10"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-100">
                <Target className="h-7 w-7 text-violet-600" />
              </div>

              <h3 className="mt-6 text-2xl font-bold text-slate-900">
                Our Mission
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                At Sakthi Dental Clinic, our mission is to redefine oral
                healthcare by delivering personalized, compassionate, and
                advanced dental services. We are committed to creating a
                welcoming environment where patients feel comfortable and
                confident in taking charge of their dental health.
              </p>

              <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                By integrating state-of-the-art technology with patient-centric
                care, we ensure that every treatment enhances not only your
                smile but also your overall well-being.
              </p>

              <div className="mt-6 flex items-center gap-3 text-sm font-semibold text-violet-600">
                <HeartHandshake className="h-5 w-5" />
                Compassionate & personalized care
              </div>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-3xl border border-slate-100 bg-white p-8 shadow-sm sm:p-10"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-pink-100">
                <Lightbulb className="h-7 w-7 text-pink-600" />
              </div>

              <h3 className="mt-6 text-2xl font-bold text-slate-900">
                Our Vision
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                Our vision is to be a leading force in modern dentistry, known
                for setting new standards in patient care, innovation, and
                community engagement.
              </p>

              <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                We aspire to not only deliver exceptional dental outcomes but
                also to contribute positively to the community through
                awareness initiatives and outreach programs.
              </p>

              <div className="mt-6 flex items-center gap-3 text-sm font-semibold text-pink-600">
                <Award className="h-5 w-5" />
                Excellence, innovation & community
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Doctors */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center"
          >
            <span className="inline-flex rounded-full bg-violet-100 px-4 py-2 text-sm font-semibold text-violet-700">
              Our Team
            </span>

            <h2 className="mt-5 text-3xl font-bold text-slate-900 sm:text-4xl">
              Meet Our{" "}
              <span className="text-violet-600">Doctors</span>
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600">
              A team of dental professionals with expertise across different
              areas of modern dentistry.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {doctors.map((doctor, index) => (
              <motion.div
                key={doctor.name}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.05,
                }}
                className="group rounded-3xl border border-slate-100 bg-slate-50 p-6 text-center transition-all duration-300 hover:-translate-y-2 hover:bg-white hover:shadow-xl hover:shadow-violet-100/50"
              >
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-violet-100 to-pink-100 transition-transform duration-300 group-hover:scale-105">
                  <Stethoscope className="h-9 w-9 text-violet-600" />
                </div>

                <h3 className="mt-5 text-lg font-bold text-slate-900">
                  {doctor.name}
                </h3>

                <p className="mt-2 text-sm font-medium text-violet-600">
                  {doctor.specialty}
                </p>

                <div className="mx-auto mt-5 h-1 w-10 rounded-full bg-violet-200 transition-all group-hover:w-16 group-hover:bg-violet-600" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2rem] bg-gradient-to-r from-violet-600 to-pink-500 px-6 py-14 text-center sm:px-12">
          <ShieldCheck className="mx-auto h-10 w-10 text-white" />

          <h2 className="mt-5 text-3xl font-bold text-white">
            Your smile deserves expert care.
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-violet-100">
            Take the next step toward comfortable, personalized dental care.
          </p>

          <Link
            href="/contact"
            className="mt-7 inline-flex items-center rounded-full bg-white px-7 py-4 text-sm font-bold text-violet-700 shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
          >
            Fix an Appointment
          </Link>
        </div>
      </section>

    </main>
  );
}