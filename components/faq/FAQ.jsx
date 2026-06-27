"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Container from "@/components/common/Container";
import SectionTitle from "@/components/common/SectionTitle";
import FAQItem from "./FAQItem";
import { faqs } from "@/data/faq";

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      duration: 0.6,
    },
  },
};

export default function FAQ() {
  const [openId, setOpenId] = useState(null);

  const handleToggle = (id) => {
    setOpenId((prevOpenId) => (prevOpenId === id ? null : id));
  };

  return (
    <section className="bg-muted py-16 sm:py-24" id="faqs" aria-labelledby="faq-heading">
      <Container>
        {/* Section Header */}
        <SectionTitle
          center
          eyebrow="Got Questions?"
          title="Frequently Asked Questions"
          description="Everything you need to know about the curriculum, weekly commitments, certificates, mentorship, and enrollment options."
          className="mb-12 sm:mb-16"
        />

        {/* FAQ Accordion List */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="mx-auto max-w-3xl"
        >
          {faqs.map((faq) => (
            <FAQItem
              key={faq.id}
              id={faq.id}
              question={faq.question}
              answer={faq.answer}
              isOpen={openId === faq.id}
              onToggle={() => handleToggle(faq.id)}
            />
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
