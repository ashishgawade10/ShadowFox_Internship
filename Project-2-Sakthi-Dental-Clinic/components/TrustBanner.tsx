"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  HeartHandshake,
  Sparkles,
  Users,
} from "lucide-react";

const trustPoints = [
  {
    icon: ShieldCheck,
    title: "Safe & Hygienic",
    description: "Clean and comfortable dental environment",
  },
  {
    icon: HeartHandshake,
    title: "Patient First",
    description: "Compassionate care for every patient",
  },
  {
    icon: Sparkles,
    title: "Modern Technology",
    description: "Advanced equipment and treatment methods",
  },
  {
    icon: Users,
    title: "Family Friendly",
    description: "Dental care for women, children & families",
  },
];

export default function TrustBanner() {
  return (
    <section className="relative border-y border-violet-100 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {trustPoints.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.08,
                }}
                className={[
                  "flex items-center gap-4 px-2 py-5 sm:px-5 lg:px-6",
                  index !== 0
                    ? "border-t border-slate-100 sm:border-t-0 sm:border-l"
                    : "",
                  index === 2
                    ? "lg:border-l"
                    : "",
                ].join(" ")}
              >
                {/* Icon */}
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-violet-50 transition-transform duration-300 hover:scale-105">
                  <Icon className="h-6 w-6 text-violet-600" />
                </div>

                {/* Text */}
                <div className="min-w-0">
                  <h3 className="text-sm font-bold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}