"use client";

import { motion } from "framer-motion";

const experience = [
  {
    period: "2026",
    role: "Web Development Intern",
    company: "Internship Experience",
    description:
      "Worked on web development tasks and gained practical experience in building responsive user interfaces and applications.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Next.js",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-28 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <p className="text-blue-400 uppercase tracking-[4px]">
            Experience
          </p>

          <h2 className="text-5xl md:text-6xl font-bold text-white mt-3">
            My Experience
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            My journey of gaining practical experience through development
            and internships.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {experience.map((item, index) => (
            <motion.div
              key={item.role}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#111827]/80 border border-white/10 rounded-3xl p-8 md:p-10 hover:border-blue-500/40 transition"
            >

              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-5">

                <div>
                  <span className="text-blue-400">
                    {item.period}
                  </span>

                  <h3 className="text-3xl font-bold text-white mt-3">
                    {item.role}
                  </h3>

                  <p className="text-gray-300 mt-2">
                    {item.company}
                  </p>
                </div>

                <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-2xl">
                  💼
                </div>

              </div>

              <p className="text-gray-400 leading-8 mt-7">
                {item.description}
              </p>

              <div className="flex flex-wrap gap-3 mt-7">
                {item.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 text-sm"
                  >
                    {technology}
                  </span>
                ))}
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}