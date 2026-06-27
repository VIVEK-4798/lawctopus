import { cn } from "@/utils/cn";

export default function SectionTitle({
  eyebrow,
  title,
  description,
  center = false,
  className = "",
}) {
  return (
    <div className={cn("max-w-3xl", center && "mx-auto text-center", className)}>
      {eyebrow ? (
        <p className="text-eyebrow text-primary">
          {eyebrow}
        </p>
      ) : null}
      {title ? (
        <h2 className="mt-3 text-heading-2 text-secondary">
          {title}
        </h2>
      ) : null}
      {description ? (
        <p className="mt-4 text-body text-gray-text">
          {description}
        </p>
      ) : null}
    </div>
  );
}
