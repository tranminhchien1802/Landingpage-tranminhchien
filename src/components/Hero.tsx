"use client";

import { useEffect, useRef } from "react";
import ProductMockup from "./ProductMockup";

export default function Hero() {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (!bgRef.current) return;
      const y = window.scrollY * 0.4;
      bgRef.current.style.transform = `translateY(${y}px)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative flex min-h-dvh items-center justify-center overflow-hidden px-4 pt-24">
      {/* Parallax background */}
      <div
        ref={bgRef}
        className="pointer-events-none absolute inset-0 -z-10 will-change-transform"
      >
        <div className="absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl animate-pulse-glow" />
        <div className="absolute -bottom-40 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-secondary/10 blur-3xl" />
      </div>

      {/*
      /* Decorative motion lines
      */}
      <svg
        className="pointer-events-none absolute right-0 top-1/4 -z-10 hidden h-64 w-64 opacity-20 lg:block"
        viewBox="0 0 200 200"
        fill="none"
      >
        <path
          d="M180 40 Q200 30 220 20"
          stroke="#7c3aed"
          strokeWidth="3"
          strokeLinecap="round"
          opacity="0.6"
        />
        <path
          d="M190 60 Q210 50 230 42"
          stroke="#7c3aed"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.4"
        />
        <path
          d="M175 80 Q195 72 215 66"
          stroke="#f97316"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.3"
        />
      </svg>

      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left: Text */}
        <div className="text-center lg:text-left">
          <span className="inline-block animate-fade-up rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-primary uppercase">
            For Elite Athletes
          </span>
          <h1 className="animate-fade-up animate-delay-100 mt-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Push Beyond
            <br />
            <span className="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
              Your Limits
            </span>
          </h1>
          <p className="animate-fade-up animate-delay-200 mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg lg:mx-0">
            AeroSpike Pro is the AI-powered performance band that tracks
            vertical jump, reaction time, swing speed, and impact force — giving
            pro athletes real-time data to train smarter.
          </p>
          <div className="animate-fade-up animate-delay-300 mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
            <a
              href="#contact"
              className="rounded-full bg-primary px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-all hover:bg-primary-dark hover:shadow-xl hover:shadow-primary/30 active:scale-95"
            >
              Pre-Order Now
            </a>
            <a
              href="#features"
              className="rounded-full border border-border px-8 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-card-hover active:scale-95"
            >
              See Features
            </a>
          </div>
        </div>

        {/* Right: Product mockup */}
        <div className="animate-fade-in animate-delay-300 flex justify-center lg:justify-end">
          <div className="animate-float">
            <ProductMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
