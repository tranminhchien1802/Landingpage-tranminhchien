"use client";

import { useReveal } from "@/lib/useReveal";

export default function Features() {
  const { ref, revealed } = useReveal(0.1);

  return (
    <section id="features" className="px-4 py-24 sm:py-32" ref={ref}>
      <div className="mx-auto max-w-7xl">
        <div
          className={`text-center transition-all duration-700 ${
            revealed ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Engineered for Peak Performance
          </h2>
          <p className="mt-4 text-muted">
            Every metric matters. AeroSpike Pro captures what your body does in
            motion.
          </p>
        </div>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <div
              key={f.title}
              className={`group rounded-2xl border border-border bg-card p-8 transition-all duration-700 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 ${
                revealed
                  ? "translate-y-0 opacity-100"
                  : "translate-y-12 opacity-0"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                {f.icon}
              </div>
              <h3 className="text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const features = [
  {
    title: "Vertical Jump",
    description:
      "Measures jump height in real time with 98% accuracy. Track your explosive power set by set.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="18 15 12 9 6 15" />
      </svg>
    ),
  },
  {
    title: "Reaction Time",
    description:
      "Detects millisecond-level response. Know your reflex speed and improve with targeted drills.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    title: "Swing Speed",
    description:
      "Tracks angular velocity of any motion — punch, swing, throw. See your acceleration curve live.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
  {
    title: "Impact Force",
    description:
      "Measures G-force on landing and impact. Prevent injury with safe-load alerts.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: "AI Coach",
    description:
      "Machine learning analyzes your form and suggests corrections. Your personal trainer, 24/7.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
  },
  {
    title: "Pro Sync",
    description:
      "Syncs with Apple Health, Google Fit, and Coach's Dashboard. Export CSV for deeper analysis.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      </svg>
    ),
  },
];
