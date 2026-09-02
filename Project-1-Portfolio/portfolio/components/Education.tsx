"use client";

import { motion } from "framer-motion";

const education = [
  {
    year: "2024 - 2027",
    title: "B.Sc Computer Science",
    institute: "Dnyanprassarak Mandal's College",
    description:
      "Studying computer science with a focus on programming, web development, databases and software development.",
  },
  {
    year: "Higher Secondary",
    title: "Higher Secondary Education",
    institute: "Higher Secondary School",
    description:
      "Completed higher secondary education with an interest in computer science and technology.",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-16">
          <p className="text-blue-400 uppercase tracking-[4px]">
            Education
          </p>

          <h2 className="text-5xl md:text-6xl font-bold text-white mt-3">
            My Education
          </h2>
        </div>

        <div className="relative">

          {/* Timeline */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-blue-500/30" />

          <div className="space-y-12">
            {education.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{
                  opacity: 0,
                  x: index % 2 === 0 ? -40 : 40,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className={`relative flex ${
                  index % 2 === 0
                    ? "md:justify-start"
                    : "md:justify-end"
                }`}
              >

                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-blue-500 border-4 border-[#030712] shadow-lg shadow-blue-500/50" />

                <div className="ml-12 md:ml-0 md:w-[45%] bg-[#111827]/80 border border-white/10 rounded-3xl p-7 hover:border-blue-500/40 transition">

                  <span className="text-blue-400 text-sm font-semibold">
                    {item.year}
                  </span>

                  <h3 className="text-2xl font-bold text-white mt-3">
                    {item.title}
                  </h3>

                  <p className="text-gray-300 mt-2">
                    {item.institute}
                  </p>

                  <p className="text-gray-400 leading-7 mt-4">
                    {item.description}
                  </p>

                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}