"use client";

import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, ChevronDown, Clock3 } from "lucide-react";
import { cn } from "@/utils/cn";

export default function CurriculumItem({ module, isOpen, onToggle, isLast = false }) {
  const panelId = `curriculum-panel-${module.id}`;
  const buttonId = `curriculum-button-${module.id}`;

  return (
    <div className="relative pl-11">
      <div className="absolute left-0 top-5 flex size-9 items-center justify-center rounded-full border border-primary/40 bg-white text-sm font-extrabold text-secondary shadow-sm">
        {module.id}
      </div>
      {!isLast ? <div className="absolute bottom-[-1rem] left-4 top-14 w-px bg-border" /> : null}

      <motion.article
        whileHover={{ scale: 1.01 }}
        transition={{ duration: 0.2 }}
        className={cn(
          "overflow-hidden rounded-2xl border shadow-sm smooth-transition",
          isOpen ? "border-primary/50 bg-primary/5 shadow-md" : "border-border bg-white hover:border-primary/35",
        )}
      >
        <button
          id={buttonId}
          type="button"
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={onToggle}
          className="flex w-full items-center gap-4 p-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 sm:p-6"
        >
          <div className="min-w-0 flex-1">
            <div className="mb-2 flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-[0.08em] text-primary">
                Module {String(module.id).padStart(2, "0")}
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-muted px-2.5 py-1 text-xs font-semibold text-gray-text">
                <Clock3 size={13} aria-hidden="true" />
                {module.duration}
              </span>
            </div>
            <h3 className="text-lg font-extrabold text-secondary sm:text-xl">{module.title}</h3>
          </div>

          <motion.span
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.25 }}
            className="flex size-10 shrink-0 items-center justify-center rounded-full border border-border bg-white text-secondary"
            aria-hidden="true"
          >
            <ChevronDown size={20} />
          </motion.span>
        </button>

        <AnimatePresence initial={false}>
          {isOpen ? (
            <motion.div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
            >
              <div className="border-t border-primary/20 px-5 pb-5 pt-5 sm:px-6 sm:pb-6">
                <p className="text-body text-gray-text">{module.description}</p>

                <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                  {module.topics.map((topic) => (
                    <li key={topic} className="flex gap-2 text-sm font-semibold text-secondary">
                      <CheckCircle2 className="mt-0.5 shrink-0 text-primary" size={17} aria-hidden="true" />
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </motion.article>
    </div>
  );
}
