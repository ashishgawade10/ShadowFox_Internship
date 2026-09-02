"use client";

import { motion } from "framer-motion";

const achievements = [
  {
    icon: "🏆",
    title: "Web Development",
    organization: "Certification",
    description:
      "Completed web development learning focused on modern frontend technologies.",
    year: "2026",
  },
  {
    icon: "💻",
    title: "Frontend Development",
    organization: "Certification",
    description:
      "Developed practical skills in HTML, CSS, JavaScript, React and responsive design.",
    year: "2026",
  },
  {
    icon: "🚀",
    title: "Project Development",
    organization: "Personal Project",
    description:
      "Built real-world applications including a Weather App and restaurant POS system.",
    year: "2026",
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-28 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-blue-400 uppercase tracking-[4px]">
            Achievements
          </p>

          <h2 className="text-5xl md:text-6xl font-bold text-white mt-3">
            Certifications & Achievements
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            A collection of certifications, accomplishments and
            practical development experience.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">

          {achievements.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
              }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#111827]/80 p-8 hover:border-blue-500/50 transition-all duration-300"
            >

              {/* Glow */}
              <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-blue-500/10 blur-3xl group-hover:bg-blue-500/20 transition" />

              <div className="relative">

                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-3xl">
                  {item.icon}
                </div>

                {/* Year */}
                <span className="inline-block mt-6 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm">
                  {item.year}
                </span>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mt-5">
                  {item.title}
                </h3>

                {/* Organization */}
                <p className="text-blue-400 mt-2">
                  {item.organization}
                </p>

                {/* Description */}
                <p className="text-gray-400 leading-7 mt-5">
                  {item.description}
                </p>

                {/* Certificate Button */}
                <button
                  type="button"
                  className="mt-7 text-blue-400 hover:text-blue-300 transition"
                >
                  View Certificate →
                </button>

              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}