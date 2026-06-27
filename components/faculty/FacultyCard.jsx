"use client";

import Image from "next/image";
import Card from "@/components/common/Card";
import Button from "@/components/common/Button";
import Badge from "@/components/common/Badge";

export default function FacultyCard({ name, designation, experience, shortDescription, image, linkedin }) {
  return (
    <Card className="group flex h-full flex-col justify-between p-5 overflow-hidden transition-all duration-300 hover:shadow-md border-border/80">
      <div>
        {/* Faculty Portrait Image */}
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-muted mb-4">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            loading="lazy"
          />
        </div>

        {/* Experience Badge & Details */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
          <Badge variant="primary" className="font-semibold text-[10px] tracking-wide uppercase">
            {experience} Exp
          </Badge>
        </div>

        <h3 className="text-lg font-bold text-secondary tracking-tight group-hover:text-primary smooth-transition">
          {name}
        </h3>
        
        <p className="text-xs font-semibold text-accent/90 mt-1 leading-snug">
          {designation}
        </p>

        <p className="mt-3 text-small text-gray-text line-clamp-3 leading-relaxed">
          {shortDescription}
        </p>
      </div>

      <div className="mt-5">
        <a 
          href={linkedin} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="block w-full"
          aria-label={`Connect with ${name} on LinkedIn`}
        >
          <Button 
            variant="outline" 
            size="sm" 
            className="w-full gap-2 text-xs font-bold border-border group-hover:border-primary/40 group-hover:bg-primary/5 transition-all duration-300"
          >
            <svg
              className="size-3.5 fill-accent group-hover:fill-primary smooth-transition"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
            Connect on LinkedIn
          </Button>
        </a>
      </div>
    </Card>
  );
}
