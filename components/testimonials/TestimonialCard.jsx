"use client";

import Image from "next/image";
import { Star, Quote } from "lucide-react";
import Card from "@/components/common/Card";

export default function TestimonialCard({ name, role, image, rating, review }) {
  return (
    <Card className="relative group flex h-full flex-col justify-between p-6 md:p-8 overflow-hidden bg-white border-border/80 transition-all duration-300 hover:shadow-md">
      {/* Decorative Large Quotation Mark */}
      <div className="absolute top-4 right-4 text-primary/10 transition-transform duration-300 group-hover:scale-110 group-hover:text-primary/15 pointer-events-none">
        <Quote size={56} className="fill-current rotate-180" />
      </div>

      <div className="relative z-10">
        {/* Star Rating */}
        <div className="flex gap-1 mb-4" aria-label={`Rating: ${rating} out of 5 stars`}>
          {Array.from({ length: 5 }).map((_, index) => (
            <Star
              key={index}
              size={16}
              className={`${
                index < rating ? "text-primary fill-primary" : "text-gray-200"
              }`}
              aria-hidden="true"
            />
          ))}
        </div>

        {/* Review Text */}
        <blockquote className="text-sm md:text-base text-secondary/95 font-medium leading-relaxed italic mb-6">
          "{review}"
        </blockquote>
      </div>

      {/* Student Profile Info */}
      <div className="relative z-10 flex items-center gap-3.5 mt-auto pt-4 border-t border-border/50">
        <div className="relative size-11 overflow-hidden rounded-full bg-muted border border-border/60">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
            sizes="44px"
            loading="lazy"
          />
        </div>
        <div>
          <h4 className="text-sm font-bold text-secondary tracking-tight">
            {name}
          </h4>
          <p className="text-[11px] font-semibold text-gray-text mt-0.5 leading-none">
            {role}
          </p>
        </div>
      </div>
    </Card>
  );
}
