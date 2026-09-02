"use client";

import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Send,
  Code2,
  ExternalLink,
} from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-28 px-6 bg-[#070b14]"
    >
      <div className="max-w-7xl mx-auto">

        {/* =========================
            HEADING
        ========================== */}

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
          className="text-center mb-16"
        >
          <p className="text-blue-400 uppercase tracking-[4px]">
            Get In Touch
          </p>

          <h2 className="text-5xl md:text-6xl font-bold text-white mt-3">
            Let&apos;s Work Together
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mt-5 leading-7">
            Have a project idea, internship opportunity, or
            simply want to connect? Feel free to reach out.
          </p>
        </motion.div>

        {/* =========================
            CONTACT CONTENT
        ========================== */}

        <div className="grid lg:grid-cols-2 gap-10">

          {/* =========================
              LEFT SIDE
          ========================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: -40,
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
            className="rounded-3xl border border-white/10 bg-[#111827]/80 p-8 md:p-10"
          >

            <h3 className="text-3xl font-bold text-white">
              Let&apos;s Connect
            </h3>

            <p className="text-gray-400 leading-7 mt-5">
              I&apos;m always open to discussing new projects,
              creative ideas, learning opportunities and
              collaborations.
            </p>

            {/* EMAIL */}

            <div className="flex items-center gap-4 mt-10">

              <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                <Mail
                  size={20}
                  className="text-blue-400"
                />
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  Email
                </p>

                <a
                  href="mailto:ashishgawade2025@gmail.com"
                  className="text-gray-200 hover:text-blue-400 transition"
                >
                  ashishgawade2025@gmail.com
                </a>
              </div>

            </div>

            {/* LOCATION */}

            <div className="flex items-center gap-4 mt-7">

              <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
                <MapPin
                  size={20}
                  className="text-purple-400"
                />
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  Location
                </p>

                <p className="text-gray-200">
                  Goa, India
                </p>
              </div>

            </div>

            {/* =========================
                SOCIAL LINKS
            ========================== */}

            <div className="mt-10">

              <p className="text-sm text-gray-500 mb-4">
                Connect with me
              </p>

              <div className="flex gap-3">

                {/* GitHub */}

                <a
                  href="https://github.com/ashishgawade10"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="w-12 h-12 rounded-xl border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-blue-500 hover:bg-blue-500/10 transition"
                >
                  <Code2 size={20} />
                </a>

                {/* LinkedIn */}

                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="w-12 h-12 rounded-xl border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-blue-500 hover:bg-blue-500/10 transition"
                >
                  <ExternalLink size={20} />
                </a>

              </div>

            </div>

          </motion.div>

          {/* =========================
              RIGHT SIDE - FORM
          ========================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: 40,
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
            className="rounded-3xl border border-white/10 bg-[#111827]/80 p-8 md:p-10"
          >

            <h3 className="text-3xl font-bold text-white">
              Send a Message
            </h3>

            <form
              className="mt-8 space-y-5"
              onSubmit={(event) => {
                event.preventDefault();
              }}
            >

              {/* NAME */}

              <div>
                <label
                  htmlFor="name"
                  className="text-sm text-gray-400"
                >
                  Your Name
                </label>

                <input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  className="w-full mt-2 px-4 py-3.5 rounded-xl bg-black/20 border border-white/10 text-white placeholder-gray-600 outline-none focus:border-blue-500 transition"
                />
              </div>

              {/* EMAIL */}

              <div>
                <label
                  htmlFor="email"
                  className="text-sm text-gray-400"
                >
                  Your Email
                </label>

                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="w-full mt-2 px-4 py-3.5 rounded-xl bg-black/20 border border-white/10 text-white placeholder-gray-600 outline-none focus:border-blue-500 transition"
                />
              </div>

              {/* SUBJECT */}

              <div>
                <label
                  htmlFor="subject"
                  className="text-sm text-gray-400"
                >
                  Subject
                </label>

                <input
                  id="subject"
                  type="text"
                  placeholder="What is this about?"
                  className="w-full mt-2 px-4 py-3.5 rounded-xl bg-black/20 border border-white/10 text-white placeholder-gray-600 outline-none focus:border-blue-500 transition"
                />
              </div>

              {/* MESSAGE */}

              <div>
                <label
                  htmlFor="message"
                  className="text-sm text-gray-400"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  rows={5}
                  placeholder="Write your message..."
                  className="w-full mt-2 px-4 py-3.5 rounded-xl bg-black/20 border border-white/10 text-white placeholder-gray-600 outline-none focus:border-blue-500 transition resize-none"
                />
              </div>

              {/* SEND BUTTON */}

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold transition"
              >
                <Send size={18} />
                Send Message
              </button>

            </form>

          </motion.div>

        </div>

      </div>
    </section>
  );
}