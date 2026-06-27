import { cn } from "@/utils/cn";

const variants = {
  primary: "bg-primary text-secondary shadow-sm hover:-translate-y-0.5 hover:bg-primary-dark focus-visible:ring-primary",
  secondary: "bg-secondary text-white shadow-sm hover:-translate-y-0.5 hover:bg-gray-900 focus-visible:ring-secondary",
  outline: "border border-border bg-background text-secondary hover:-translate-y-0.5 hover:border-primary hover:text-secondary focus-visible:ring-primary",
  ghost: "bg-transparent text-secondary hover:bg-muted focus-visible:ring-secondary",
};

const sizes = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-base",
};

export default function Button({
  variant = "primary",
  size = "md",
  children,
  className = "",
  disabled = false,
  type = "button",
  ...props
}) {
  return (
    <button
      type={type}
      disabled={disabled}
      className={cn(
        "inline-flex items-center justify-center rounded-lg font-semibold smooth-transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-55",
        variants[variant] || variants.primary,
        sizes[size] || sizes.md,
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
