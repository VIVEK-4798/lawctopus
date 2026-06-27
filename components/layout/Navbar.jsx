"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { GraduationCap, Menu, X } from "lucide-react";
import Button from "@/components/common/Button";
import Container from "@/components/common/Container";
import { cn } from "@/utils/cn";

const navLinks = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Curriculum", href: "#curriculum" },
  { name: "Faculty", href: "#faculty" },
  { name: "Pricing", href: "#pricing" },
  { name: "FAQs", href: "#faqs" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");

  // Track scrolling state for sticky navbar adjustments
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // IntersectionObserver to handle active section styling on scroll
  useEffect(() => {
    const sections = ["about", "curriculum", "faculty", "pricing", "faqs"];
    
    // Top of page active section fallback (Home)
    const handleScrollActiveFallback = () => {
      if (window.scrollY < 120) {
        setActiveSection("Home");
      }
    };

    const observerOptions = {
      root: null,
      rootMargin: "-25% 0px -55% 0px", // Trigger when section occupies the upper-middle viewport
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          const mapped = {
            about: "About",
            curriculum: "Curriculum",
            faculty: "Faculty",
            pricing: "Pricing",
            faqs: "FAQs",
          };
          if (mapped[id]) {
            setActiveSection(mapped[id]);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    window.addEventListener("scroll", handleScrollActiveFallback);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScrollActiveFallback);
    };
  }, []);

  // Lock document body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <motion.header
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled || isMenuOpen
          ? "border-b border-border bg-white shadow-sm"
          : "border-b border-transparent bg-white/90 backdrop-blur-xl"
      )}
    >
      <Container
        className={cn(
          "flex items-center justify-between transition-all duration-300",
          isScrolled ? "h-16" : "h-[72px]"
        )}
      >
        {/* Logo */}
        <a href="#" className="flex items-center gap-3" aria-label="Lawctopus course home">
          <span className="flex size-10 items-center justify-center rounded-xl bg-primary text-secondary shadow-sm">
            <GraduationCap size={22} aria-hidden="true" />
          </span>
          <span className="text-lg font-extrabold tracking-normal text-secondary">Lawctopus</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm font-semibold smooth-transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4",
                activeSection === link.name
                  ? "text-primary font-bold"
                  : "text-gray-text hover:text-secondary"
              )}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden lg:block">
          <a href="#pricing">
            <Button size="sm">Enroll Now</Button>
          </a>
        </div>

        {/* Hamburger Menu Toggle Button */}
        <button
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-lg border border-border bg-background text-secondary smooth-transition hover:border-primary hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary lg:hidden cursor-pointer"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          {isMenuOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>
      </Container>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isMenuOpen ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className={cn(
              "fixed inset-x-0 bottom-0 z-40 bg-white lg:hidden flex flex-col overflow-y-auto transition-all duration-300",
              isScrolled ? "top-16" : "top-[72px]"
            )}
            role="dialog"
            aria-label="Mobile navigation menu"
          >
            <Container className="flex flex-col min-h-full justify-between py-6">
              <nav className="flex flex-col gap-2" aria-label="Mobile navigation">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.04, duration: 0.25 }}
                    className={cn(
                      "rounded-xl px-4 py-3 text-lg font-bold smooth-transition",
                      activeSection === link.name
                        ? "text-primary bg-primary/5"
                        : "text-secondary hover:bg-muted"
                    )}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </motion.a>
                ))}
              </nav>

              <div className="mt-8">
                <a href="#pricing" onClick={() => setIsMenuOpen(false)}>
                  <Button size="lg" className="w-full">
                    Enroll Now
                  </Button>
                </a>
              </div>
            </Container>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}
