"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function FAQItem({ id, question, answer, isOpen, onToggle }) {
  return (
    <div className="border border-border/80 rounded-xl overflow-hidden bg-muted/30 hover:bg-muted/60 hover:border-primary/20 smooth-transition mb-4">
      <h3>
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-controls={`faq-answer-${id}`}
          id={`faq-title-${id}`}
          className="flex w-full items-center justify-between gap-4 p-5 text-left font-bold text-secondary text-sm sm:text-base smooth-transition focus-visible:outline-none focus-visible:bg-muted focus-visible:ring-2 focus-visible:ring-primary cursor-pointer"
        >
          <span>{question}</span>
          <ChevronDown
            size={18}
            className={`text-gray-text shrink-0 transition-transform duration-300 ${
              isOpen ? "rotate-180 text-primary" : ""
            }`}
            aria-hidden="true"
          />
        </button>
      </h3>

      <motion.div
        id={`faq-answer-${id}`}
        aria-labelledby={`faq-title-${id}`}
        initial={false}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{
          duration: 0.3,
          ease: [0.04, 0.62, 0.23, 0.98],
        }}
        className="overflow-hidden"
      >
        <div className="p-5 pt-0 text-xs sm:text-sm text-gray-text leading-relaxed border-t border-border/20 bg-white/40">
          {answer}
        </div>
      </motion.div>
    </div>
  );
}
