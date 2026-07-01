"use client";

import { useEffect, useRef, useState } from "react";

const stories = [
  {
    title: "Every Millisecond Matters",
    subtitle: "Lab-Grade Reaction Tracking",
    body: "AeroSpike Pro captures reaction time down to 1ms precision. From the starting line to the finish, know exactly when you fire.",
    stat: "1ms",
    statLabel: "Latency",
    gradient: "from-primary to-purple-400",
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    title: "Vertical Intelligence",
    subtitle: "Jump Higher, Land Safer",
    body: "98% accurate vertical jump tracking with real-time force analysis. Optimize every rep and reduce impact strain on your joints.",
    stat: "98%",
    statLabel: "Accuracy",
    gradient: "from-secondary to-orange-400",
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 20V10M18 20V4M6 20v-4" />
      </svg>
    ),
  },
  {
    title: "AI That Coaches You",
    subtitle: "Real-Time Form Correction",
    body: "Our on-device NPU runs ML models that analyze your form mid-motion. Get instant feedback on swing mechanics, jump technique, and landing posture.",
    stat: "2 TOPS",
    statLabel: "AI Power",
    gradient: "from-cyan-400 to-blue-500",
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2a4 4 0 0 1 4 4v2a4 4 0 0 1-8 0V6a4 4 0 0 1 4-4z" />
        <path d="M16 14H8a4 4 0 0 0-4 4v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2a4 4 0 0 0-4-4z" />
      </svg>
    ),
  },
];

export default function StorySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      const scrolled = -rect.top;
      const p = Math.max(0, Math.min(scrolled / total, 1));
      setProgress(p);

      const idx = Math.min(Math.floor(p * stories.length), stories.length - 1);
      setActiveIndex(idx);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const current = stories[activeIndex];

  return (
    <section ref={containerRef} className="relative bg-background">
      <div className="sticky top-0 flex min-h-screen items-center">
        {/* Subtle background */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div
            className="absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-primary/[0.05] to-secondary/[0.05] transition-all duration-700"
            style={{
              transform: `translate(-50%, -50%) scale(${0.8 + progress * 0.4})`,
            }}
          />
        </div>

        <div className="relative mx-auto w-full max-w-7xl px-4 py-20">
          <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
            {/* Left: Text content */}
            <div className="relative min-h-[280px]">
              {stories.map((s, i) => (
                <div
                  key={i}
                  className={`transition-all duration-500 ${
                    i === activeIndex
                      ? "translate-y-0 opacity-100"
                      : i < activeIndex
                        ? "absolute inset-0 -translate-y-4 opacity-0"
                        : "absolute inset-0 translate-y-4 opacity-0"
                  }`}
                >
                  {i === activeIndex && (
                    <div>
                      <div className={`inline-flex rounded-xl bg-gradient-to-br ${s.gradient} p-3 text-white shadow-lg`}>
                        {s.icon}
                      </div>

                      <h3 className="mt-8 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                        {s.title}
                      </h3>
                      <p className="mt-2 text-sm font-semibold uppercase tracking-wider text-primary">
                        {s.subtitle}
                      </p>
                      <p className="mt-6 text-base leading-relaxed text-muted">
                        {s.body}
                      </p>
                    </div>
                  )}
                </div>
              ))}

              {/* Dot indicators */}
              <div className="mt-10 flex items-center gap-3">
                {stories.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      if (!containerRef.current) return;
                      const top = containerRef.current.offsetTop;
                      const sectionH = containerRef.current.offsetHeight - window.innerHeight;
                      window.scrollTo({ top: top + (sectionH / stories.length) * i, behavior: "smooth" });
                    }}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === activeIndex ? "w-8 bg-primary" : "w-2 bg-border hover:bg-muted/50"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Right: Visual stat card */}
            <div className="flex items-center justify-center">
              <div className="group relative w-full max-w-sm">
                <div
                  className={`absolute -inset-1 rounded-3xl bg-gradient-to-r ${current.gradient} opacity-20 blur-xl transition-all duration-500 group-hover:opacity-30`}
                />
                <div className="relative rounded-2xl border border-border bg-card p-10 shadow-sm">
                  <div className="flex items-baseline gap-2">
                    <span
                      className={`inline-block bg-gradient-to-r ${current.gradient} bg-clip-text text-6xl font-black text-transparent sm:text-7xl`}
                    >
                      {current.stat}
                    </span>
                    <span className="text-xs font-bold uppercase tracking-widest text-muted/60">
                      {current.statLabel}
                    </span>
                  </div>

                  <div className="mt-6 border-t border-border pt-6">
                    <p className="text-sm leading-relaxed text-muted">
                      {current.statLabel === "Latency" &&
                        "From sprint start to reflex test — capture every micro-gap."}
                      {current.statLabel === "Accuracy" &&
                        "Lab-validated precision you can trust for serious training."}
                      {current.statLabel === "AI Power" &&
                        "On-device neural processing for instant form analysis — no cloud needed."}
                    </p>
                  </div>

                  {/* Mini progress */}
                  <div className="mt-8 flex gap-1.5">
                    {stories.map((_, i) => (
                      <div
                        key={i}
                        className={`h-1 flex-1 rounded-full transition-all duration-300 ${
                          i <= activeIndex ? "bg-primary/60" : "bg-border"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom progress line */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-border/40">
          <div
            className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-200"
            style={{ width: `${(progress * 100).toFixed(1)}%` }}
          />
        </div>
      </div>

      <div className="h-[300vh]" />
    </section>
  );
}
