"use client";

import { motion } from "framer-motion";
import { BriefcaseBusiness, CheckCircle2, FileText, TrendingUp } from "lucide-react";
import Card from "@/components/common/Card";
import Container from "@/components/common/Container";
import SectionTitle from "@/components/common/SectionTitle";

const highlights = [
  "Structured lessons that connect legal concepts with workplace execution.",
  "Practice-first modules for drafting, reviewing, and communicating clearly.",
  "Career-focused guidance for internships, freelancing, and early legal roles.",
];

const impactCards = [
  {
    title: "Course Overview",
    description: "A guided legal skills program focused on practical drafting and applied understanding.",
    icon: FileText,
  },
  {
    title: "Key Highlights",
    description: "Clear modules, assignment-led learning, and templates learners can revisit.",
    icon: CheckCircle2,
  },
  {
    title: "Career Impact",
    description: "Build confidence for internships, client work, and professional legal communication.",
    icon: TrendingUp,
  },
];

export default function AboutCourse() {
  return (
    <section id="about" className="bg-muted section-padding" aria-labelledby="about-course-heading">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[1.02fr_0.98fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <SectionTitle
              eyebrow="About The Course"
              title="Learn the practical side of law that classrooms often rush past."
              description="This course helps learners move from theory to confident execution. You will understand how legal documents are built, how risks are spotted, and how professional legal work is communicated."
              className="[&_h2]:scroll-mt-24"
            />

            <div className="mt-8 space-y-4">
              {highlights.map((highlight) => (
                <div key={highlight} className="flex gap-3">
                  <CheckCircle2 className="mt-1 shrink-0 text-primary" size={20} aria-hidden="true" />
                  <p className="text-body text-gray-text">{highlight}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, delay: 0.08 }}
          >
            <Card className="relative overflow-hidden p-6 sm:p-8">
              <div className="absolute right-[-5rem] top-[-5rem] size-48 rounded-full bg-primary/15 blur-3xl" />
              <div className="relative">
                <div className="mb-6 flex size-12 items-center justify-center rounded-2xl bg-secondary text-white">
                  <BriefcaseBusiness size={24} aria-hidden="true" />
                </div>
                <h3 className="text-heading-3 text-secondary">Designed for legal work that happens after the lecture ends.</h3>
                <p className="mt-4 text-body text-gray-text">
                  The focus is not memorization. It is learning how to analyze, draft, review, and present work with the polish expected in a legal environment.
                </p>

                <div className="mt-7 grid gap-3">
                  {impactCards.map((card) => {
                    const Icon = card.icon;

                    return (
                      <div key={card.title} className="rounded-xl border border-border bg-white p-4">
                        <div className="flex gap-3">
                          <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/15 text-secondary">
                            <Icon size={19} aria-hidden="true" />
                          </div>
                          <div>
                            <h4 className="font-bold text-secondary">{card.title}</h4>
                            <p className="mt-1 text-small text-gray-text">{card.description}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
