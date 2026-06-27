"use client";

import { motion } from "framer-motion";
import {
  BadgeCheck,
  Briefcase,
  Building2,
  FileSignature,
  Scale,
  UserRoundCheck,
} from "lucide-react";
import Card from "@/components/common/Card";
import Container from "@/components/common/Container";
import SectionTitle from "@/components/common/SectionTitle";

const learners = [
  {
    title: "Law Students",
    description: "Build practical confidence before internships and interviews.",
    icon: Scale,
  },
  {
    title: "Young Lawyers",
    description: "Sharpen drafting and review habits early in your practice.",
    icon: BadgeCheck,
  },
  {
    title: "Freelancers",
    description: "Learn skills that support independent legal projects.",
    icon: Briefcase,
  },
  {
    title: "Legal Professionals",
    description: "Refresh applied skills for clearer, more reliable work.",
    icon: UserRoundCheck,
  },
  {
    title: "In-house Counsel",
    description: "Strengthen commercial review and risk communication.",
    icon: Building2,
  },
  {
    title: "Contract Drafting Beginners",
    description: "Start with a structured path into agreements and clauses.",
    icon: FileSignature,
  },
];

const listVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.07,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function WhoShouldEnroll() {
  return (
    <section className="bg-white section-padding" aria-labelledby="who-should-enroll-heading">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <SectionTitle
            center
            eyebrow="Who Should Enroll"
            title="Made for learners who want legal skills they can actually use."
            description="Whether you are entering the profession or refining your current role, the course is structured around clear use cases and practical outcomes."
          />
        </motion.div>

        <motion.div
          variants={listVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.18 }}
          className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {learners.map((learner) => {
            const Icon = learner.icon;

            return (
              <motion.div key={learner.title} variants={itemVariants} transition={{ duration: 0.42 }}>
                <Card className="h-full p-5 hover:scale-[1.02]">
                  <div className="mb-5 flex size-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <Icon size={21} aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-bold text-secondary">{learner.title}</h3>
                  <p className="mt-2 text-small text-gray-text">{learner.description}</p>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
