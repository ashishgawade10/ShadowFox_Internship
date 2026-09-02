"use client";

import { motion } from "framer-motion";
import {
  ArrowUp,
  Mail,
  Code2,
  ExternalLink,
} from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="border-t border-white/10 bg-[#050914]">

      <div className="max-w-7xl mx-auto px-6 py-14">

        {/* =========================
            TOP FOOTER
        ========================== */}

        <div className="grid md:grid-cols-3 gap-10">

          {/* BRAND */}

          <div>
            <h3 className="text-2xl font-bold text-white">
              Ashish<span className="text-blue-500">.</span>
            </h3>

            <p className="text-gray-400 leading-7 mt-4 max-w-sm">
              Computer Science student and aspiring software
              developer passionate about building modern,
              useful and creative digital experiences.
            </p>
          </div>

          {/* QUICK LINKS */}

          <div>
            <h4 className="text-white font-semibold">
              Quick Links
            </h4>

            <div className="flex flex-col gap-3 mt-5">

              <a
                href="#home"
                className="text-gray-400 hover:text-blue-400 transition"
              >
                Home
              </a>

              <a
                href="#about"
                className="text-gray-400 hover:text-blue-400 transition"
              >
                About
              </a>

              <a
                href="#skills"
                className="text-gray-400 hover:text-blue-400 transition"
              >
                Skills
              </a>

              <a
                href="#projects"
                className="text-gray-400 hover:text-blue-400 transition"
              >
                Projects
              </a>

              <a
                href="#contact"
                className="text-gray-400 hover:text-blue-400 transition"
              >
                Contact
              </a>

            </div>
          </div>

          {/* CONNECT */}

          <div>
            <h4 className="text-white font-semibold">
              Connect With Me
            </h4>

            <p className="text-gray-400 mt-4">
              Follow my work and explore my projects.
            </p>

            <div className="flex gap-3 mt-6">

              {/* GitHub */}

              <a
                href="https://github.com/ashishgawade10"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-11 h-11 rounded-xl border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-blue-500 hover:bg-blue-500/10 transition"
              >
                <Code2 size={19} />
              </a>

              {/* LinkedIn */}

              <a
                href="#"
                aria-label="LinkedIn"
                className="w-11 h-11 rounded-xl border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-blue-500 hover:bg-blue-500/10 transition"
              >
                <ExternalLink size={19} />
              </a>

              {/* Email */}

              <a
                href="mailto:your-email@example.com"
                aria-label="Email"
                className="w-11 h-11 rounded-xl border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-blue-500 hover:bg-blue-500/10 transition"
              >
                <Mail size={19} />
              </a>

            </div>
          </div>

        </div>

        {/* =========================
            DIVIDER
        ========================== */}

        <div className="border-t border-white/10 mt-12 pt-7">

          <div className="flex flex-col md:flex-row items-center justify-between gap-5">

            {/* COPYRIGHT */}

            <p className="text-gray-500 text-sm text-center">
              © {new Date().getFullYear()} Ashish Gawade.
              All rights reserved.
            </p>

            {/* BUILT WITH */}

            <p className="text-gray-500 text-sm text-center">
              Built with{" "}
              <span className="text-blue-400">
                Next.js
              </span>{" "}
              &{" "}
              <span className="text-blue-400">
                Tailwind CSS
              </span>
            </p>

            {/* BACK TO TOP */}

            <motion.button
              type="button"
              onClick={scrollToTop}
              whileHover={{
                y: -4,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="w-11 h-11 rounded-xl bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center transition"
              aria-label="Back to top"
            >
              <ArrowUp size={19} />
            </motion.button>

          </div>

        </div>

      </div>

    </footer>
  );
}