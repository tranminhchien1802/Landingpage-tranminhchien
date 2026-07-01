"use client";

import { useEffect, useRef, useState } from "react";
import ProductMockup from "./ProductMockup";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const mockupRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Parallax effect for mockup
  useEffect(() => {
    const onScroll = () => {
      if (!heroRef.current || !mockupRef.current) return;
      
      const scrollY = window.scrollY;
      const progress = Math.min(scrollY / window.innerHeight, 1);
      
      mockupRef.current.style.transform = `translate3d(0, ${scrollY * 0.1}px, 0) scale(${1 + progress * 0.05})`;
    };
    
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Magnetic button effect
  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (!buttonRef.current) return;

      const rect = buttonRef.current.getBoundingClientRect();
      const buttonCenterX = rect.left + rect.width / 2;
      const buttonCenterY = rect.top + rect.height / 2;

      const distance = Math.hypot(e.clientX - buttonCenterX, e.clientY - buttonCenterY);
      const maxDistance = 100;

      if (distance < maxDistance) {
        const angle = Math.atan2(e.clientY - buttonCenterY, e.clientX - buttonCenterX);
        const pullDistance = (1 - distance / maxDistance) * 15;

        buttonRef.current.style.transform = `translate(${Math.cos(angle) * pullDistance}px, ${Math.sin(angle) * pullDistance}px)`;
      } else {
        buttonRef.current.style.transform = "translate(0, 0)";
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative flex min-h-[110vh] items-center justify-center overflow-hidden bg-background px-4 pt-20 sm:pt-32"
    >
      {/* Refined Light Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      
      {/* Ambient glows - reduced blur for mobile performance */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] h-[400px] w-[400px] rounded-full bg-primary/20 blur-[60px] max-md:blur-[40px]" />
        <div className="absolute top-[20%] right-[-5%] h-[350px] w-[350px] rounded-full bg-secondary/15 blur-[50px] max-md:blur-[35px]" />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-8 lg:grid-cols-2 lg:gap-16">
        {/* Left: Text & CTA */}
        <div className="text-center lg:text-left z-20">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-primary/20 bg-primary/5 px-5 py-2 backdrop-blur-md shadow-[0_0_15px_rgba(124,58,237,0.1)] transition-transform hover:scale-105 cursor-default">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary"></span>
            </span>
            <span className="text-xs font-bold tracking-widest text-primary uppercase">
              Pro Athlete Edition
            </span>
          </div>
          
          <h1 className="mt-8 text-[3.5rem] font-black leading-[1.05] tracking-tighter text-foreground sm:text-7xl md:text-8xl">
            Unleash Your <br />
            <span className="relative inline-block mt-2">
              <span className="absolute -inset-1 block -skew-y-3 bg-gradient-to-r from-primary to-secondary opacity-20 blur-lg"></span>
              <span className="relative bg-[linear-gradient(to_right,var(--color-primary),#d946ef,var(--color-secondary))] bg-clip-text text-transparent drop-shadow-sm">
                Maximum Potential
              </span>
            </span>
          </h1>
          
          <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-muted sm:text-xl lg:mx-0 font-medium">
            AeroSpike Pro is the world's most advanced AI performance tracker. Capture vertical jump, reaction time, and impact force with lab-grade precision.
          </p>
          
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
            <a
              ref={buttonRef}
              href="#shop"
              className="group relative flex h-14 items-center justify-center overflow-hidden rounded-full bg-foreground px-10 text-base font-bold text-background shadow-2xl transition-all hover:shadow-primary/50 active:scale-95 will-change-transform"
              style={{
                boxShadow: "0 20px 40px rgba(124, 58, 237, 0.3), 0 0 60px rgba(124, 58, 237, 0.2)"
              }}
            >
              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
              
              <span className="relative z-10 flex items-center gap-2">
                Pre-Order Now
                <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </span>
            </a>
            <a
              href="#features"
              className="group flex h-14 items-center justify-center gap-2 rounded-full border-2 border-border/80 bg-background/50 px-8 text-base font-bold text-foreground backdrop-blur-md transition-all hover:border-foreground/20 hover:bg-muted/10 active:scale-95 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <span className="relative">Explore Features</span>
            </a>
          </div>
          
          {/* Enhanced Social Proof / Stats */}
          <div className="mt-16 flex flex-wrap justify-center gap-6 lg:justify-start">
            <div className="flex flex-col rounded-2xl border border-border/80 bg-card/60 px-6 py-4 backdrop-blur-sm shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-lg hover:shadow-primary/20 group cursor-pointer">
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-black text-foreground tracking-tighter transition-colors duration-300 group-hover:text-primary">98</span>
                <span className="text-xl font-bold text-primary">%</span>
              </div>
              <span className="mt-1 text-xs font-bold text-muted uppercase tracking-widest">Accuracy</span>
            </div>
            
            <div className="flex flex-col rounded-2xl border border-border/80 bg-card/60 px-6 py-4 backdrop-blur-sm shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-lg hover:shadow-secondary/20 group cursor-pointer">
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-black text-foreground tracking-tighter transition-colors duration-300 group-hover:text-secondary">1</span>
                <span className="text-xl font-bold text-secondary">ms</span>
              </div>
              <span className="mt-1 text-xs font-bold text-muted uppercase tracking-widest">Latency</span>
            </div>
            
            <div className="flex flex-col rounded-2xl border border-border/80 bg-card/60 px-6 py-4 backdrop-blur-sm shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-lg hover:shadow-primary/20 group cursor-pointer">
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-black text-foreground tracking-tighter transition-colors duration-300 group-hover:text-primary">14</span>
                <span className="text-xl font-bold text-primary">d</span>
              </div>
              <span className="mt-1 text-xs font-bold text-muted uppercase tracking-widest">Battery</span>
            </div>
          </div>
        </div>

        {/* Right: Enhanced Product mockup */}
        <div className="relative flex items-center justify-center">
          {/* Intense Glow Behind Product */}
          <div className="absolute top-1/2 left-1/2 h-[140%] w-[140%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,var(--color-primary)_0%,transparent_60%)] opacity-15 blur-[60px]"></div>
          
          {/* Tech Ring Decoration */}
          <div className="absolute top-1/2 left-1/2 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/20 border-dashed animate-[spin_60s_linear_infinite] max-lg:hidden"></div>
          <div className="absolute top-1/2 left-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-secondary/20 border-dotted animate-[spin_40s_linear_infinite_reverse] max-lg:hidden"></div>

          <div ref={mockupRef} className="relative will-change-transform animate-float drop-shadow-[0_30px_50px_rgba(124,58,237,0.25)] z-10 w-[240px] sm:w-[280px] md:w-[340px]">
            <ProductMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
