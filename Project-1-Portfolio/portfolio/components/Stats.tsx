"use client";

import { motion } from "framer-motion";

const stats = [
  {
    number: "10+",
    label: "Projects Built",
    icon: "🚀",
  },
  {
    number: "15+",
    label: "Technologies",
    icon: "💻",
  },
  {
    number: "3+",
    label: "Major Projects",
    icon: "⭐",
  },
  {
    number: "100%",
    label: "Passion",
    icon: "🔥",
  },
];

export default function Stats() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">

          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -6,
              }}
              className="text-center bg-[#111827]/70 border border-white/10 rounded-3xl p-7 hover:border-blue-500/40 transition"
            >

              <div className="text-3xl mb-4">
                {stat.icon}
              </div>

              <h3 className="text-4xl md:text-5xl font-black text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text">
                {stat.number}
              </h3>

              <p className="text-gray-400 mt-3">
                {stat.label}
              </p>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}