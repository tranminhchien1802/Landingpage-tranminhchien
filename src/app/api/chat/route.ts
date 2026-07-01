import { NextResponse } from "next/server";
import { callAI } from "@/lib/ai";

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json({ error: "messages required" }, { status: 400 });
    }

    const reply = await callAI(messages);

    if (!reply) {
      console.error("[chat route] All AI providers failed or returned null");
      return NextResponse.json(
        { error: "AI service unavailable" },
        { status: 503 }
      );
    }

    return NextResponse.json({ reply });
  } catch {
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }
}
