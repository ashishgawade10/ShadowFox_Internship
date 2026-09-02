"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const tech = [
  { name: "Next.js", top: "10%", left: "10%" },
  { name: "React", top: "25%", right: "5%" },
  { name: "TypeScript", bottom: "20%", left: "5%" },
  { name: "Tailwind", bottom: "8%", right: "10%" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-16 items-center">

        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400">
            👋 Welcome to my portfolio
          </span>

          <h1 className="text-5xl md:text-7xl font-black text-white mt-8 leading-tight">
            Hi, I'm
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Ashish Gawade
            </span>
          </h1>

          <h2 className="text-2xl md:text-3xl text-gray-300 mt-6">
            Full Stack Developer
          </h2>

          <p className="text-gray-400 mt-7 max-w-xl text-lg leading-8">
            I create modern, responsive and user-friendly web applications
            using React, Next.js, TypeScript and modern web technologies.
          </p>

          <div className="flex flex-wrap gap-5 mt-10">
            <a
              href="#projects"
              className="px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 transition font-semibold text-white"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="px-8 py-4 rounded-xl border border-blue-500 text-white hover:bg-blue-600 transition font-semibold"
            >
              Contact Me
            </a>
          </div>

          <div className="grid grid-cols-3 gap-6 mt-14 max-w-lg">
            <div>
              <h3 className="text-3xl font-bold text-blue-400">10+</h3>
              <p className="text-gray-500 mt-1">Projects</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-blue-400">15+</h3>
              <p className="text-gray-500 mt-1">Technologies</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-blue-400">100%</h3>
              <p className="text-gray-500 mt-1">Dedication</p>
            </div>
          </div>
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center items-center min-h-[500px]"
        >
          {/* Glow */}
          <div className="absolute w-[350px] h-[350px] rounded-full bg-blue-500/20 blur-[100px]" />

          {/* Ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute w-[420px] h-[420px] rounded-full border border-dashed border-blue-500/40"
          />

          {/* Image */}
          <div className="relative w-[320px] h-[320px] rounded-full overflow-hidden border-4 border-blue-500 shadow-[0_0_70px_rgba(37,99,235,0.5)]">
            <Image
              src="/profile.png"
              alt="Ashish Gawade"
              fill
              priority
              className="object-cover"
            />
          </div>

          {/* Tech badges */}
          {tech.map((item, index) => (
            <motion.div
              key={item.name}
              animate={{ y: [-8, 8, -8] }}
              transition={{
                duration: 3 + index,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute px-4 py-2 rounded-xl bg-[#111827] border border-blue-500/30 text-white text-sm shadow-lg"
              style={item}
            >
              {item.name}
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}