"use client";

import { motion } from "framer-motion";
import { Check, ShieldCheck, Zap, Award, RefreshCw, FileText } from "lucide-react";
import Container from "@/components/common/Container";
import SectionTitle from "@/components/common/SectionTitle";
import Card from "@/components/common/Card";
import Button from "@/components/common/Button";
import Badge from "@/components/common/Badge";

const inclusions = [
  "Lifetime Course Access",
  "Verified Certificate Included",
  "8 Practical Assignments with Redline Feedback",
  "Downloadable Contract Templates",
  "Guidance from Expert Faculty Partners",
  "Interactive Live Q&A Sessions",
  "Downloadable Guides & Reference Material",
  "Full Mobile App Access",
  "Full Desktop Dashboard Access",
];

const trustIndicators = [
  {
    id: 1,
    icon: ShieldCheck,
    title: "Secure Payment",
    description: "SSL encrypted checkout",
  },
  {
    id: 2,
    icon: Zap,
    title: "Instant Access",
    description: "Start learning immediately",
  },
  {
    id: 3,
    icon: Award,
    title: "Verified Certificate",
    description: "Add to CV & LinkedIn",
  },
  {
    id: 4,
    icon: RefreshCw,
    title: "Lifetime Updates",
    description: "All future editions free",
  },
];

const cardVariants = {
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

export default function Pricing() {
  return (
    <section className="bg-white py-16 sm:py-24" id="pricing" aria-labelledby="pricing-heading">
      <Container>
        {/* Section Header */}
        <SectionTitle
          center
          eyebrow="Investment"
          title="Premium Training, Unmatched Value"
          description="Invest in practical skills that pay dividends throughout your legal career. Secure lifetime access today with our promotional launch pricing."
          className="mb-12 sm:mb-16"
        />

        {/* Pricing Card Wrapper */}
        <div className="mx-auto max-w-2xl">
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
          >
            <Card className="relative p-6 sm:p-10 border-border bg-white shadow-xl rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300">
              
              {/* Top Banner / Badge */}
              <div className="absolute top-5 right-5">
                <Badge variant="primary" className="text-[10px] font-extrabold uppercase tracking-wider py-1 px-3.5 shadow-sm">
                  Best Value
                </Badge>
              </div>

              {/* Course Title and Description */}
              <div className="mt-2">
                <span className="text-xs font-bold uppercase tracking-wider text-accent">Masterclass</span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-secondary mt-1">
                  Practical Contract Drafting & Negotiation
                </h3>
                <p className="text-xs text-gray-text mt-2">
                  Complete training designed to transition you from legal theory to real-world drafting excellence.
                </p>
              </div>

              {/* Price Block */}
              <div className="mt-6 flex flex-wrap items-baseline gap-3 py-6 border-y border-border/50">
                <span className="text-4xl sm:text-5xl font-black text-secondary tracking-tight">
                  ₹4,999
                </span>
                <span className="text-lg sm:text-xl text-gray-400 line-through">
                  ₹14,999
                </span>
                <Badge variant="outline" className="text-emerald-700 bg-emerald-50 border-emerald-200/60 font-bold text-xs py-0.5 px-2">
                  66% OFF
                </Badge>
                <div className="w-full text-[10px] font-medium text-gray-text mt-1.5">
                  One-time payment. Includes lifetime updates and GST.
                </div>
              </div>

              {/* Course Inclusions Checklist */}
              <div className="mt-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-secondary mb-4">
                  What's Included in Your Enrollment:
                </h4>
                <ul className="grid gap-3 sm:grid-cols-1 text-sm text-gray-text" role="list">
                  {inclusions.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary mt-0.5">
                        <Check size={13} className="stroke-[3px]" aria-hidden="true" />
                      </span>
                      <span className="text-xs sm:text-sm font-semibold text-secondary/90 leading-normal">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Call to Action Buttons */}
              <div className="mt-8 flex flex-col gap-3">
                <motion.div whileHover={{ scale: 1.015 }} whileTap={{ scale: 0.985 }}>
                  <Button 
                    variant="primary" 
                    size="lg" 
                    className="w-full flex justify-center py-4 font-bold text-sm tracking-wide shadow-md hover:shadow-lg"
                  >
                    Enroll Now
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.015 }} whileTap={{ scale: 0.985 }}>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="w-full flex justify-center py-4 font-bold text-sm border-border hover:border-secondary text-secondary"
                  >
                    <FileText size={15} className="mr-2" />
                    Download Brochure
                  </Button>
                </motion.div>
              </div>
            </Card>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4"
          >
            {trustIndicators.map((indicator) => {
              const Icon = indicator.icon;
              return (
                <div key={indicator.id} className="flex flex-col items-center text-center p-3">
                  <div className="flex size-9 items-center justify-center rounded-full bg-muted text-gray-600 mb-2 border border-border/50">
                    <Icon size={16} aria-hidden="true" />
                  </div>
                  <h5 className="text-[11px] font-bold text-secondary leading-tight">
                    {indicator.title}
                  </h5>
                  <p className="text-[9px] text-gray-text mt-0.5 leading-normal">
                    {indicator.description}
                  </p>
                </div>
              );
            })}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
