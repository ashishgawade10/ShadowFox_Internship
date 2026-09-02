"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  HelpCircle,
  MessageCircleQuestion,
} from "lucide-react";
import Link from "next/link";

const faqs = [
  {
    question: "Can medication completely relieve tooth pain?",
    answer:
      "Not entirely. While medications may offer short-term relief, long-lasting relief requires identifying and treating the root cause of the pain through professional dental care.",
  },
  {
    question:
      "Does teeth scaling cause enamel damage, sensitivity, or gaps between teeth?",
    answer:
      "No. Scaling safely removes plaque and tartar from teeth and below the gum line. It doesn’t damage enamel or create gaps. Some temporary sensitivity may occur, but it usually subsides as gums heal and reattach to the teeth.",
  },
  {
    question: "Can fluorosis stains be removed through scaling?",
    answer:
      "Scaling can remove surface (extrinsic) stains but not fluorosis, which is an internal (intrinsic) stain. Fluorosis may require treatments like bleaching, veneers, or crowns for cosmetic improvement.",
  },
  {
    question: "Can painful teeth be treated with fillings?",
    answer:
      "Not always. If the cavity has reached the pulp, the innermost layer of the tooth, simple filling won’t help. In such cases, root canal treatment or tooth extraction might be necessary. Fillings are effective only when the damage is limited to the outer layers (enamel and dentin).",
  },
  {
    question: "Is placing a cap or crown necessary after root canal treatment (RCT)?",
    answer:
      "Yes. A crown is recommended after RCT to protect the treated tooth, which may be weaker due to decay. It prevents fractures and adds durability, especially during chewing.",
  },
  {
    question: "Can milk teeth need root canal treatment (RCT)?",
    answer:
      "Yes. If a milk tooth has a deep cavity and is likely to remain in the mouth for some time, an RCT can preserve it and prevent infection or early loss.",
  },
  {
    question: "How can I maintain good oral hygiene?",
    answer:
      "Brush your teeth twice daily with proper technique, rinse after meals, floss regularly, and schedule routine check-ups with your dentist to maintain healthy teeth and gums.",
  },
  {
    question: "What is the best age to get braces?",
    answer:
      "Braces are most effective between ages 12 and 14, when the jaw and teeth are still developing. However, some cases may benefit from earlier intervention depending on the condition.",
  },
  {
    question: "Do all wisdom teeth need to be removed?",
    answer:
      "No. Wisdom teeth only require removal if they are impacted, infected, or causing pain due to crowding or damage to adjacent teeth.",
  },
  {
    question: "Is it important to replace missing teeth after extraction?",
    answer:
      "Yes. Replacing extracted teeth helps maintain proper bite alignment and prevents adjacent teeth from shifting, which can affect chewing and overall oral function.",
  },
  {
    question: "What are the benefits of dental implants?",
    answer:
      "Dental implants restore both the appearance and functionality of missing teeth. They provide a stable, natural-looking solution that can improve confidence and overall quality of life.",
  },
  {
    question: "Which type of toothbrush and toothpaste should I use?",
    answer:
      "Use a soft or medium-bristled toothbrush with a small head for better reach. Choose a non-abrasive fluoride toothpaste and replace your toothbrush every three months for optimal hygiene.",
  },
  {
    question: "What causes tooth sensitivity?",
    answer:
      "Tooth sensitivity can result from enamel wear (due to attrition or abrasion), tooth decay, exposed tooth roots, or hairline cracks in the teeth.",
  },
  {
    question: "How often should I see a dentist?",
    answer:
      "Visiting your dentist every six months is recommended for routine check-ups, professional cleaning, and preventive care to maintain good oral health.",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="bg-white">

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-violet-50 via-white to-pink-50">
        <div className="absolute -left-20 top-10 h-64 w-64 rounded-full bg-violet-200/30 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-pink-200/30 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-3xl text-center"
          >
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-violet-100">
              <HelpCircle className="h-8 w-8 text-violet-600" />
            </div>

            <span className="mt-6 inline-flex rounded-full bg-violet-100 px-4 py-2 text-sm font-semibold text-violet-700">
              Frequently Asked Questions
            </span>

            <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Dental Questions,{" "}
              <span className="text-violet-600">Answered</span>
            </h1>

            <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
              Find answers to common questions about dental treatments,
              oral hygiene, braces, tooth sensitivity and more.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ content */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10 text-center"
          >
            <p className="text-sm font-semibold uppercase tracking-wider text-violet-600">
              Common Questions
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-900">
              Everything you need to know
            </h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <motion.div
                  key={faq.question}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.35,
                    delay: Math.min(index * 0.03, 0.3),
                  }}
                  className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                    isOpen
                      ? "border-violet-200 bg-violet-50/50 shadow-md shadow-violet-100/50"
                      : "border-slate-200 bg-white hover:border-violet-200"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-6 px-5 py-5 text-left sm:px-6"
                  >
                    <div className="flex items-start gap-4">
                      <span
                        className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold ${
                          isOpen
                            ? "bg-violet-600 text-white"
                            : "bg-violet-100 text-violet-600"
                        }`}
                      >
                        {index + 1}
                      </span>

                      <span className="text-base font-semibold leading-6 text-slate-900 sm:text-lg">
                        {faq.question}
                      </span>
                    </div>

                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                        isOpen
                          ? "rotate-180 bg-violet-600 text-white"
                          : "bg-slate-100 text-slate-600"
                      }`}
                    >
                      <ArrowDown className="h-4 w-4" />
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                      >
                        <div className="border-t border-violet-100 px-5 pb-6 pt-5 sm:px-6 sm:pl-[4.75rem]">
                          <p className="text-sm leading-7 text-slate-600 sm:text-base">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Still have questions */}
      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-5xl overflow-hidden rounded-[2rem] bg-gradient-to-r from-violet-600 to-pink-500 px-6 py-12 text-center sm:px-12 sm:py-14"
        >
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15">
            <MessageCircleQuestion className="h-7 w-7 text-white" />
          </div>

          <h2 className="mt-5 text-3xl font-bold text-white">
            Still have questions?
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-violet-100">
            If you need more information about your dental care, get in touch
            with the Sakthi Dental Clinic team.
          </p>

          <Link
            href="/contact"
            className="group mt-7 inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-bold text-violet-700 shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
          >
            Contact Us
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </section>

    </main>
  );
}