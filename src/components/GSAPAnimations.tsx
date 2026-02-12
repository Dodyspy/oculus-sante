"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
  duration?: number;
  distance?: number;
  once?: boolean;
}

export function ScrollReveal({
  children,
  className = "",
  direction = "up",
  delay = 0,
  duration = 0.8,
  distance = 50,
  once = true,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const triggersRef = useRef<ScrollTrigger[]>([]);

  useEffect(() => {
    if (!ref.current) return;

    const element = ref.current;

    const getFromValues = () => {
      switch (direction) {
        case "up":
          return { y: distance, opacity: 0 };
        case "down":
          return { y: -distance, opacity: 0 };
        case "left":
          return { x: distance, opacity: 0 };
        case "right":
          return { x: -distance, opacity: 0 };
        default:
          return { y: distance, opacity: 0 };
      }
    };

    gsap.set(element, getFromValues());

    const trigger = ScrollTrigger.create({
      trigger: element,
      start: "top 85%",
      once,
      onEnter: () => {
        gsap.to(element, {
          x: 0,
          y: 0,
          opacity: 1,
          duration,
          delay,
          ease: "power3.out",
        });
      },
    });

    triggersRef.current.push(trigger);

    return () => {
      triggersRef.current.forEach((t) => t.kill());
      triggersRef.current = [];
    };
  }, [direction, delay, duration, distance, once]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

// Staggered children reveal
interface StaggerRevealProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  baseDelay?: number;
}

export function StaggerReveal({
  children,
  className = "",
  staggerDelay = 0.1,
  baseDelay = 0,
}: StaggerRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const triggersRef = useRef<ScrollTrigger[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const children = container.children;

    if (children.length === 0) return;

    gsap.set(children, { y: 40, opacity: 0 });

    const trigger = ScrollTrigger.create({
      trigger: container,
      start: "top 80%",
      once: true,
      onEnter: () => {
        gsap.to(children, {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: staggerDelay,
          delay: baseDelay,
          ease: "power2.out",
        });
      },
    });

    triggersRef.current.push(trigger);

    return () => {
      triggersRef.current.forEach((t) => t.kill());
      triggersRef.current = [];
    };
  }, [staggerDelay, baseDelay]);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
}

// Parallax element
interface ParallaxProps {
  children: React.ReactNode;
  className?: string;
  speed?: number; // 0.1 = slow, 0.5 = fast
}

export function Parallax({ children, className = "", speed = 0.2 }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const triggersRef = useRef<ScrollTrigger[]>([]);

  useEffect(() => {
    if (!ref.current) return;

    const element = ref.current;

    const trigger = ScrollTrigger.create({
      trigger: element,
      start: "top bottom",
      end: "bottom top",
      scrub: true,
      onUpdate: (self) => {
        const yMove = self.progress * 100 * speed;
        gsap.set(element, { y: yMove });
      },
    });

    triggersRef.current.push(trigger);

    return () => {
      triggersRef.current.forEach((t) => t.kill());
      triggersRef.current = [];
    };
  }, [speed]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

// Scale reveal on scroll
interface ScaleRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function ScaleReveal({ children, className = "", delay = 0 }: ScaleRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const triggersRef = useRef<ScrollTrigger[]>([]);

  useEffect(() => {
    if (!ref.current) return;

    const element = ref.current;

    gsap.set(element, { scale: 0.8, opacity: 0 });

    const trigger = ScrollTrigger.create({
      trigger: element,
      start: "top 85%",
      once: true,
      onEnter: () => {
        gsap.to(element, {
          scale: 1,
          opacity: 1,
          duration: 0.7,
          delay,
          ease: "back.out(1.7)",
        });
      },
    });

    triggersRef.current.push(trigger);

    return () => {
      triggersRef.current.forEach((t) => t.kill());
      triggersRef.current = [];
    };
  }, [delay]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

// Clip path reveal
interface ClipRevealProps {
  children: React.ReactNode;
  className?: string;
  direction?: "left" | "right" | "up" | "down";
  delay?: number;
}

export function ClipReveal({
  children,
  className = "",
  direction = "left",
  delay = 0,
}: ClipRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const triggersRef = useRef<ScrollTrigger[]>([]);

  useEffect(() => {
    if (!ref.current) return;

    const element = ref.current;

    const getClipPath = () => {
      switch (direction) {
        case "left":
          return { from: "inset(0 100% 0 0)", to: "inset(0 0% 0 0)" };
        case "right":
          return { from: "inset(0 0 0 100%)", to: "inset(0 0 0 0%)" };
        case "up":
          return { from: "inset(100% 0 0 0)", to: "inset(0% 0 0 0)" };
        case "down":
          return { from: "inset(0 0 100% 0)", to: "inset(0 0 0% 0)" };
        default:
          return { from: "inset(0 100% 0 0)", to: "inset(0 0% 0 0)" };
      }
    };

    const clipPaths = getClipPath();
    gsap.set(element, { clipPath: clipPaths.from, opacity: 1 });

    const trigger = ScrollTrigger.create({
      trigger: element,
      start: "top 80%",
      once: true,
      onEnter: () => {
        gsap.to(element, {
          clipPath: clipPaths.to,
          duration: 0.8,
          delay,
          ease: "power3.inOut",
        });
      },
    });

    triggersRef.current.push(trigger);

    return () => {
      triggersRef.current.forEach((t) => t.kill());
      triggersRef.current = [];
    };
  }, [direction, delay]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
