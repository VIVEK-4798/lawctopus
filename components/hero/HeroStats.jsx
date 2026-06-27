"use client";

import { motion } from "framer-motion";
import { Award, CalendarDays, MonitorPlay, Users } from "lucide-react";
import Card from "@/components/common/Card";

const stats = [
  {
    label: "Students",
    value: "8,000+",
    icon: Users,
  },
  {
    label: "Course Duration",
    value: "8 Weeks",
    icon: CalendarDays,
  },
  {
    label: "Live Sessions",
    value: "12+",
    icon: MonitorPlay,
  },
  {
    label: "Certificate",
    value: "Included",
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
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 },
};

export default function HeroStats() {
  return (
    <motion.div
      variants={listVariants}
      initial="hidden"
      animate="show"
      className="grid grid-cols-2 gap-3 sm:gap-4"
    >
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <motion.div key={stat.label} variants={itemVariants} transition={{ duration: 0.4 }}>
            <Card className="h-full p-4">
              <div className="mb-4 flex size-10 items-center justify-center rounded-lg bg-primary/15 text-secondary">
                <Icon size={20} aria-hidden="true" />
              </div>
              <p className="text-xl font-extrabold leading-tight text-secondary">{stat.value}</p>
              <p className="mt-1 text-small text-gray-text">{stat.label}</p>
            </Card>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
