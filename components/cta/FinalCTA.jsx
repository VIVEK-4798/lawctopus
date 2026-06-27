"use client";

import { motion } from "framer-motion";
import { ArrowRight, HelpCircle } from "lucide-react";
import Container from "@/components/common/Container";
import Button from "@/components/common/Button";

const sectionVariants = {
  hidden: { opacity: 0, y: 35 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 90,
      damping: 14,
      duration: 0.6,
    },
  },
};

export default function FinalCTA() {
  return (
    <section className="bg-white py-16 sm:py-24" id="cta" aria-labelledby="cta-heading">
      <Container>
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-secondary via-gray-950 to-secondary px-6 py-12 sm:px-12 sm:py-20 text-center shadow-2xl border border-white/5"
        >
          {/* Soft Glow Abstract Shapes (Stripe/Linear aesthetics) */}
          <div className="absolute -top-32 -left-32 size-96 rounded-full bg-primary/10 blur-[120px] pointer-events-none" />
          <div className="absolute -bottom-32 -right-32 size-96 rounded-full bg-accent/20 blur-[125px] pointer-events-none" />

          <div className="relative z-10 mx-auto max-w-2xl">
            {/* Tagline */}
            <span className="inline-flex items-center rounded-full bg-white/10 px-3.5 py-1 text-xs font-bold text-primary tracking-wide uppercase mb-6">
              Start Learning Today
            </span>

            {/* Heading */}
            <h2
              id="cta-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight"
            >
              Ready to Build Your Contract Drafting Skills?
            </h2>

            {/* Paragraph */}
            <p className="mt-4 text-sm sm:text-base text-gray-300 font-medium leading-relaxed">
              Join thousands of law students, legal practitioners, and corporate advisors who are already building practical legal drafting expertise.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  variant="primary"
                  size="lg"
                  className="w-full sm:w-auto px-8 font-bold text-sm tracking-wide shadow-lg gap-2"
                >
                  Enroll Now
                  <ArrowRight size={16} className="text-secondary" />
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto px-8 font-bold text-sm border-white/20 text-black hover:bg-white/5 hover:border-white/40 gap-2"
                >
                  <HelpCircle size={16} className="text-primary" />
                  Talk to Advisors
                </Button>
              </motion.div>
            </div>

            {/* Quick Policy Footer */}
            <div className="mt-6 text-[10px] text-gray-400 font-medium flex items-center justify-center gap-4">
              <span>✓ Instant Course Access</span>
              <span>•</span>
              <span>✓ Lifetime Curriculum Updates</span>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
