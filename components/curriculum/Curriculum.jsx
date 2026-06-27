"use client";

import { motion } from "framer-motion";
import {
  Award,
  BookOpenCheck,
  CalendarDays,
  ClipboardCheck,
  Download,
  GraduationCap,
  LibraryBig,
  MessagesSquare,
} from "lucide-react";
import Badge from "@/components/common/Badge";
import Card from "@/components/common/Card";
import Container from "@/components/common/Container";
import SectionTitle from "@/components/common/SectionTitle";
import CurriculumAccordion from "@/components/curriculum/CurriculumAccordion";
import { curriculum } from "@/data/curriculum";

const summaryItems = [
  {
    label: "Course Duration",
    value: "8 Weeks",
    icon: CalendarDays,
  },
  {
    label: "Modules",
    value: `${curriculum.length} Modules`,
    icon: BookOpenCheck,
  },
  {
    label: "Assignments",
    value: "Practical Tasks",
    icon: ClipboardCheck,
  },
  {
    label: "Certificate",
    value: "Included",
    icon: Award,
  },
  {
    label: "Lifetime Access",
    value: "Yes",
    icon: LibraryBig,
  },
  {
    label: "Resources",
    value: "Downloadable",
    icon: Download,
  },
  {
    label: "Expert Faculty",
    value: "Guided",
    icon: GraduationCap,
  },
  {
    label: "Doubt Sessions",
    value: "Live Support",
    icon: MessagesSquare,
  },
];

export default function Curriculum() {
  return (
    <section id="curriculum" className="bg-white section-padding" aria-labelledby="curriculum-heading">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5 }}
            className="lg:sticky lg:top-28"
          >
            <Badge variant="primary">Curriculum</Badge>
            <SectionTitle
              eyebrow="What You Will Learn"
              title="A structured journey from contract basics to practical drafting confidence."
              description="The curriculum is designed like a professional learning path: understand the foundation, practice core clauses, review real agreement types, and finish with a capstone drafting task."
              className="mt-5"
            />

            <Card className="mt-8 overflow-hidden p-0">
              <div className="border-b border-border bg-muted p-5 sm:p-6">
                <h3 className="text-xl font-extrabold text-secondary">Course Summary</h3>
                <p className="mt-2 text-small text-gray-text">
                  Everything learners need to move through the course with clarity and momentum.
                </p>
              </div>
              <div className="grid gap-px bg-border sm:grid-cols-2">
                {summaryItems.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div key={item.label} className="bg-white p-4">
                      <div className="flex items-start gap-3">
                        <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-secondary">
                          <Icon size={19} aria-hidden="true" />
                        </div>
                        <div>
                          <p className="text-xs font-bold uppercase tracking-[0.08em] text-gray-text">
                            {item.label}
                          </p>
                          <p className="mt-1 text-sm font-extrabold text-secondary">{item.value}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Card>
          </motion.div>

          <div aria-label="Course modules">
            <CurriculumAccordion />
          </div>
        </div>
      </Container>
    </section>
  );
}
