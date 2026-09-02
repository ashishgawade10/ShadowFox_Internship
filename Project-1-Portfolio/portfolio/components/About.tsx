"use client";

import { motion } from "framer-motion";
import {
  User,
  GraduationCap,
  Code2,
} from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 sm:py-28 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          viewport={{
            once: true,
          }}
          className="text-center mb-14"
        >

          <p className="text-blue-400 uppercase tracking-[4px]">
            About Me
          </p>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mt-3">
            Who I Am
          </h2>

        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">

          {/* ABOUT */}

          <motion.div
            initial={{
              opacity: 0,
              x: -30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            viewport={{
              once: true,
            }}
            className="rounded-3xl border border-white/10 bg-[#111827]/80 p-7 sm:p-10"
          >

            <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">

              <User
                size={25}
                className="text-blue-400"
              />

            </div>

            <h3 className="text-2xl font-bold text-white mt-6">
              A Developer in Progress
            </h3>

            <p className="text-gray-400 leading-8 mt-5">
              I&apos;m a Computer Science student interested in
              software development, web technologies and
              artificial intelligence.
            </p>

            <p className="text-gray-400 leading-8 mt-4">
              I enjoy turning ideas into working projects and
              improving my skills by building real applications.
            </p>

          </motion.div>

          {/* EDUCATION */}

          <motion.div
            initial={{
              opacity: 0,
              x: 30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            viewport={{
              once: true,
            }}
            className="rounded-3xl border border-white/10 bg-[#111827]/80 p-7 sm:p-10"
          >

            <div className="w-14 h-14 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">

              <GraduationCap
                size={25}
                className="text-purple-400"
              />

            </div>

            <h3 className="text-2xl font-bold text-white mt-6">
              Education & Learning
            </h3>

            <p className="text-gray-400 leading-8 mt-5">
              Currently pursuing Computer Science and
              continuously developing practical skills through
              projects, internships and hands-on learning.
            </p>

            <div className="flex items-center gap-3 mt-6">

              <Code2
                size={20}
                className="text-blue-400"
              />

              <span className="text-gray-300">
                Always learning. Always building.
              </span>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}