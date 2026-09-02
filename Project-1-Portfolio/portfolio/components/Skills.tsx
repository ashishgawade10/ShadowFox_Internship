"use client";

import { motion } from "framer-motion";
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
  SiGit,
  SiGithub,
} from "react-icons/si";

const skills = [
  {
    name: "HTML5",
    icon: SiHtml5,
    color: "#E34F26",
    level: "95%",
  },
  {
    name: "CSS3",
    icon: SiCss,
    color: "#1572B6",
    level: "90%",
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
    color: "#F7DF1E",
    level: "85%",
  },
  {
    name: "React",
    icon: SiReact,
    color: "#61DAFB",
    level: "85%",
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    color: "#FFFFFF",
    level: "80%",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    color: "#3178C6",
    level: "75%",
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    color: "#06B6D4",
    level: "85%",
  },
  {
    name: "Node.js",
    icon: SiNodedotjs,
    color: "#339933",
    level: "70%",
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    color: "#47A248",
    level: "70%",
  },
  {
    name: "Git",
    icon: SiGit,
    color: "#F05032",
    level: "80%",
  },
  {
    name: "GitHub",
    icon: SiGithub,
    color: "#FFFFFF",
    level: "80%",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-blue-400 uppercase tracking-[4px]">
            Skills
          </p>

          <h2 className="text-5xl md:text-6xl font-bold text-white mt-3">
            My Tech Stack
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            Technologies and tools I use to design and build modern
            web applications.
          </p>
        </div>

        {/* Skills */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">

          {skills.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <motion.div
                key={skill.name}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: index * 0.06,
                  duration: 0.5,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                className="group relative bg-[#111827]/80 border border-white/10 hover:border-blue-500/50 rounded-2xl p-6 transition-all duration-300"
              >

                {/* Hover Glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl"
                  style={{
                    backgroundColor: skill.color,
                  }}
                />

                <div className="relative">

                  {/* Logo */}
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center bg-[#030712] border border-white/10">
                    <Icon
                      size={38}
                      color={skill.color}
                    />
                  </div>

                  {/* Name */}
                  <h3 className="text-white font-semibold text-lg mt-5">
                    {skill.name}
                  </h3>

                  {/* Level */}
                  <div className="flex justify-between mt-4 text-sm">
                    <span className="text-gray-500">
                      Skill Level
                    </span>

                    <span style={{ color: skill.color }}>
                      {skill.level}
                    </span>
                  </div>

                  {/* Progress */}
                  <div className="h-1.5 bg-gray-800 rounded-full mt-2 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{
                        width: skill.level,
                      }}
                      transition={{
                        duration: 1,
                        delay: index * 0.05,
                      }}
                      viewport={{ once: true }}
                      className="h-full rounded-full"
                      style={{
                        backgroundColor: skill.color,
                      }}
                    />
                  </div>

                </div>
              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
}