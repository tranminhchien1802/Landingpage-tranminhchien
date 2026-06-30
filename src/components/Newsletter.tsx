"use client";

import { useState, type FormEvent } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");

    // Simulate API call — replace with actual endpoint
    await new Promise((r) => setTimeout(r, 1000));

    setStatus("success");
    setEmail("");
  };

  return (
    <section id="contact" className="px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Be the First to Know
        </h2>
        <p className="mt-4 text-muted">
          Subscribe for early-access pricing, launch updates, and exclusive previews.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-3 sm:flex-row">
          <input
            type="email"
            required
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 rounded-full border border-border bg-card px-6 py-3 text-sm outline-none transition-colors focus:border-primary"
          />
          <button
            type="submit"
            disabled={status === "loading" || status === "success"}
            className="rounded-full bg-primary px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-all hover:bg-primary-dark disabled:opacity-60"
          >
            {status === "loading"
              ? "Subscribing…"
              : status === "success"
                ? "Subscribed!"
                : "Subscribe"}
          </button>
        </form>

        {status === "success" && (
          <p className="mt-4 text-sm text-green-600">
            You are subscribed! Check your inbox for a confirmation.
          </p>
        )}
      </div>
    </section>
  );
}
