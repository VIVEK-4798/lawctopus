"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import Container from "@/components/common/Container";

const quickLinks = [
  { name: "About", href: "#about" },
  { name: "Curriculum", href: "#curriculum" },
  { name: "Faculty", href: "#faculty" },
  { name: "Pricing", href: "#pricing" },
  { name: "FAQs", href: "#faqs" },
  { name: "Contact", href: "#cta" },
];

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://linkedin.com",
    svg: (
      <svg className="size-4.5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
  },
  {
    name: "Twitter (X)",
    href: "https://twitter.com",
    svg: (
      <svg className="size-4.5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://instagram.com",
    svg: (
      <svg className="size-4.5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-white border-t border-white/5 py-12 sm:py-16" role="contentinfo">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid gap-10 md:grid-cols-2 lg:grid-cols-3"
        >
          {/* Logo & Description */}
          <div>
            <a href="#" className="flex items-center gap-3 w-fit" aria-label="Lawctopus course home">
              <span className="flex size-9 items-center justify-center rounded-lg bg-primary text-secondary">
                <GraduationCap size={20} aria-hidden="true" />
              </span>
              <span className="text-base font-extrabold tracking-normal text-white">
                Lawctopus
              </span>
            </a>
            <p className="mt-4 text-xs sm:text-sm text-gray-400 font-medium leading-relaxed max-w-sm">
              Empowering law students and legal professionals with deep, structured, and practical legal skills to succeed in their careers.
            </p>
            {/* Social Icons */}
            <div className="mt-6 flex items-center gap-3.5">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex size-8.5 items-center justify-center rounded-lg bg-white/5 text-gray-400 hover:bg-primary hover:text-secondary smooth-transition"
                  aria-label={`Follow us on ${social.name}`}
                >
                  {social.svg}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 lg:flex lg:justify-end">
            <div className="w-full lg:max-w-xs">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">
                Quick Links
              </h4>
              <nav className="mt-4 grid grid-cols-2 gap-y-3 gap-x-6 text-xs sm:text-sm text-gray-400 font-medium" aria-label="Footer navigation">
                {quickLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="hover:text-primary smooth-transition focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </motion.div>

        {/* Copyright Footnote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] sm:text-xs text-gray-500 font-medium"
        >
          <p>© {currentYear} Lawctopus Online Academy. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-gray-400 smooth-transition">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-gray-400 smooth-transition">Terms of Service</a>
          </div>
        </motion.div>
      </Container>
    </footer>
  );
}
