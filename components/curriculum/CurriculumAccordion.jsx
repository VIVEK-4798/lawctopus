"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import CurriculumItem from "@/components/curriculum/CurriculumItem";
import { curriculum } from "@/data/curriculum";

const listVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 },
};

export default function CurriculumAccordion() {
  const [openModuleId, setOpenModuleId] = useState(curriculum[0]?.id || null);

  return (
    <motion.div
      variants={listVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.12 }}
      className="space-y-4"
    >
      {curriculum.map((module, index) => (
        <motion.div key={module.id} variants={itemVariants} transition={{ duration: 0.4 }}>
          <CurriculumItem
            module={module}
            isOpen={openModuleId === module.id}
            isLast={index === curriculum.length - 1}
            onToggle={() => setOpenModuleId((currentId) => (currentId === module.id ? null : module.id))}
          />
        </motion.div>
      ))}
    </motion.div>
  );
}
