"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Download, FileText } from "lucide-react";
import Badge from "@/components/common/Badge";
import Button from "@/components/common/Button";
import Container from "@/components/common/Container";
import HeroStats from "@/components/hero/HeroStats";

const trustItems = ["Lifetime Access", "Certificate", "Practical Assignments", "Expert Faculty"];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export default function Hero() {
  const [imageAvailable, setImageAvailable] = useState(true);

  return (
    <section className="relative overflow-hidden bg-background">
      <div className="pointer-events-none absolute left-[-12rem] top-[-10rem] size-[28rem] rounded-full bg-primary/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-16rem] right-[-12rem] size-[34rem] rounded-full bg-accent/10 blur-3xl" />

      <Container className="relative grid min-h-[calc(100vh-72px)] items-center gap-14 py-16 lg:grid-cols-[1.02fr_0.98fr] lg:py-20">
        <motion.div initial="hidden" animate="show" className="max-w-2xl">
          <motion.div variants={fadeUp} transition={{ duration: 0.45 }}>
            <Badge variant="primary">Expert Level Course</Badge>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="mt-6 text-heading-1 text-secondary"
          >
            Master practical legal skills for internships, research, and a sharper career start.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="mt-6 max-w-xl text-lg leading-8 text-gray-text"
          >
            Built for law students and early-career professionals, this course helps you learn
            drafting, research, legal reasoning, and workplace-ready execution with expert guidance.
          </motion.p>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.5, delay: 0.24 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <Button size="lg" className="gap-2">
              Enroll Now
              <ArrowRight size={18} aria-hidden="true" />
            </Button>
            <Button variant="outline" size="lg" className="gap-2">
              <Download size={18} aria-hidden="true" />
              Download Brochure
            </Button>
          </motion.div>

          <motion.ul
            variants={fadeUp}
            transition={{ duration: 0.5, delay: 0.32 }}
            className="mt-7 grid gap-3 text-sm font-semibold text-secondary sm:grid-cols-2"
          >
            {trustItems.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-primary" aria-hidden="true" />
                {item}
              </li>
            ))}
          </motion.ul>
        </motion.div>

        <div className="space-y-5">
          <motion.div
            initial={{ opacity: 0, x: 34 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative"
          >
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-primary/20 via-white to-accent/10 blur-2xl" />
            <div className="relative overflow-hidden rounded-[1.5rem] border border-border bg-white p-3 shadow-2xl shadow-secondary/10">
              {imageAvailable ? (
                <Image
                  src="/images/hero/hero-image.png"
                  alt="Modern online legal course workspace with study materials and certificate"
                  width={1100}
                  height={880}
                  priority
                  className="aspect-[5/4] w-full rounded-[1.15rem] object-cover"
                  onError={() => setImageAvailable(false)}
                />
              ) : (
                <div className="flex aspect-[5/4] w-full items-center justify-center rounded-[1.15rem] bg-muted">
                  <div className="max-w-xs text-center">
                    <div className="mx-auto mb-4 flex size-14 items-center justify-center rounded-2xl bg-primary/15 text-secondary">
                      <FileText size={28} aria-hidden="true" />
                    </div>
                    <p className="text-base font-bold text-secondary">Legal Skills Course</p>
                    <p className="mt-2 text-small text-gray-text">Premium course visual placeholder</p>
                  </div>
                </div>
              )}
            </div>
          </motion.div>

          <HeroStats />
        </div>
      </Container>
    </section>
  );
}
