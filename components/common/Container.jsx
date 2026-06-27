import { cn } from "@/utils/cn";

export default function Container({ children, className = "", as: Component = "div" }) {
  return (
    <Component className={cn("mx-auto w-full max-w-7xl container-padding", className)}>
      {children}
    </Component>
  );
}
