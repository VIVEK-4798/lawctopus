"use client";

import { motion } from "framer-motion";
import {
  Award,
  ClipboardCheck,
  FileCheck2,
  FileSignature,
  Handshake,
  LibraryBig,
  SearchCheck,
  WalletCards,
} from "lucide-react";
import Card from "@/components/common/Card";
import Container from "@/components/common/Container";
import SectionTitle from "@/components/common/SectionTitle";

const outcomes = [
  {
    title: "Draft Contracts",
    description: "Structure agreements with clearer clauses and stronger logic.",
    icon: FileSignature,
  },
  {
    title: "Review Agreements",
    description: "Evaluate drafts with a sharper eye for obligations and gaps.",
    icon: FileCheck2,
  },
  {
    title: "Freelancing Skills",
    description: "Understand how practical drafting skills can support independent work.",
    icon: WalletCards,
  },
  {
    title: "Negotiate Better",
    description: "Communicate positions and revisions with more confidence.",
    icon: Handshake,
  },
  {
    title: "Identify Risks",
    description: "Spot legal and commercial issues before they become problems.",
    icon: SearchCheck,
  },
  {
    title: "Complete Assignments",
    description: "Apply what you learn through focused practical exercises.",
    icon: ClipboardCheck,
  },
  {
    title: "Use Templates",
    description: "Work with reusable formats that make future drafting faster.",
    icon: LibraryBig,
  },
  {
    title: "Earn a Certificate",
    description: "Show completion of a structured, skills-focused legal program.",
    icon: Award,
  },
];

const listVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function LearningOutcomes() {
  return (
    <section className="bg-muted section-padding" aria-labelledby="learning-outcomes-heading">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <SectionTitle
            center
            eyebrow="Learning Outcomes"
            title="Walk away with skills that translate into real legal work."
            description="By the end of the course, learners should be better prepared to draft, review, communicate, and execute practical legal tasks."
          />
        </motion.div>

        <motion.div
          variants={listVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.14 }}
          className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {outcomes.map((outcome) => {
            const Icon = outcome.icon;

            return (
              <motion.div key={outcome.title} variants={itemVariants} transition={{ duration: 0.42 }}>
                <Card className="h-full p-5 hover:scale-[1.02]">
                  <div className="mb-5 flex size-11 items-center justify-center rounded-xl bg-primary/15 text-secondary">
                    <Icon size={21} aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-bold text-secondary">{outcome.title}</h3>
                  <p className="mt-2 text-small text-gray-text">{outcome.description}</p>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
