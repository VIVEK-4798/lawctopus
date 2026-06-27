"use client";

import { motion } from "framer-motion";
import { Award, Briefcase, Scale, UserCheck } from "lucide-react";
import Container from "@/components/common/Container";
import SectionTitle from "@/components/common/SectionTitle";
import Card from "@/components/common/Card";
import FacultyCard from "./FacultyCard";
import { facultyData } from "@/data/faculty";

const highlights = [
  {
    id: 1,
    title: "Industry Experts",
    description: "Gain direct insights from seasoned partners and legal counselors.",
    icon: Award,
  },
  {
    id: 2,
    title: "Practical Focus",
    description: "Master real-world drafting, negotiation, and compliance skills.",
    icon: Briefcase,
  },
  {
    id: 3,
    title: "Real Case Studies",
    description: "Analyze complex transaction structures and landmark disputes.",
    icon: Scale,
  },
  {
    id: 4,
    title: "Active Mentorship",
    description: "Receive constructive feedback to accelerate your career growth.",
    icon: UserCheck,
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      duration: 0.6,
    }
  },
};

export default function Faculty() {
  return (
    <section className="bg-white py-16 sm:py-24" id="faculty" aria-labelledby="faculty-heading">
      <Container>
        {/* Section Header */}
        <SectionTitle
          center
          eyebrow="Expert Guidance"
          title="Learn from Industry Experts"
          description="Accelerate your practical legal training by studying alongside elite professionals who bring real-world law firm experience directly to your screens."
          className="mb-12 sm:mb-16"
        />

        {/* Faculty Highlights Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-14"
        >
          {highlights.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div key={item.id} variants={fadeUpVariants}>
                <Card className="flex items-start gap-4 p-4 h-full border-border/60 hover:border-primary/20">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon size={20} aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-secondary">{item.title}</h4>
                    <p className="mt-1 text-[11px] leading-relaxed text-gray-text">{item.description}</p>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Faculty Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {facultyData.map((faculty) => (
            <motion.div key={faculty.id} variants={fadeUpVariants} className="h-full">
              <FacultyCard {...faculty} />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
