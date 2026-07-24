import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section";
} & Omit<HTMLMotionProps<"div">, "children">;

/**
 * Fades a block in with a small upward translate the first time it enters
 * the viewport. Respects prefers-reduced-motion.
 */
export function Reveal({
  children,
  delay = 0,
  className,
  as = "div",
  ...rest
}: RevealProps) {
  const reduce = useReducedMotion();
  const Comp = as === "section" ? motion.section : motion.div;

  if (reduce) {
    return (
      <Comp className={className} {...rest}>
        {children}
      </Comp>
    );
  }

  return (
    <Comp
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.45, ease: "easeOut", delay }}
      {...rest}
    >
      {children}
    </Comp>
  );
}
