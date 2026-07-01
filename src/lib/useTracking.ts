"use client";

import { useEffect, useRef } from "react";

type EventPayload = {
  type: string;
  label?: string;
  value?: string | number;
  url: string;
  timestamp: string;
};

const WEBHOOK = "/api/track";

const queue: EventPayload[] = [];
let sending = false;

function sendBatch() {
  if (sending || queue.length === 0) return;
  sending = true;
  const batch = queue.splice(0);
  const blob = new Blob([JSON.stringify({ events: batch, page: window.location.href })], { type: "application/json" });
  navigator.sendBeacon(WEBHOOK, blob);
  sending = false;
}

function push(event: Omit<EventPayload, "url" | "timestamp">) {
  queue.push({ ...event, url: window.location.href, timestamp: new Date().toISOString() });
  sendBatch();
}

export function useTracking() {
  const sentDepths = useRef(new Set<number>());
  const startTime = useRef(Date.now());

  useEffect(() => {
    push({ type: "page_view" });

    const intervals = [15_000, 30_000, 60_000];
    const timers: ReturnType<typeof setTimeout>[] = [];
    for (const ms of intervals) {
      timers.push(setTimeout(() => push({ type: "time_on_page", value: ms / 1000 }), ms));
    }

    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) return;
      const percent = Math.round((scrollTop / docHeight) * 100);
      const milestones = [25, 50, 75, 90, 100];
      for (const m of milestones) {
        if (percent >= m && !sentDepths.current.has(m)) {
          sentDepths.current.add(m);
          push({ type: "scroll_depth", value: `${m}%` });
        }
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest<HTMLAnchorElement>("a[href]");
      const btn = target.closest<HTMLButtonElement>("button");
      if (link) {
        push({ type: "click", label: "link", value: link.href });
      } else if (btn) {
        const text = btn.textContent?.trim().slice(0, 50) || "unknown";
        push({ type: "click", label: "button", value: text });
      }
    };
    document.addEventListener("click", onClick);

    const onBeforeUnload = () => {
      const elapsed = Math.round((Date.now() - startTime.current) / 1000);
      push({ type: "session_end", value: `${elapsed}s` });
    };
    window.addEventListener("beforeunload", onBeforeUnload);

    return () => {
      timers.forEach(clearTimeout);
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("click", onClick);
      window.removeEventListener("beforeunload", onBeforeUnload);
    };
  }, []);
}
