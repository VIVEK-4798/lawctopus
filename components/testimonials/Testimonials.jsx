"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Container from "@/components/common/Container";
import SectionTitle from "@/components/common/SectionTitle";
import TestimonialCard from "./TestimonialCard";
import { testimonialsData } from "@/data/testimonials";

export default function Testimonials() {
  const [visibleCards, setVisibleCards] = useState(3);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const autoplayTimer = useRef(null);

  // Responsive logic to calculate the number of visible cards
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCards(1); // Mobile
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2); // Tablet
      } else {
        setVisibleCards(3); // Desktop
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = testimonialsData.length - visibleCards;

  // Clamping activeIndex on resize in case it exceeds the max index
  useEffect(() => {
    if (activeIndex > maxIndex) {
      setActiveIndex(Math.max(0, maxIndex));
    }
  }, [visibleCards, maxIndex, activeIndex]);

  // Autoplay Logic
  const startAutoplay = () => {
    stopAutoplay();
    autoplayTimer.current = setInterval(() => {
      setActiveIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 5500);
  };

  const stopAutoplay = () => {
    if (autoplayTimer.current) {
      clearInterval(autoplayTimer.current);
    }
  };

  useEffect(() => {
    if (!isPaused && maxIndex > 0) {
      startAutoplay();
    } else {
      stopAutoplay();
    }
    return () => stopAutoplay();
  }, [activeIndex, maxIndex, isPaused]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  // Fade Up animation variants for the section elements
  const sectionVariants = {
    hidden: { opacity: 0, y: 35 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section 
      className="bg-muted py-16 sm:py-24 overflow-hidden" 
      aria-labelledby="testimonials-heading"
    >
      <Container>
        {/* Header Block */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 sm:mb-16">
          <SectionTitle
            eyebrow="Success Stories"
            title="What Our Learners Say"
            description="Discover how students and practicing advocates have leveraged our course to master complex drafting and accelerate their professional legal careers."
            className="max-w-2xl"
          />

          {/* Navigation Controls */}
          {maxIndex > 0 && (
            <div className="flex items-center gap-3 self-start sm:self-auto">
              <button
                onClick={handlePrev}
                className="flex size-11 items-center justify-center rounded-full border border-border bg-white text-secondary hover:bg-primary hover:border-primary hover:text-secondary smooth-transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary shadow-sm cursor-pointer"
                aria-label="Previous testimonials"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={handleNext}
                className="flex size-11 items-center justify-center rounded-full border border-border bg-white text-secondary hover:bg-primary hover:border-primary hover:text-secondary smooth-transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary shadow-sm cursor-pointer"
                aria-label="Next testimonials"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          )}
        </div>

        {/* Testimonials Slider Area */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Outer Mask */}
          <div className="mx-[-12px] overflow-hidden px-3 py-4">
            <motion.div
              className="flex"
              animate={{ x: `-${activeIndex * (100 / visibleCards)}%` }}
              transition={{ type: "spring", stiffness: 220, damping: 26 }}
            >
              {testimonialsData.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="w-full sm:w-1/2 lg:w-1/3 shrink-0 px-3 h-full"
                >
                  <TestimonialCard {...testimonial} />
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Bullet Pagination Indicators */}
        {maxIndex > 0 && (
          <div className="mt-8 flex justify-center gap-2" aria-label="Carousel pagination">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? "w-7 bg-primary"
                    : "w-2.5 bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
                aria-current={index === activeIndex ? "true" : "false"}
              />
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
