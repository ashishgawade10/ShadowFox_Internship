"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ShoppingCart,
  CloudSun,
  MessageCircle,
  ExternalLink,
  Code2,
  X,
  CheckCircle2,
} from "lucide-react";

const projects = [
  {
    title: "Annapurna POS",
    description:
      "A modern restaurant Point of Sale system for orders, billing, tables, menu items and business operations.",
    icon: ShoppingCart,
    iconColor: "text-orange-400",
    iconBg: "bg-orange-500/10",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    features: [
      "Restaurant dashboard",
      "Order management",
      "Billing system",
      "Table management",
      "Menu management",
      "Business analytics",
    ],
    live: "#",
    github: "#",
    status: "In Development",
  },
  {
    title: "Weather App",
    description:
      "A responsive weather application that displays current weather information using the OpenWeather API.",
    icon: CloudSun,
    iconColor: "text-cyan-400",
    iconBg: "bg-cyan-500/10",
    technologies: ["HTML", "CSS", "JavaScript", "API"],
    features: [
      "Current weather",
      "Temperature",
      "Weather conditions",
      "Humidity",
      "Wind information",
      "Responsive design",
    ],
    live: "https://ashishgawade10.github.io/Weather-App/",
    github: "https://github.com/ashishgawade10/Weather-App",
    status: "Completed",
  },
  {
    title: "Tourism Chatbot",
    description:
      "A tourism-focused chatbot designed to help users discover travel information, recommendations and destinations.",
    icon: MessageCircle,
    iconColor: "text-purple-400",
    iconBg: "bg-purple-500/10",
    technologies: ["Next.js", "React", "AI", "Tailwind CSS"],
    features: [
      "Tourism conversations",
      "Travel information",
      "Destination recommendations",
      "Chatbot interface",
      "Responsive design",
    ],
    live: "#",
    github: "#",
    status: "In Development",
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[number] | null
  >(null);

  return (
    <section id="projects" className="py-28 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <p className="text-blue-400 uppercase tracking-[4px]">
            My Work
          </p>

          <h2 className="text-5xl md:text-6xl font-bold text-white mt-3">
            Featured Projects
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mt-5">
            A selection of projects I have built while learning and
            developing my skills.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project, index) => {
            const Icon = project.icon;

            return (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                onClick={() => setSelectedProject(project)}
                className="group cursor-pointer rounded-3xl bg-[#111827] border border-white/10 overflow-hidden hover:border-blue-500/50 transition"
              >

                <div className="relative h-56 bg-gradient-to-br from-[#0f172a] to-[#111827] flex items-center justify-center">

                  <div className="absolute w-40 h-40 rounded-full bg-blue-500/10 blur-3xl" />

                  <div className="relative w-28 h-28 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center">

                    <Icon
                      size={58}
                      strokeWidth={1.5}
                      className={project.iconColor}
                    />

                  </div>

                  <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/60 text-xs text-white border border-white/10">
                    {project.status}
                  </span>

                </div>

                <div className="p-7">

                  <h3 className="text-2xl font-bold text-white">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 leading-7 mt-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-6">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/10 text-blue-400 text-xs"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3 mt-7">
                    <button
                      type="button"
                      onClick={(event) => {
                        event.stopPropagation();
                        setSelectedProject(project);
                      }}
                      className="flex-1 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium transition"
                    >
                      View Details
                    </button>

                    {project.live !== "#" ? (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(event) => event.stopPropagation()}
                        className="w-12 flex items-center justify-center rounded-xl border border-white/10 text-white hover:border-blue-500 transition"
                      >
                        <ExternalLink size={17} />
                      </a>
                    ) : null}

                    {project.github !== "#" ? (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(event) => event.stopPropagation()}
                        className="w-12 flex items-center justify-center rounded-xl border border-white/10 text-white hover:border-blue-500 transition"
                      >
                        <Code2 size={17} />
                      </a>
                    ) : null}
                  </div>

                </div>
              </motion.article>
            );
          })}

        </div>
      </div>

      {selectedProject && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md p-4 overflow-y-auto"
          onClick={() => setSelectedProject(null)}
        >

          <div
            className="max-w-4xl mx-auto my-10 bg-[#0b1120] border border-white/10 rounded-3xl overflow-hidden shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >

            <div className="relative p-8 md:p-12 bg-gradient-to-br from-[#0f172a] to-[#111827]">

              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-red-500 transition"
              >
                <X size={20} />
              </button>

              <div className="w-24 h-24 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center">

                <selectedProject.icon
                  size={50}
                  className={selectedProject.iconColor}
                />

              </div>

              <span className="inline-block mt-6 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm">
                {selectedProject.status}
              </span>

              <h2 className="text-4xl font-bold text-white mt-3">
                {selectedProject.title}
              </h2>

            </div>

            <div className="p-8 md:p-12">

              <h3 className="text-2xl font-bold text-white">
                About the Project
              </h3>

              <p className="text-gray-400 leading-8 mt-4">
                {selectedProject.description}
              </p>

              <h3 className="text-2xl font-bold text-white mt-10">
                Key Features
              </h3>

              <div className="grid md:grid-cols-2 gap-3 mt-5">

                {selectedProject.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/5"
                  >
                    <CheckCircle2
                      size={18}
                      className="text-blue-400"
                    />

                    <span className="text-gray-300">
                      {feature}
                    </span>
                  </div>
                ))}

              </div>

              <h3 className="text-2xl font-bold text-white mt-10">
                Technologies
              </h3>

              <div className="flex flex-wrap gap-2 mt-5">

                {selectedProject.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400"
                  >
                    {technology}
                  </span>
                ))}

              </div>

              <div className="flex flex-wrap gap-4 mt-10">

                {selectedProject.live !== "#" ? (
                  <a
                    href={selectedProject.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold"
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </a>
                ) : (
                  <span className="px-6 py-3 rounded-xl bg-gray-800 text-gray-500">
                    Live Demo Coming Soon
                  </span>
                )}

                {selectedProject.github !== "#" ? (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 rounded-xl border border-white/10 text-white hover:border-blue-500"
                  >
                    <Code2 size={18} />
                    GitHub
                  </a>
                ) : (
                  <span className="px-6 py-3 rounded-xl border border-white/10 text-gray-500">
                    GitHub Coming Soon
                  </span>
                )}

              </div>

            </div>

          </div>
        </div>
      )}
    </section>
  );
}
