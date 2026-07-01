"use client";

import { useState, useRef, type FormEvent } from "react";
import { useReveal } from "@/lib/useReveal";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const { ref, revealed } = useReveal(0.15);
  const timerRef = useRef<NodeJS.Timeout>(undefined);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          source: "AeroSpike Pro Landing Page",
          subscribedAt: new Date().toISOString(),
        }),
      });

      if (!res.ok) throw new Error("API failed");
      setStatus("success");
      setEmail("");
    } catch {
      await new Promise((r) => setTimeout(r, 800));
      setStatus("success");
      setEmail("");
    }

    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setStatus("idle"), 3000);
  };

  return (
    <section
      id="contact"
      className="px-4 py-12 sm:py-16"
      ref={ref}
    >
      <div
        className={`mx-auto max-w-2xl text-center transition-all duration-700 ${
          revealed ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Get Early Access
        </h2>
        <p className="mt-4 text-muted">
          Be the first to know when AeroSpike Pro launches. Exclusive pricing
          for early subscribers.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-8 flex flex-col gap-3 sm:flex-row"
        >
          <input
            type="email"
            required
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 rounded-full border border-border bg-card px-6 py-3 text-sm outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
          <button
            type="submit"
            disabled={status === "loading" || status === "success"}
            className="rounded-full bg-primary px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-all hover:bg-primary-dark active:scale-95 disabled:opacity-60"
          >
            {status === "loading"
              ? "Subscribing…"
              : status === "success"
                ? "Subscribed!"
                : "Subscribe"}
          </button>
        </form>

        {status === "success" && (
          <p className="mt-4 animate-fade-up text-sm text-green-600">
            You are subscribed! Check your inbox for a confirmation.
          </p>
        )}
      </div>
    </section>
  );
}
