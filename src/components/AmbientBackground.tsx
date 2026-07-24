import { motion, useReducedMotion } from "framer-motion";

/**
 * Fixed ambient grid of dots that gently drifts behind all content.
 * Very low opacity so it never competes with foreground content.
 */
export function AmbientBackground() {
  const reduce = useReducedMotion();
  const size = 44; // grid cell in px

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <motion.div
        className="absolute -inset-[10%]"
        style={{
          backgroundImage: `
            radial-gradient(var(--manual) 1px, transparent 1px),
            radial-gradient(var(--accent) 1px, transparent 1px)
          `,
          backgroundSize: `${size}px ${size}px, ${size}px ${size}px`,
          backgroundPosition: `0 0, ${size / 2}px ${size / 2}px`,
          opacity: 0.07,
        }}
        animate={
          reduce
            ? undefined
            : {
                x: [0, size, 0],
                y: [0, -size, 0],
              }
        }
        transition={{
          duration: 60,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />
      {/* soft top/bottom fade so grid melts into edges */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, var(--background) 0%, transparent 15%, transparent 85%, var(--background) 100%)",
        }}
      />
    </div>
  );
}
