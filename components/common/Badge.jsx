import { cn } from "@/utils/cn";

const variants = {
  primary: "bg-primary/15 text-secondary",
  secondary: "bg-muted text-gray-text",
  outline: "border border-border bg-background text-gray-text",
};

export default function Badge({ variant = "primary", children, className = "" }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold leading-none",
        variants[variant] || variants.primary,
        className,
      )}
    >
      {children}
    </span>
  );
}
