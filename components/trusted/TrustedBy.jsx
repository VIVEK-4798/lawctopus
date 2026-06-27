"use client";

import { motion } from "framer-motion";
import { Award, ClipboardCheck, GraduationCap, Users } from "lucide-react";
import Card from "@/components/common/Card";
import Container from "@/components/common/Container";

const trustItems = [
  {
    title: "Students Enrolled",
    description: "A growing learner community preparing for practical legal work.",
    icon: Users,
  },
  {
    title: "Expert Faculty",
    description: "Guidance shaped by experienced legal educators and practitioners.",
    icon: GraduationCap,
  },
  {
    title: "Practical Assignments",
    description: "Hands-on exercises designed around real drafting and review tasks.",
    icon: ClipboardCheck,
  },
  {
    title: "Certificate of Completion",
    description: "Earn a credential that signals structured, career-ready learning.",
    icon: Award,
  },
];

const listVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0 },
};

export default function TrustedBy() {
  return (
    <section className="bg-white py-10 sm:py-14" aria-labelledby="trusted-heading">
      <Container>
        <div className="mb-7 flex flex-col gap-2 text-center">
          <p className="text-eyebrow text-primary">Trusted Learning Format</p>
          <h2 id="trusted-heading" className="text-heading-3 text-secondary">
            Built for learners who want proof, practice, and progress.
          </h2>
        </div>

        <motion.div
          variants={listVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {trustItems.map((item) => {
            const Icon = item.icon;

            return (
              <motion.div key={item.title} variants={itemVariants} transition={{ duration: 0.45 }}>
                <Card className="h-full p-5 hover:scale-[1.02]">
                  <div className="mb-4 flex size-11 items-center justify-center rounded-xl bg-primary/15 text-secondary">
                    <Icon size={21} aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-bold text-secondary">{item.title}</h3>
                  <p className="mt-2 text-small text-gray-text">{item.description}</p>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
