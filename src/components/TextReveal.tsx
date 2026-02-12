"use client";

import { useRef, useEffect } from "react";
import { motion, useInView, useAnimation, Variants } from "framer-motion";

interface TextRevealProps {
  children: string;
  className?: string;
  delay?: number;
  duration?: number;
  type?: "words" | "chars" | "lines";
  once?: boolean;
}

export default function TextReveal({
  children,
  className = "",
  delay = 0,
  duration = 0.05,
  type = "words",
  once = true,
}: TextRevealProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: duration,
        delayChildren: delay,
      },
    },
  };

  const childVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 50,
      rotateX: -90,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const chars = children.split("");
  const words = children.split(" ");

  if (type === "chars") {
    return (
      <motion.span
        ref={ref}
        className={`inline-block ${className}`}
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        style={{ perspective: 1000 }}
      >
        {chars.map((char, index) => (
          <motion.span
            key={index}
            variants={childVariants}
            className="inline-block"
            style={{ transformStyle: "preserve-3d" }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.span>
    );
  }

  if (type === "words") {
    return (
      <motion.span
        ref={ref}
        className={`inline-block ${className}`}
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        style={{ perspective: 1000 }}
      >
        {words.map((word, index) => (
          <motion.span
            key={index}
            variants={childVariants}
            className="inline-block mr-[0.25em]"
            style={{ transformStyle: "preserve-3d" }}
          >
            {word}
          </motion.span>
        ))}
      </motion.span>
    );
  }

  // Lines type
  return (
    <motion.span
      ref={ref}
      className={`block ${className}`}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
    >
      <motion.span
        variants={childVariants}
        className="block"
        style={{ transformStyle: "preserve-3d" }}
      >
        {children}
      </motion.span>
    </motion.span>
  );
}

// Split heading component for dramatic reveals
export function SplitHeading({
  children,
  className = "",
  delay = 0,
}: {
  children: string;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLHeadingElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const lines = children.split("<br />");

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: delay,
      },
    },
  };

  const lineVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 100,
      clipPath: "inset(100% 0% 0% 0%)",
    },
    visible: {
      opacity: 1,
      y: 0,
      clipPath: "inset(0% 0% 0% 0%)",
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <motion.h1
      ref={ref}
      className={className}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
    >
      {lines.map((line, index) => (
        <motion.span
          key={index}
          variants={lineVariants}
          className="block overflow-hidden"
        >
          <span className="block">{line}</span>
        </motion.span>
      ))}
    </motion.h1>
  );
}

// Gradient text reveal
export function GradientText({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.span
      ref={ref}
      className={`inline-block bg-gradient-to-r from-bronze-600 via-gold-500 to-emerald-600 bg-clip-text text-transparent ${className}`}
      initial={{ backgroundPosition: "200% center", opacity: 0 }}
      animate={
        isInView
          ? { backgroundPosition: "0% center", opacity: 1 }
          : { backgroundPosition: "200% center", opacity: 0 }
      }
      transition={{ duration: 1.2, ease: "easeOut" }}
      style={{
        backgroundSize: "200% auto",
      }}
    >
      {children}
    </motion.span>
  );
}
