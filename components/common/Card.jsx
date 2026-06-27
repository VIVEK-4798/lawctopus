import { cn } from "@/utils/cn";

export default function Card({ children, className = "", as: Component = "div" }) {
  return (
    <Component
      className={cn(
        "rounded-xl border border-border bg-background p-6 shadow-sm card-hover",
        className,
      )}
    >
      {children}
    </Component>
  );
}
