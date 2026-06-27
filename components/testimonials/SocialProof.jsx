"use client";

import { motion } from "framer-motion";
import { Users, Star, ThumbsUp, Award, Video } from "lucide-react";
import Container from "@/components/common/Container";
import Card from "@/components/common/Card";
import SectionTitle from "@/components/common/SectionTitle";

const stats = [
  {
    id: 1,
    value: "1000+",
    label: "Active Students",
    description: "Empowered learners worldwide",
    icon: Users,
    iconColor: "text-blue-500 bg-blue-50",
  },
  {
    id: 2,
    value: "4.9",
    label: "Average Rating",
    description: "Reviewed by legal professionals",
    icon: Star,
    iconColor: "text-amber-500 bg-amber-50",
  },
  {
    id: 3,
    value: "95%",
    label: "Positive Reviews",
    description: "Highly rated assignments & sessions",
    icon: ThumbsUp,
    iconColor: "text-emerald-500 bg-emerald-50",
  },
  {
    id: 4,
    value: "Verified",
    label: "Certificate Recognized",
    description: "A credentials boost for portfolios",
    icon: Award,
    iconColor: "text-indigo-500 bg-indigo-50",
  },
  {
    id: 5,
    value: "1-on-1",
    label: "Live Mentorship",
    description: "Direct guidance from partners",
    icon: Video,
    iconColor: "text-rose-500 bg-rose-50",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 14,
    },
  },
};

export default function SocialProof() {
  return (
    <section className="bg-white py-16 sm:py-24" aria-labelledby="social-proof-heading">
      <Container>
        {/* Section Header */}
        <SectionTitle
          center
          eyebrow="Our Impact"
          title="Track Record of Excellence"
          description="We are committed to delivering the highest quality practical legal training, validated by student success and recognized throughout the legal industry."
          className="mb-12 sm:mb-16"
        />

        {/* Stats Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-5"
        >
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.id}
                variants={itemVariants}
                className={stat.id === 5 ? "col-span-2 md:col-span-1" : ""}
              >
                <Card className="group flex h-full flex-col justify-between p-5 border-border/70 transition-all duration-300 hover:shadow-md hover:scale-[1.03] overflow-hidden">
                  <div>
                    {/* Icon with Hover Rotation */}
                    <div className={`inline-flex size-11 items-center justify-center rounded-xl ${stat.iconColor} transition-transform duration-300 group-hover:rotate-12`}>
                      <Icon size={22} className="stroke-[2.25px]" aria-hidden="true" />
                    </div>

                    {/* Numeric Metric */}
                    <div className="mt-5 text-2xl sm:text-3xl font-extrabold text-secondary tracking-tight">
                      {stat.value}
                    </div>

                    {/* Short label */}
                    <div className="mt-1.5 text-xs font-bold text-secondary">
                      {stat.label}
                    </div>
                  </div>

                  {/* Sub-description */}
                  <div className="mt-3 text-[10px] text-gray-text font-medium leading-normal">
                    {stat.description}
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
