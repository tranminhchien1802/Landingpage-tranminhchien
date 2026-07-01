"use client";

import { useState, useRef, useEffect } from "react";

type Message = {
  role: "assistant" | "user";
  text: string;
};

const quickReplies = [
  "What is AeroSpike Pro?",
  "Key features?",
  "Battery life?",
  "Water resistant?",
  "Price & models",
  "Compatible devices?",
];

function findAnswer(input: string): string {
  const q = input.toLowerCase();

  if (/hello|hi|hey|chào|xin chào/.test(q))
    return "Hi there! 👋 I'm the AeroSpike Pro assistant. Ask me anything about the product — features, specs, pricing, or compatibility.";

  if (/what is|what'?s|tell me about|giới thiệu/.test(q) && /aero|product|band|pro/.test(q))
    return "**AeroSpike Pro** is an AI-powered sports performance wristband designed for professional athletes. It tracks vertical jump height, reaction time, swing speed, impact force, and more — all with lab-grade precision. It's like having a personal coach on your wrist 24/7.";

  if (/feature|tính năng|what can|do(es|) it/.test(q))
    return "Here are the key features:\n\n• **Vertical Jump** — real-time jump height with 98% accuracy\n• **Reaction Time** — millisecond-level reflex tracking\n• **Swing Speed** — angular velocity for any motion\n• **Impact Force** — G-force monitoring with safe-load alerts\n• **AI Coach** — ML-powered form analysis & correction\n• **Pro Sync** — Apple Health, Google Fit, Coach Dashboard";

  if (/battery|pin|sạc|charge|how long/.test(q))
    return "The AeroSpike Pro battery lasts **up to 14 days** on a single charge (typical use). It charges from 0 to 100% in just **45 minutes** via the magnetic USB-C charging dock.";

  if (/water|waterproof|water.resist|IP|swim|mưa|nước/.test(q))
    return "Absolutely! AeroSpike Pro has an **IP68** rating — it's waterproof down to **10 meters** for up to **2 hours**. Safe for swimming, heavy rain, and intense sweat sessions.";

  if (/price|cost|giá|how much|model|edition|shop/.test(q))
    return "We offer several models:\n\n• **Stealth Edition** — $329\n• **Pro Band** — $299\n• **Titanium Edition** — $449\n• **Recovery Band** — $89\n• Accessories start at $39\n\nCheck out our **Shop** section above for the full range!";

  if (/compatible|phone|ios|android|apple|google|connect|sync/.test(q))
    return "AeroSpike Pro is compatible with **iOS 16+** and **Android 12+**. It syncs via Bluetooth 5.4, ANT+, and Wi-Fi. Works with Apple Health, Google Fit, and our Coach Dashboard for deeper analytics.";

  if (/sensor|processor|spec|thông số|kỹ thuật/.test(q))
    return "**Tech Specs:**\n\n• **Processor:** Dual-core ARM Cortex-M33 + AI NPU (2 TOPS)\n• **Sensors:** 6-axis IMU, Barometer, PPG Heart Rate, Skin Temperature\n• **Sample Rate:** Up to 1000 Hz (impact), 200 Hz (motion)\n• **Display:** 1.43\" AMOLED, 466×466 px, Always-On\n• **Weight:** Only 38 g (including band)\n• **Materials:** Titanium alloy bezel, fluoroelastomer strap";

  if (/shipping|delivery|giao hàng|order|đặt hàng/.test(q))
    return "Orders are processed within 24 hours. Free standard shipping on all orders over $100. Express shipping is available at checkout. International shipping takes 5–10 business days.";

  if (/warranty|bảo hành|return|trả lại/.test(q))
    return "Every AeroSpike Pro comes with a **2-year limited warranty**. We also offer a **30-day money-back guarantee** — if you're not satisfied, return it for a full refund.";

  if (/weight|nặng|gram|nhe.?|comfort|đeo/.test(q))
    return "The AeroSpike Pro weighs just **38 grams** (including the strap). It's designed for all-day comfort with a lightweight titanium alloy bezel and soft fluoroelastomer strap.";

  if (/thank|cảm ơn|cám ơn|thanks/.test(q))
    return "You're welcome! 😊 If you have any more questions, feel free to ask. I'm here to help!";

  if (/color|màu sắc|design|thiết kế|look|styles/.test(q))
    return "AeroSpike Pro is available in **Stealth Black** and **Titanium Silver** finishes. The Elite Performance Straps come in multiple colors including Neon Green, Midnight Blue, and Coral Red.";

  return (
    "I'm not sure I understand that. Try one of these questions:\n\n" +
    quickReplies.map((q) => "• " + q).join("\n")
  );
}

function TypingDots() {
  return (
    <div className="flex items-center gap-1 px-1">
      <span className="h-2 w-2 animate-bounce rounded-full bg-muted [animation-delay:0ms]" />
      <span className="h-2 w-2 animate-bounce rounded-full bg-muted [animation-delay:150ms]" />
      <span className="h-2 w-2 animate-bounce rounded-full bg-muted [animation-delay:300ms]" />
    </div>
  );
}

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", text: "👋 Hi! I'm the AeroSpike Pro assistant. Ask me anything about the product!" },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  const handleSend = async (text: string) => {
    const trimmed = text.trim();
    if (!trimmed) return;

    const updated = [...messages, { role: "user" as const, text: trimmed }];
    setMessages(updated);
    setInput("");
    setTyping(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: updated.map((m) => ({ role: m.role, content: m.text })),
        }),
      });

      if (res.ok) {
        const data = await res.json();
        if (data.reply) {
          setMessages((prev) => [...prev, { role: "assistant", text: data.reply }]);
          setTyping(false);
          return;
        }
      }
    } catch {}

    setTimeout(() => {
      setMessages((prev) => [...prev, { role: "assistant", text: findAnswer(trimmed) }]);
      setTyping(false);
    }, 600 + Math.random() * 400);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSend(input);
  };

  return (
    <>
      {/* FAB */}
      <button
        onClick={() => setOpen(true)}
        className={`fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-xl shadow-primary/30 transition-all hover:scale-110 hover:shadow-primary/50 active:scale-95 ${
          open ? "scale-0 opacity-0" : "scale-100 opacity-100"
        }`}
        aria-label="Open chat"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      </button>

      {/* Chat panel */}
      <div
        className={`fixed bottom-6 right-6 z-50 flex w-[360px] max-w-[calc(100vw-2rem)] flex-col overflow-hidden rounded-2xl border border-border bg-background shadow-2xl transition-all duration-300 sm:w-[400px] ${
          open
            ? "scale-100 opacity-100"
            : "pointer-events-none scale-95 opacity-0"
        }`}
        style={{ height: "min(560px, calc(100vh - 6rem))" }}
      >
        {/* Header */}
        <div className="flex items-center justify-between bg-primary px-5 py-4 text-white">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 20h9" />
                <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-bold">AeroSpike Assistant</p>
              <p className="text-[11px] opacity-80">Online — replies instantly</p>
            </div>
          </div>
          <button
            onClick={() => setOpen(false)}
            className="rounded-full p-1.5 transition-colors hover:bg-white/20"
            aria-label="Close chat"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 space-y-4 overflow-y-auto px-5 py-4">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[85%] whitespace-pre-line rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                  msg.role === "user"
                    ? "bg-primary text-white"
                    : "bg-card text-foreground"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          {typing && (
            <div className="flex justify-start">
              <div className="rounded-2xl bg-card px-4 py-3">
                <TypingDots />
              </div>
            </div>
          )}
          <div ref={bottomRef} />
        </div>

        {/* Quick replies */}
        <div className="flex gap-2 overflow-x-auto border-t border-border px-5 py-3">
          {quickReplies.map((q) => (
            <button
              key={q}
              onClick={() => handleSend(q)}
              className="shrink-0 whitespace-nowrap rounded-full border border-border bg-card px-3 py-1.5 text-xs text-muted transition-colors hover:border-primary/40 hover:text-foreground"
            >
              {q}
            </button>
          ))}
        </div>

        {/* Input */}
        <form onSubmit={handleSubmit} className="flex items-center gap-2 border-t border-border px-4 py-3">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your question…"
            className="flex-1 rounded-full border border-border bg-card px-4 py-2.5 text-sm outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
          <button
            type="submit"
            disabled={!input.trim()}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-white transition-colors hover:bg-primary-dark disabled:opacity-50"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
            </svg>
          </button>
        </form>
      </div>
    </>
  );
}
